const modal = () => {
    const buttons = document.querySelectorAll('.popup-btn')
    const modal = document.querySelector('.popup')

    buttons.forEach(btn => {
        btn.addEventListener('click', () => {
            if (document.documentElement.clientWidth >= 768) {
                let idAnimation
                let count = 0
                modal.style.opacity = 0
                modal.style.display = 'block'
                const modalAnimation = () => {
                    count++
                    idAnimation = requestAnimationFrame(modalAnimation)
                    if (count <= 50) {
                        modal.style.opacity = count * 0.02
                    } else {
                        cancelAnimationFrame(idAnimation)
                    }

                }
                modalAnimation()
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