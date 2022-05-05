'use strict'

import { animate } from "./helpers"

const calc = (price = 100) => {
    const calcBlock = document.querySelector('.calc-block')
    const calcItems = document.querySelectorAll('.calc-item')
    const calcType = document.querySelector('.calc-type')
    const calcSquare = document.querySelector('.calc-square')
    const calcCount = document.querySelector('.calc-count')
    const calcDay = document.querySelector('.calc-day')
    const total = document.getElementById('total')

    const countCalc = () => {
        const calcTypeValue = +calcType.options[calcType.selectedIndex].value
        const calcSquareValue = calcSquare.value

        let totalValue = 0
        let calcCountValue = 1
        let calcDayValue = 1

        if (calcCount.value > 1) {
            calcCountValue += +calcCount.value / 10
        }

        if (calcDay.value && calcDay.value < 5) {
            calcDayValue = 2
        } else if (calcDay.value && calcDay.value < 10) {
            calcDayValue = 1.5
        }

        if (calcTypeValue && calcSquareValue) {
            totalValue = Math.ceil(price * calcTypeValue * calcSquareValue * calcCountValue * calcDayValue)
        } else {
            totalValue = 0
        }

        if (totalValue === 0) {
            total.textContent = totalValue
        } else {
            animate({
                duration: 400,
                timing(timeFraction) {
                    return timeFraction;
                },
                draw(progress) {
                    total.textContent = Math.floor(totalValue * progress)
                }
            });
        }
    }

    for (let i = 1; i < calcItems.length; i++) {
        calcItems[i].addEventListener('input', (event) => {
            event.target.value = event.target.value.replace(/\D+/, '')
        })
    }

    calcBlock.addEventListener('input', (e) => {
        if (e.target === calcType || (e.target === calcSquare && !(/\D+/.test(e.data))) ||
            (e.target === calcCount && !(/\D+/.test(e.data))) || (e.target === calcDay && !(/\D+/.test(e.data)))) {
            countCalc()
        }
    })

}

export default calc