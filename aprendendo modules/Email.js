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
