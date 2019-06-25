//require modules
const {execSync} = require('child_process');

const calculateDirSize = (itemFullStaticPath) => {
    //escape spaces,tabs etc
    const itemFullStaticPathCleaned = itemFullStaticPath.replace("/\s/g", '\ ');//replace all spaces with escape car

    const commandOutput = execSync(`du -sh "${itemFullStaticPathCleaned}"`).toString();

    //seperate the command output by tabs - index 0 is the filesize(human readable).
    let filesize = commandOutput.split('\t');
    filesize = filesize[0];
    
    //unit
    const filesizeUnit = filesize.replace(/\d|\./g,'');//replace all digits and dots

    //size number
    const fileSizeNumber = parseFloat(filesize.replace(/[a-z]/i,''));//replace all caracters case insensitive

    const units = "BKMGT";
    
    const fileSizeBytes = fileSizeNumber * Math.pow(1000,units.indexOf(filesizeUnit));
    

    //B 10B -> 10(*1000^0)
    //K 10K ->10*1000(1000^1)
    //M 10M ->10*1000*1000(1000^2)
    //G 10G ->10*1000*1000*1000(1000^3)
    //T 10T ->10*1000*1000*1000*1000(1000^4)

    


    //return the filesize(human readable) + filesize(in bytes)
    // console.log(`filesize: ${filesize}, filesizeBytes: ${fileSizeBytes}`);
    return [filesize,fileSizeBytes];
};

module.exports = calculateDirSize;