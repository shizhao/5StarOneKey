// ==UserScript==
// @name         OPR刷新
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  自动刷新，直到有新po出现
// @author       shizhao
// @require      https://code.jquery.com/jquery-2.1.4.min.js
// @source       https://github.com/shizhao/5StarOneKey
// @updateURL    https://raw.githubusercontent.com/shizhao/5StarOneKey/master/poor-good-great.user.js
// @downloadURL  https://raw.githubusercontent.com/shizhao/5StarOneKey/master/poor-good-great.user.js
// @match        https://opr.ingress.com/*
// @grant        none
// ==/UserScript==
async function opr() {
    if(document.querySelector("div.row > div.alert-danger > p.ng-binding")){
       if(document.querySelector("div.row > div.alert-danger > p.ng-binding").innerText.replace(/\s+/g,"").length !== 0){
        rd = rnd(1,10);
        console.log("/",rd);
        await sleep(rd);
        location.href="/";
        }
    }
    if(document.querySelector("p > a > button.button")){
        rd=rnd(10,30);
        console.log("/recon",rd);
        await sleep(rd);
        location.href="/recon";
    }
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function rnd(start, end){
    return Math.floor((Math.random() * (end - start) + start) * 1000);
}
 $(window).load(function() {
            opr();
        });
