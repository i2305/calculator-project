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