import {createGeneratedListWindow} from "./generatedlistpage.js";

export function showPrivacyWindow() {
    createGeneratedListWindow("Privacy policies", "scripts/os/pages/privacypages.json", "Failed to load, click me to go to the old privacy pages.", "privacy.html")
}