import { gsap } from 'gsap'


export function initNavbarAnimation() {

    const navbar =
        document.querySelector('#navbar-main')

    const container =
        document.querySelector('#navbar-container')

    if (!navbar || !container) {
        return
    }


    let lastScrollY = window.scrollY


    /*
    =================================================
    INITIAL ENTRY
    =================================================
    */

    gsap.fromTo(
        navbar,

        {
            y: -80,
            opacity: 0
        },

        {
            y: 0,
            opacity: 1,

            duration: 1,

            ease: 'power3.out',

            delay: 0.2
        }
    )


    /*
    =================================================
    SCROLL
    =================================================
    */

    function handleScroll() {

        const currentScrollY =
            window.scrollY


        if (currentScrollY > 80) {

            navbar.classList.add(
                'navbar-scrolled'
            )

        } else {

            navbar.classList.remove(
                'navbar-scrolled'
            )

        }


        lastScrollY =
            currentScrollY
    }


    window.addEventListener(
        'scroll',
        handleScroll,
        {
            passive: true
        }
    )


    /*
    =================================================
    HOVER MICRO-ANIMATION
    =================================================
    */

    container.addEventListener(
        'mouseenter',
        () => {

            gsap.to(
                container,

                {
                    y: -2,

                    duration: 0.35,

                    ease: 'power2.out'
                }
            )

        }
    )


    container.addEventListener(
        'mouseleave',
        () => {

            gsap.to(
                container,

                {
                    y: 0,

                    duration: 0.35,

                    ease: 'power2.out'
                }
            )

        }
    )

}