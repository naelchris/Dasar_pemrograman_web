//calculator object
const calculator = {
    displayNumber: '0',
    operator: null,
    firstNumber : null,
    waitingForSecondNumber : false
} 

function updateDisplay(){
    document.querySelector('#displayNumber').innerText = calculator.displayNumber
}

function clearCalculator(){
    calculator.displayNumber = '0';
    calculator.operator = null;
    calculator.firstNumber = null;
    calculator.waitingForSecondNumber = false;
}

//input to displayNumber
function inputDigit(digit){

    if(calculator.displayNumber === '0'){
        calculator.displayNumber = digit;;
    }else{
        calculator.displayNumber += digit;
    }
}

//inverse function
function inverseNumber(){
    if(calculator.displayNumber === '0'){
        return;
    }
    calculator.displayNumber *= -1
}

//handle Operator
function handleOperator(operator){
    if(!calculator.waitingForSecondNumber){
        calculator.operator = operator;
        calculator.waitingForSecondNumber = true;
        calculator.firstNumber = calculator.displayNumber;

        //reseting display become 0 to add the sencond number
        calculator.displayNumber = '0';
    }else{
        alert('Operator has been set')
    }
}

function performCalculation(){
    if(calculator.firstNumber == null || calculator.operator == null){
        alert("Operator has not been set")
        return
    }
    //local scope variable
    let result = 0
    if(calculator.operator === "+"){
        result = parseInt(calculator.firstNumber) + parseInt(calculator.displayNumber)
    }else{
        result = parseInt(calculator.firstNumber) - parseInt(calculator.displayNumber)
    }

    const history = {
        firstNumber: calculator.firstNumber,
        secondNumber: calculator.displayNumber,
        operator: calculator.operator,
        result: result
    }
    putHistory(history);
    calculator.displayNumber = result;
    renderHistory();
}

//getting the all button and add event listener dynamicly
const buttons = document.querySelectorAll('.button')

for(let button of buttons){
    button.addEventListener("click", function(event){
        
        //targeted object
        const target = event.target

        //if target clear
        if(target.classList.contains('clear')){
            clearCalculator()
            updateDisplay()
            return
        }

        //negative
        if(target.classList.contains('negative')){
            inverseNumber()
            updateDisplay()
            return
        }
        
        //equals
        if(target.classList.contains('equals')){
            performCalculation()
            updateDisplay()
            return
        }

        //operator
        if(target.classList.contains('operator')){
            handleOperator(target.innerText)
            return
        }

        inputDigit(target.innerText)
        updateDisplay()
    })
}

