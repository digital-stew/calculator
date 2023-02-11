const buttons = document.querySelectorAll('button')
const screen1 = document.querySelector('.screen-1')
const screen2 = document.querySelector('.screen-2')
const operator = document.querySelector('.operator')

buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
        update(e.target.dataset.value)
    })
})

function calculate() {

    if (screen1.innerText === '') return

    const numberA = parseFloat(screen1.innerText)
    const numberB = parseFloat(screen2.innerText)

    const selectedOperator = operator.innerText
    switch (selectedOperator) {
        case '+':
            screen1.innerText = numberA + numberB
            screen2.innerText = ''
            operator.innerText = ''
            break;
        case '-':
            screen1.innerText = numberB - numberA
            screen2.innerText = ''
            operator.innerText = ''
            break;
        case '*':
            screen1.innerText = numberA * numberB
            screen2.innerText = ''
            operator.innerText = ''
            break;
        case '/':
            screen1.innerText = numberB / numberA
            screen2.innerText = ''
            operator.innerText = ''
            break;
        default:
            break;
    }
    return selectedOperator
}

function update(number) {

    if (parseInt(number) || number === '0') {
        return screen1.innerText += number
    }

    switch (number) {
        case 'divide':
            operator.innerText = '/'
            break;
        case 'multiply':
            operator.innerText = '*'
            break;
        case 'plus':
            operator.innerText = '+'
            break;
        case 'minus':
            operator.innerText = '-'
            break;
        case 'cancel':
            screen1.innerText = ''
            break;
        case 'equals':
            calculate()
            return
            break;
        case 'del':
            const currentText = screen1.innerText
            screen1.innerText = currentText.substring(0, currentText.length - 1)
            return
            break;
        case 'point':
            screen1.innerText += '.'
            break;
        default:
            break;
    }

    if (screen2.innerText === '') {
        screen2.innerText = screen1.innerText
        screen1.innerText = ''
    } else {
        const selectedOperator = calculate()
        screen2.innerText = screen1.innerText
        operator.innerText = selectedOperator
        screen1.innerText = ''

    }


}