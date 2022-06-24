import '../index.css';
import bigIcon from '../assets/php.png';

console.log("Hello World!");

const heading = document.createElement('h1')
      heading.innerText = 'Добавил заголовок и вырвиглаз стили'

const phpImage = new Image()
      phpImage.src = bigIcon

document.body.append(heading, phpImage)