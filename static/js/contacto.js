/* Captura el envío del formulario */
document.querySelector(".form-contacto").addEventListener("submit", function (e) {
    e.preventDefault() // Evita recargar la página
    /* Obtiene y limpia los valores */
    const nombre = document.getElementById("nombre").value.trim()
    const email = document.getElementById("email").value.trim()
    const mensaje = document.getElementById("mensaje").value.trim()
    /* Valida que no estén vacíos */
    if (nombre === "" || email === "" || mensaje === "") {
        alert("Todos los campos son obligatorios")
        return
    }
    /* Envía los datos al servidor */
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
    /* Convierte la respuesta a JSON */
    .then(res => res.json())
    /* Procesa la respuesta */
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
    /* Maneja errores de conexión */
    .catch(() => {
        alert("No se pudo conectar con el servidor")
    })
})