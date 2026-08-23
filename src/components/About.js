export function About() {

    return `

        <section
            id="about"
            class="
                px-6
                py-24
                bg-[#FFF1A6]
            "
        >

            <div
                class="
                    max-w-6xl
                    mx-auto
                "
            >

                <!-- Section heading -->

                <div class="mb-12">

                    <span
                        class="
                            text-sm
                            font-bold
                            uppercase
                            tracking-[0.25em]
                            text-[#C47A5A]
                        "
                    >
                        À propos
                    </span>


                    <h2
                        class="
                            mt-2
                            text-3xl
                            md:text-4xl
                            font-black
                            text-[#6B352A]
                        "
                    >
                        Derrière le code.
                    </h2>

                </div>


                <!-- Content -->

                <div
                    class="
                        grid
                        md:grid-cols-[260px_1fr]
                        lg:grid-cols-[300px_1fr]
                        gap-10
                        lg:gap-16
                        items-center
                    "
                >

                    <!-- PHOTO -->

                    <div
                        class="
                            flex
                            justify-center
                            md:justify-start
                        "
                    >

                        <div
                            class="
                                relative
                                w-56
                                h-64
                                md:w-60
                                md:h-72
                            "
                        >

                            <!-- Background shape -->

                            <div
                                class="
                                    absolute
                                    inset-0
                                    rounded-[2rem]
                                    bg-[#6B352A]
                                    rotate-6
                                "
                            ></div>


                            <!-- Photo -->

                            <div
                                class="
                                    relative
                                    w-full
                                    h-full
                                    overflow-hidden
                                    rounded-[2rem]
                                    border-4
                                    border-[#FFF1A6]
                                    bg-[#C47A5A]
                                "
                            >

                                <img
                                    src="/images/prosper.jpeg"
                                    alt="RAZANAKA Prosper Andriniaina Félix"
                                    class="
                                        w-full
                                        h-full
                                        object-cover
                                    "
                                >

                            </div>

                        </div>

                    </div>


                    <!-- PRESENTATION -->

                    <div>

                        <h3
                            class="
                                text-2xl
                                md:text-3xl
                                font-bold
                                text-[#6B352A]
                            "
                        >
                            RAZANAKA Prosper Andriniaina Félix
                        </h3>


                        <!-- Typewriter -->

                        <div
                            class="
                                mt-4
                                min-h-[3rem]
                                flex
                                items-center
                            "
                        >

                            <p
                                id="typewriter"
                                class="
                                    text-lg
                                    md:text-xl
                                    font-semibold
                                    text-[#C47A5A]
                                "
                            >
                            </p>

                            <span
                                class="
                                    ml-1
                                    w-[2px]
                                    h-6
                                    bg-[#6B352A]
                                    animate-pulse
                                "
                            ></span>

                        </div>


                        <!-- Professional presentation -->

                        <div
                            class="
                                mt-6
                                p-6
                                md:p-7
                                rounded-3xl

                                border
                                border-[#6B352A]

                                bg-[#FFF1A6]

                                shadow-[0_8px_25px_rgba(107,53,42,0.08)]
                            "
                        >

                            <div
                                class="
                                    space-y-3
                                    text-[#3B2924]
                                    text-base
                                    leading-7
                                "
                            >

                                <p>
                                    Je suis étudiant en informatique,
                                    orienté vers le
                                    <strong class="text-[#6B352A]">
                                        génie logiciel
                                    </strong>,
                                    avec un intérêt particulier pour le
                                    développement d'applications et la
                                    conception de solutions numériques.
                                </p>


                                <p>
                                    J'aime comprendre les problèmes avant de
                                    les résoudre, concevoir des architectures
                                    propres et transformer une idée en une
                                    application réellement fonctionnelle.
                                </p>


                                <p>
                                    Mon parcours m'a permis d'explorer
                                    plusieurs technologies, notamment Python,
                                    JavaScript, PHP, C, les bases de données
                                    et différents frameworks de développement.
                                </p>


                                <p>
                                    Mon objectif est de continuer à progresser
                                    en développement logiciel en participant
                                    à des projets concrets, utiles et
                                    techniquement stimulants.
                                </p>

                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </section>

    `
}