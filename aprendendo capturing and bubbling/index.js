var main = document.getElementById("main");
var btn = document.getElementById("btn");
main.addEventListener("click", function () {
    alert("Clicou na MAIN");
}, false);
btn.addEventListener("click", function () {
    alert("Clicou no BTN");
}, true);
