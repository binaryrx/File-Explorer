//require modules
const fs = require ('fs');
const path = require('path');

//require files
const calculateDirSize = require('./calculateDirSize');
const calculateFileSize = require('./calculateFileSize');

const buildMainContent = (fullStaticPath,pathname) => {
    let mainContent = '';
    let items;
    //loop through the elements inside the folder

    try{
        items = fs.readdirSync(fullStaticPath);
        console.log(items);
    }catch(e){
        console.log(`readdirSync error occoured: ${e}`);
        return `<div class="alert alert-danger">Internal Server Error</div>`;
    }
    

    //get the follwing elements for each item:
    items.forEach(item => {

        //store itemDetails in an object
        let itemDetails = {};

        //name
        itemDetails.name = item;
        
        //link
        const link = path.join(pathname,item)

        //get stats of the item
        const itemFullStaticPath = path.join(fullStaticPath,item);

        try{
            itemDetails.stats = fs.statSync(itemFullStaticPath); 
        }catch(e){
            console.log(`statSync error: ${e}`);
            mainContent = `<div class="alert alert-danger">Internal Server Error</div>`;
            return false;
        }

        if(itemDetails.stats.isDirectory()){
            itemDetails.icon = '<ion-icon name="folder"></ion-icon>';
            [itemDetails.size,itemDetails.sizeBytes] = calculateDirSize(itemFullStaticPath);

        }else if(itemDetails.stats.isFile()){
            itemDetails.icon = '<ion-icon name="document"></ion-icon>';
            [itemDetails.size,itemDetails.sizeBytes] = calculateFileSize(itemDetails.stats);
        }

        //When was the file last change(Unix timestamp)
        itemDetails.timestamp = parseInt(itemDetails.stats.mtimeMs);
        
        //convert timestamp to date
        itemDetails.date = new Date (itemDetails.timestamp);
        itemDetails.date = itemDetails.date.toLocaleString();//to correct format

        mainContent += `
        <tr data-name="${itemDetails.name}" data-size="${itemDetails.sizeBytes}" data-time="${itemDetails.timestamp}">
            <td><a href="${link}">${itemDetails.icon}${item}</a></td>
            <td>${itemDetails.size}</td>
            <td>${itemDetails.date}</td>
        </tr>`;
    });
        //name
        //icon
        //link to item
        //size
        //last modified
    

    return mainContent;
};

module.exports = buildMainContent;