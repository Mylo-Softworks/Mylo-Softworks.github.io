const time = document.getElementById('time')
const date = document.getElementById('date')

export function activateClock() {
    updateClock()
    setInterval(updateClock, 1000)
}

function updateClock() {
    const dateVal = new Date()
    time.textContent = dateVal.toLocaleTimeString().substring(0, 5)
    date.textContent = dateVal.toLocaleDateString()
}