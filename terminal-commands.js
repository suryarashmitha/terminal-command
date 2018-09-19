const fs = require('fs');

 module.exports.ls = () => {
   fs.readdir('./', (err, files) => {
     const filesToString = files.reduce((acc, file) => {
      return `${acc} ${file} `;
    }, '');

    console.log(filesToString);
   });
 };
 module.exports.mkdir = () => {
    const CURR_DIR = process.cwd();
    const dirname = "New dir"
    fs.mkdirSync(`${CURR_DIR}/${dirname}`);
};


module.exports.touch = () => {
    const newFile = 'file.txt'
    fs.writeFile(`${newFile}`, 'Sup', function (err) {
        if(err) throw err;
    })

};
