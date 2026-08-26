export function About() {

    return `

        <section
            id="about"
            class="page-section about-section"
        >

            <div class="section-inner">


                <!-- =====================================
                     HEADER
                ====================================== -->

                <div class="section-heading about-heading">

                    <span class="section-label">
                        01 / À PROPOS
                    </span>

                    <h2 class="section-title">
                        Derrière<br>
                        le code.
                    </h2>

                </div>


                <!-- =====================================
                     ABOUT GRID
                ====================================== -->

                <div class="about-grid">


                    <!-- IMAGE -->

                    <div class="about-image-container">

                        <div class="about-image-backdrop"></div>

                        <img
                            src="/images/prosper.jpeg"
                            alt="RAZANAKA Prosper Andriniaina Félix"
                            class="about-image"
                        >

                    </div>


                    <!-- CONTENT -->

                    <div class="about-content">


                        <div class="typewriter-container">

                            <span class="typewriter-prefix">
                                Je suis
                            </span>

                            <span
                                id="typewriter"
                                class="typewriter"
                            ></span>

                            <span
                                class="typewriter-cursor"
                            ></span>

                        </div>


                        <!-- PROFESSIONAL PRESENTATION -->

                        <div class="professional-card">

                            <span class="professional-label">
                                PRÉSENTATION
                            </span>


                            <h3>
                                Construire.
                                Comprendre.
                                Évoluer.
                            </h3>


                            <p>
                                Je suis étudiant en informatique
                                spécialisé en génie logiciel,
                                avec un intérêt particulier pour
                                le développement d'applications
                                web et la conception de solutions
                                numériques.
                            </p>


                            <p>
                                Mon parcours m'a permis de travailler
                                aussi bien sur le frontend que sur
                                le backend, les bases de données et
                                l'architecture des applications.
                            </p>


                            <p>
                                J'aime partir d'un problème concret,
                                réfléchir à une solution propre,
                                puis transformer cette idée en
                                application fonctionnelle.
                            </p>


                            <div class="about-tags">

                                <span>
                                    Web Development
                                </span>

                                <span>
                                    Backend
                                </span>

                                <span>
                                    Databases
                                </span>

                                <span>
                                    Software Engineering
                                </span>

                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </section>

    `
}