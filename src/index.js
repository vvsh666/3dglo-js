import timer from './modules/timer'
import menu from './modules/menu'
import modal from './modules/modal'
import calc from './modules/calc'
import validate from './modules/validate'
import tabs from './modules/tabs'
import slider from './modules/slider'
import sendForm from './modules/sendForm'

timer('25 april 2022')
menu()
modal()
calc(100)
validate()
tabs()
slider('portfolio-content', 'portfolio-item', 'portfolio-dots', 'portfolio-btn')
sendForm({
    idForm: 'form1', someElem: [
        {
            type: 'block',
            id: 'total'
        }
    ]
})
sendForm({
    idForm: 'form2', someElem: [
        {
            type: 'block',
            id: 'total'
        }
    ]
})
sendForm({
    idForm: 'form3', someElem: [
        {
            type: 'block',
            id: 'total'
        }
    ]
})
