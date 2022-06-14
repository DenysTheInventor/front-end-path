import "../index.css";
import JS_IMAGE from '../assets/js.png';

// node
// npm - node package manager

// rollup - сборщик js проектов

// dev dependencies - не идут в финальную сборку, только упрощают работу разрабочика
// флаги --save-dev и -D ставит пакет в dev dependencies
// dependencies - идут в финальную сборку


// Плагины:
// rollup/plugin-babel - конвертирует код для поддержке в старых браузерах
// rollup-plugin-styles 
// rollup-plugin-img

// 'rollup-plugin-serve';
// 'rollup-plugin-livereload';

console.log('Hello world!')

const jsImageHTML = document.createElement('img')
      jsImageHTML.classList.add('js-image', 'js-image__high')
      jsImageHTML.src = JS_IMAGE

document.body.append(jsImageHTML)