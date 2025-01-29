/**
 <div class="window">
    <div class="titlebar">
        <div class="title">Title</div>
        <div class="buttons"><div class="close"></div></div>
    </div>
    <div class="window-content">Lorem ipsum bla bla bla</div>
 </div>
 */

let maxZIndex = 0 // Used for moving windows to front

export class Window {
    /**
     * @type {Element}
     */
    element = null
    /**
     * @type {Element}
     */
    contentElement = null

    valid = true // False when window is destroyed

    captureMouse = false // Used for dragging
    position = { x: 0, y: 0 }

    dragReleaseListener = null

    constructor(title, contentEl) {
        this.contentElement = contentEl
        this.element = this.createElement(title, contentEl)

        this.position = {
            x: window.innerWidth/2 - 250,
            y: window.innerHeight/2 - 150
        }
        this.updateElPosition()
    }

    createElement(title, contentEl) {
        const windowEl = document.createElement("div")
        windowEl.classList.add("window")

        const titlebarEl = document.createElement("div")
        titlebarEl.classList.add("titlebar")

        // Dragging
        titlebarEl.addEventListener('mousedown', (e) => {
            this.captureMouse = true
            maxZIndex++
            this.element.style.zIndex = `${maxZIndex}`

            const mouseMoveListener = e => {
                this.position.x += e.movementX
                this.position.y += e.movementY

                this.updateElPosition()
            }
            document.addEventListener("mousemove", mouseMoveListener)

            this.dragReleaseListener = () => {
                this.captureMouse = false
                this.dragReleaseListener = null
                document.removeEventListener("mousemove", mouseMoveListener)
            }

            document.addEventListener('mouseup', this.dragReleaseListener)
        })

        const titleEl = document.createElement("div")
        titleEl.classList.add("title")
        titleEl.textContent = title
        titlebarEl.appendChild(titleEl)

        const buttonsEl = document.createElement("div")
        buttonsEl.classList.add("buttons")

        const closeButtonEl = document.createElement("div")
        closeButtonEl.classList.add("close")
        closeButtonEl.addEventListener("click", () => this.close())

        buttonsEl.appendChild(closeButtonEl)

        titlebarEl.appendChild(buttonsEl)

        windowEl.appendChild(titlebarEl)

        const contentParentEl = document.createElement("div")
        contentParentEl.classList.add("window-content")

        contentParentEl.appendChild(contentEl)

        windowEl.appendChild(contentParentEl)

        return windowEl
    }

    updateElPosition() {
        this.element.style.left = `${this.position.x}px`
        this.element.style.top = `${this.position.y}px`
    }

    show() {
        document.getElementById('screen').appendChild(this.element)
    }

    close() {
        this.valid = false // invalidate
        this.element.remove()

        if (this.dragReleaseListener != null) document.removeEventListener('mouseup', this.dragReleaseListener)
    }
}