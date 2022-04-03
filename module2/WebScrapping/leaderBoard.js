
// Find Match Details of IPL like name, runs, balls, fours, sixes, Skill Rating 

const request= require("request");
const jsdom = require("jsdom");
const { JSDOM } = jsdom;

const link = "https://www.espncricinfo.com/series/ipl-2021-1249214/match-results";
let leaderBoard = [];

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
                let strikeRate = playerDetail[7].textContent;

                // Details of each player 
                console.log("Name-", name, " Runs-", runs, " Balls-", balls, " Matches-", matches, " Fours-", fours, " Sixes-", sixes, " Strike Rate-", strikeRate);
            }
        }
        console.log("********************************************");
    }
}



// function processPlayer(name, runs, balls, fours, sixes, skillRate){
    




//     let obj = {

//     }
// }