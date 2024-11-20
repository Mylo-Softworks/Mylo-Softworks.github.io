import {createGeneratedListWindow} from "./generatedlistpage.js";

export function showProductsWindow() {
    createGeneratedListWindow("Products", "scripts/os/pages/productpages.json", "Failed to load.", null)
}