const fs = require("fs");

let f1kaPromise = fs.promises.readFile('f1.txt');
let f2kaPromise = fs.promises.readFile('f2.txt');

console.log(f1kaPromise);

// f1kaPromise.then(function(error, data){
//     if(error){
//         console.log(error);
//     }
//     else{
//         console.log(data+"");
//     }
// })

// for file f1
f1kaPromise.then(function(data){        // resolve
    console.log(data+"");
})
f1kaPromise.catch(function(error){     // error
    console.log(error);
})

// for file 2
console.log(f2kaPromise);

f2kaPromise.then(function(data){        
    console.log(data+"");
})

f2kaPromise.catch(function(error){     
    console.log(error);
})