const textbox = document.getElementById('textbox');
const numpad = document.querySelectorAll('#numpad button');
const addKey = document.getElementById('add');
const subKey = document.getElementById('sub');
const divKey = document.getElementById('divide');
const mulKey = document.getElementById('mul');
const backKey = document.getElementById('back');
const equalKey = document.getElementById('equalTo');
const clearKey = document.getElementById('clear');





function add(evt){textbox.textContent += '+';}
function sub(evt){textbox.textContent += '-';}
function div(evt){textbox.textContent += '/';}
function mul(evt){textbox.textContent += '*'}
function clear(evt){ textbox.textContent = '';}
function backspace(evt){ 
    var text = textbox.textContent;
    textbox.textContent = text.slice(0,-1);
}
function numPress(evt,num){
    textbox.textContent += num;
}
function parse(str) {
    return Function(`'use strict'; return (${str})`)()
  }

function calculate(evt){
    var eq = textbox.textContent;
    if(eq!=''){
        var res = parse(eq);
        console.log(res);
        textbox.textContent = res;
    }
    else
        return
}

numpad.forEach(node => {
    node.addEventListener('click',(evt)=>numPress(evt,node.textContent));
});
clearKey.addEventListener('click',(evt)=>clear(evt));
backKey.addEventListener('click',(evt)=>backspace(evt));
equalKey.addEventListener('click',(evt)=>calculate(evt));
addKey.addEventListener('click',(evt)=>add(evt));
subKey.addEventListener('click',(evt)=>sub(evt));
mulKey.addEventListener('click',(evt)=>mul(evt));
divKey.addEventListener('click',(evt)=>div(evt));
