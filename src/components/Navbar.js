export function Navbar() {

    return `

        <nav
            id="navbar-main"
            aria-label="Navigation principale"
        >

            <div id="navbar-container">


                <!-- =====================================
                     LOGO
                ====================================== -->

                <a
                    href="#hero"
                    class="navbar-logo"
                    aria-label="Retour à l'accueil"
                >
                    RAZANAKA.
                </a>


                <!-- =====================================
                     LINKS
                ====================================== -->

                <div id="navbar-links">

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
                        href="#contact"
                        class="navbar-link"
                    >
                        Contact
                    </a>

                </div>


                <!-- =====================================
                     CV
                ====================================== -->

                <a
                    href="/cv/CV_Prosper.pdf"
                    download
                    class="navbar-cv"
                >
                    Mon CV
                </a>

            </div>

        </nav>

    `
}