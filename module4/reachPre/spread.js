// deep copy and shallow copy concept

//  shallow copy =>>    spread oprreator copy value by only 1 level value .
//  Deep copy =>>      copy value at all level in object by using stringfy and parse.



// let arr = [1,2,3]
// let arr2 = arr;
// arr2[2] = 10;           // changes perform in both array because it addresses same memory or references.
// console.log(arr);
// console.log(arr2);



// // make copy of array 

// let arr = [1,2,3]
// let arr2 = arr.map(function(ele){
//     return ele;
// })
// arr2[2] = 10;

// console.log(arr);
// console.log(arr2);





// // make copy of array  by using spread oprreator  concept

// let arr = [1,2,3]
// let arr2 = [...arr]

// arr2[2] = 10;

// console.log(arr);
// console.log(arr2);



// // try to copy object but here same value of both after change in anyone

// let obj = {
//     name: "Sandeep",
//     age: 21
// }
// let obj2 = obj
// obj2.name = "Abhay";

// console.log(obj);
// console.log(obj2);



// // spread oprreator with Object or shallow copy 
// // means value copy at only one stage after it passed reference in both 

// let obj = {
//     name:"Adam",
//     address:{
//         country:"USA",
//         state:{
//             stateName:"New York",
//             pincode:123456
//         }
//     }
// }

// let obj2 = {...obj};
// obj2.name = "Aman";
// obj2.address.country = "India";     // look at reference passed in country so in both it will be same

// // console.log(obj.name);
// // console.log(obj.address);
// // console.log("####################")
// // console.log(obj2.name);
// // console.log(obj2.address);

// console.log(obj.address.country);
// console.log(obj2.address.country);




// // deep copy by using stringfy and parse.

// let obj = {
//     name:"Adam",
//     address:{
//         country:"USA",
//         state:{
//             stateName:"New York",
//             pincode:123456
//         }
//     }
// }

// let obj3 = JSON.parse(JSON.stringify(obj))

// obj3.address.country = "Japan";
// console.log(obj.address.country);
// console.log(obj3.address.country); 