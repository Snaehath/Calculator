class Calculator {
    constructor(previousOperandTextElement,currentOperandTextElement) {
        this.previousOperandTextElement = previousOperandTextElement
        this.currentOperandTextElement = currentOperandTextElement
        this.clear()
    }

    clear(){
        this.curOperand = ''
        this.prevOperand = ''
        this.operation = undefined
    }

    delete(){

    }

    appendNumber(number){
        if (number === '.' && this.curOperand.includes('.')) return
        this.curOperand = this.curOperand.toString() + number.toString()

    }

    chooseOperation(operation){

    }

    compute(){

    }

    updateDisplay(){
        this.currentOperandTextElement.innerText = this.curOperand

    }
}


const numberButtons = document.querySelectorAll('.number')
const operationButtons = document.querySelectorAll('.operator')
const equalsButton = document.querySelector('.data-equals')
const deleteButton = document.querySelector('.delete')
const allClearButton = document.querySelector('.all-clear')
const previousOperandTextElement = document.querySelector('.prev')
const currentOperandTextElement = document.querySelector('.current')

const calculator = new Calculator(previousOperandTextElement,currentOperandTextElement)

numberButtons.forEach(button => {
    button.addEventListener('click',() => {
        calculator.appendNumber(button.innerText)
        calculator.updateDisplay()
    })
})

// numberButtons.forEach(button => {

//     button.addEventListener('click',() =>{
//         console.log('hello')
//     })
// })