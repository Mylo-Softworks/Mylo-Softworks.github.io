function homeButtonAction(force = null) {
    const homemenu = document.getElementById('homemenu')

    if (force != null) {
        homemenu.classList.toggle("hidden", force)
        return
    }
    homemenu.classList.toggle("hidden")
}