function JeanDisse(callback: (string:string) => void):void{
    callback("QUE O BLÁ BLÁ NÃO EXISTE, e ainda fala mais...");
}    
function blaBla(string:string): void{
    console.log(`Jean disse: ${string}`);
}

JeanDisse(blaBla);