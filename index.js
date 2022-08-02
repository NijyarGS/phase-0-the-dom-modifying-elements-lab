// Write your code here!
let main = document.querySelector("main#main");
main.remove();

let body = document.querySelector("body");

let newHeader = document.createElement("h1");

newHeader.setAttribute('id','victory');
newHeader.innerHTML= "Nijyar is the champion"

body.append(newHeader);

