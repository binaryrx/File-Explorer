/*
You will build this project using pure Node to gain a thorouth understanding of Node.
There are obviouslt easier ways of building this project using external modules, but that is the purpose of this project as you would miss out on many code conecpts
*/

//Require node modules
const http = require('http');
//File imports
const respond = require('./lib/respond');


//Connection settings
const port = process.env.port || 4000;//check if env value is available,otherwise use 3000

//Create server
const server = http.createServer(respond);
 
//Listen to client request on the specific port, the port should be available.
server.listen(port, () => {
    console.log(`Listening on port ${port}`);
});



