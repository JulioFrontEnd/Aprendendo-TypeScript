function exibir(nome:string,idade?:number):string{
    if(idade !== undefined)
        return `Seu nome é: ${nome}
        E você tem ${idade} anos`
    return `Seu nome é: ${nome}`
}

console.log(`RETORNO: ${exibir("Julio")}`)

let Upp:string[] = ["Julio","Beyou"]

console.log(Upp)