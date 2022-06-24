const ASIDE_MENU = document.querySelector('.left-section')

ASIDE_MENU.addEventListener('click', (event) => {
    event.preventDefault()
    const { target } = event

    if(target.classList.contains('menu-item__learning')) {
        const submenu = target.querySelector('.left-section__submenu')
        submenu.classList.toggle('menu-show')
    }
})