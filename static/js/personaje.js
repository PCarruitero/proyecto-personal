let contenedor = document.getElementById("lista")
function mostrar(lista) {
    contenedor.innerHTML = ""
    lista.forEach(w => {
        let a = document.createElement("a")
        a.className = "card"
        a.href = "warframe.html?name=" + w.nombre.toLowerCase()
        let img = document.createElement("img")
        img.src = "../static/img/" + w.nombre + ".png"
        img.alt = w.nombre
        let nombre = document.createElement("div")
        nombre.innerText = w.nombre
        a.appendChild(img)
        a.appendChild(nombre)
        contenedor.appendChild(a)
    })
}
function buscar(texto) {
    let filtrados = warframes.filter(w =>
        w.nombre.toLowerCase().includes(texto.toLowerCase())
    )
    mostrar(filtrados)
}
mostrar(warframes)