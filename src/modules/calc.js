'use strict'

const calc = (price = 100) => {
    const calcBlock = document.querySelector('.calc-block')
    const calcItems = document.querySelectorAll('.calc-item')
    const calcType = document.querySelector('.calc-type')
    const calcSquare = document.querySelector('.calc-square')
    const calcCount = document.querySelector('.calc-count')
    const calcDay = document.querySelector('.calc-day')
    const total = document.getElementById('total')

    const totalAnimate = (totalValue) => {
        let count = 0
        let interval
        let step = Math.ceil(totalValue / 50)

        const animate = () => {
            count += step
            interval = requestAnimationFrame(animate)

            if (count >= totalValue) {
                cancelAnimationFrame(interval)
                count = totalValue
            }
            total.textContent = count
        }
        animate()
    }

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
            totalAnimate(totalValue)
        }
    }

    for (let i = 1; i < calcItems.length; i++) {
        calcItems[i].addEventListener('input', (event) => {
            event.target.value = event.target.value.replace(/\D+/, '')
        })
    }

    calcBlock.addEventListener('input', (e) => {
        if (e.target === calcType || e.target === calcSquare ||
            e.target === calcCount || e.target === calcDay) {
            countCalc()
        }
    })

}

export default calc