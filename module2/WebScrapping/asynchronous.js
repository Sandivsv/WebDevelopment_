const fs=require("fs");

console.log("Before");

fs.readFile('file.txt', cb1);
fs.readFile('file2.txt', cb2);

function cb1(error, data){
    if(error){
        console.log(error);
    }
    else{
        console.log("data of file 1...  "+ data);
    }
}

function cb2(error, data){
    if(error){
        console.log(error);
    }
    else{
        console.log("data of file 2--  "+ data);
    }
}

console.log("After");


// output..............

// Before
// After
// data of file 2--  2nd txt file
// data of file 1...  Hello I am 1st txt file.

// fs.readFile(); order is not confirmed that which call first 