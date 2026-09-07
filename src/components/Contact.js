const EMAILJS_PUBLIC_KEY = '3E2ctxLJKPEVOffLH'
const EMAILJS_SERVICE_ID = 'contact_prosper'
const EMAILJS_TEMPLATE_ID = 'template_5dqgt38'


export function Contact() {

    return `

        <section
            id="contact"
            class="page-section contact-section"
        >

            <div class="section-inner contact-inner">


                <!-- =================================
                     HEADER
                ================================== -->

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

                        <input
                            type="hidden"
                            name="title"
                            value="Nouveau message depuis le portfolio"
                        >

                        <input
                            type="hidden"
                            name="time"
                            id="contact-time"
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
                                autocomplete="name"
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
                                autocomplete="email"
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

                            <span id="contact-submit-text">
                                Envoyer le message
                            </span>

                            <span>
                                ↗
                            </span>

                        </button>


                        <p
                            id="contact-status"
                            class="contact-status"
                            aria-live="polite"
                        ></p>

                    </form>

                </div>

            </div>

        </section>

    `
}


export function initContact() {

    const form =
        document.querySelector('#contact-form')

    const status =
        document.querySelector('#contact-status')

    const button =
        form?.querySelector('.contact-submit')

    const buttonText =
        document.querySelector('#contact-submit-text')


    if (!form || !status || !button) {
        return
    }


    /*
     * =================================
     * CHECK EMAILJS
     * =================================
     */

    if (
        !window.emailjs ||
        typeof window.emailjs.init !== 'function'
    ) {

        status.textContent =
            'Le service email est momentanément indisponible.'

        status.style.color =
            'var(--text-muted)'

        return
    }


    /*
     * =================================
     * INITIALIZE EMAILJS
     * =================================
     */

    window.emailjs.init({
        publicKey: EMAILJS_PUBLIC_KEY
    })


    /*
     * =================================
     * FORM SUBMIT
     * =================================
     */

    form.addEventListener(
        'submit',
        async (event) => {

            event.preventDefault()


            /*
             * Vérification du SDK
             */

            if (
                !window.emailjs ||
                typeof window.emailjs.sendForm !== 'function'
            ) {

                status.textContent =
                    'Le service email est momentanément indisponible.'

                status.style.color =
                    'var(--text-muted)'

                return

            }


            /*
             * =================================
             * DATE ET HEURE
             * =================================
             */

            const timeField =
                document.querySelector('#contact-time')


            if (timeField) {

                timeField.value =
                    new Date().toLocaleString(
                        'fr-FR',
                        {
                            dateStyle: 'full',
                            timeStyle: 'short'
                        }
                    )

            }


            /*
             * =================================
             * BUTTON LOADING
             * =================================
             */

            button.disabled = true


            if (buttonText) {

                buttonText.textContent =
                    'Envoi en cours...'

            }


            status.textContent = ''


            /*
             * =================================
             * SEND EMAIL
             * =================================
             */

            try {

                await window.emailjs.sendForm(
                    EMAILJS_SERVICE_ID,
                    EMAILJS_TEMPLATE_ID,
                    form
                )


                /*
                 * =================================
                 * SUCCESS
                 * =================================
                 */

                status.textContent =
                    'Message envoyé avec succès. Merci !'

                status.style.color =
                    'var(--black)'


                form.reset()

            }


            /*
             * =================================
             * ERROR
             * =================================
             */

            catch (error) {

                console.error(
                    'EmailJS error:',
                    error
                )

                status.textContent =
                    'Impossible d’envoyer le message. Réessayez dans quelques instants.'

                status.style.color =
                    'var(--text-muted)'

            }


            /*
             * =================================
             * RESET BUTTON
             * =================================
             */

            finally {

                button.disabled = false


                if (buttonText) {

                    buttonText.textContent =
                        'Envoyer le message'

                }

            }

        }
    )
}