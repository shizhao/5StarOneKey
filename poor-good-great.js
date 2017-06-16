// ==UserScript==
// @name         poor, good, great One Key
// @version      0.1
// @description  Give 1-5 star with single click. fork https://github.com/jqqqqqqqqqq/5StarOneKey
// @updateURL    https://github.com/shizhao/5StarOneKey/raw/master/poor-good-great.js
// @downloadURL  https://github.com/shizhao/5StarOneKey/raw/master/poor-good-great.js
// @author       jqqqqqqqqqq, shizhao
// @match        https://opr.ingress.com/recon
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    var target1 = document.getElementById("submitDiv");
    
    var five_star = document.createElement("button");
    var textnode = document.createTextNode("穷");
    five_star.className = "button big-submit-button";
    five_star.appendChild(textnode);
    target1.appendChild(five_star);
    five_star.onclick = function(){
        document.querySelector("#AnswersController > form > div:nth-child(1) > div:nth-child(1) > div.btn-group > button:nth-child(5)").click();
        document.querySelector("#AnswersController > form > div:nth-child(1) > div.col-xs-12.col-sm-4.pull-right.text-center > div:nth-child(5) > button:nth-child(5)").click();
        document.querySelector("#AnswersController > form > div:nth-child(1) > div.col-xs-12.col-sm-4.pull-right.text-center > div:nth-child(10) > button:nth-child(5)").click();
        document.querySelector("#AnswersController > form > div:nth-child(1) > div.col-xs-12.col-sm-4.pull-right.text-center > div:nth-child(15) > button:nth-child(5)").click();
        document.querySelector("#AnswersController > form > div:nth-child(2) > div:nth-child(1) > div:nth-child(5) > button:nth-child(5)").click();
        document.querySelector("#AnswersController > form > div:nth-child(2) > div:nth-child(1) > div:nth-child(10) > button:nth-child(5)").click();
    };
    
    var _533355 = document.createElement("button");
    var textnode = document.createTextNode("好");
    _533355.className = "button big-submit-button";
    _533355.appendChild(textnode);
    target1.appendChild(_533355);
    _533355.onclick = function(){
        document.querySelector("#AnswersController > form > div:nth-child(1) > div:nth-child(1) > div.btn-group > button:nth-child(5)").click();
        document.querySelector("#AnswersController > form > div:nth-child(1) > div.col-xs-12.col-sm-4.pull-right.text-center > div:nth-child(5) > button:nth-child(3)").click();
        document.querySelector("#AnswersController > form > div:nth-child(1) > div.col-xs-12.col-sm-4.pull-right.text-center > div:nth-child(10) > button:nth-child(3)").click();
        document.querySelector("#AnswersController > form > div:nth-child(1) > div.col-xs-12.col-sm-4.pull-right.text-center > div:nth-child(15) > button:nth-child(3)").click();
        document.querySelector("#AnswersController > form > div:nth-child(2) > div:nth-child(1) > div:nth-child(5) > button:nth-child(5)").click();
        document.querySelector("#AnswersController > form > div:nth-child(2) > div:nth-child(1) > div:nth-child(10) > button:nth-child(5)").click();
    };
    
    var _553355 = document.createElement("button");
    var textnode = document.createTextNode("大");
    _553355.className = "button big-submit-button";
    _553355.appendChild(textnode);
    target1.appendChild(_553355);
    _553355.onclick = function(){
        document.querySelector("#AnswersController > form > div:nth-child(1) > div:nth-child(1) > div.btn-group > button:nth-child(1)").click();
        document.querySelector("#AnswersController > form > div:nth-child(1) > div.col-xs-12.col-sm-4.pull-right.text-center > div:nth-child(5) > button:nth-child(1)").click();
        document.querySelector("#AnswersController > form > div:nth-child(1) > div.col-xs-12.col-sm-4.pull-right.text-center > div:nth-child(10) > button:nth-child(1)").click();
        document.querySelector("#AnswersController > form > div:nth-child(1) > div.col-xs-12.col-sm-4.pull-right.text-center > div:nth-child(15) > button:nth-child(1)").click();
        document.querySelector("#AnswersController > form > div:nth-child(2) > div:nth-child(1) > div:nth-child(5) > button:nth-child(1)").click();
        document.querySelector("#AnswersController > form > div:nth-child(2) > div:nth-child(1) > div:nth-child(10) > button:nth-child(1)").click();
    };
})();
