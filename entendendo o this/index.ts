function random(numeroMaximo:number, PodeZero:boolean = false):number {
    const numeroAleatorio = Math.floor(Math.random() * numeroMaximo + ( (PodeZero) ? 0 : 1) );
    return numeroAleatorio;
}
let animeWorld = {
    names: ["Naruto", "Ichigo", "Goku", "Jotaro", "Meliodas", "Midorya", "Shinra"],
    createPersonagemDoMes: function(){
        var randomNumber = random(7,true);
        return () => {
            return {name: "O Personagem do mês é: " + this.names[randomNumber]}
        }
    }
};
let char = animeWorld.createPersonagemDoMes();
let charPicked = char();

console.log(charPicked);

