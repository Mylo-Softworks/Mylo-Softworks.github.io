const lines = [
    'Writing mobile apps and games',
    'Creating new experiences',
    'Working with Artificial Intelligence',
    'Developing mobile and desktop apps',
    'Pushing the boundaries of what is possible'
]

let selectedIndex = 0
randomIndex()

let delay = 0

function randomIndex() {
    selectedIndex = Math.floor(Math.random() * (lines.length + 1))
}

function getTargetText() {
    selectedIndex = selectedIndex % lines.length
    return lines[selectedIndex]
}

function getLeftValue(textElement) {
    return textElement.offsetLeft + textElement.offsetWidth
}

/**
 * Remove the last character from a string.
 * @param input
 * @returns {(string|boolean)[]} [string, done]
 */
function stripLast(input) {
    const length = input.length
    if (length === 0) return ["", true]
    return [input.substring(0, length - 1), length - 1 === 0]
}

/**
 * Add the next character of target to a string.
 * @param currentText
 * @param targetText
 * @returns {(string|boolean)[]|(*|boolean)[]} [string, done]
 */
function addNext(currentText, targetText) {
    const length = currentText.length
    const targetLength = targetText.length
    if (length === targetLength) return [currentText, true]
    return [currentText + targetText.substring(length, length + 1), length + 1 === targetLength]
}

function step(textElement) {
    const currentText = textElement.innerHTML
    const target = getTargetText()
    if (target.startsWith(currentText)) {
        const [newText, done] = addNext(currentText, target)
        const updated = textElement.innerHTML !== newText
        if (updated) {
            delay = 100
        }
        textElement.innerHTML = newText
        delay--
        if (done && delay === 0) {
            // selectedIndex++
            const oldIndex = selectedIndex
            do {
                randomIndex()
            }
            while (selectedIndex === oldIndex)
        }
    }
    else {
        textElement.innerHTML = stripLast(currentText)[0]
    }
}

// Wait for page load before activating typing animation
document.addEventListener('DOMContentLoaded', function(event) {
    const animatedDescription = document.getElementById('animated-content')
    const indicator = document.getElementById('indicator')

    function stepType() {
        step(animatedDescription)

        indicator.style.left = `${getLeftValue(animatedDescription)}px`
    }

    setInterval(stepType, 30)
});
