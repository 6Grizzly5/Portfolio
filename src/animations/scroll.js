import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'


gsap.registerPlugin(ScrollTrigger)


export function initScrollAnimations() {


    /*
    ============================================
    SECTION ENTRANCE
    ============================================
    */

    gsap.utils.toArray('.page-section').forEach(
        (section) => {

            gsap.fromTo(
                section,

                {
                    y: 100,
                    opacity: 0,
                    scale: 0.96
                },

                {
                    y: 0,
                    opacity: 1,
                    scale: 1,

                    duration: 1.2,

                    ease:
                        'power3.out',

                    scrollTrigger: {

                        trigger: section,

                        start:
                            'top 85%',

                        toggleActions:
                            'play none none none'
                    }
                }
            )
        }
    )


    /*
    ============================================
    HERO
    ============================================
    */

    const hero =
        document.querySelector('.hero-section')


    if (hero) {

        const title =
            hero.querySelector('.hero-title')

        const role =
            hero.querySelector('.hero-role')

        const description =
            hero.querySelector('.hero-description')

        const actions =
            hero.querySelector('.hero-actions')

        const visual =
            hero.querySelector('.hero-visual')


        const timeline =
            gsap.timeline({
                defaults: {
                    ease: 'power3.out'
                }
            })


        timeline
            .from(
                '.hero-label',
                {
                    y: 30,
                    opacity: 0,
                    duration: 0.6
                }
            )

            .from(
                title,
                {
                    y: 80,
                    opacity: 0,
                    duration: 1
                },
                '-=0.3'
            )

            .from(
                role,
                {
                    y: 30,
                    opacity: 0,
                    duration: 0.6
                },
                '-=0.5'
            )

            .from(
                description,
                {
                    y: 25,
                    opacity: 0,
                    duration: 0.6
                },
                '-=0.3'
            )

            .from(
                actions,
                {
                    y: 20,
                    opacity: 0,
                    duration: 0.5
                },
                '-=0.3'
            )

            .from(
                visual,
                {
                    x: 100,
                    opacity: 0,
                    rotate: 3,
                    duration: 1
                },
                '-=0.8'
            )


        /*
        Hero image parallax
        */

        gsap.to(
            '.hero-image',
            {

                y: -80,

                ease: 'none',

                scrollTrigger: {

                    trigger: hero,

                    start: 'top top',

                    end: 'bottom top',

                    scrub: true
                }

            }
        )

    }


    /*
    ============================================
    ABOUT
    ============================================
    */

    const about =
        document.querySelector('.about-section')


    if (about) {

        gsap.from(
            '.about-image-container',
            {

                x: -100,
                opacity: 0,
                duration: 1,

                ease:
                    'power3.out',

                scrollTrigger: {

                    trigger: about,

                    start: 'top 70%'

                }

            }
        )


        gsap.from(
            '.professional-card',
            {

                x: 100,
                opacity: 0,
                duration: 1,

                ease:
                    'power3.out',

                scrollTrigger: {

                    trigger: about,

                    start: 'top 70%'

                }

            }
        )


        gsap.from(
            '.typewriter-container',
            {

                y: 30,
                opacity: 0,
                duration: 0.7,

                scrollTrigger: {

                    trigger: about,

                    start: 'top 70%'

                }

            }
        )

    }


    /*
    ============================================
    SKILLS
    ============================================
    */

    gsap.utils
        .toArray('.skill-card')
        .forEach(
            (card, index) => {

                gsap.from(
                    card,

                    {

                        y: 80,
                        opacity: 0,
                        rotate:
                            index % 2 === 0
                                ? -2
                                : 2,

                        duration: 0.8,

                        ease:
                            'power3.out',

                        scrollTrigger: {

                            trigger: card,

                            start: 'top 85%',

                            toggleActions:
                                'play none none none'

                        }

                    }
                )

            }
        )


    /*
    ============================================
    PROJECTS
    ============================================
    */

    gsap.utils
        .toArray('.project-card')
        .forEach(
            (card, index) => {

                gsap.from(
                    card,

                    {

                        x: 100,
                        opacity: 0,

                        duration: 0.9,

                        delay:
                            index * 0.08,

                        ease:
                            'power3.out',

                        scrollTrigger: {

                            trigger:
                                '.projects-track',

                            start: 'top 80%',

                            toggleActions:
                                'play none none none'

                        }

                    }
                )

            }
        )


    /*
    ============================================
    CONTACT
    ============================================
    */

    gsap.from(
        '.contact-form',
        {

            x: 100,
            opacity: 0,

            duration: 1,

            ease:
                'power3.out',

            scrollTrigger: {

                trigger:
                    '.contact-section',

                start: 'top 75%'

            }

        }
    )


    gsap.from(
        '.contact-intro',
        {

            x: -80,
            opacity: 0,

            duration: 1,

            ease:
                'power3.out',

            scrollTrigger: {

                trigger:
                    '.contact-section',

                start: 'top 75%'

            }

        }
    )

}
    /*
    ============================================
    PROJECT CAROUSEL
    ============================================
    */

    const track =
        document.querySelector('.projects-track')

    const nextButton =
        document.querySelector('#projects-next')

    const prevButton =
        document.querySelector('#projects-prev')


    if (track && nextButton && prevButton) {

        const scrollAmount = 420


        nextButton.addEventListener(
            'click',
            () => {

                gsap.to(
                    track,
                    {

                        scrollLeft:
                            track.scrollLeft +
                            scrollAmount,

                        duration:
                            0.7,

                        ease:
                            'power3.out'

                    }
                )

            }
        )


        prevButton.addEventListener(
            'click',
            () => {

                gsap.to(
                    track,
                    {

                        scrollLeft:
                            track.scrollLeft -
                            scrollAmount,

                        duration:
                            0.7,

                        ease:
                            'power3.out'

                    }
                )

            }
        )

    }