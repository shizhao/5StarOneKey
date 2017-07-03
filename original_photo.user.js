// ==UserScript==
// @name         show original photo
// @version      0.1
// @description  点击图片，显示原始照片，配合Exif viewer使用: https://chrome.google.com/webstore/detail/exif-viewer/nafpfdcmppffipmhcpkbplhkoiekndck
// @source       https://github.com/shizhao/5StarOneKey/blob/master/original_photo.user.js
// @updateURL    https://raw.githubusercontent.com/shizhao/5StarOneKey/master/original_photo.user.js
// @downloadURL  https://raw.githubusercontent.com/shizhao/5StarOneKey/master/original_photo.user.js
// @author       shizhao
// @match        https://opr.ingress.com/recon
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    document.getElementsByClassName("ingress-background")[0].onclick=function(){
        var orignsrc = document.getElementsByClassName("center-cropped-img")[0].getAttribute("ng-src");
        var modalbody = document.getElementsByClassName("modal-body");
        var img =modalbody[0].getElementsByTagName("img")[0];
        img.src=orignsrc+"=s0";
       console.log(orignsrc);  
        console.log(img.src);
   };
    // Your code here...
})();
