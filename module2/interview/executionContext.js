
// // 1st query

// var a=20;
// function fun(){
//     var b=20;
//     console.log(20);
// }
// var c=20;
// // console.log(c);
// fun();
// // 


// 2nd query-->>   It gives error because fun() is not a function 
//              so it undefined so this code is gives error
// fun();
// var fun =function(){
//     console.log("hello");
// }
// fun();
// // 


// //  3rd query

// var a=20;
// function fun(){
//     var b=20;
//     console.log(20);
// }
// var c=20;
// console.log(c);
// var d=fun();
// console.log(d);  // It gives undefined because function did not return anything
// //


// 4th Topic.................

// // Hoisting-->>  access value before declaration
// // var -->> provides redeclaration, reintiallization and Hoisting
// // let -->> not provides, let only provides reintiallization 
            // but Hoisting in temporary death zone
// console.log(a);
// var a=10;
// console.log(a);
// var a=20;
// console.log(a);

//  // let 


// console.log(a);
// let a=10;
// console.log(a);
// let a=20;         //gives error because of redeclaration
// console.log(a);



// // const-->> does not provide redeclaration, reintiallization 
//          // but Hoisting in temporary death zone

// // console.log(a);
// const a=10;
// console.log(a);

// a=30;
// console.log(a);
// const a=20;        
// console.log(a);
// //
