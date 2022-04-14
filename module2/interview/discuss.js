//                                 Lexical Scope

// Hoisting, Execution Context 
// global execution context(GEC), Execution context for every function, 
// memory stack 

// first all code goes on memory stack then execute line by line 

// let a ;
// a=10;
// func();

// function func(){
//     console.log(a);          //gives error
//     let a = 5;
// }





// let a ;
// a=10;
// func();

// function func(){
//     console.log(a);      //gives 10 because in this a is not defined only value changed 
//     a = 5;
// }







// let a ;
// a=10;
// func();

// function func(){
//     let a;
//     console.log(a);      //gives undefinedd
//     a = 5;
// }





// Title: 
// The mystery reference 

// Meta-Tags:
// Javascript, JS, interview, questions, interview questions, scope, hoisting,execution context,practice,hard

// Description:
// Find output of the following:

// // **************************************************************

// let a;
// console.log(a);
// function A() {
//   let a = 2;
//   console.log(a);

//   function C() {
//     console.log(a);

//     function D() {
//       console.log(a);
//       a = 2;
//     }
//     D();
//     a = 3;
//   }
//   C();
// }

// function B() {
//   let a;
//   console.log(a);
  
//   function E() {
//     a = 6;
//     console.log(a);
    
//   }
  
//   a = 2;
//   E();
//   console.log(a);
// }

// function F() {
//   console.log(a);
//   a = 2;
// }

// a = 3;

// F();
// B();
// A();

// // **********************************************************







