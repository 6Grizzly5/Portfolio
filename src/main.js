import './style.css'


/* ================================================
   COMPONENTS
================================================ */

import { Navbar }
    from './components/Navbar'

import { Hero }
    from './components/Hero'

import { About }
    from './components/About'

import { Skills }
    from './components/Skills'

import { Projects }
    from './components/Projects'

import { Contact }
    from './components/Contact'


/* ================================================
   DATA
================================================ */

import { aboutQuotes }
    from './data/aboutQuotes'


/* ================================================
   ANIMATIONS
================================================ */

import { initNavbarAnimation }
    from './animations/navbar'

import { initScrollAnimations }
    from './animations/scroll'

import { initTypewriter }
    from './animations/typewriter'


/* ================================================
   APPLICATION
================================================ */

document.querySelector('#app').innerHTML = `

    <main class="page">


        ${Navbar()}


        ${Hero()}


        ${About()}


        ${Skills()}


        ${Projects()}


        ${Contact()}


    </main>

`


/* ================================================
   TYPEWRITER
================================================ */

initTypewriter(

    document.querySelector('#typewriter'),

    aboutQuotes

)


/* ================================================
   NAVBAR ANIMATION
================================================ */

initNavbarAnimation()


/* ================================================
   SCROLL ANIMATIONS
================================================ */

initScrollAnimations()