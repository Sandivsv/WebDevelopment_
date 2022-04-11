                                                        // Homework

// go on this link ("https://github.com/topics") and choose first 3 topics and go on all their topic site. 
// And after it find min 8 repo related to to that topic and go on Issues and make a json file of taking 5 issues with issues name and link  


 //                                                       Solution


const request= require("request");
const fs = require("fs");
const jsdom = require("jsdom");
const { JSDOM } = jsdom;

const link = "https://github.com/topics";

request(link, cb);

function cb(error, response, html){
    if(error){
        console.log(error);
    }
    else{
        const dom = new JSDOM(html);
        const document = dom.window.document;
        let topic = document.querySelectorAll(".no-underline.d-flex.flex-column.flex-justify-center");

        for(let i=0;i<topic.length; i++){
            let subDomain = topic[i].href;
            let subDomainName = (subDomain.split("/"))[2];
            // console.log(subDomainName);
            let subDomainLink = "https://github.com" + subDomain;
            // console.log(subDomainLink);

            request(subDomainLink, cb2);

        }
    }
}


function cb2(error, response, html){
    if(error)   console.log(error);
    else{
        const dom = new JSDOM(html);
        const document = dom.window.document;
        let repoIssues = document.querySelectorAll(".tabnav-tabs");

        for(let i=0; i<1; i++){
            let selector = repoIssues[i].querySelectorAll("li a");
            let repoIssue = selector[1].href;

            let repoIssueLink = "https://github.com" + repoIssue;
            // console.log(repoIssueLink);
            request(repoIssueLink, cb3);
        }
    }
}



function cb3(error, response, html){
    if(error) console.log(error);
    else {
        const dom = new JSDOM(html);
        const document = dom.window.document;
        let issues = document.querySelectorAll(".flex-auto.min-width-0.p-2.pr-3.pr-md-2");

        for(let i=0; i< 5; i++){
            let issue = issues[i].querySelectorAll("a");
            let issuesLink = "https://github.com" + issue[0].href;
            let issuesName = issue[0].innerHTML;

            console.log(issuesLink);
            console.log(issuesName, "\n");
        }
    }
}