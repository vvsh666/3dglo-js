'use strict'

import { animate } from "./helpers"

const modal = () => {
    const buttons = document.querySelectorAll('.popup-btn')
    const modal = document.querySelector('.popup')
    const modalContent = modal.querySelector('.popup-content')

    modalContent.style.left = '50%'
    modalContent.style.transform = 'translateX(-50%)'

    buttons.forEach(btn => {
        btn.addEventListener('click', () => {
            if (document.documentElement.clientWidth >= 768) {

                modal.style.opacity = 0
                modal.style.display = 'block'

                animate({
                    duration: 500,
                    timing(timeFraction) {
                        return timeFraction;
                    },
                    draw(progress) {
                        modal.style.opacity = progress
                    }
                })
            } else {
                modal.style.display = 'block'
            }

        })
    })

    modal.addEventListener('click', (e) => {
        if (!e.target.closest('.popup-content') || e.target.classList.contains('popup-close')) {
            modal.style.display = 'none'
        }
    })
}

export default modal