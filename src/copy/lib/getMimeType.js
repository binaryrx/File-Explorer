//require node modules
const https = require('https');

//json mimetype url
const mimeUrl = 'https://gist.githubusercontent.com/binaryrx/a01f055cb5053271b8b99ddf25e706ae/raw/c3475c52fb1029c2d971c1087dd7f044167c9c1e/file-extension-to-mime-types.json';

const getMimeType = extension => {
    return new Promise((resolve,reject)=>{

        https.get(mimeUrl, response =>{
            if(response.statusCode < 200 || response.statusCode> 299){
                reject(`Error: Failed to load mime types json file ${response.statusCode}`);
                console.log(`Error: Failed to load mime types json file ${response.statusCode}`);
                return false;
            }

            let data = '';

            
            // console.log(`Headers: ${response.headers}`)
            //you will receive data by chunbks
            response.on('data', (chunk)=>{
                data += chunk;
            });
            response.on('end', ()=>{
                resolve(JSON.parse(data)[extension])
            });

        }).on('error',(e)=>{
            console.error(e);
        });
    })
}

module.exports = getMimeType