let main = document.getElementById("main");
let btn = document.getElementById("btn");

main.addEventListener("click",()=>{
    alert("Clicou na MAIN");
},false);

btn.addEventListener("click",()=>{
    alert("Clicou no BTN");
},true);