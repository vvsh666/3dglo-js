const menu = () => {
    const menu = document.querySelector('menu')
    const scrollUp = document.querySelector('main>a[href="#service-block"]')

    const handleMenu = () => {
        menu.classList.toggle('active-menu')
    }

    const scrollSmoothToAnchor = (link, event) => {
        event.preventDefault()
        let element = document.getElementById(link.getAttribute('href').substring(1))
        element.scrollIntoView({ behavior: 'smooth' })
    }

    document.addEventListener('click', (e) => {

        if (!e.target.closest('menu') && menu.classList.contains('active-menu')) {
            handleMenu()
        }
        if (e.target.closest('.menu')) {
            handleMenu()
        }
        if (e.target.classList.contains('close-btn')) {
            e.preventDefault()
            handleMenu()
        }
        if (e.target.matches('ul>li>a')) {
            scrollSmoothToAnchor(e.target, e)
            handleMenu()
        }
        if (e.target.closest('main>a[href="#service-block"]')) {
            scrollSmoothToAnchor(e.target.closest('main>a[href="#service-block"]'), e)
        }
    })
}

export default menu