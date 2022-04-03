
// Find Match Details of IPL like name, runs, balls, fours, sixes, Skill Rating 

const request= require("request");
const fs = require("fs");
const jsdom = require("jsdom");
const { JSDOM } = jsdom;

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
        let allScoreTags = document.querySelectorAll('a[data-hover="Scorecard"]');
        // console.log(allScoreTags.length);

        for(let i =0; i< allScoreTags.length; i++){
            let link = allScoreTags[i].href;
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
        let batsManRow = document.querySelectorAll(".table.batsman tbody tr");
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
            console.log(leaderBoard);

            let data = JSON.stringify(leaderBoard);
            fs.writeFileSync("BatsmenStats.json", data);

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