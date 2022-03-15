// given an array arr=[audio,video,image,software , documents , applictions, other]
// make flder foreach Element in the given array and inside each folder make 4 files of that type 

let path=require("path");
let fs=require("fs");

let filepath=__dirname;
// console.log(filepath);
let arr=["audio","video","image","software","documents","applications"];
let len=arr.length;



if(!fs.existsSync("module1")){
    fs.mkdirSync("module1");
}

let destination=path.join(filepath,"module1","file.txt");
fs.writeFileSync(destination,"Hello new file is created.");