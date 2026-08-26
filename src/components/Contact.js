export function Contact() {

    return `

        <section
            id="contact"
            class="page-section contact-section"
        >

            <div class="section-inner contact-inner">


                <div class="section-heading">

                    <span class="section-label">
                        04 / CONTACT
                    </span>

                    <h2 class="section-title">
                        Un projet ?
                        <br>
                        Parlons-en.
                    </h2>

                </div>


                <div class="contact-layout">


                    <!-- =================================
                         INTRO
                    ================================== -->

                    <div class="contact-intro">

                        <p>
                            Une idée, une collaboration,
                            une opportunité ou simplement
                            envie de discuter technologie ?
                        </p>

                        <p>
                            Écris-moi directement.
                            Le formulaire est là pour ça.
                        </p>

                    </div>


                    <!-- =================================
                         FORM
                    ================================== -->

                    <form
                        id="contact-form"
                        class="contact-form"
                    >

                        <div class="form-group">

                            <label for="name">
                                Nom
                            </label>

                            <input
                                id="name"
                                name="name"
                                type="text"
                                placeholder="Votre nom"
                                required
                            >

                        </div>


                        <div class="form-group">

                            <label for="email">
                                Email
                            </label>

                            <input
                                id="email"
                                name="email"
                                type="email"
                                placeholder="votre@email.com"
                                required
                            >

                        </div>


                        <div class="form-group">

                            <label for="message">
                                Message
                            </label>

                            <textarea
                                id="message"
                                name="message"
                                rows="6"
                                placeholder="Votre message..."
                                required
                            ></textarea>

                        </div>


                        <button
                            type="submit"
                            class="contact-submit"
                        >

                            Envoyer le message
                            <span>↗</span>

                        </button>


                        <p
                            id="contact-status"
                            class="contact-status"
                        ></p>

                    </form>

                </div>

            </div>

        </section>

    `
}