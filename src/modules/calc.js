'use strict'

const calc = () => {
    const calcItems = document.querySelectorAll('.calc-item')
    for (let i = 1; i < calcItems.length; i++) {
        calcItems[i].addEventListener('input', (event) => {
            event.target.value = event.target.value.replace(/\D+/, '')
        })
    }
}

export default calc