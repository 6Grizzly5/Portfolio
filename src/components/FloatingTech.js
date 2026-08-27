const technologies = [
    {
        name: 'Python',
        icon: 'devicon-python-plain'
    },
    {
        name: 'Java',
        icon: 'devicon-java-plain'
    },
    {
        name: 'JavaScript',
        icon: 'devicon-javascript-plain'
    },
    {
        name: 'React',
        icon: 'devicon-react-original'
    },
    {
        name: 'Spring',
        icon: 'devicon-spring-original'
    },
    {
        name: 'Node.js',
        icon: 'devicon-nodejs-plain'
    },
    {
        name: 'PostgreSQL',
        icon: 'devicon-postgresql-plain'
    },
    {
        name: 'Git',
        icon: 'devicon-git-plain'
    },
    {
        name: 'GitHub',
        icon: 'devicon-github-original'
    },
    {
        name: 'HTML5',
        icon: 'devicon-html5-plain'
    },
    {
        name: 'CSS3',
        icon: 'devicon-css3-plain'
    },
    {
        name: 'PHP',
        icon: 'devicon-php-plain'
    }
]


export function FloatingTech() {

    return `
        <div
            id="floating-tech"
            class="floating-tech"
            aria-hidden="true"
        >
        </div>
    `
}


export function initFloatingTech() {

    const container =
        document.querySelector('#floating-tech')

    if (!container) return


    const createLogo = () => {

        const tech =
            technologies[
                Math.floor(
                    Math.random() * technologies.length
                )
            ]


        const logo =
            document.createElement('i')


        logo.className =
            `${tech.icon} floating-tech-logo`


        /*
         * Position aléatoire
         */
        const x =
            Math.random() * 100

        const y =
            Math.random() * 100


        /*
         * Taille aléatoire
         */
        const size =
            22 + Math.random() * 34


        /*
         * Durée aléatoire
         */
        const duration =
            8 + Math.random() * 10


        /*
         * Délai aléatoire
         */
        const delay =
            Math.random() * 2


        /*
         * Légère rotation
         */
        const rotation =
            -25 + Math.random() * 50


        logo.style.left = `${x}%`
        logo.style.top = `${y}%`

        logo.style.fontSize =
            `${size}px`

        logo.style.setProperty(
            '--float-duration',
            `${duration}s`
        )

        logo.style.setProperty(
            '--float-delay',
            `${delay}s`
        )

        logo.style.setProperty(
            '--float-rotation',
            `${rotation}deg`
        )


        container.appendChild(logo)


        /*
         * On laisse le logo vivre
         * puis on le supprime.
         */
        const lifetime =
            (duration + delay) * 1000 + 1000


        setTimeout(() => {

            logo.remove()

        }, lifetime)
    }


    /*
     * Quelques logos au lancement
     */
    for (let i = 0; i < 7; i++) {

        setTimeout(
            createLogo,
            i * 700
        )
    }


    /*
     * Apparition continue
     */
    setInterval(
        createLogo,
        1800
    )
}