const CALC_INPUT = document.querySelector('.calc-app__input')
const CALC_AREA = document.querySelector('.calc-app')

const getInputValue = () => {
    return CALC_INPUT.value
}

const setInputValue = (value) => {
    if (CALC_INPUT.value === '0') {
        CALC_INPUT.value = ''
    }

    CALC_INPUT.value += value
}

const reserInputValue = () => {
    CALC_INPUT.value = 0
}

const countResult = () => {
    CALC_INPUT.value = eval(CALC_INPUT.value)
}

CALC_AREA.addEventListener('click', (event) => {
    const { target } = event

    if (target.dataset.value) {
        const pressedBTN = target.dataset.value

        if (pressedBTN === '=') {
            countResult()
            return
        }

        if (pressedBTN === 'reset') {
            reserInputValue()
            return
        }

        setInputValue(pressedBTN)
    }
})


