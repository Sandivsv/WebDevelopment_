// given an array arr=[audio,video,image,software , documents , applictions, other]
// make flder foreach Element in the given array and inside each folder make 4 files of that type 

let path=require("path");
let fs=require("fs");

let filepath=__dirname;
// console.log(filepath);
let organise=path.join(filepath,"organise")


// make file name and folder name using array 
let folderName=["audio","video","image","software","documents","applications"];
let fileName=["abc","bcd","cde","def"];
let fileExt= [".mp3",".mp4",".jpg",".exe",".pdf",".rar"];


if(!fs.existsSync(organise)){
    fs.mkdirSync(organise);
}
    
for(let i= 0;i<folderName.length;i++){
    // making folder under organised folder 
    let AnsFolder = path.join(organise,folderName[i]);
    if(!fs.existsSync(AnsFolder)){
            fs.mkdirSync(AnsFolder);
    }

    // to Insert file 
    for (let j=0;j<fileName.length;j++){
        
        // Create a new, empty file using the open() method: 
        let fName=fileName[j] + fileExt[i];
        let filepath=path.join(AnsFolder, fName);
        fs.open(filepath, 'w', function(err,file){
            if(err){
                throw err;
            }
        });

    }
}
