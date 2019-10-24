function ce(str:string):HTMLElement{
    return document.querySelector(str);
}

let element = ce("#div");
console.log(element);
let content:string = "<h1>HELLO</h1>";
element.innerHTML = content;