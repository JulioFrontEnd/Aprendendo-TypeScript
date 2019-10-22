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
