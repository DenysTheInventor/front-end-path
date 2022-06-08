class CustomSelect {
    #currentSelectedOption
    #id
    #options
    #title
    #selectDropdown
    #dropdownList
    #dropdownBTN
    #dropdownSpan

    constructor(id, options = [], title='Выберите значение') {
        this.#id = id,
        this.#options = options,
        this.#title = title,
        this.#selectDropdown = document.createElement('div'),
        this.#dropdownList = document.createElement('div'),
        this.#dropdownBTN = document.createElement('button'),  
        this.#dropdownSpan = document.createElement('span') 
    }

    get selectedValue() {
        return this.#currentSelectedOption
    }

    #buildSelect() {
        this.#selectDropdown.classList.add(`select-dropdown`, `select-dropdown--${this.#id}`)
        this.#dropdownBTN.classList.add(`select-dropdown__button`, `select-dropdown__button--${this.#id}`)
        this.#dropdownSpan.classList.add(`select-dropdown`, `select-dropdown--${this.#id}`)
        this.#dropdownSpan.innerText = this.#title
        this.#dropdownBTN.append(this.#dropdownSpan)
        this.#dropdownList.classList.add(`select-dropdown__list`, `select-dropdown__list--${this.#id}`)
        this.#selectDropdown.append(this.#dropdownBTN, this.#dropdownList)

        this.#options.forEach(element => {
            this.#dropdownList.innerHTML += `
                <li class="select-dropdown__list-item" data-value="${element.value}">
                    ${element.text}
                </li>
            `
        })

        return this.#selectDropdown
    }

    #addEvent() {
        this.#dropdownBTN.addEventListener('click', () => {
            this.#dropdownList.classList.toggle('active')
        })
    }

    #handleClickedOption(ul) {
        ul.addEventListener('click', (e) => {
            const { target } = e
            if (target.dataset.value) {
                this.#currentSelectedOption = this.#options.find(o => o.value == target.dataset.value)
                target.classList.add('selected')
                this.#dropdownSpan.innerText = this.selectedValue.text
                ul.classList.toggle('active')
                target.classList.remove('selected')
            }
        })
    }

    render(container) {
        container.append(this.#buildSelect())

        this.#addEvent()
        this.#handleClickedOption(this.#dropdownList)
    }
}

const options = [
    { value: 1, text: "JavaScript" },
    { value: 2, text: "NodeJS" },
    { value: 3, text: "ReactJS" },
    { value: 4, text: "HTML" },
    { value: 5, text: "CSS" },
    { value: 6, text: "Docker" },
    { value: 7, text: "Git" }
]

const nameOptions = [
    { value: 1, text: "Den" },
    { value: 2, text: "Kseniia" },
    { value: 3, text: "Nastya" },
    { value: 4, text: "Sergey" },
    { value: 5, text: "Vlad" },
    { value: 6, text: "Sonya" },
    { value: 7, text: "Shamil'" }
]

const customSelect = new CustomSelect("123", options)
const mainContainer = document.querySelector("#container")
customSelect.render(mainContainer)

const nameSelect = new CustomSelect("345678", nameOptions, 'Select name')
nameSelect.render(mainContainer)