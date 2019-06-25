//require node modules
const url = require('url');
const path = require('path');
const fs = require('fs');
//file imports
const buildBreadcrumb = require('./breadcrumb');
const buildMainContent = require('./mainContent');
const getMimeType = require('./getMimeType');


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
                
                //build breadcrumbs
                const breadcrumb = buildBreadcrumb(pathname);
                
                //build table rows(main_content)
                const mainContent = buildMainContent(fullStaticPath,pathname);

                data = data.replace('page_title',folderName);//replace page title with folder title
                data = data.replace('pathname',breadcrumb);
                data = data.replace('mainContent',mainContent);
                //print data to the webpage
                response.statusCode = 200;
                response.write(data);
                return response.end();
            }

            //it is not a directory and not a file either
                            //send: 401: Access Denied
            if(!stats.isFile()){
                response.statusCode = 401;
                response.write('401: Access Denied!');
                console.log('not a file');
                response.end();
            }
               

            

        //It is a file:
            //Let's get the file extension
            const fileDetails = {};
            fileDetails.extensionName = path.extname(fullStaticPath);
            console.log(fileDetails.extensionName);

            //file size
            let stat;
            try{
                stat = fs.statSync(fullStaticPath)    
            }catch(e){
                console.log(`Error: ${e}`);
            }
            fileDetails.size = stat.size;
            
            //get the file mime type and add it to the response header
            //get the file size and add it the response header
            getMimeType(fileDetails.extensionName)
                .then(mime =>{
                    //store headers here
                    let head = {};
                    let options = {};

                    //resonse status code
                    let statusCode = 200;

                    //set "Content-Type" for all file types
                    head['Content-Type'] = mime;

                    //pdf file? -> display in browser
                    if(fileDetails.extensionName === '.pdf'){
                        head['Content-Disposition'] = 'inline';
                    }
                    //audio/video file? ->stram in rangers.
                    if(RegExp('audio').test(mime)  || RegExp('video').test(mime)){
                        head['Accept-Ranges'] = 'bytes';

                        const range = request.headers.range;
                        console.log(`Range: ${range}`);
                        if(range){
                            //bytes=3964928-end
                            //3964928-end
                            //[3964928,end]
                            const start_end = range.replace(/bytes=/, "").split('-');
                            const start = parseInt(start_end[0]);
                            const end = start_end[1] ? parseInt(start_end[1]) : fileDetails.size -1;
                            //headers
                            //Content-Range
                            head['Content-Range'] = `bytes ${start}-${end}/${fileDetails.size}`;
                            //Content-Length
                            head['Content-Length'] = end - start + 1;
                            statusCode = 206;//straming status code

                            //options
                            options = {start,end};
                        }
                        

                    }
                    //alll other files stream in a normal way

                    //reading the file using fs.promises.readFile
                    // fs.promises.readFile(fullStaticPath, 'utf-8' )
                    //     .then(data =>{
                    //         response.writeHead(statusCode,head);
                    //         response.write(data);
                    //         return response.end();
                    // }) 
                    //streamig method:
                    const fileStream = fs.createReadStream(fullStaticPath,options);

                    //stream chunks to your response object
                    response.writeHead(statusCode,head);
                    fileStream.pipe(response);

                    //events
                    fileStream.on('close', ()=>{
                        return response.end();
                    });
                    fileStream.on('error', (e)=>{
                        onsole.log(e.code);
                        response.statusCode = 404;
                        response.write('404: File Stream error!')
                        return response.end();
                    });                    

                })
                .catch(e =>{
                    response.statusCode = 500;
                    response.write('500: Internal Server Error!')
                    console.log(`Promise Error: ${e}`);
                    return response.end();
                });

            

};

module.exports = respond;