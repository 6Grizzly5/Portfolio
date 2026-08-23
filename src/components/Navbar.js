export function Navbar() {

    return `

        <nav
            id="navbar-main"
            class="
                fixed
                top-0
                left-1/2
                -translate-x-1/2
                z-50
                w-[calc(100%-2rem)]
                max-w-6xl
                transition-all
                duration-500
                ease-out
            "
        >

            <div
                id="navbar-container"
                class="
                    flex
                    items-center
                    justify-between
                    px-6
                    py-4
                    rounded-b-2xl

                    bg-[#6B352A]/95
                    backdrop-blur-xl

                    shadow-[0_15px_40px_rgba(59,41,36,0.20)]

                    transition-all
                    duration-500
                    ease-out
                "
            >

                <!-- LOGO -->

                <a
                    href="#"
                    class="
                        text-xl
                        font-black
                        tracking-tight
                        text-[#FFF1A6]
                        transition-all
                        duration-300
                    "
                >
                    RAZANAKA<span class="text-[#C47A5A]">.</span>
                </a>


                <!-- NAVIGATION -->

                <div
                    id="navbar-links"
                    class="
                        hidden
                        md:flex
                        items-center
                        gap-7
                        transition-all
                        duration-300
                    "
                >

                    <a href="#about" class="nav-link">
                        <span class="nav-text">
                            À propos
                        </span>

                        <span class="nav-icon">
                            ✦
                        </span>
                    </a>


                    <a href="#skills" class="nav-link">
                        <span class="nav-text">
                            Compétences
                        </span>

                        <span class="nav-icon">
                            ◈
                        </span>
                    </a>


                    <a href="#projects" class="nav-link">
                        <span class="nav-text">
                            Projets
                        </span>

                        <span class="nav-icon">
                            ◆
                        </span>
                    </a>


                    <a href="#contact" class="nav-link">
                        <span class="nav-text">
                            Contact
                        </span>

                        <span class="nav-icon">
                            ✉
                        </span>
                    </a>

                </div>


                <!-- CV -->

                <a
                    href="/cv/CV_Prosper_Razanaka.pdf"
                    download
                    class="
                        nav-cv
                        flex
                        items-center
                        justify-center
                        px-5
                        py-2.5
                        rounded-xl

                        bg-[#FFF1A6]
                        text-[#6B352A]

                        text-sm
                        font-bold

                        transition-all
                        duration-500
                    "
                >

                    <span class="nav-cv-text">
                        Mon CV
                    </span>

                    <span class="nav-cv-icon">
                        ↓
                    </span>

                </a>

            </div>

        </nav>

    `
}