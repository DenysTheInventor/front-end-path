const CALC_INPUT = document.querySelector('.calc-app__input')
const CALC_AREA = document.querySelector('.calc-app')
const BODY = document.querySelector('body')

const signs = ['/', '*', '+', '-', '.']

const getInputValue = () => {
    return CALC_INPUT.innerText
}

const checkLastSign = () => {
    const inputValue = getInputValue()
    return isNaN(inputValue[inputValue.length-1])
}

const checkValueIsSign = (value) => {
    return signs.find(i => i === value)
}

const setInputValue = (value) => {
    if (CALC_INPUT.innerText === '0') {
        CALC_INPUT.innerText = ''
    }

    if (checkLastSign() && checkValueIsSign(value)) {
        console.log('Wrong operation')
    }
    else {
        CALC_INPUT.innerText += value
    }
}

const resetInputValue = () => {
    CALC_INPUT.innerText = 0
}

const countResult = () => {
    CALC_INPUT.innerText = eval(CALC_INPUT.innerText)
}

CALC_AREA.addEventListener('click', (event) => {
    const { target } = event

    if (target.dataset.value) {
        const pressedBTN = target.dataset.value

        if (pressedBTN === '=') {
            countResult()
            return
        }

        if (pressedBTN === 'reset' || pressedBTN === 'C') {
            resetInputValue()
            return
        }

        setInputValue(pressedBTN)
    }
})

BODY.addEventListener('keydown', (event) => {
    const { target } = event

    if (event.key = 'Enter') {
        countResult()
    }
})


