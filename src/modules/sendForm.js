'use strict'

const sendForm = ({ idForm, someElem = [] }) => {
    const form = document.getElementById(idForm)
    const statusBlock = document.createElement('div')
    const loadText = 'Загрузка...'
    const errorText = 'Ошибка...'
    const successText = 'Спасибо! Наш менеджер с вами свяжется!'

    const validate = (list) => {
        let success = true

        list.forEach((input) => {
            if (input.name === 'user_name') {
                if (/[^А-Яа-яё -]+/g.test(input.value)) {
                    success = false
                }
            }
            if (input.name === 'user_message') {
                if (/[^0-9А-Яа-яё -\.\,\:\?\!]+/g.test(input.value)) {
                    success = false
                }
            }
            if (input.name === 'user_phone') {
                if (/[^0-9\(\)\-\+]+/g.test(input.value)) {
                    success = false
                }
            }
        })

        return success
    }

    const sendData = (data) => {
        return fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => res.json())
    }

    const submitForm = () => {
        const formElements = form.querySelectorAll('input')
        const btn = form.querySelector('button')
        const formData = new FormData(form)
        const formBody = {}

        console.log(btn);

        statusBlock.style.color = '#fff'
        form.append(statusBlock)

        formData.forEach((val, key) => {
            formBody[key] = val
        })

        someElem.forEach((elem) => {
            const element = document.getElementById(elem.id)

            if (elem.type === 'block') {
                formBody[elem.id] = element.textContent
            } else if (elem.type === 'input') {
                formBody[elem.id] = element.value
            }
        })

        if (validate(formElements)) {
            statusBlock.innerHTML = '<img src="../src/images/preload.gif">'
            sendData(formBody).then(data => {
                statusBlock.textContent = successText

                formElements.forEach(element => {
                    element.value = ''
                })
            })
                .catch(error => {
                    statusBlock.textContent = errorText
                })
        } else {
            alert('Данные не валидны!!!')
        }
    }

    try {
        if (!form) {
            throw new Error('Верните на место форму, пожалуйста!')
        }

        form.addEventListener('submit', (e) => {
            e.preventDefault()

            submitForm()
        })
    } catch (error) {
        console.log(error.message);
    }

}

export default sendForm