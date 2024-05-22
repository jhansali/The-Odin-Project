let operator="";
let previousValue="";
let currentValue="";

document.addEventListener('DOMContentLoaded', function() {
    let clearButton = document.querySelector('.clear');
    let equalButton = document.querySelector('.equal');
    let decimalButton = document.querySelector('.decimal');

    let number = document.querySelectorAll('.number');
    let operatorButton = document.querySelectorAll('.operator');

    let previousScreen = document.querySelector('.previous');
    let currentScreen = document.querySelector('.current');

    number.forEach((num) => num.addEventListener('click',function(e){
        handleNumber(e.target.innerText);
        currentScreen.innerText = currentValue;
    }));

    operatorButton.forEach((op) => op.addEventListener('click',function(e){
        handleOperator(e.target.textContent);   
        previousScreen.innerText = previousValue + operator;
        currentScreen.innerText = currentValue;
    }));

    clearButton.addEventListener('click',function(e){
        previousValue = '';
        currentValue = '';
        previousScreen.innerText = '';
        currentScreen.innerText = '';
        operator = '';
    });

    equalButton.addEventListener("click",function(e){
        calculate();
        if(currentValue === 'Infinity'){
            currentScreen.innerText = 'Error';
            currentValue = '';
            previousValue = '';
            operator = '';
            return;
        }else if(currentValue.length>5){
            currentScreen.innerText = currentValue.slice(0,5) + '...';
        }else{
            currentScreen.innerText = currentValue;
        };
        previousScreen.innerText = '';
    });

    decimalButton.addEventListener('click',function(e){
        if(currentValue.includes('.')) return;
        currentValue += '.';
        currentScreen.innerText = currentValue;
    });
});

function handleNumber(value){
    if(currentValue.length<=5){
        currentValue += value;
    }
}

function handleOperator(value){
    if(currentValue === '') return;
    operator = value;
    previousValue = currentValue;
    currentValue = '';
}

function calculate(){
    let result = '';
    const prev = parseFloat(previousValue);
    const current = parseFloat(currentValue);
    if(isNaN(prev) || isNaN(current)) return;
    switch(operator){
        case '+':
            result = prev + current;
            break;
        case '-':
            result = prev - current;
            break;
        case '*':
            result = prev * current;
            break;
        case '/':
            result = prev / current;
            break;
        default:
            return;
    }
    result = roundNumber(result);
    currentValue = result.toString();
    operator = '';
    previousValue = '';
}

function roundNumber(num){
    return Math.round(num*1000)/1000;
}