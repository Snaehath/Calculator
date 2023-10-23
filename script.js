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
        this.curOperand = this.curOperand.toString().slice(0,-1)

    }

    appendNumber(number){
        if (number === '.' && this.curOperand.includes('.')) return
        this.curOperand = this.curOperand.toString() + number.toString()

    }

    chooseOperation(operation){
        if (this.operation === '') return
        if (this.operation !== '') {
            this.compute()
        }
        this.operation = operation
        this.prevOperand = this.curOperand
        this.curOperand = ''

    }

    compute(){
        let computation
        const prev = parseFloat(this.prevOperand)
        const curr = parseFloat(this.curOperand)
        if (isNaN(prev) && isNaN(curr)) return
        switch(this.operation) {
            case '+':
                computation = prev + curr
                break
            case '-':
                computation = prev - curr
                break
            case '*':
                computation = prev * curr
                break
            case '÷':
                computation = prev / curr
                break
            default:
                return
        }
        this.curOperand = computation
        this.operation = undefined
        this.prevOperand=''

    }

    updateDisplay(){
        this.currentOperandTextElement.innerText = this.curOperand
        if (this.operation != null){
            this.previousOperandTextElement.innerText = 
            `${this.prevOperand} ${this.operation}`

        }
        else{
            this.previousOperandTextElement.innerText =''
        }

    }
}


const numberButtons = document.querySelectorAll('.number')
const operationButtons = document.querySelectorAll('.operator')
const equalsButton = document.querySelector('[data-equals]')
const deleteButton = document.querySelector('.delete')
const allClearButton = document.querySelector('[all-clear]')
const previousOperandTextElement = document.querySelector('.prev')
const currentOperandTextElement = document.querySelector('.current')

const calculator = new Calculator(previousOperandTextElement,currentOperandTextElement)

numberButtons.forEach(button => {
    button.addEventListener('click',() => {
        calculator.appendNumber(button.innerText)
        calculator.updateDisplay()
    })
})

operationButtons.forEach(button => {
    button.addEventListener('click',() => {
        calculator.chooseOperation(button.innerText)
        calculator.updateDisplay()
    })
})

equalsButton.addEventListener('click', () =>{
    calculator.compute()
    calculator.updateDisplay()
})

allClearButton.addEventListener('click', () =>{
    calculator.clear()
    calculator.updateDisplay()
})

deleteButton.addEventListener('click', () =>{
    calculator.delete()
    calculator.updateDisplay()
})