
// const fs = require('fs');
// console.log("Before: ");

// let content = fs.readFileSync("file.txt"); // Sync-->>  Synchronus function

// console.log(content+" ");

// console.log("After: ");





const fs = require('fs');
console.log("Before: ");

let content = fs.readFile("file.txt", cb); //   ASynchronus function 

function cb(error, data){
    console.log(data + "");
}

console.log("After: ");



// It is Known as Callback Hell 
// Resolve this issue we use promises 