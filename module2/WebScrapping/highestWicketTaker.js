
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

        let bowlerTables = documents.querySelectorAll(".table.bowler");
        // console.log(bowlerTables[0].textContent);
        // console.log(bowlerTables.length);

        let highWikt=0;   //for count highest Wicket
        let nameOfWktr ="";

        for(let i=0; i<bowlerTables.length; i++){
            let rows = bowlerTables[i].querySelectorAll("tbody tr");
            // console.log(rows.length);

            for(let j=0; j<rows.length; j++){
                let tds = rows[j].querySelectorAll("td");

                // in table data some empty data rows so...
                if(tds.length > 1){        
                    // we only take name and wicket which is on 0 and 4th index 
                    console.log("Name-: ", tds[0].textContent, ", Number of Wicket -: ", tds[4].textContent);
                    if(highWikt < tds[4].textContent){
                        highWikt = tds[4].textContent;
                        nameOfWktr = tds[0].textContent;
                    }
                }
            }
        }

        console.log("*******************************************************");
        console.log("Maximum Wicket-:", highWikt, "taken By '", nameOfWktr, "'\n");   // Highest Wicket taken and his Name


        
    }
}
