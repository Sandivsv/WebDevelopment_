// function without parameter
function f1(){
    console.log('Hello Buddy');
}

f1();

// function with parameter

function sum(n1,n2){
    let sum=n1+n2;
    console.log("sum of given number= "+ sum);
}
sum(5,4);

function multiply(n1,n2){
    return n1*n2;
}

ans=multiply(5,4);
console.log("multiply= "+ans)

// we can store a function in a varible
// means function are first class citizen in js 

let a= function sub(n1,n2){
    return n1-n2;
}
console.log(a(10,5));

//  IIFE (Immediately Invoked Function Expression)

(function(){
    console.log("Hello from IIFE");

})();

// IIFE with parameter
(function(n1,n2){
    console.log(n1/n2);

})(10,5);