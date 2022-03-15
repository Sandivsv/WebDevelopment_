// read content of unorganised folder and make  an array which has extension name of each file


let path=require("path");
let fs=require("fs");

let filepath=__dirname;
// console.log(filepath);

let files=fs.readdirSync(filepath);
// console.log(files);

let len=files.length;

for(let i=0;i<len;i++){
    if(files[i].includes(".")){
        // console.log(true);
        let s=files[i].split(".");
        console.log(s[1]);
    }
}



// let extname = fs.extname(filepath,"q3.js"));
// console.log(extname);