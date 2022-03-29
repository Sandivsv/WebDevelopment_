
// use of JSDOM to search in form of selector 
const request = require('request');
const jsdom = require('jsdom');
const {JSDOM} = jsdom;

const link="https://www.espncricinfo.com/series/indian-premier-league-2022-1298423/chennai-super-kings-vs-kolkata-knight-riders-1st-match-1304047/live-cricket-score"
request(link, cb);

function cb(error, response, html){
    if(error)
        console.error('error: ', error);
    else{
        const dom = new JSDOM(html);
        const documents = dom.window.document;

        // let name = documents.querySelector(".team.team-gray .name-link .name");
        // console.log(name.textContent);

        let name = documents.querySelectorAll(".team .name-link .name");
        console.log(name[0].textContent);
        console.log(name[1].textContent);

        let res = documents.querySelector(".event .status-text span");
        console.log(res.textContent);
        
    }
}
