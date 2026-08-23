export function initNavbarAnimation() {

    const navbar = document.querySelector('#navbar-main')

    if (!navbar) {
        return
    }


    let lastScrollY = window.scrollY


    function updateNavbar() {

        const currentScrollY = window.scrollY


        if (currentScrollY > 120) {

            navbar.classList.add('navbar-compact')

        } else {

            navbar.classList.remove('navbar-compact')

        }


        lastScrollY = currentScrollY

    }


    window.addEventListener(
        'scroll',
        updateNavbar,
        { passive: true }
    )


    updateNavbar()
}