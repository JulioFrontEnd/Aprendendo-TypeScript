import {Validation} from "./Validation";
import {Email} from "./Email";
import {Url} from "./Url";

const Mails:string[] = ["juliO@gamil.com","jjyudf@dsjf.com","jfalk@@gmail.com","@mail.com","Sucki@@"];
const Urls:string[] = ["google.com","www.ggole.com","oracle.site","https://www.github.com","g2a.gto"];
console.log(`=========================`);
Mails.forEach(mail=>{
    console.log(`${mail} : ${(new Email().isValid(mail)) ? "Verdadeiro" : "Falso"}`);
});
console.log(`=========================`);
Urls.forEach(url=>{
    console.log(`${url} : ${(new Url().isValid(url)) ? "Verdadeiro" : "Falso"}`);
});