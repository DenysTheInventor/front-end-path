import { getRandomColor } from './utils'

export default function initApp() {
    const changeBTN = document.createElement('button')
          changeBTN.className = 'button'
          changeBTN.innerText = 'Change page color'

    document.body.append(changeBTN)

    changeBTN.addEventListener('click', () => {
        document.body.style.background = getRandomColor()
    })
}