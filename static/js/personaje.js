/* Contenedor donde se mostrarán las tarjetas */
let contenedor = document.getElementById("lista")
/* Muestra la lista de warframes en pantalla */
function mostrar(lista) {
    contenedor.innerHTML = "" // Limpia el contenedor
    lista.forEach(w => {
        let a = document.createElement("a")
        a.className = "card"
        a.href = "warframe?name=" + w.nombre.toLowerCase()
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
/* Filtra la lista según el texto buscado */
function buscar(texto) {
    let filtrados = warframes.filter(w =>
        w.nombre.toLowerCase().includes(texto.toLowerCase())
    )
    mostrar(filtrados)
}
/* Muestra todos al cargar */
mostrar(warframes)