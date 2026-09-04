export function Navbar() {

    return `

        <nav
            id="navbar-main"
            class="
                fixed
                top-0
                left-1/2
                -translate-x-1/2
                z-50
                w-full
                max-w-5xl
                px-4
                pt-4
            "
        >

            <div
                id="navbar-container"
                class="
                    flex
                    items-center
                    justify-between
                    gap-6
                    px-6
                    py-3
                    rounded-full
                    bg-white/80
                    backdrop-blur-xl
                    border
                    border-black/10
                    shadow-xl
                    transition-all
                    duration-500
                "
            >

                <!-- =====================================
                     LOGO
                ====================================== -->

                <a
                    href="#hero"
                    class="
                        navbar-logo
                        text-black
                        font-black
                        tracking-tight
                        whitespace-nowrap
                    "
                >
                    RAZANAKA
                </a>


                <!-- =====================================
                     DESKTOP NAVIGATION
                ====================================== -->

                <div
                    id="navbar-links"
                    class="
                        flex
                        items-center
                        gap-2
                    "
                >

                    <a
                        href="#hero"
                        class="navbar-link"
                    >
                        Accueil
                    </a>


                    <a
                        href="#about"
                        class="navbar-link"
                    >
                        À propos
                    </a>


                    <a
                        href="#skills"
                        class="navbar-link"
                    >
                        Compétences
                    </a>


                    <a
                        href="#projects"
                        class="navbar-link"
                    >
                        Projets
                    </a>


                    <a
                        href="#roadmap"
                        class="navbar-link"
                    >
                        Roadmap
                    </a>


                    <a
                        href="#contact"
                        class="navbar-link"
                    >
                        Contact
                    </a>

                </div>


                <!-- =====================================
                     CV DESKTOP
                ====================================== -->

                <a
                    href="public/cv/CV_Prosper.pdf"
                    download
                    class="navbar-cv"
                >
                    Mon CV
                </a>


                <!-- =====================================
                     MOBILE MENU BUTTON
                ====================================== -->

                <button
                    id="mobile-menu-button"
                    type="button"
                    aria-label="Ouvrir le menu"
                    aria-expanded="false"
                >

                    <span></span>
                    <span></span>
                    <span></span>

                </button>

            </div>


            <!-- =====================================
                 MOBILE MENU
            ====================================== -->

            <div
                id="mobile-menu"
                aria-hidden="true"
            >

                <div class="mobile-menu-content">

                    <a
                        href="#hero"
                        class="mobile-nav-link"
                    >
                        Accueil
                    </a>


                    <a
                        href="#about"
                        class="mobile-nav-link"
                    >
                        À propos
                    </a>


                    <a
                        href="#skills"
                        class="mobile-nav-link"
                    >
                        Compétences
                    </a>


                    <a
                        href="#projects"
                        class="mobile-nav-link"
                    >
                        Projets
                    </a>


                    <a
                        href="#roadmap"
                        class="mobile-nav-link"
                    >
                        Roadmap
                    </a>


                    <a
                        href="#contact"
                        class="mobile-nav-link"
                    >
                        Contact
                    </a>


                    <div class="mobile-menu-divider"></div>


                    <a
                        href="/cv/CV_Prosper.pdf"
                        download="CV_Prosper.pdf"
                        class="mobile-cv-link"
                    >
                        Télécharger mon CV
                    </a>
                </div>

            </div>

        </nav>

    `
}


/* =====================================================
   MOBILE MENU
===================================================== */

export function initNavbar() {

    const button =
        document.querySelector(
            '#mobile-menu-button'
        )

    const menu =
        document.querySelector(
            '#mobile-menu'
        )


    if (!button || !menu) return


    const links =
        menu.querySelectorAll(
            '.mobile-nav-link, .mobile-cv-link'
        )


    button.addEventListener(
        'click',
        () => {

            const isOpen =
                button.getAttribute(
                    'aria-expanded'
                ) === 'true'


            button.setAttribute(
                'aria-expanded',
                String(!isOpen)
            )


            button.classList.toggle(
                'menu-open',
                !isOpen
            )


            menu.classList.toggle(
                'mobile-menu-open',
                !isOpen
            )


            menu.setAttribute(
                'aria-hidden',
                String(isOpen)
            )

        }
    )


    links.forEach(
        link => {

            link.addEventListener(
                'click',
                () => {

                    button.setAttribute(
                        'aria-expanded',
                        'false'
                    )


                    button.classList.remove(
                        'menu-open'
                    )


                    menu.classList.remove(
                        'mobile-menu-open'
                    )


                    menu.setAttribute(
                        'aria-hidden',
                        'true'
                    )

                }
            )

        }
    )

}