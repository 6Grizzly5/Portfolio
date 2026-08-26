export function Hero() {

    return `

        <section
            id="hero"
            class="page-section hero-section"
        >

            <div class="section-inner hero-inner">


                <!-- =====================================
                     HERO CONTENT
                ====================================== -->

                <div class="hero-content">

                    <span class="hero-label">
                        PORTFOLIO · 2026
                    </span>


                    <h1 class="hero-title">

                        RAZANAKA

                        <span>
                            Prosper Andriniaina Félix
                        </span>

                    </h1>


                    <div class="hero-role">

                        <span>
                            Développeur
                        </span>

                        <strong>
                            Full-Stack
                        </strong>

                    </div>


                    <p class="hero-description">

                        Je conçois des applications web,
                        des systèmes backend et des interfaces
                        modernes en transformant des idées
                        en solutions concrètes.

                    </p>


                    <div class="hero-actions">

                        <a
                            href="#projects"
                            class="hero-button hero-button-dark"
                        >
                            Voir mes projets
                        </a>


                        <a
                            href="#contact"
                            class="hero-button hero-button-light"
                        >
                            Me contacter
                        </a>

                    </div>

                </div>


                <!-- =====================================
                     HERO IMAGE
                ====================================== -->

                <div class="hero-visual">

                    <div class="hero-image-wrapper">

                        <img
                            src="/images/prosper.jpeg"
                            alt="RAZANAKA Prosper Andriniaina Félix"
                            class="hero-image"
                        >

                    </div>


                    <div class="hero-floating-card">

                        <span>
                            Disponible pour
                        </span>

                        <strong>
                            Stage · Collaboration
                        </strong>

                    </div>

                </div>


            </div>


            <!-- =====================================
                 SCROLL INDICATOR
            ====================================== -->

            <a
                href="#about"
                class="hero-scroll"
                aria-label="Découvrir la suite"
            >

                <span>
                    Scroll
                </span>

                <span class="hero-scroll-line"></span>

            </a>

        </section>

    `
}