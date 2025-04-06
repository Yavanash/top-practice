const add = (num1, num2) => {return num1 + num2}
const subtract = (num1, num2) => {return num1 - num2}
const multiply = (num1, num2) => {return num1 * num2}
const divide = (num1, num2) => {return num1 / num2}

let num1, num2, op;
const operate = (num1, num2, op) => {
    if(op === '+')return add(num1, num2);
    if(op === '-')return subtract(num1, num2);
    if(op === '*')return multiply(num1, num2);
    if(op === '/')return divide(num1, num2);
}

const display = document.querySelector(".display");
// setTimeout(() => {console.log(input)}, 5500)
const btns = document.querySelectorAll("button");
const val = [];
let check = false;
btns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        if(btn.textContent === '=')equal();
        else if(btn.id === "ac"){
            display.textContent = '';
            val.length = 0;
            // console.log(val);
        }
        else if(btn.id === "del"){
            const j = val.pop();
            display.textContent = display.textContent.slice(0,-1);
            // console.log(val);
        }
        else if(!check){
            display.textContent = '';
            val.length = 0;
            display.textContent += btn.textContent;
            val.push(btn.textContent);
            check = true;
        }
        else{
            display.textContent += btn.textContent;
            val.push(btn.textContent);
        }
    })
})

function equal() {
    let i = 0;
    while(i<val.length){
        if(val[i]==='/'){
            val[i-1] = operate(parseFloat(val[i-1]), parseFloat(val[i+1]), '/');
            val.splice(i,2);
            // console.log(val);
        }
        else i++;
    }
    i=0;
    while(i<val.length){
        if(val[i]==='*'){
            val[i-1] = operate(parseFloat(val[i-1]), parseFloat(val[i+1]), '*');
            val.splice(i,2);
            // console.log(val);
        }
        else i++;
    }
    i=0;
    while(i<val.length){
        if(val[i]==='+' || val[i]==='-'){
            val[i-1] = operate(parseFloat(val[i-1]), parseFloat(val[i+1]), val[i]);
            val.splice(i,2);
            // console.log(val);
        }
        else i++;
    }
    // display.textContent = '';
    let ans = val[0];
    display.textContent = Math.round(ans * 100) / 100;
    check = false;
    // console.log(val);
}