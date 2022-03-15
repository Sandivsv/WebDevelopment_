//copy index.html file from module1 to a new folder inside module2 having name html.

let path=require("path");
let fs=require("fs");

let filepath=__dirname;
console.log(filepath);

let source=path.join(filepath,"module1", "index.html");
let destination=path.join(filepath,"module2","html.txt");

fs.copyFileSync(source,destination);
