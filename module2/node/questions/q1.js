//make a folder inside same directory of this file and in that folder make a text file with content
//new file has been made

let path=require("path");
let fs=require("fs");

let filepath=__dirname;
// console.log(filepath);

if(!fs.existsSync("module1")){
    fs.mkdirSync("module1");
}

let destination=path.join(filepath,"module1","file.txt");
fs.writeFileSync(destination,"Hello new file is created.");