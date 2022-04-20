const menu = () => {
    const menuBtn = document.querySelector('.menu')
    const menu = document.querySelector('menu')
    const closeBtn = menu.querySelector('.close-btn')
    const menuLinks = menu.querySelectorAll('ul>li>a')
    const scrollUp = document.querySelector('main>a[href="#service-block"]')

    const handleMenu = () => {
        menu.classList.toggle('active-menu')
    }

    const scrollSmoothToAnchor = (link, event) => {
        event.preventDefault()
        let element = document.getElementById(link.getAttribute('href').substring(1))
        element.scrollIntoView({behavior: 'smooth'})
    }

    menuBtn.addEventListener('click', handleMenu)

    closeBtn.addEventListener('click', handleMenu)

    menuLinks.forEach(menuLink => {        
        menuLink.addEventListener('click', (event) => {
            scrollSmoothToAnchor(menuLink, event)
            handleMenu()
        })        
    })

    scrollUp.addEventListener('click', (e) => {
        scrollSmoothToAnchor(scrollUp, e)
    })


}

export default menu