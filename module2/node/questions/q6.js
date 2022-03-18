//read content of unorganised folder and print each file type
//for example abc.mp3 --> print Audio File
//            xyz.mp4 --> print Video File
//            fsd.jpeg -> print Image File

let path=require("path");
let fs=require("fs");

let filepath=path.join(__dirname, "unorganised");

// read file name present in unorganised folder
let files=fs.readdirSync(filepath);

console.log("\nAudio files: ");
for(let i=0; i<files.length; i++){
    if(files[i].includes(".mp3")){
        console.log(files[i]);
    }
}

console.log("\nVideo files: ");
for(let i=0; i<files.length; i++){
    if(files[i].includes(".mp4")){
        console.log(files[i]);
    }
}

console.log("\nImage files: ");
for(let i=0; i<files.length; i++){
    if(files[i].includes(".jpg")){
        console.log(files[i]);
    }
}