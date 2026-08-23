import './style.css'

import { Navbar } from './components/Navbar'
import { About } from './components/About'

import { aboutQuotes } from './data/aboutQuotes'

import { initTypewriter } from './animations/typewriter'
import { initNavbarAnimation } from './animations/navbar'


document.querySelector('#app').innerHTML = `

    <main class="min-h-screen bg-[#FFF1A6]">

        <header id="navbar">
            ${Navbar()}
        </header>


        <section id="hero"></section>


        <section id="skills"></section>


        <section id="projects"></section>


        ${About()}


        <section id="contact"></section>


        <footer id="footer"></footer>

    </main>

`


initTypewriter(
    document.querySelector('#typewriter'),
    aboutQuotes
)


initNavbarAnimation()