
// Find Match Details of IPL like name, runs, balls, fours, sixes, Skill Rating 

const request= require("request");
const fs = require("fs");
const jsdom = require("jsdom");
const { JSDOM } = jsdom;
const xlsx = require("json-as-xlsx");

const link = "https://www.espncricinfo.com/series/ipl-2021-1249214/match-results";
let leaderBoard = [];
let counter = 0;


request(link, cb);

function cb(error, response, html){
    if(error){
        console.log(error);
    }
    else{
        const dom = new JSDOM(html);
        const document = dom.window.document;
        let allScoreTags = document.querySelectorAll('.ds-border-b.ds-border-line');
        // console.log(allScoreTags.length);  // 70 but in last 10 only image link

        for(let i =0; i< 60; i++){ 
            let anchorTagAll = allScoreTags[i].querySelectorAll("a");
            let link = anchorTagAll[2].href;
            let completeLink = "https://www.espncricinfo.com" + link;
            // console.log(completeLink);   // Links of all Matches...

            request(completeLink, cb2);
            counter++;
        }
    }
}



function cb2(error, response, html){
    if(error){
        console.log(error);
    }
    else{
        const dom = new JSDOM(html);
        const document = dom.window.document;
        let batsManRow = document.querySelectorAll('tbody [class="ds-border-b ds-border-line ds-text-tight-s"]');   // or =="tbody .ds-border-b.ds-border-line.ds-text-tight-s"
        for(let i=0; i<batsManRow.length; i++){
            let playerDetail = batsManRow[i].querySelectorAll("td");
            
            if(playerDetail.length == 8){   //In 1 row total 8 column of player details
                let name = playerDetail[0].textContent;
                let runs = playerDetail[2].textContent;
                let balls = playerDetail[3].textContent;
                let matches = playerDetail[4].textContent;
                let fours = playerDetail[5].textContent;
                let sixes = playerDetail[6].textContent;
                // let SkillRate = playerDetail[7].textContent;

                // Details of each player 
                processPlayer(name, runs, balls, matches, fours, sixes);
            }
        }
        counter--;
        
        // This is the place when full code run in node api then we got full details in leaderBoard
        if(counter==0){
            // console.log(leaderBoard);
            let data = JSON.stringify(leaderBoard);
            fs.writeFileSync("BatsmenStats.json", data);

            let excelData = [
                {
                  sheet: "IPL Stats",
                  columns: [
                    { label: "Name", value: "Name" }, // Top level data
                    { label: "Innings", value: "Innings" },
                    { label: "Runs", value: "Runs" }, // Custom format
                    { label: "Balls", value: "Balls" }, // Run functions
                    { label: "Fours", value: "Fours" },
                    { label: "Sixes", value: "Sixes" },
                  ],
                  content: leaderBoard
                },
              ]
              
            let settings = {
                fileName: "MatchDetails", // Name of the resulting spreadsheet
                extraLength: 3, // A bigger number means that columns will be wider
                writeOptions: {}, // Style options from https://github.com/SheetJS/sheetjs#writing-options
            }
              
            xlsx(excelData, settings) // Will download the excel file
        }
    }
}



function processPlayer(name, runs, balls, fours, sixes){
    runs = Number(runs);
    balls = Number(balls);
    fours = Number(fours);
    sixes = Number(sixes);

    for(let i=0; i<leaderBoard.length; i++){
        let playerObj = leaderBoard[i];
        if(playerObj.Name == name){
            playerObj.Runs += runs;
            playerObj.Innings += 1;
            playerObj.Balls += balls;
            playerObj.Fours += fours;
            playerObj.Sixes += sixes;
            return;
        }
    }

    let obj = {
        Name: name,
        Innings: 1,
        Runs: runs,
        Balls: balls,
        Fours: fours,
        Sixes: sixes,
    }
    leaderBoard.push(obj);
}


// console.log("line 80-->> ", leaderBoard)