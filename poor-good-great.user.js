// ==UserScript==
// @name         poor, good, great One Key
// @version      0.1
// @description  Give 1-5 star with single click. fork https://github.com/jqqqqqqqqqq/5StarOneKey
// @updateURL    https://raw.githubusercontent.com/shizhao/5StarOneKey/master/poor-good-great.user.js
// @downloadURL  https://raw.githubusercontent.com/shizhao/5StarOneKey/master/poor-good-great.user.js
// @author       jqqqqqqqqqq, shizhao
// @match        https://opr.ingress.com/recon
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    var target1 = document.getElementById("submitDiv");
    
    var poor = document.createElement("button");
    var textnode = document.createTextNode("穷");
    poor.className = "button big-submit-button";
    poor.appendChild(textnode);
    target1.appendChild(poor);
    poor.onclick = function(){
        document.querySelector("#AnswersController > form > div:nth-child(1) > div:nth-child(1) > div.btn-group > button:nth-child(5)").click();
        document.querySelector("#AnswersController > form > div:nth-child(1) > div.col-xs-12.col-sm-4.pull-right.text-center > div:nth-child(5) > button:nth-child(5)").click();
        document.querySelector("#AnswersController > form > div:nth-child(1) > div.col-xs-12.col-sm-4.pull-right.text-center > div:nth-child(10) > button:nth-child(5)").click();
        document.querySelector("#AnswersController > form > div:nth-child(1) > div.col-xs-12.col-sm-4.pull-right.text-center > div:nth-child(15) > button:nth-child(5)").click();
        document.querySelector("#AnswersController > form > div:nth-child(2) > div:nth-child(1) > div:nth-child(5) > button:nth-child(5)").click();
        document.querySelector("#AnswersController > form > div:nth-child(2) > div:nth-child(1) > div:nth-child(10) > button:nth-child(5)").click();
    };
    
    var good = document.createElement("button");
    var textnode = document.createTextNode("好");
    good.className = "button big-submit-button";
    good.appendChild(textnode);
    target1.appendChild(good);
    good.onclick = function(){
        document.querySelector("#AnswersController > form > div:nth-child(1) > div:nth-child(1) > div.btn-group > button:nth-child(Math.floor(Math.random()*5+1))").click();
        document.querySelector("#AnswersController > form > div:nth-child(1) > div.col-xs-12.col-sm-4.pull-right.text-center > div:nth-child(5) > button:nth-child(Math.floor(Math.random()*5+1))").click();
        document.querySelector("#AnswersController > form > div:nth-child(1) > div.col-xs-12.col-sm-4.pull-right.text-center > div:nth-child(10) > button:nth-child(Math.floor(Math.random()*5+1))").click();
        document.querySelector("#AnswersController > form > div:nth-child(1) > div.col-xs-12.col-sm-4.pull-right.text-center > div:nth-child(15) > button:nth-child(Math.floor(Math.random()*5+1))").click();
        document.querySelector("#AnswersController > form > div:nth-child(2) > div:nth-child(1) > div:nth-child(5) > button:nth-child(Math.floor(Math.random()*5+1))").click();
        document.querySelector("#AnswersController > form > div:nth-child(2) > div:nth-child(1) > div:nth-child(10) > button:nth-child(Math.floor(Math.random()*5+1))").click();
    };
    
    var great = document.createElement("button");
    var textnode = document.createTextNode("大");
    great.className = "button big-submit-button";
    great.appendChild(textnode);
    target1.appendChild(great);
    _553355.onclick = function(){
        document.querySelector("#AnswersController > form > div:nth-child(1) > div:nth-child(1) > div.btn-group > button:nth-child(1)").click();
        document.querySelector("#AnswersController > form > div:nth-child(1) > div.col-xs-12.col-sm-4.pull-right.text-center > div:nth-child(5) > button:nth-child(1)").click();
        document.querySelector("#AnswersController > form > div:nth-child(1) > div.col-xs-12.col-sm-4.pull-right.text-center > div:nth-child(10) > button:nth-child(1)").click();
        document.querySelector("#AnswersController > form > div:nth-child(1) > div.col-xs-12.col-sm-4.pull-right.text-center > div:nth-child(15) > button:nth-child(1)").click();
        document.querySelector("#AnswersController > form > div:nth-child(2) > div:nth-child(1) > div:nth-child(5) > button:nth-child(1)").click();
        document.querySelector("#AnswersController > form > div:nth-child(2) > div:nth-child(1) > div:nth-child(10) > button:nth-child(1)").click();
    };
})();
