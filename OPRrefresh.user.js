// ==UserScript==
// @name         OPR刷新
// @namespace    http://tampermonkey.net/
// @version      1.1
// @description  自动刷新，直到有新po出现
// @author       shizhao
// @require      https://code.jquery.com/jquery-2.1.4.min.js
// @source       https://github.com/shizhao/5StarOneKey
// @updateURL    https://github.com/shizhao/5StarOneKey/raw/master/OPRrefresh.user.js
// @downloadURL  https://github.com/shizhao/5StarOneKey/raw/master/OPRrefresh.user.js
// @match        https://opr.ingress.com/*
// @grant        none
// ==/UserScript==

async function opr() {
    if(document.querySelector("div.row > div.alert-danger > p.ng-binding") && location.href == "https://opr.ingress.com/recon"){
        rd = rnd(1,10);
        console.log("/",10000+rd);
        await sleep(10000+rd);
       if(document.querySelector("div.row > div.alert-danger > p.ng-binding").innerText.replace(/\s+/g,"").length !== 0){
        //rd = rnd(1,10);
        //console.log("/",rd);
        //await sleep(rd);
            location.href="/";
        }else{
            document.title = '(新！)' + document.title;
        }
    }
    if(document.querySelector("p > a > button.button")){
        rd=rnd(60,600);
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

onload=opr();
