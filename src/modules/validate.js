'use strict'

const validate = () => {
    const userNameInputs = document.querySelectorAll('input[name=user_name]')
    const userPhoneInputs = document.querySelectorAll('input[name=user_phone]')
    const userEmailInputs = document.querySelectorAll('input[name=user_email]')
    const userMessageInput = document.querySelector('input[name=user_message]')


    userNameInputs.forEach((input) => {
        input.addEventListener('input', (e) => {
            e.target.value = e.target.value.replace(/[^А-Яа-яё -]+/, '')
        })
    })
    userPhoneInputs.forEach((input) => {
        input.addEventListener('input', (e) => {
            e.target.value = e.target.value.replace(/[^0-9\(\)-]+/, '')
        })
    })
    userEmailInputs.forEach((input) => {
        input.addEventListener('input', (e) => {
            e.target.value = e.target.value.replace(/[^\w@\-\_\.\!\~\*\']+|\^\\/, '')
        })
    })
    userMessageInput.addEventListener('input', (e) => {
        e.target.value = e.target.value.replace(/[^А-Яа-яё -]+/, '')
    })
}

export default validate