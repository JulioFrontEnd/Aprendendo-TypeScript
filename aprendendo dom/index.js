function ce(str) {
    return document.querySelector(str);
}
var element = ce("#div");
console.log(element);
var content = "<h1>HELLO</h1>";
element.innerHTML = content;
