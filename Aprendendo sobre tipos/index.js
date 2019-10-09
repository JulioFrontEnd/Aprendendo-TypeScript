function exibir(nome, idade) {
    if (idade !== undefined)
        return "Seu nome \u00E9: " + nome + "\n        E voc\u00EA tem " + idade + " anos";
    return "Seu nome \u00E9: " + nome;
}
console.log("RETORNO: " + exibir("Julio"));
var Upp = ["Julio", "Beyou"];
console.log(Upp);
