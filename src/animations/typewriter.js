export function initTypewriter(
    element,
    phrases
) {

    if (!element || !phrases?.length) {
        return
    }


    let currentPhrase = ''
    let phraseIndex = -1
    let characterIndex = 0
    let deleting = false


    /*
    ============================================
    CHOISIR UNE PHRASE ALÉATOIRE
    ============================================
    */

    function getRandomPhrase() {

        let index

        do {

            index =
                Math.floor(
                    Math.random() *
                    phrases.length
                )

        } while (
            phrases.length > 1 &&
            index === phraseIndex
        )

        phraseIndex = index

        return phrases[index]
    }


    /*
    ============================================
    ÉCRITURE
    ============================================
    */

    function type() {

        if (!deleting) {

            characterIndex++

            element.textContent =
                currentPhrase.substring(
                    0,
                    characterIndex
                )


            /*
            Phrase terminée
            */

            if (
                characterIndex >=
                currentPhrase.length
            ) {

                deleting = true

                setTimeout(
                    type,
                    1800
                )

                return
            }


            /*
            Vitesse d'écriture
            */

            setTimeout(
                type,
                55
            )

            return
        }


        /*
        ========================================
        SUPPRESSION
        ========================================
        */

        characterIndex--

        element.textContent =
            currentPhrase.substring(
                0,
                characterIndex
            )


        /*
        Phrase complètement supprimée
        */

        if (characterIndex <= 0) {

            deleting = false

            currentPhrase =
                getRandomPhrase()

            setTimeout(
                type,
                350
            )

            return
        }


        /*
        Vitesse de suppression
        */

        setTimeout(
            type,
            30
        )
    }


    /*
    ============================================
    INITIALISATION
    ============================================
    */

    currentPhrase =
        getRandomPhrase()

    type()
}