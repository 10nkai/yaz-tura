let coin = Math.round(Math.random());
let output = "none";
    
switch(coin){
    case 1:
        output = "Yazı";
        code = "photo/yazı.png"
        break;
    case 0:
        output = "Tura";
        code = "photo/tura.png"
        break;
    default:
        output = "WHAT!?";
        break;
}
    
const what = document.querySelector('img');
what.outerHTML = `<img src="${code}">` 
console.log(what);
console.log(output);

