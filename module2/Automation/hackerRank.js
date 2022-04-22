//                                                    HackerRank Automation Project 



const puppeteer = require("puppeteer");
// const mail = "firamay569@arpizol.com";            create a new email and try it
const mail = "heroje9110@viemery.com";


const pass = "Sandeep@123";
const code = require('./code');


// let browserPromise = puppeteer.launch({headless: false});       // to open default size browser page
let browserPromise = puppeteer.launch({headless: false, defaultViewport: null});       // to remove default size of browser page
// if we add this-->>  (args: ['--start-fullscreen'])  then full screen occupied by browser
let page;           //make a globally var for page tab
// let question = [];

browserPromise.then(function(browser){
    console.log("Browser is opened");
    let pagePromise = browser.newPage();
    return pagePromise;
}).then(function(pageInstance){
    page = pageInstance;
    console.log("new page is opened");
    let urlPromise =page.goto("https://www.hackerrank.com/");
    return urlPromise;
}).then(function(){
    console.log("HackerRank page is opened");
    return waitAndClick("ul.menu a");     //call function and pass selector for wait and click promise

}).then(function(){
    console.log("Login page is opened");
    return waitAndClick(".fl-button-wrap.fl-button-width-auto.fl-button-left a");

}).then(function(){
    let waitPromise = page.waitForSelector("#input-1");  //id selctor
    return waitPromise;
}).then(function(){
    let mailTypePromise = page.type("#input-1", mail, {delay: 100});
    return mailTypePromise;
}).then(function(){
    let passwordPromise = page.type("#input-2", pass, {delay: 100});
    return passwordPromise;
}).then(function(){
    let loginPromise = page.click('button[data-analytics="LoginPassword"');
    return loginPromise;
}).then(function(){
    console.log("Login SuccessFully...");
    return waitAndClick('[data-automation="algorithms"]');

}).then(function(){
    console.log("open Algorithm page");
    return waitAndClick('.checkbox-input[value="warmup"]');

}).then(function(){
    console.log("Warm up keyword selected");
    let waitPromise = page.waitForSelector('.challenge-submit-btn');     
    return waitPromise;
}).then(function(){
        let solvePromise  = page.evaluate(function(){               // JSDOM under evaluate to select any one of selector{.evaluatae(JSDOM function)}
            let allLinks = document.querySelectorAll('.js-track-click.challenge-list-item');
            let arr = [];
            for(let i=0; i< allLinks.length; i++){
                let link = allLinks[i].href;
                arr.push(link);
                console.log(link);
            }
            return arr;
        });              
    return solvePromise;
}).then(function(questionArr){
    console.log(questionArr);
    let questionPromise = questionSolver(questionArr[0], code.answers[0]);  // give i/p as link of question and solution of curroponding link
    for(let i=1;i< questionArr.length;i++){
        questionPromise = questionPromise.then(function(){
            let nextQuestionPromise = questionSolver(questionArr[i],code.answers[i]);
            return nextQuestionPromise;
        })
    }
    return questionPromise;
}).then(function(){
    console.log("All the warm up questions have been successfully submitted!!!");
})












// Make a fuction To avoid repeted code of waitPromise and clickPromise

function waitAndClick(selector){
    return new Promise(function(resolve, reject){
        let waitPromise = page.waitForSelector(selector);
        waitPromise.then(function(){
            let clickPromise = page.click(selector);
            return clickPromise;
        }).then(function(){
            resolve();      // It calls function after waitAndClick function means to make a chain for next fuction
        })
    })
}


// function for solve questions 

function questionSolver(question, answer){
    return new Promise(function(resolve, reject){
        let linkPromise = page.goto(question);
        linkPromise.then(function(){
            console.log("Clicked on question link");
            return waitAndClick('.checkBoxWrapper input');
        }).then(function(){
            console.log("clicked on check-Box wrapper");
            return waitAndClick('.ui-tooltip-wrapper textarea');
        }).then(function(){
            let typePromise = page.type('.ui-tooltip-wrapper textarea', answer);        //type answer in textarea 
            return typePromise;                                                 // After it we simly performm cut and paste operation by keyword automaiclly
        }).then(function(){
            console.log("Code is typed");
            let holdControl = page.keyboard.down('Control');  // hold ctrl button of keyword by down
            return holdControl;
        }).then(function(){
            let pressA = page.keyboard.press('A');
            return pressA;
        }).then(function(){
            let pressX = page.keyboard.press('X');
            return pressX;
        }).then(function(){
            console.log("code is cut");
            let unHoldControl = page.keyboard.up("Control");        // unhold ctrl button of keyword by up
            return unHoldControl;
        }).then(function(){
            return waitAndClick('.monaco-editor.no-user-select.vs');
        }).then(function(){
            console.log("Ide editor is selected");
            let holdControl = page.keyboard.down('Control');  // hold ctrl button of keyword
            return holdControl;
        }).then(function(){
            let pressA = page.keyboard.press('A');
            return pressA;
        }).then(function(){
            let pressV = page.keyboard.press('V');
            return pressV;
        }).then(function(){
            console.log("COde is pasted successfully");
            let unHoldControl = page.keyboard.up("Control");
            return unHoldControl;
        }).then(function(){
            return waitAndClick('.ui-btn.ui-btn-normal.ui-btn-primary.pull-right.hr-monaco-submit.ui-btn-styled');
        }).then(function(){
            console.log("Code is Successfully Submitted");
            resolve();
        })
    })
}