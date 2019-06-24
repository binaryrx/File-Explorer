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
    items.forEach(item =>{
        //link
        const link = path.join(pathname,item)
        
        //icon
        let itemDetails = {};
        let icon, stats;
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
            // [itemDetails.size,itemDetails.sizeBytes] = calculateFileSize();
        }

        mainContent += `
        <tr>
            <td>${itemDetails.icon}<a href="${link}">${item}</a></td>
            <td>${itemDetails.size}</td>
            <td>23/06/2019,
            10:30:19 PM</td>
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