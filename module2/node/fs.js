
//  "fs" is a file system module 

let fs = require("fs");
// console.log(fs);

let path=require("path");

// file path creates automatically but file is not so make file 
let filepath=path.join(__dirname,"file.txt");
// console.log(filepath);


// make file 
fs.writeFileSync(filepath,"Hello I am a text file");


// if file available then we can change content by overriding ....
// fs.writeFileSync(filepath,"File has been changed");

let content= fs.readFileSync(filepath,'utf-8');
console.log(content);

// add content in in any file by appendFileSync
fs.appendFileSync(filepath,'\n Newly added content:- Hey bro how are you????');

// read file after update 
console.log('Afetr update:  ');
console.log(fs.readFileSync(filepath,'utf-8'));


// to delete file use unlinkSync 

// fs.unlinkSync(filepath);