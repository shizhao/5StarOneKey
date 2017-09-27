// ==UserScript==
// @name         OPR刷新
// @namespace    http://tampermonkey.net/
// @version      0.5
// @description  自动刷新，直到有新po出现
// @author       shizhao
// @source       https://github.com/shizhao/5StarOneKey
// @updateURL    https://github.com/shizhao/5StarOneKey/raw/master/OPRrefresh.user.js
// @downloadURL  https://github.com/shizhao/5StarOneKey/raw/master/OPRrefresh.user.js
// @match        https://opr.ingress.com/*
// @grant        none
// ==/UserScript==
console.log(document.readyState);
async function opr() {
    if(document.querySelector("div.row > div.alert-danger > p.ng-binding") && location.href == "https://opr.ingress.com/recon"){
        await sleep(10000);
       if(document.querySelector("div.row > div.alert-danger > p.ng-binding").innerText.replace(/\s+/g,"").length !== 0){
        rd = rnd(1,10);
        console.log("/",rd);
        await sleep(rd);
        location.href="/";
        }
    }else if(document.querySelector("p > a > button.button")){
        rd=rnd(10,30);
        console.log("/recon",rd);
        await sleep(rd);
        location.href="/recon";
    }
}else{
    document.title = '(新！)'+document.title;
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function rnd(start, end){
    return Math.floor((Math.random() * (end - start) + start) * 1000);
}
console.log(document.readyState);
onload=opr();
