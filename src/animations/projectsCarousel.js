/*
========================================================
CARROUSEL DES PROJETS — UNE SEULE LIGNE
--------------------------------------------------------
Les cartes sont alignées horizontalement (scroll-snap).
Les boutons ‹ › font défiler d'une carte à la fois, sur
ordinateur comme sur téléphone. Le glissement au doigt
fonctionne aussi sur mobile.
========================================================
*/

export function initProjectsCarousel() {

    const track =
        document.querySelector('#projects-track')

    const previousButton =
        document.querySelector('#projects-prev')

    const nextButton =
        document.querySelector('#projects-next')

    const dotsContainer =
        document.querySelector('#projects-dots')


    if (
        !track ||
        !previousButton ||
        !nextButton ||
        !dotsContainer
    ) {
        return
    }


    const cards =
        Array.from(
            track.querySelectorAll('.project-card')
        )

    if (!cards.length) {
        return
    }


    /* ------------------------------------------------
       MESURES
    ------------------------------------------------ */

    function getStep() {

        if (cards.length < 2) {
            return cards[0].offsetWidth
        }

        return (
            cards[1].offsetLeft -
            cards[0].offsetLeft
        )

    }


    function getMaxIndex() {

        const maxScroll =
            track.scrollWidth -
            track.clientWidth

        const step =
            getStep()

        if (maxScroll <= 1 || !step) {
            return 0
        }

        return Math.ceil(
            (maxScroll - 1) / step
        )

    }


    function getCurrentIndex() {

        const step =
            getStep()

        if (!step) {
            return 0
        }

        const maxScroll =
            track.scrollWidth -
            track.clientWidth

        /* Tout au bout : dernier point actif */
        if (track.scrollLeft >= maxScroll - 2) {
            return getMaxIndex()
        }

        return Math.min(
            getMaxIndex(),
            Math.round(
                track.scrollLeft / step
            )
        )

    }


    /* ------------------------------------------------
       POINTS DE NAVIGATION
    ------------------------------------------------ */

    let dots = []

    function buildDots() {

        const total =
            getMaxIndex() + 1

        if (dots.length === total) {
            return
        }

        dotsContainer.innerHTML = ''

        dots =
            Array.from(
                { length: total },
                (_, index) => {

                    const dot =
                        document.createElement('button')

                    dot.type = 'button'
                    dot.className = 'projects-dot'

                    dot.setAttribute(
                        'tabindex',
                        '-1'
                    )

                    dot.addEventListener(
                        'click',
                        () => goTo(index)
                    )

                    dotsContainer.appendChild(dot)

                    return dot

                }
            )

        /* Un seul point = rien à faire défiler */
        dotsContainer.style.visibility =
            total > 1
                ? 'visible'
                : 'hidden'

    }


    function updateState() {

        const index =
            getCurrentIndex()

        const maxIndex =
            getMaxIndex()

        previousButton.disabled =
            index <= 0

        nextButton.disabled =
            index >= maxIndex

        dots.forEach(
            (dot, dotIndex) => {

                dot.classList.toggle(
                    'is-active',
                    dotIndex === index
                )

            }
        )

    }


    /* ------------------------------------------------
       NAVIGATION
    ------------------------------------------------ */

    function goTo(index) {

        const target =
            Math.max(
                0,
                Math.min(index, getMaxIndex())
            )

        track.scrollTo({
            left: target * getStep(),
            behavior: 'smooth'
        })

    }


    function move(direction) {

        goTo(
            getCurrentIndex() + direction
        )

    }


    nextButton.addEventListener(
        'click',
        () => move(1)
    )

    previousButton.addEventListener(
        'click',
        () => move(-1)
    )


    track.addEventListener(
        'keydown',
        event => {

            if (event.key === 'ArrowRight') {
                event.preventDefault()
                move(1)
            }

            if (event.key === 'ArrowLeft') {
                event.preventDefault()
                move(-1)
            }

        }
    )


    /* ------------------------------------------------
       ÉVÉNEMENTS
    ------------------------------------------------ */

    let ticking = false

    track.addEventListener(
        'scroll',
        () => {

            if (ticking) {
                return
            }

            ticking = true

            requestAnimationFrame(() => {
                updateState()
                ticking = false
            })

        },
        { passive: true }
    )


    let resizeTimer

    window.addEventListener(
        'resize',
        () => {

            clearTimeout(resizeTimer)

            resizeTimer =
                setTimeout(() => {
                    buildDots()
                    updateState()
                }, 120)

        }
    )


    /* ------------------------------------------------
       INITIALISATION
    ------------------------------------------------ */

    buildDots()
    updateState()

    /* Les images chargent après coup : on recalcule. */
    window.addEventListener(
        'load',
        () => {
            buildDots()
            updateState()
        }
    )

}
