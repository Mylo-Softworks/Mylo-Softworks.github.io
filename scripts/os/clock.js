const time = document.getElementById('time')
const date = document.getElementById('date')

export function activateClock() {
    updateClock()
    setInterval(updateClock, 1000)
}

function updateClock() {
    const dateVal = new Date()
    const timeValSplit = dateVal.toLocaleTimeString().split(":")
    time.textContent = timeValSplit[0] + timeValSplit[1]
    date.textContent = dateVal.toLocaleDateString()
}