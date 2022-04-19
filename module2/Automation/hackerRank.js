//                      HackerRank Automation Project 

const puppeteer = require("puppeteer");
const mail = "firamay569@arpizol.com";
const pass = "Sandeep@123";

let browserPromise = puppeteer.launch({headless: false});
let page;           //make a globally var for page tab
// let question = [];

browserPromise.then(function(browser){
    console.log("Browser is opened");
    let pagePromise = browser.newPage();
    return pagePromise;
}).then(function(pageInstance){
    page = pageInstance;
    console.log("page is opened");
    let urlPromise =page.goto("https://www.hackerrank.com/");
    return urlPromise;
}).then(function(){
    console.log("HackerRank page is opened");
    let waitPromise = page.waitForSelector("ul.menu a");
    return waitPromise;
}).then(function(){
    let clickPromise = page.click("ul.menu a");
    return clickPromise;
}).then(function(){
    let waitLoginPromise  = page.waitForSelector(".fl-button-wrap.fl-button-width-auto.fl-button-left a");
    return waitLoginPromise;
}).then(function(){
    console.log("Login page is opened");
    let clickLoginPromise = page.click(".fl-button-wrap.fl-button-width-auto.fl-button-left a");
    return clickLoginPromise;
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
    let waitPromise = page.waitForSelector('[data-automation="algorithms"]');
    return waitPromise;
}).then(function(){
    let clickPromise = page.click('[data-automation="algorithms"]');
    return clickPromise;
}).then(function(){
    console.log("open Algorithm page");
    let waitPromise = page.waitForSelector('.checkbox-input[value="warmup"]');
    return waitPromise;
}).then(function(){
    let clickPromise = page.click('.checkbox-input[value="warmup"]');
    return clickPromise;
}).then(function(){
    console.log("Warm up keyword selected");
    let waitPromise = page.waitForSelector('.challenge-submit-btn');     
    return waitPromise;
}).then(function(){
        let solvePromise  = page.evaluate(function(){               // JSDOM under evaluate to select any one of selector{.evaluatae(JSDOM function)}
            let allButtons = document.querySelectorAll('.challenge-submit-btn');
            allButtons[0].click();
            return;
        });             
    return solvePromise;
}).then(function(){
    console.log("Question page is Opened");
})