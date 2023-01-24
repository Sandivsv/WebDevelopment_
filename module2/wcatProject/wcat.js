// WCAT Homework

// https://www.youtube.com/watch?v=8AM2S94SBSY&list=PL-Jc9J83PIiEeD3I4VXETPDmzJ3Z1rWb4&index=7

// freeCodeCamp JS do 80 Questions 


let fs = require("fs");

let inputArr = process.argv.slice(2);
console.log(inputArr);

let buffer ="";
for(let i=0; i<inputArr.length; i++){
    let fileContent = fs.readFileSync(inputArr[i]);
    buffer+=fileContent;
}

console.log(buffer);