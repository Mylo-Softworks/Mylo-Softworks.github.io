import {createDesktopIcon} from "./scripts/os/desktopicons.js";
import {Window} from "./scripts/os/windows.js";
import {activateClock} from "./scripts/os/clock.js";
import {showAboutWindow} from "./scripts/os/pages/about.js";
import {showPrivacyWindow} from "./scripts/os/pages/privacy.js";
import {showProductsWindow} from "./scripts/os/pages/products.js";

function homeButtonAction(force = null) {
    const homemenu = document.getElementById('homemenu')

    if (force != null) {
        homemenu.classList.toggle("hidden", !force)
        return
    }
    homemenu.classList.toggle("hidden")
}

document.getElementById('homebutton').addEventListener('click', () => homeButtonAction())
document.getElementById('screen').addEventListener('mousedown', () => homeButtonAction(false))

document.getElementById('infobutton').addEventListener('click', () => showAboutWindow())

activateClock()

createDesktopIcon("About", "assets/img/logo_basic.png", () => {showAboutWindow()})
createDesktopIcon("Privacy", "assets/img/logo_basic.png", () => {showPrivacyWindow()})
// createDesktopIcon("Products", "assets/img/logo_basic.png", () => {showProductsWindow()}) // Empty for now