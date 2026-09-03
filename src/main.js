import './style.css'


/* ================================================
   COMPONENTS
================================================ */

import {
    Navbar,
    initNavbar
}
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

import { FloatingTech }
    from './components/FloatingTech'


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


import { initFloatingTech }
    from './components/FloatingTech'


/* ================================================
   APPLICATION
================================================ */

document.querySelector('#app').innerHTML = `

    <main class="page">

        ${FloatingTech()}

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
initNavbar()


/* ================================================
   SCROLL ANIMATIONS
================================================ */

initScrollAnimations()

initFloatingTech()