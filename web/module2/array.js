// empty Array

let arr=[];
console.log(arr);

// element in Array
let arr2=[2,4,5,6,"hello",3.5];
console.log(arr2);

// particular element in Array

console.log(arr2[3]);

//  change element in arr or add 
arr2[4]="Buddy";
arr2[6]="not hello";
console.log(arr2);
// add  new Element
arr2.push("strong");
console.log(arr2);

// "unshift" ->  add item in first index 
arr2.unshift("newly item");
console.log("After adding Item= ", arr2);

// length of Array

let len=arr2.length;
console.log(len);