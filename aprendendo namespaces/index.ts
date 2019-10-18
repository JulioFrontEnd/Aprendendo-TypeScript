/// <reference path="Email.ts"/>
/// <reference path="Url.ts"/>
/// <reference path="Validation.ts"/>
import ValidMail = Validator.Email;
import ValidUrl = Validator.Url;

const Mails:string[] = ["juliO@gamil.com","jjyudf@dsjf.com","jfalk@@gmail.com","@mail.com","Sucki@@"];
const Urls:string[] = ["google.com","www.ggole.com","oracle.site","https://www.github.com","g2a.gto"];
console.log(`=========================`);
Mails.forEach(mail=>{
    console.log(`${mail} : ${(new ValidMail().isValid(mail)) ? "Verdadeiro" : "Falso"}`);
});
console.log(`=========================`);
Urls.forEach(url=>{
    console.log(`${url} : ${(new ValidUrl().isValid(url)) ? "Verdadeiro" : "Falso"}`);
});