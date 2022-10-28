const fromCurr = document.querySelector("#fromCurr");
const toCurr = document.querySelector("#toCurr");
const currencyAmount = document.querySelector("#currencyAmount");
const btnPress = document.querySelector("#btnFunny"); 

btnPress.addEventListener("click", e => {
    e.preventDefault;
    fromCurr.value;
    toCurr.value;
    currencyAmount.value;
    data = fromCurr.value + toCurr.value + currencyAmount.value;
    return data;
});

