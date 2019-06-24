//require node modules

//file imports

//static base path : location of your static foler

//respond to a request
//following is function passed to createServer used to create the server

const respond = (request,response) => {
    console.log('something');
    //before working with the pahname you need to decode it.

    //get the corresponding full static path located in the static folder

    //can we find something in fullStaticPath?

        //no: send '404:File not Found!'

        //We found something
        //is it a file or directory

            //it is a directory:
                //get content from the template server.html
                //build the page title
                //build breadcrumbs
                //build table rows(main_content)
                //print data to the webpage

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