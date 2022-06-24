import { createTerms } from './utils'

export default function initApp() {
    console.log(localStorage.getItem('term'))
    if (localStorage.getItem('term') != 'ok') {
        document.body.append(createTerms())

        const cookieBTN = document.querySelector('.cookie-consent__button')
            cookieBTN.addEventListener('click', () => {
            cookieBTN.closest('.cookie-consent').remove()
        localStorage.setItem('term', 'ok')
    })
    }
    else {
        console.log("You already pressed button 'Прекрасно'!")
    }
}