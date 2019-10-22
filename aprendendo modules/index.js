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
