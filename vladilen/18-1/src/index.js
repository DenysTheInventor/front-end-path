import "../index.css";
import phpLogo from '../assets/php.png'

const heading = document.createElement('h1')
      heading.innerText = 'Добавил заголовок и вырвиглаз стили'

const phpImage = new Image()
      phpImage.src = phpLogo

document.body.append(heading, phpImage)