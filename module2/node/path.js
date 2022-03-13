// path of file 
// C:\Users\sandeep kumar\Documents\FJP-6_Web\module2\node\path.js


let path = require("path");
// console.log(path);

// give Extension name
let extensionName= path.extname("C:\Users\sandeep kumar\Documents\FJP-6_Web\module2\node\path.js");
console.log(extensionName);


// let baseName= path.basename("C:\Users\sandeep kumar\Documents\FJP-6_Web\module2\node\path.js");
// console.log(baseName);



// find path of currently open file 
// directory path
// console.log(__dirname);  // double under score
// console.log(__filename);


let dirPath = __dirname
let newPath = path.join(dirPath,"test.js", "\n");
console.log(newPath);

