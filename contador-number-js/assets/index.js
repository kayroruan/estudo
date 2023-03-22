var currentNumberWrapper = document.getElementById("currentNumber");
var currentNumber = 0;

function decrement() {
    if (currentNumber > 0){
        currentNumber = currentNumber - 1;
        currentNumberWrapper.innerHTML = currentNumber;
    }
}

function increment() {
    currentNumber = currentNumber + 1;
    currentNumberWrapper.innerHTML = currentNumber;
}