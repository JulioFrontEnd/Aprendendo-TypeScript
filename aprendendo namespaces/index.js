var Validator;
(function (Validator) {
    var Texto = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    var Email = /** @class */ (function () {
        function Email() {
        }
        Email.prototype.isValid = function (str) {
            return Texto.test(str);
        };
        return Email;
    }());
    Validator.Email = Email;
})(Validator || (Validator = {}));
var Validator;
(function (Validator) {
    var Texto = /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/gi;
    var Url = /** @class */ (function () {
        function Url() {
        }
        Url.prototype.isValid = function (str) {
            return Texto.test(str);
        };
        return Url;
    }());
    Validator.Url = Url;
})(Validator || (Validator = {}));
/// <reference path="Email.ts"/>
/// <reference path="Url.ts"/>
/// <reference path="Validation.ts"/>
var ValidMail = Validator.Email;
var ValidUrl = Validator.Url;
var Mails = ["juliO@gamil.com", "jjyudf@dsjf.com", "jfalk@@gmail.com", "@mail.com", "Sucki@@"];
var Urls = ["google.com", "www.ggole.com", "oracle.site", "https://www.github.com", "g2a.gto"];
console.log("=========================");
Mails.forEach(function (mail) {
    console.log(mail + " : " + ((new ValidMail().isValid(mail)) ? "Verdadeiro" : "Falso"));
});
console.log("=========================");
Urls.forEach(function (url) {
    console.log(url + " : " + ((new ValidUrl().isValid(url)) ? "Verdadeiro" : "Falso"));
});
