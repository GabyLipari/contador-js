
var currentNumberWrapper = document.getElementById("currentNumber")
var currentNumber = 0
var soma = document.getElementById("increment")
var subtrai = document.getElementById("decrement")
 
function plusOne(){
    currentNumber = currentNumber + 1;
    currentNumberWrapper.innerHTML = currentNumber;
    if (currentNumber > 0){
        document.getElementById("currentNumber").style.color = "black";
        }
    if (currentNumber >= 10){
        soma.removeEventListener('click', plusOne)
    }
    
}

 function minusOne(){
    currentNumber = currentNumber - 1;
    currentNumberWrapper.innerHTML = currentNumber;
    if (currentNumber < 0){
        document.getElementById("currentNumber").style.color = "red";
        }
    if (currentNumber <= -10){
        subtrai.removeEventListener('click', minusOne)
    }        
}

soma.addEventListener('click', plusOne)
subtrai.addEventListener('click', minusOne)
