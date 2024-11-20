import {Window} from "../windows.js";

export function createGeneratedListWindow(title, contentUrl, fallbackText, fallbackUrl = null) {
    const window = new Window(title, createGeneratedListPage(contentUrl, fallbackText, fallbackUrl = null))
    window.show()
}

export function createGeneratedListPage(contentUrl, fallbackText, fallbackURL) {
    const el = document.createElement("div")

    const loading = document.createElement("div")
    loading.innerText = "Loading..."
    el.appendChild(loading)

    fetch(contentUrl).then(result => result.json()).then(pages => {
        loading.remove() // Finish loading

        el.appendChild(createList(pages))

    }).catch(err => {
        console.error(err)
        loading.remove() // Finish loading (failed)

        if (fallbackURL != null) {
            const link = document.createElement("a")
            link.href = "privacy.html"
            link.target = "_blank"
            link.innerText = fallbackText
            el.appendChild(link)
        }
        else {
            const p = document.createElement("p")
            p.innerText = fallbackText
            el.appendChild(p)
        }
    })

    return el
}

/**
 * Create all categories
 * @param pages {{category: {name: string}}}
 */
function createList(pages) {
    const ul = document.createElement("ul")

    for (const category in pages) {
        const li = document.createElement("li")
        li.innerText = category
        const items = pages[category]
        li.appendChild(createListElement(items))
        ul.appendChild(li)
    }

    return ul
}

/**
 * Create items for a category
 * @param subpages {{name: string}}
 */
function createListElement(subpages) {
    const ul = document.createElement("ul")

    for (const page in subpages) {
        const li = document.createElement("li")
        li.appendChild(createSubListElement(page, subpages[page]))
        ul.appendChild(li)
    }

    return ul
}

/**
 * Create individual items
 * @param title {string}
 * @param url {string}
 */
function createSubListElement(title, url) {
    const a = document.createElement("a")
    a.innerText = title
    a.target = "_blank"
    a.href = url
    return a
}