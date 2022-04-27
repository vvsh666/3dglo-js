'use strict'

const slider = (portfolioContent, portfolioItem, portfolioDots, portfolioBtn, portfolioItemActive = 'portfolio-item-active', dotActive = 'dot-active') => {

    const sliderBlock = document.querySelector('.' + portfolioContent)
    const slides = sliderBlock.querySelectorAll('.' + portfolioItem)
    const dotsBlock = sliderBlock.querySelector('.' + portfolioDots)
    const timeInterval = 2000

    let dots
    let currentSlide = 0
    let interval

    if (sliderBlock === null || slides.length === 0 || dotsBlock === null) {
        return
    }

    const createDots = () => {
        for (let i = 0; i < slides.length; i++) {
            let liDot = document.createElement('li')
            liDot.classList.add('dot')
            if (i === 0) {
                liDot.classList.add(dotActive)
            }
            dotsBlock.append(liDot)
        }
        dots = sliderBlock.querySelectorAll('.dot')
    }

    const prevSlide = (elems, index, strClass) => {
        elems[index].classList.remove(strClass)
    }

    const nextSlide = (elems, index, strClass) => {
        elems[index].classList.add(strClass)
    }

    const autoSlide = () => {
        prevSlide(slides, currentSlide, portfolioItemActive)
        prevSlide(dots, currentSlide, dotActive)
        currentSlide++

        if (currentSlide >= slides.length) {
            currentSlide = 0
        }
        nextSlide(slides, currentSlide, portfolioItemActive)
        nextSlide(dots, currentSlide, dotActive)
    }

    const startSlide = (time = 1500) => {
        interval = setInterval(autoSlide, time)
    }

    const stopSlide = () => {
        clearInterval(interval)
    }

    sliderBlock.addEventListener('click', (e) => {
        e.preventDefault()

        if (!e.target.matches(`.dot, .${portfolioBtn}`)) {
            return
        }

        prevSlide(slides, currentSlide, portfolioItemActive)
        prevSlide(dots, currentSlide, dotActive)

        if (e.target.matches('#arrow-right')) {
            currentSlide++
        } else if (e.target.matches('#arrow-left')) {
            currentSlide--
        } else if (e.target.classList.contains('dot')) {
            dots.forEach((dot, index) => {
                if (e.target === dot) {
                    currentSlide = index
                }
            })
        }
        if (currentSlide >= slides.length) {
            currentSlide = 0
        }
        if (currentSlide < 0) {
            currentSlide = slides.length - 1
        }

        nextSlide(slides, currentSlide, portfolioItemActive)
        nextSlide(dots, currentSlide, dotActive)
    })

    sliderBlock.addEventListener('mouseenter', (e) => {
        if (e.target.matches(`.dot, .${portfolioBtn}`)) {
            stopSlide()
        }
    }, true)

    sliderBlock.addEventListener('mouseleave', (e) => {
        if (e.target.matches(`.dot, .${portfolioBtn}`)) {
            startSlide(timeInterval)
        }
    }, true)

    createDots()
    startSlide(timeInterval)

}

export default slider