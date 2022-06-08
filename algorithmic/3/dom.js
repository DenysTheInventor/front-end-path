const clickBTN = document.querySelector('.click')
const paragraph = document.querySelector('.test')

clickBTN.addEventListener('click', setElement)

function exponentNum() {
    paragraph.innerHTML = Number(paragraph.innerHTML)**2
}

function setElement() {
    paragraph.style.width = '100px'
    paragraph.style.height = '100px'
    paragraph.style.backgroundColor = 'red'
}