export function initTypewriter(element, phrases) {

    if (!element || !phrases.length) {
        return
    }

    let currentPhrase = ""
    let phraseIndex = Math.floor(Math.random() * phrases.length)

    let characterIndex = 0
    let isDeleting = false


    function getNextPhrase() {

        let nextIndex

        do {
            nextIndex = Math.floor(Math.random() * phrases.length)
        } while (
            phrases.length > 1 &&
            nextIndex === phraseIndex
        )

        phraseIndex = nextIndex

        return phrases[phraseIndex]
    }


    function type() {

        currentPhrase = phrases[phraseIndex]


        if (!isDeleting) {

            element.textContent =
                currentPhrase.substring(0, characterIndex + 1)

            characterIndex++


            if (characterIndex === currentPhrase.length) {

                isDeleting = true

                setTimeout(type, 2200)

                return
            }

        } else {

            element.textContent =
                currentPhrase.substring(0, characterIndex - 1)

            characterIndex--


            if (characterIndex === 0) {

                isDeleting = false

                getNextPhrase()

            }

        }


        const typingSpeed = isDeleting
            ? 35
            : 70


        setTimeout(type, typingSpeed)
    }


    type()
}