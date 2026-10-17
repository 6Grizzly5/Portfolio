export function Projects() {

    /*
    ====================================================
    PROJETS MIS EN AVANT (5 maximum)
    Les autres projets sont accessibles depuis GitHub
    grâce au bouton « Voir tous mes projets ».
    ====================================================
    */

    const projects = [

        {
            number: '01',
            category: 'WEB APPLICATION',
            title: 'FileConnect 2035',
            description:
                'Solution intelligente de gestion de files d’attente : le client prend un ticket via un QR Code, suit sa position en temps réel et est averti quand son tour approche.',
            tech: [
                'Python',
                'Flask',
                'PostgreSQL',
                'SQLAlchemy',
                'PyQt5'
            ],
            image: '/images/fileconnect.png',
            imageAlt: 'Capture du projet FileConnect 2035',
            link: 'https://github.com/6Grizzly5/FileConnect',
            linkLabel: 'Voir le projet'
        },

        {
            number: '02',
            category: 'DIGITAL PLATFORM',
            title: 'Tantsaha_Connect',
            description:
                'Plateforme numérique pensée pour connecter les agriculteurs à des services et informations utiles à leur activité.',
            tech: [
                'React',
                'Node.js',
                'React Native',
                'API'
            ],
            image: '/images/tantsahaconnect.png',
            imageAlt: 'Capture du projet Tantsaha_Connect',
            link: 'https://github.com/6Grizzly5',
            linkLabel: 'Voir sur GitHub'
        },

        {
            number: '03',
            category: 'COMPUTER VISION',
            title: 'AirKey',
            description:
                'Prototype de saisie gestuelle utilisant une webcam et la détection des mains pour transformer des gestes en interactions avec une interface.',
            tech: [
                'React',
                'Vite',
                'MediaPipe',
                'Computer Vision'
            ],
            image: '/images/airkey.png',
            imageAlt: 'Capture du projet AirKey',
            link: 'https://github.com/6Grizzly5/Airkey',
            linkLabel: 'Voir le projet',
            siteLink: 'https://airkey-xi.vercel.app/'
        },

        {
            number: '04',
            category: 'WEB APPLICATION',
            title: 'Taxi_Fleet',
            description:
                'Application de gestion de flotte de taxis et de parking : inscription et validation des chauffeurs, commande et suivi des courses, avec rôles administrateur, chauffeur et client.',
            tech: [
                'Java',
                'Spring Boot',
                'Thymeleaf',
                'MySQL',
                'Spring Security'
            ],
            image: '/images/taxi_fleet.png',
            imageAlt: 'Capture du projet Taxi_Fleet',
            link: 'https://github.com/6Grizzly5/Taxi_Fleet',
            linkLabel: 'Voir le projet'
        },

        {
            number: '05',
            category: 'FRONTEND · MOBILE FIRST',
            title: 'VolaBe',
            description:
                'Application React pensée d’abord pour smartphone : une fausse plateforme de gains conçue comme un prank entre amis, avec missions par catégories et déploiement sur Vercel.',
            tech: [
                'React',
                'Vite',
                'JavaScript',
                'Vercel'
            ],
            image: '/images/volabe.png',
            imageAlt: 'Capture du projet VolaBe',
            link: 'https://github.com/6Grizzly5/Volabe',
            linkLabel: 'Voir le projet',
            siteLink: 'https://volabe.vercel.app/'
        }

    ]


    function renderProject(project) {

        const visual = project.image
            ? `
                <div class="project-image">
                    <img
                        src="${project.image}"
                        alt="${project.imageAlt}"
                        loading="lazy"
                    >

                    <span class="project-index">
                        ${project.number}
                    </span>
                </div>
            `
            : `
                <div class="project-image ${project.visualClass}">
                    <div class="project-visual-center">
                        <span class="project-visual-icon">
                            ${project.visualIcon}
                        </span>

                        <span class="project-visual-text">
                            ${project.visualText}
                        </span>
                    </div>

                    <span class="project-index">
                        ${project.number}
                    </span>
                </div>
            `


        return `
            <article class="project-card">

                ${visual}

                <div class="project-content">

                    <span class="project-category">
                        ${project.category}
                    </span>

                    <h3>
                        ${project.title}
                    </h3>

                    <p>
                        ${project.description}
                    </p>

                    <div class="project-tech">
                        ${project.tech
                            .map(tech => `<span>${tech}</span>`)
                            .join('')
                        }
                    </div>

                <div class="project-links">

                    <a
                        href="${project.link}"
                        target="_blank"
                        rel="noopener noreferrer"
                        class="project-link"
                    >
                        ${project.linkLabel} ↗
                    </a>

                    ${project.siteLink
                        ? `
                            <a
                                href="${project.siteLink}"
                                target="_blank"
                                rel="noopener noreferrer"
                                class="project-link project-link-site"
                            >
                                Visiter le site ↗
                            </a>
                        `
                        : ''
                    }

                </div>
                </div>

            </article>
        `
    }


    const projectCards =
        projects
            .map(renderProject)
            .join('')


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

                    <p class="projects-intro">
                        Une sélection de cinq projets qui montrent
                        mon évolution entre développement web,
                        backend, mobile et computer vision.
                    </p>

                </div>


                <div class="projects-carousel">

                    <div
                        class="projects-track"
                        id="projects-track"
                        role="region"
                        aria-label="Carrousel des projets"
                        tabindex="0"
                    >

                        ${projectCards}

                    </div>


                    <div class="projects-controls">

                        <button
                            id="projects-prev"
                            class="project-nav-button project-nav-prev"
                            type="button"
                            aria-label="Projet précédent"
                        >
                            ‹
                        </button>

                        <div
                            id="projects-dots"
                            class="projects-dots"
                            aria-hidden="true"
                        ></div>

                        <button
                            id="projects-next"
                            class="project-nav-button project-nav-next"
                            type="button"
                            aria-label="Projet suivant"
                        >
                            ›
                        </button>

                    </div>

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


export { initProjectsCarousel }
    from '../animations/projectsCarousel'
