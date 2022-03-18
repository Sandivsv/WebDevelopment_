//move a file

// means first copy and previous exist file is delete 
let path=require("path");
let fs=require("fs");

// make folder to move 
let source=path.join(__dirname,"style.txt");
fs.writeFileSync(source, "Hello I am moving file.");

// want to go previous folder use ".."

// move file process has been started 
// first create file by commenting moving process 


// try to copy file
let destination=path.join(__dirname,"module2","style.txt");
fs.copyFileSync(source,destination);

// now remove previous file 
fs.unlinkSync(source);