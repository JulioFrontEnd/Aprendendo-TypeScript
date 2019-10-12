function random(numeroMaximo, PodeZero) {
    if (PodeZero === void 0) { PodeZero = false; }
    var numeroAleatorio = Math.floor(Math.random() * numeroMaximo + ((PodeZero) ? 0 : 1));
    return numeroAleatorio;
}
var animeWorld = {
    names: ["Naruto", "Ichigo", "Goku", "Jotaro", "Meliodas", "Midorya", "Shinra"],
    createPersonagemDoMes: function () {
        var _this = this;
        var randomNumber = random(7, true);
        console.log(this.names);
        return function () {
            return { name: "O Personagem do mês é: " + _this.names[randomNumber] };
        };
    }
};
var char = animeWorld.createPersonagemDoMes();
var charPicked = char();
console.log(charPicked);
