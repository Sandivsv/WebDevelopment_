// promisify function 
const code = require('./code');
console.log((code.answers).length);


function promisifiedfunc(){
    return new Promise(function(resolve, reject){
        //code
        let a=1;
        // let b=2;
        let b=1;
        if(a==b) resolve("Equal");
        else reject("Not equal");
    })
}


let somePromise = promisifiedfunc();
// console.log(somePromise);

somePromise.then(function(x){
    console.log(x);
})
somePromise.catch(function(err){
    console.log(err);
})