(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";
exports.__esModule = true;
var Texto = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
var Email = /** @class */ (function () {
    function Email() {
    }
    Email.prototype.isValid = function (str) {
        return Texto.test(str);
    };
    return Email;
}());
exports.Email = Email;

},{}],2:[function(require,module,exports){
"use strict";
exports.__esModule = true;
var Texto = /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/gi;
var Url = /** @class */ (function () {
    function Url() {
    }
    Url.prototype.isValid = function (str) {
        return Texto.test(str);
    };
    return Url;
}());
exports.Url = Url;

},{}],3:[function(require,module,exports){
"use strict";
exports.__esModule = true;
var Email_1 = require("./Email");
var Url_1 = require("./Url");
var Mails = ["juliO@gamil.com", "jjyudf@dsjf.com", "jfalk@@gmail.com", "@mail.com", "Sucki@@"];
var Urls = ["google.com", "www.ggole.com", "oracle.site", "https://www.github.com", "g2a.gto"];
console.log("=========================");
Mails.forEach(function (mail) {
    console.log(mail + " : " + ((new Email_1.Email().isValid(mail)) ? "Verdadeiro" : "Falso"));
});
console.log("=========================");
Urls.forEach(function (url) {
    console.log(url + " : " + ((new Url_1.Url().isValid(url)) ? "Verdadeiro" : "Falso"));
});

},{"./Email":1,"./Url":2}]},{},[3]);
