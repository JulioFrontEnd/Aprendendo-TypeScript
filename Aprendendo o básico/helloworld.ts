alert("HELLO WORLD!");

// VARIAVEIS
let user    :Colegio;


// INTERFACE
interface Aluno
{
    nome:string;
    matricula:number;
    pagando:boolean;
}

class Colegio implements Aluno
{
    // ATRIBUTOS
    public nome:string;
    public matricula:number;
    public pagando:boolean;
    // CONSTRUTOR
    constructor(nome:string, matricula:number, pagando:boolean)
    {
        this.nome = nome;
        this.matricula = matricula;
        this.pagando = pagando;
    }
}


//Função para Sincronizar dados
function mostrarDados(aluno :Aluno)
{
    return aluno.nome;
}


user = new Colegio("Julio",9213,true);





alert("Nome do aluno: " + mostrarDados(user));