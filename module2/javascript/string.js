let str="I am sandeep";
let len=str.length;
console.log(len);


// Check if a string includes any vhar or string.....
console.log(str.includes("san"));


// split string by .slice(_ , _)  && .split(" ") is also work

let s2=str.slice(5,9);
console.log(s2);

// replace method

let restr=str.replace("am","was");
console.log(restr);

// lower and upper case

console.log(str.toUpperCase());
console.log(str.toLowerCase());

// concate

console.log(str+restr);
console.log(restr.concat(str));

// to check string method type str. and see function

// str.