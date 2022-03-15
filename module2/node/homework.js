// HOMEWORK 

let fs = require('fs');
let path = require('path');

let filepath=__dirname    //find path
console.log(filepath);


// create a directory or folder 
    //  if file does not exist then through error we handle by checking existing file 
if(!fs.existsSync("New Folderdir")){
    fs.mkdirSync("New Folderdir");
}

// if we want to give path for creating folder 
fs.mkdirSync("myFile");      // Error to give path.


// read that directory (.readdirSync)
let contentOfFolder=fs.readdirSync(filepath);
console.log(contentOfFolder);


// delete that directory 
// fs.rmdirSync("New Folderdir");



// copy a file 

let sourcePath = path.join(__dirname,"copy.txt");
let destinationPath = path.join(__dirname,"ghostFolder", "copy.txt");

console.log(sourcePath);
console.log(destinationPath);

fs.copyFileSync(sourcePath, destinationPath);