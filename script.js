let operator="";
let previousValue="";
let currentValue="";

document.addEventListener("DOMContentLoaded", function(){

    let clear=document.querySelector(".btn-clear");
    let equal=document.querySelector(".btn-equal");
    let decimal=document.querySelector(".btn-decimal");

    let numbers=document.querySelectorAll(".btn-number");
    let operators=document.querySelectorAll(".btn-operator");

    let previousScreen=document.querySelector(".previous");
    let currentScreen=document.querySelector(".current");

    numbers.forEach((number) => number.addEventListener("click", function(e) {
        handleNumber(e.target.textContent);
        currentScreen.textContent=currentValue;
    }));

    operators.forEach((op) => op.addEventListener("click", function(e){
        handleOperator(e.target.textContent);
        previousScreen.textContent=previousValue + " " + operator;
        currentScreen.textContent=currentValue;
    }));

    clear.addEventListener("click", function(){
        previousValue="";
        currentValue="";
        operator="";
        previousScreen.textContent="";
        currentScreen.textContent="";
    });

    equal.addEventListener("click", function(){
        if (previousValue != "" && currentValue != ""){
            calculate();
            previousScreen.textContent="";
            currentScreen.textContent=previousValue;
        }
    });

    decimal.addEventListener("click", function(e){
        addDecimal();
    });

});

function handleNumber(num){
    if (currentValue.length <= 5){
    currentValue+=num;
    };
};

function handleOperator(op){
    operator=op;
    previousValue=currentValue;
    currentValue="";
};

function calculate(){
    previousValue=Number(previousValue);
    currentValue=Number(currentValue);

    if (operator == "+"){
        previousValue+=currentValue;
    }
    else if (operator == "-"){
        previousValue-=currentValue;
    }
    else if (operator == "x"){
        previousValue*=currentValue;
    }
    else {
        previousValue/=currentValue;
    }

    previousValue=roundNumber(previousValue);
    previousValue=previousValue.toString();
    currentValue=currentValue.toString();
};

function roundNumber(num){
    return Math.round(num*1000)/1000;
};

function addDecimal(){
    if(!currentValue.includes(".")){
        currentValue+="."
    }
};
