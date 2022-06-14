
(function(l, r) { if (!l || l.getElementById('livereloadscript')) return; r = l.createElement('script'); r.async = 1; r.src = '//' + (self.location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1'; r.id = 'livereloadscript'; l.getElementsByTagName('head')[0].appendChild(r) })(self.document);
'use strict';

var e = [],
    t = [];

function n(n, r) {
  if (n && "undefined" != typeof document) {
    var a,
        s = !0 === r.prepend ? "prepend" : "append",
        d = !0 === r.singleTag,
        i = "string" == typeof r.container ? document.querySelector(r.container) : document.getElementsByTagName("head")[0];

    if (d) {
      var u = e.indexOf(i);
      -1 === u && (u = e.push(i) - 1, t[u] = {}), a = t[u] && t[u][s] ? t[u][s] : t[u][s] = c();
    } else a = c();

    65279 === n.charCodeAt(0) && (n = n.substring(1)), a.styleSheet ? a.styleSheet.cssText += n : a.appendChild(document.createTextNode(n));
  }

  function c() {
    var e = document.createElement("style");
    if (e.setAttribute("type", "text/css"), r.attributes) for (var t = Object.keys(r.attributes), n = 0; n < t.length; n++) e.setAttribute(t[n], r.attributes[t[n]]);
    var a = "prepend" === s ? "afterbegin" : "beforeend";
    return i.insertAdjacentElement(a, e), e;
  }
}

var css = "* {\r\n    margin: 0;\r\n    padding: 0;\r\n    box-sizing: border-box;\r\n}\r\n\r\nbody {\r\n    background: rgb(0, 0, 0);\r\n    color: #fff;\r\n}\r\n\r\n.js-image {\r\n    width: 300px;\r\n    height: 200px;\r\n}";
n(css,{});

var JS_IMAGE = "data:image/png;base64,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";

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

console.log('Hello world!');
const jsImageHTML = document.createElement('img');
jsImageHTML.classList.add('js-image', 'js-image__high');
jsImageHTML.src = JS_IMAGE;
document.body.append(jsImageHTML);
