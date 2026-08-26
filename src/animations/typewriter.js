export function initTypewriter(
    element,
    phrases
) {

    if (!element || !phrases?.length) {
        return
    }


    let currentPhrase = ''
    let phraseIndex = 0
    let characterIndex = 0

    let deleting = false


    function getRandomPhrase() {

        let index

        do {

            index =
                Math.floor(
                    Math.random() * phrases.length
                )

        } while (
            phrases.length > 1 &&
            index === phraseIndex
        )

        phraseIndex = index

        return phrases[index]
    }


    currentPhrase =
        getRandomPhrase()


    function type() {

        const target =
            currentPhrase


        if (!deleting) {

            characterIndex++

            element.textContent =
                target.substring(
                    0,
                    characterIndex
                )


            if (
                characterIndex >=
                target.length
            ) {

                deleting = true

                setTimeout(
                    type,
                    1800
                )

                return
            }


            setTimeout(
                type,
                55
            )

        } else {

            characterIndex--

            element.textContent =
                target.substring(
                    0,
                    characterIndex
                )


            if (characterIndex <= 0) {

                deleting = false

                currentPhrase =
                    getRandomPhrase()

                setTimeout(
                    type,
                    300
                )

                return
            }


            setTimeout(
                type,
                30
            )
        }
    }


    type()
}