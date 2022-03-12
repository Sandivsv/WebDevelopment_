let cp = require('child_process');
const { fileURLToPath } = require('url');
console.log(cp); 

// open calculator with help child process

//  cp.execFileSync("calc");


//  print output of any fileURLToPath

let output=cp.execFileSync("node abc.js");
console.log("Let's run abc file to test: ",output);

// last two line show console.error