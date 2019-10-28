class ErrorApp implements Error{
    public name:string = "ERROR FOR APP PAGE ANALYSE";
    public message:string;

    constructor(msg:string){
        this.message = msg;
        console.error(msg);
    }
}

function anyItem(any:any):string{
    if(typeof any !== "string"){
        throw new ErrorApp("Nao String");
    }
    return any;
}
try{
    anyItem(2);
    console.log("Sucesso !");
}catch(error){
    console.error("Nao conseguiu :C");
}