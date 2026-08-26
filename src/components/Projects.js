export function Projects() {

    return `

        <section
            id="projects"
            class="page-section projects-section"
        >

            <div class="section-inner">


                <div class="section-heading">

                    <span class="section-label">
                        03 / PROJETS
                    </span>

                    <h2 class="section-title">
                        Ce que j'ai<br>
                        construit.
                    </h2>

                </div>


                <div class="projects-track">


                    <!-- =================================
                         FILECONNECT
                    ================================== -->

                    <article class="project-card">

                        <div class="project-image">

                            <img
                                src="/images/fileconnect.png"
                                alt="FileConnect"
                            >

                            <span class="project-index">
                                01
                            </span>

                        </div>


                        <div class="project-content">

                            <span class="project-category">
                                WEB APPLICATION
                            </span>

                            <h3>
                                FileConnect
                            </h3>

                            <p>
                                Une solution numérique destinée
                                à améliorer la gestion des files
                                d'attente et l'organisation des
                                services.
                            </p>

                            <div class="project-tech">

                                <span>Flask</span>
                                <span>SQLAlchemy</span>
                                <span>PostgreSQL</span>

                            </div>

                            <a
                                href="https://github.com/6Grizzly5"
                                target="_blank"
                                rel="noopener noreferrer"
                                class="project-link"
                            >
                                Voir le projet ↗
                            </a>

                        </div>

                    </article>


                    <!-- =================================
                         TANTSAHACONNECT
                    ================================== -->

                    <article class="project-card">

                        <div class="project-image">

                            <img
                                src="/images/tantsahaconnect.png"
                                alt="TantsahaConnect"
                            >

                            <span class="project-index">
                                02
                            </span>

                        </div>


                        <div class="project-content">

                            <span class="project-category">
                                DIGITAL PLATFORM
                            </span>

                            <h3>
                                TantsahaConnect
                            </h3>

                            <p>
                                Une plateforme pensée pour
                                faciliter la connexion entre
                                les agriculteurs et les services
                                numériques.
                            </p>

                            <div class="project-tech">

                                <span>Web</span>
                                <span>Backend</span>
                                <span>Database</span>

                            </div>

                            <a
                                href="https://github.com/6Grizzly5"
                                target="_blank"
                                rel="noopener noreferrer"
                                class="project-link"
                            >
                                Voir le projet ↗
                            </a>

                        </div>

                    </article>


                    <!-- =================================
                         ENERGY MANAGER
                    ================================== -->

                    <article class="project-card">

                        <div class="project-image">

                            <img
                                src="/images/energy-manager.jpg"
                                alt="Application de gestion d'énergie"
                            >

                            <span class="project-index">
                                03
                            </span>

                        </div>


                        <div class="project-content">

                            <span class="project-category">
                                PYTHON APPLICATION
                            </span>

                            <h3>
                                Energy Manager
                            </h3>

                            <p>
                                Une application développée
                                en Python pour faciliter le suivi
                                et la gestion de la consommation
                                énergétique.
                            </p>

                            <div class="project-tech">

                                <span>Python</span>
                                <span>GUI</span>
                                <span>Data</span>

                            </div>

                            <a
                                href="https://github.com/6Grizzly5"
                                target="_blank"
                                rel="noopener noreferrer"
                                class="project-link"
                            >
                                Voir le projet ↗
                            </a>

                        </div>

                    </article>

                </div>


                <div class="projects-navigation">

                    <button
                        id="projects-prev"
                        class="project-nav-button"
                        aria-label="Projet précédent"
                    >
                        ←
                    </button>


                    <button
                        id="projects-next"
                        class="project-nav-button"
                        aria-label="Projet suivant"
                    >
                        →
                    </button>

                </div>


                <div class="projects-footer">

                    <a
                        href="https://github.com/6Grizzly5"
                        target="_blank"
                        rel="noopener noreferrer"
                        class="projects-all"
                    >
                        Voir tous mes projets ↗
                    </a>

                </div>

            </div>

        </section>

    `
}