// read content of unorganised folder and make  an array which has extension name of each file


let path=require("path");
let fs=require("fs");

let filepath=path.join(__dirname, "unorganised" );
// console.log(filepath);


let files=fs.readdirSync(filepath);
// console.log(files);

let extArr=[];
for(let i=0; i<files.length; i++){
    let extName= path.extname(files[i]);
    // console.log(extName);
    extArr.push(extName);
}

console.log(extArr);
    