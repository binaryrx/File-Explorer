//require modules

const calculateFileSize = stats => {
    const fileSizeBytes = stats.size;//size in bytes
    

    const units = "BKMGT";
    const index = Math.floor(Math.log10(fileSizeBytes)/3);

    const filesizeHuman = (fileSizeBytes/Math.pow(1000,index)).toFixed(1);
    const unit = units[index];
    const filesize = `${filesizeHuman}${unit}`;

    return [filesize,fileSizeBytes];
};

module.exports = calculateFileSize;