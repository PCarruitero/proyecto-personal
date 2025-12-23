document.querySelector(".form-contacto").addEventListener("submit", function (e) {
    e.preventDefault()
    const nombre = document.getElementById("nombre").value.trim()
    const email = document.getElementById("email").value.trim()
    const mensaje = document.getElementById("mensaje").value.trim()
    if (nombre === "" || email === "" || mensaje === "") {
        alert("Todos los campos son obligatorios")
        return
    }
    fetch("/contacto", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            nombre: nombre,
            email: email,
            mensaje: mensaje
        })
    })
    .then(res => res.json())
    .then(data => {
        if (data.success) {
            alert("Mensaje enviado correctamente")
            document.querySelector(".form-contacto").reset()
        } else if (data.error) {
            alert(data.error)
        } else {
            alert("Error desconocido")
        }
    })
    .catch(() => {
        alert("No se pudo conectar con el servidor")
    })
})