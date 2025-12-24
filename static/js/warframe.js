/* Obtiene los parámetros de la URL */
let params = new URLSearchParams(window.location.search)
let nombre = params.get("name")
/* Busca el warframe según el nombre */
let w = warframes.find(x => x.nombre.toLowerCase() === nombre)
/* Si existe el warframe */
if (w) {
    /* Rellena los textos principales */
    document.getElementById("header-nombre").innerText = w.nombre
    document.getElementById("nombre").innerText = w.nombre
    document.getElementById("descripcion").innerText = w.descripcion
    /* Carga las imágenes */
    document.getElementById("img-warframe").src =
        "../static/img/" + w.nombre + ".png"
    document.getElementById("img-habilidades").src =
        "../static/img/" + w.nombre + "Habilidades.png"
    /* Genera la lista de estadísticas */
    let stats = document.getElementById("stats")
    stats.innerHTML = ""
    for (let k in w.estadisticas) {
        let li = document.createElement("li")
        li.innerText = k + ": " + w.estadisticas[k]
        stats.appendChild(li)
    }
    /* Genera la lista de habilidades */
    let habs = document.getElementById("habilidades")
    habs.innerHTML = ""
    w.habilidades.forEach(h => {
        let li = document.createElement("li")
        li.innerText = h
        habs.appendChild(li)
    })
}