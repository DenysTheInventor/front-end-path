export function createTerms() {
    const termArea = document.createElement('div')
          termArea.className = 'cookie-consent'
          termArea.insertAdjacentHTML('afterbegin', `
            <p class="cookie-consent__text">
                Мы используем файлы cookie для наилучшего представления нашего сайта
            </p>
            <button class="cookie-consent__button">Прекрасно</button>
          `)
    return termArea
}