
var currentNumberWrapper = document.getElementById("currentNumber")
var currentNumber = 0
var soma = document.getElementById("increment")
var subtrai = document.getElementById("decrement")
var msgPlus = document.querySelector('#messagePlus')
var msgMinus = document.querySelector('#messageMinus')
 
function plusOne(){
    currentNumber = currentNumber + 1;
    currentNumberWrapper.innerHTML = currentNumber;
    if (currentNumber > 0){
        document.getElementById("currentNumber").style.color = "black";
        }
    if (currentNumber >= 10){
        currentNumber = 9;
        msgPlus.classList.toggle('revealPlus');
    }
    
}

 function minusOne(){
    currentNumber = currentNumber - 1;
    currentNumberWrapper.innerHTML = currentNumber;
    if (currentNumber < 0){
        document.getElementById("currentNumber").style.color = "red";
        }
    if (currentNumber <= -10){
        currentNumber = -9;
        msgMinus.classList.toggle('revealMinus');
    }
}        


soma.addEventListener('click', plusOne)
subtrai.addEventListener('click', minusOne)
