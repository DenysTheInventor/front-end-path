import { getTodayDateFormat } from "./utils"

export default class App {
    #donateFORM
    #donateInput
    #donateContainer
    #totalAmount

    constructor() {
        this.#donateFORM = document.querySelector('.donate-form')
        this.#donateContainer = document.querySelector('.donates-container__donates')
        this.#totalAmount = document.querySelector('#total-amount')
        this.#donateInput = document.querySelector('.donate-form__donate-input')
    }

    #updateTotal() {
        const allDonations = document.querySelectorAll('.donate-item__amount')
        const donateAmounts = [...allDonations]

        this.#totalAmount.innerHTML = donateAmounts.reduce((acc, i) => acc += Number(i.innerText), 0) + '$' 
    }

    #getValues() {
        let donateAmount = this.#donateInput.value
        this.#donateInput.value = ''

        const currentDate = getTodayDateFormat(new Date())

        return {
            'amount' : donateAmount,
            'time' : currentDate
        }
    }

    #addValue(donation) {
        const newDonate = document.createElement('div')
              newDonate.className = 'donate-item'
              newDonate.innerHTML = `
              ${donation.time} - <b><span class="donate-item__amount">${donation.amount}</span>$</b>
              `
        return newDonate
    }

    render() {
        this.#donateFORM.addEventListener('submit', (e) => {
            e.preventDefault()

            const newDonation = this.#getValues()
            this.#donateContainer.append(this.#addValue(newDonation))
            this.#updateTotal()
        })
    }
}