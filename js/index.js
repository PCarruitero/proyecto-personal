let contenedor = document.getElementById("lista")
function mostrar(lista) {
    contenedor.innerHTML = ""
    lista.forEach(w => {
        let a = document.createElement("a")
        a.className = "card"
        a.href = "warframe.html?name=" + w.nombre.toLowerCase()
        a.innerText = w.nombre
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