                                                        // Homework

// go on this link ("https://github.com/topics") and choose first 3 topics and go on all their topic site. 
// And after it find min 8 repo related to to that topic and go on Issues and make a json file of taking 5 issues with issues name and link  


 //                                                       Solution


const request= require("request");
const fs = require("fs");
const path = require("path")

const jsdom = require("jsdom");
const { dirname } = require("path");
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
            console.log(subDomainLink);

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

        let max  = 8;
        if(repoIssues.length < 8){
            max = repoIssues.length;
        }

        for(let i=0; i< max; i++){
            let selector = repoIssues[i].querySelectorAll("li a");
            let repoName = selector[1].href;

            let repoNameLink = "https://github.com" + repoName;
            // console.log(repoNameLink);
            request(repoNameLink, cb3);
        }
    }
}



function cb3(error, response, html){
    if(error) console.log(error);
    else {
        const dom = new JSDOM(html);
        const document = dom.window.document;
        let issues = document.querySelectorAll(".flex-auto.min-width-0.p-2.pr-3.pr-md-2");
        let repoissueLink = "";
        let obj=[];
        let max  = 5;
        if(issues.length < 5){
            max = issues.length;
        }
        for(let i=0; i< max; i++){
            let issue = issues[i].querySelectorAll("a");
            repoissueLink = "https://github.com" + issue[0].href;
            let repoissueName = issue[0].innerHTML;

            let objElements = {
                IssueName:  repoissueName,
                Link:   repoissueLink
            };
            obj.push(objElements);
        }
        console.log(repoissueLink);
        let link = repoissueLink.split("/");
        let folderName = link[3];
        let fileName = link[4] + ".json";

// ************************************************
        if(!fs.existsSync("GithubIssuesRepos"))
            fs.mkdirSync("GithubIssuesRepos");
            
        let GithubIssuesRepos = path.join(__dirname, "GithubIssuesRepos");
        // console.log(githubIssue);

        // let makeFold=path.join(GithubIssuesRepos, folderName);
        // if(!fs.existsSync(makeFold))
        //     fs.mkdirSync(makeFold);
        // let Folder=path.join(GithubIssuesRepos, folderName, fileName);

        let Folder=path.join(GithubIssuesRepos, fileName);
        // console.log(Folder);
        let data = JSON.stringify(obj);
        fs.writeFileSync(Folder, data);  

        // let file = path.join(__dirname, fileName);
        // fs.writeFileSync(file, data);  
        
        
// *****************************************
    }
}