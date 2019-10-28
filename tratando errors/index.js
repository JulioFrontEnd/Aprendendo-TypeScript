var ErrorApp = /** @class */ (function () {
    function ErrorApp(msg) {
        this.name = "ERROR FOR APP PAGE ANALYSE";
        this.message = msg;
        console.error(msg);
    }
    return ErrorApp;
}());
function anyItem(any) {
    if (typeof any !== "string") {
        throw new ErrorApp("Nao String");
    }
    return any;
}
try {
    anyItem(2);
    console.log("Sucesso !");
}
catch (error) {
    console.error("Nao conseguiu :C");
}
