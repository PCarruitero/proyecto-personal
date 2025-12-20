let params = new URLSearchParams(window.location.search)
let nombre = params.get("name")
let w = warframes.find(x => x.nombre.toLowerCase() === nombre)
if (w) {
    document.getElementById("nombre").innerText = w.nombre
    document.getElementById("descripcion").innerText = w.descripcion
    let stats = document.getElementById("stats")
    for (let k in w.estadisticas) {
        let li = document.createElement("li")
        li.innerText = k + ": " + w.estadisticas[k]
        stats.appendChild(li)
    }
    let habs = document.getElementById("habilidades")
    w.habilidades.forEach(h => {
        let li = document.createElement("li")
        li.innerText = h
        habs.appendChild(li)
    })
}