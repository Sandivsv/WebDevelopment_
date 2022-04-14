// callback Function 

const fs = require('fs');

console.log("Before: ");

let content1 = fs.readFile("f1.txt", function(error, data){
    if(error){
       console.log(error);
    }
    else{
        console.log(data+"");

        let content2 = fs.readFile("f2.txt", function(error, data){
            if(error){
                console.log(error);
            }
            else{
                console.log(data+"");
            }
        });
    }   
}); 



console.log("After: ");


// if we opened two or more file then this is not good readable 
// So, It is Known as Callback Hell.
// To Resolve this issue we use promises


// Serially Promise go on (raw.js) file


