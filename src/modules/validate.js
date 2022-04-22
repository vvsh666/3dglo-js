'use strict'

const validate = () => {
    const userNameInputs = document.querySelectorAll('input[name=user_name]')
    const userPhoneInputs = document.querySelectorAll('input[name=user_phone]')
    const userEmailInputs = document.querySelectorAll('input[name=user_email]')
    const userMessageInput = document.querySelector('input[name=user_message]')

    const delSpaceHyphen = (e) => {
        e.target.value = e.target.value.replace(/\s{2,}/g, ' ')
        e.target.value = e.target.value.replace(/-{2,}/g, '-')
        e.target.value = e.target.value.replace(/^[\s-]+|[\s-]+$/g, '')
    }

    const changeLetters = (e) => {
        if (e.target.value != '') {
            const arr = e.target.value.split(' ')
            let resArr = arr.map(item => {
                return item = item[0].toUpperCase() + item.slice(1).toLowerCase()
            })
            e.target.value = resArr.join(' ')
        }
    }


    userNameInputs.forEach((input) => {
        input.addEventListener('input', (e) => {
            e.target.value = e.target.value.replace(/[^А-Яа-яё -]+/, '')
        })
        input.addEventListener('blur', (e) => {
            delSpaceHyphen(e)
            changeLetters(e)
        })
    })
    userPhoneInputs.forEach((input) => {
        input.addEventListener('input', (e) => {
            e.target.value = e.target.value.replace(/[^0-9\(\)-]+/, '')
        })
        input.addEventListener('blur', (e) => {
            delSpaceHyphen(e)
        })
    })
    userEmailInputs.forEach((input) => {
        input.addEventListener('input', (e) => {
            e.target.value = e.target.value.replace(/[^\w@\-\_\.\!\~\*\']+|\^\\/, '')
        })
        input.addEventListener('blur', (e) => {
            delSpaceHyphen(e)
        })
    })
    userMessageInput.addEventListener('input', (e) => {
        e.target.value = e.target.value.replace(/[^А-Яа-яё -]+/, '')
    })
    userMessageInput.addEventListener('blur', (e) => {
        delSpaceHyphen(e)
        changeLetters(e)
    })

}

export default validate