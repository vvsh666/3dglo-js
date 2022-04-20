const menu = () => {
    const menuBtn = document.querySelector('.menu')
    const menu = document.querySelector('menu')
    const closeBtn = menu.querySelector('.close-btn')
    const menuLinks = menu.querySelectorAll('ul>li>a')

    const handleMenu = () => {
        menu.classList.toggle('active-menu')
    }

    menuBtn.addEventListener('click', handleMenu)

    closeBtn.addEventListener('click', handleMenu)

    menuLinks.forEach(menuLink => menuLink.addEventListener('click', handleMenu))
}

export default menu