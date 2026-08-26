export function initAboutAnimation() {

    const header = document.querySelector('.about-header')
    const photo = document.querySelector('.about-photo')
    const content = document.querySelector('.about-content')

    if (!header || !photo || !content) {
        return
    }


    /*
    ========================================
    INITIAL STATE
    ========================================
    */

    header.style.opacity = '0'
    header.style.transform = 'translateY(30px)'


    photo.style.opacity = '0'
    photo.style.transform = 'translateX(-80px) rotate(-3deg)'


    content.style.opacity = '0'
    content.style.transform = 'translateX(80px)'


    /*
    ========================================
    ANIMATION
    ========================================
    */

    requestAnimationFrame(() => {

        /*
        Header
        */

        setTimeout(() => {

            header.style.transition =
                'opacity 0.8s ease, transform 0.8s cubic-bezier(0.22, 1, 0.36, 1)'

            header.style.opacity = '1'
            header.style.transform = 'translateY(0)'

        }, 150)


        /*
        Photo
        */

        setTimeout(() => {

            photo.style.transition =
                'opacity 1s ease, transform 1s cubic-bezier(0.22, 1, 0.36, 1)'

            photo.style.opacity = '1'
            photo.style.transform =
                'translateX(0) rotate(0deg)'

        }, 350)


        /*
        Professional presentation
        */

        setTimeout(() => {

            content.style.transition =
                'opacity 1s ease, transform 1s cubic-bezier(0.22, 1, 0.36, 1)'

            content.style.opacity = '1'
            content.style.transform =
                'translateX(0)'

        }, 550)

    })

}