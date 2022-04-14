//  About Puppeteer-: Puppeteer is an API to open browser for automation purpose 

// link->   "https://www.npmjs.com/package/puppeteer"

// // *****************************************
// const puppeteer = require('puppeteer');

// (async () => {
//   const browser = await puppeteer.launch();
//   const page = await browser.newPage();
//   await page.goto('https://example.com');
//   await page.screenshot({ path: 'example.png' });

//   await browser.close();
// })();

// // ***********************************************
//  Satrt:

const puppeteer = require('puppeteer');


let browserPromise = puppeteer.launch({headless: false});

browserPromise.then(function(browser){
    console.log("Browser is open");
    let pagePromise = browser.newPage();
    return pagePromise;
}).then(function(page){
    console.log("page is Opened");
    let urlPromise = page.goto("https://www.google.com/");
    return urlPromise;
}).then(function(){
    console.log("Google is Opened");
})