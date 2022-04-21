// make for own work like send connection request to friend of specific companies 


const puppeteer = require("puppeteer");
const mail = "ginesa1278@3dinews.com";
const pass = "Sandeep@123";
const search = "amazon" + "\n";   // "\n" used for press enter button

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
    let urlPromise =page.goto("https://www.linkedin.com/");
    return urlPromise;
}).then(function(){
    console.log("LinkDin page is opened");
    let waitPromise = page.waitForSelector('[data-tracking-control-name="guest_homepage-basic_nav-header-signin"]');
    return waitPromise;
}).then(function(){
    let clickPromise = page.click('[data-tracking-control-name="guest_homepage-basic_nav-header-signin"]');
    return clickPromise;
}).then(function(){
    console.log("Login page is opened");
    let waitPromise = page.waitForSelector('#username');
    return waitPromise;
}).then(function(){
    let mailTypePromise = page.type('#username', mail, {delay: 100});
    return mailTypePromise;
}).then(function(){
    let passTypePromise = page.type('#password', pass, {delay: 100});
    return passTypePromise;
}).then(function(){
    let clickPromise = page.click('[aria-label="Sign in"]');
    return clickPromise;
}).then(function(){
    console.log("Login Successfully");
    let waitPromise = page.waitForSelector('.search-global-typeahead__collapsed-search-button-icon.t-black--light');
    return waitPromise;
}).then(function(){
    let clickPromise = page.click('.search-global-typeahead__collapsed-search-button-icon.t-black--light');
    return clickPromise;
}).then(function(){
    let TypePromise = page.type('.search-global-typeahead__input.always-show-placeholder', search, {delay: 100});
    return TypePromise;
}).then(function(){
    console.log("Search company Name Successfully");
    let waitPromise = page.waitForSelector('[aria-label="People"]');
    return waitPromise;
}).then(function(){
    let clickPromise = page.click('[aria-label="People"]');
    return clickPromise;
}).then(function(){
    console.log("People button selected Successfully");
    // let waitPromise = page.waitForSelector('[aria-label="People"]');
    // return waitPromise;
})







