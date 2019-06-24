//require modules
const fs = require ('fs');
const path = require('path');

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
        mainContent += `
        <tr>
            <td><a href="${link}">${item}</a></td>
            <td>100M</td>
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