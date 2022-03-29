// In this Script we print Details of Batsman 


// use of JSDOM to search in form of selector 
const request = require('request');
const jsdom = require('jsdom');
const {JSDOM} = jsdom;

// checking differnt match 
const link="https://www.espncricinfo.com/series/ipl-2021-1249214/sunrisers-hyderabad-vs-mumbai-indians-55th-match-1254088/full-scorecard";
// const link="https://www.espncricinfo.com/series/ipl-2021-1249214/royal-challengers-bangalore-vs-kolkata-knight-riders-eliminator-1254115/full-scorecard";
// const link="https://www.espncricinfo.com/series/ipl-2021-1249214/chennai-super-kings-vs-punjab-kings-53rd-match-1254094/full-scorecard";


request(link, cb);

function cb(error, response, html){
    if(error)
        console.error('error: ', error);
    else{
        const dom = new JSDOM(html);
        const documents = dom.window.document;

        let batsMan = documents.querySelectorAll(".batsman-cell.text-truncate.out a");
        // console.log(batsMan.length);
        for(let i=0; i < batsMan.length; i++){

            // get href link by Scrapping
            let batsManLink = batsMan[i].href;
            let completeLink = "https://www.espncricinfo.com" + batsManLink;
            // console.log(completeLink);

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
        const documents = dom.window.document;

        let batsMan = documents.querySelectorAll(".player-card-padding .player_overview-grid div h5"); 
        console.log("BatsMan Name-: ", batsMan[0].textContent, ",     Born Details-:", batsMan[1].textContent);
    }
}