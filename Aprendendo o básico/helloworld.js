alert("HELLO WORLD!");
// VARIAVEIS
var user;
var Colegio = /** @class */ (function () {
    // CONSTRUTOR
    function Colegio(nome, matricula, pagando) {
        this.nome = nome;
        this.matricula = matricula;
        this.pagando = pagando;
    }
    return Colegio;
}());
//Função para Sincronizar dados
function mostrarDados(aluno) {
    return aluno.nome;
}
user = new Colegio("Julio", 9213, true);
alert("Nome do aluno: " + mostrarDados(user));
