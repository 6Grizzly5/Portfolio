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
    },

    {
        name: 'Tailwind CSS',
        icon: 'devicon-tailwindcss-original'
    }

]


export function FloatingTech() {

    return `

        <div
            id="floating-tech"
            class="floating-tech"
            aria-hidden="true"
        ></div>

    `
}


export function initFloatingTech() {

    const container =
        document.querySelector(
            '#floating-tech'
        )

    if (!container) {
        return
    }


    /*
    ============================================
    CRÉATION D'UN LOGO
    ============================================
    */

    function createLogo() {

        const tech =
            technologies[
                Math.floor(
                    Math.random() *
                    technologies.length
                )
            ]


        const logo =
            document.createElement('i')


        logo.className =
            `${tech.icon} floating-tech-logo`


        /*
        Position aléatoire
        */

        logo.style.left =
            `${8 + Math.random() * 84}%`

        logo.style.top =
            `${8 + Math.random() * 84}%`


        /*
        Taille
        */

        const size =
            24 +
            Math.random() * 28

        logo.style.fontSize =
            `${size}px`


        /*
        Durée
        */

        const duration =
            10 +
            Math.random() * 9


        /*
        Délai
        */

        const delay =
            Math.random() * 1.5


        /*
        Rotation
        */

        const rotation =
            -15 +
            Math.random() * 30


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


        container.appendChild(
            logo
        )


        /*
        Suppression après animation
        */

        const lifetime =
            (
                duration +
                delay +
                1
            ) * 1000


        setTimeout(
            () => {
                logo.remove()
            },
            lifetime
        )
    }


    /*
    ============================================
    PREMIÈRE VAGUE
    ============================================
    */

    for (
        let i = 0;
        i < 10;
        i++
    ) {

        setTimeout(
            createLogo,
            i * 500
        )
    }


    /*
    ============================================
    APPARITION CONTINUE
    ============================================
    */

    setInterval(
        createLogo,
        1300
    )
}