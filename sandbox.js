let coin = Math.round(Math.random());
let output = "none";

switch(coin){
    case 1:
        output = "Yazı";
        code = "yazı.png"
        break;
    case 0:
        output = "Tura";
        code = "tura.png"
        break;
    default:
        output = "WHAT!?";
        break;
}

const what = document.querySelector('img');
const para = document.querySelector('p');
para.innerText = output
what.outerHTML = `<img src="${code}">`
console.log(what);
console.log(output);
