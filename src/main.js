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


import { Roadmap }
    from './components/Roadmap'


import {
    Contact,
    initContact
}
from './components/Contact'


import {
    FloatingTech,
    initFloatingTech
}
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


/* ================================================
   APPLICATION
================================================ */

document.querySelector('#app').innerHTML = `

    <main class="page">


        <!-- =====================================
             FLOATING TECHNOLOGIES
        ====================================== -->

        ${FloatingTech()}


        <!-- =====================================
             NAVBAR
        ====================================== -->

        ${Navbar()}


        <!-- =====================================
             HERO
        ====================================== -->

        ${Hero()}


        <!-- =====================================
             ABOUT
        ====================================== -->

        ${About()}


        <!-- =====================================
             SKILLS
        ====================================== -->

        ${Skills()}


        <!-- =====================================
             PROJECTS
        ====================================== -->

        ${Projects()}


        <!-- =====================================
             ROADMAP
        ====================================== -->

        ${Roadmap()}


        <!-- =====================================
             CONTACT
        ====================================== -->

        ${Contact()}


    </main>

`


/* ================================================
   TYPEWRITER
================================================ */

initTypewriter(

    document.querySelector(
        '#typewriter'
    ),

    aboutQuotes

)


/* ================================================
   NAVBAR
================================================ */

initNavbarAnimation()

initNavbar()


/* ================================================
   SCROLL ANIMATIONS
================================================ */

initScrollAnimations()


/* ================================================
   FLOATING TECHNOLOGIES
================================================ */

initFloatingTech()


/* ================================================
   CONTACT FORM
================================================ */

initContact()