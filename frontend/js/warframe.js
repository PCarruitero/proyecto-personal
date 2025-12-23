let params = new URLSearchParams(window.location.search)
let nombre = params.get("name")
let w = warframes.find(x => x.nombre.toLowerCase() === nombre)
if (w) {
    document.getElementById("header-nombre").innerText = w.nombre
    document.getElementById("nombre").innerText = w.nombre
    document.getElementById("descripcion").innerText = w.descripcion
    document.getElementById("img-warframe").src =
        "../img/" + w.nombre + ".png"
    document.getElementById("img-habilidades").src =
        "../img/" + w.nombre + "Habilidades.png"
    let stats = document.getElementById("stats")
    stats.innerHTML = ""
    for (let k in w.estadisticas) {
        let li = document.createElement("li")
        li.innerText = k + ": " + w.estadisticas[k]
        stats.appendChild(li)
    }
    let habs = document.getElementById("habilidades")
    habs.innerHTML = ""
    w.habilidades.forEach(h => {
        let li = document.createElement("li")
        li.innerText = h
        habs.appendChild(li)
    })
}