let cp = require('child_process');
// console.log(cp); 


// open calculator with help child process
//  cp.execFileSync("calc");


// open vscode with ChildProcess
// cp.execSync("code");


//  print output of any file 
let output=cp.execSync("node abc.js");
console.log("Let's run abc file to test: " + output);

 