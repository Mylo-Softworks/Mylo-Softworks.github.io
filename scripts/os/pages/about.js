import {Window} from "../windows.js";

export function showAboutWindow() {
    const window = new Window("About", createInfoEl())
    window.show()
}

function createInfoEl() {
    const el = document.createElement("div")

    const flex = document.createElement("div")
    flex.classList.add("info-flex")

    const logo = document.createElement('div')
    logo.classList.add('info-logo')
    flex.appendChild(logo)

    const content = document.createElement('div')
    content.classList.add('info-content')

    addContentElA(content, "mylo@mylosoftworks.com", "mailto:mylo@mylosoftworks.com")
    addContentElText(content, `© ${new Date().getFullYear()} Mylo Softworks`)

    flex.appendChild(content)

    el.appendChild(flex)

    return el
}

function addContentElText(parent, contentText) {
    const entry = document.createElement('div')
    entry.classList.add('info-entry')
    entry.textContent = contentText
    parent.appendChild(entry)
}

function addContentElA(parent, contentText, contentUrl) {
    const entry = document.createElement('a')
    entry.classList.add('info-entry')
    entry.textContent = contentText
    entry.href = contentUrl
    parent.appendChild(entry)
}