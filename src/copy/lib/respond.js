//require node modules
const url = require('url');
const path = require('path');
const fs = require('fs');
//file imports

//static base path : location of your static foler
const staticBasePath = path.join(__dirname, '..','static');
// console.log(staticBasePath);


//respond to a request
//following is function passed to createServer used to create the server

const respond = (request,response) => {
    

    //before working with the pahname you need to decode it.
    let pathname = url.parse(request.url, true).pathname;//get your pathname
    

    //if favicon.ico stop
    if(pathname === '/favicon.ico'){
        return false;
    }

    pathname = decodeURIComponent(pathname);

    //get the corresponding full static path located in the static folder
    const fullStaticPath = path.join(staticBasePath,pathname);

    //can we find something in fullStaticPath?
    if(!fs.existsSync(fullStaticPath)){
        //no: send '404:File not Found!'
        console.log(`${fullStaticPath} does not exist`);
        response.write('404 File not found!');
        response.end();
        return false;
    }


        //We found something
        //is it a file or directory
        let stats; 
        try{
            stats = fs.lstatSync(fullStaticPath);
            
        }catch(e){
            console.log(`lstatSync Error: ${e}`);
        }
            //it is a directory:
            if(stats.isDirectory()){

             //get content from the template index.php
                let data = fs.readFileSync(path.join(staticBasePath,'index.php'), 'utf-8');
                //build the page title
                let pathElements = pathname.split('/').reverse();
                pathElements = pathElements.filter(element => element !== '');//filter out empty strings

                const folderName = pathElements[0];
                console.log(folderName);
                data = data.replace('page_title',folderName);//replace page title with folder title
                //build breadcrumbs
                //build table rows(main_content)
                //print data to the webpage
                response.statusCode = 200;
                response.write(data);
                response.end();
            }
               

            //it is not a directory and not a file either
                //send: 401: Access Denied

            //It is a file:
                //Let's get the file extension
                //get the file mime type and add it to the response header
                //get the file size and add it the response header
                //pdf file? -> display in browser
                //audio/video file? ->stram in rangers.
                //alll other files stream in a normal way

};

module.exports = respond;