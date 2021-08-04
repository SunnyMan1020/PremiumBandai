// ==UserScript==
// @name         Premium Bandai Auto Refresh
// @namespace    https://p-bandai.com/hk
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://p-bandai.com/hk/item/*
// @icon         https://www.google.com/s2/favicons?domain=tampermonkey.net
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

window.addEventListener('load', function(){
  function test() {
       if(document.getElementById("sc_p07_01_purchaseNumber").value == 0){
           location.reload(true);
       }
}
setInterval(test,1000)
});

    // Your code here...
})();
