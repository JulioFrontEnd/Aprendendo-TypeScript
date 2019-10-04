alert("HELLO WORLD!");
var Colegio = /** @class */ (function () {
    function Colegio() {
    }
    Colegio.prototype.contructor = function (nome, matricula, pagando) {
        this.nome = nome;
        this.matricula = matricula;
        this.pagando = pagando;
    };
    return Colegio;
}());
var user = new Colegio();
console.log(user);
