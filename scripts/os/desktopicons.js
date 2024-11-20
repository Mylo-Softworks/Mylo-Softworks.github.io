/**]
 * Example:
 * <div class="icon">
 *    <div class="picture" style="background-image: url(assets/img/logo_basic.png)"></div>
 *    <p>Mylo Softworks</p>
 * </div>
 * @param name Icon name
 * @param icon Icon url
 * @param onclick Callback to run on click
 */
export function createDesktopIcon(name, icon, onclick) {
    const el = document.createElement("div")
    el.classList.add("icon")
    el.addEventListener('click', onclick)

    const picture = document.createElement("div")
    picture.classList.add("picture")
    picture.style.backgroundImage = `url(${icon})`

    const p = document.createElement("p")
    p.innerText = name

    el.appendChild(picture)
    el.appendChild(p)

    document.getElementById('desktopicons').appendChild(el)
}