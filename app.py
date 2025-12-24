# Importación de librerías
from flask import Flask, request, jsonify, render_template
import sqlite3
import os
# Inicializa Flask
app = Flask(__name__)
# Ruta base y base de datos
BASE_DIR = os.path.dirname(os.path.abspath(__file__))
DB_PATH = os.path.join(BASE_DIR, "database.db")
# Conecta con la base de datos
def conectar_db():
    return sqlite3.connect(DB_PATH)
# Crea la tabla si no existe
def crear_tabla():
    conn = conectar_db()
    cursor = conn.cursor()
    cursor.execute("""
    CREATE TABLE IF NOT EXISTS mensajes (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        nombre TEXT NOT NULL,
        email TEXT NOT NULL,
        mensaje TEXT NOT NULL
    )
    """)
    conn.commit()
    conn.close()
# Ejecuta la creación de tabla al iniciar
crear_tabla()
# Ruta principal
@app.route("/")
def index():
    return render_template("index.html")
# Ruta de personajes
@app.route("/personajes")
def personajes():
    return render_template("personajes.html")
# Ruta de warframe
@app.route("/warframe")
def warframe():
    return render_template("warframe.html")
# Ruta sobre el proyecto
@app.route("/about")
def about():
    return render_template("about.html")
# Ruta de contacto (GET y POST)
@app.route("/contacto", methods=["GET", "POST"])
def contacto():
    # Muestra el formulario
    if request.method == "GET":
        return render_template("contacto.html")
    # Obtiene datos del JSON
    data = request.json
    if not data:
        return jsonify({"error": "Datos no recibidos"}), 400
    # Valida campos
    nombre = data.get("nombre", "").strip()
    email = data.get("email", "").strip()
    mensaje = data.get("mensaje", "").strip()
    if not nombre or not email or not mensaje:
        return jsonify({"error": "Todos los campos son obligatorios"}), 400
    if "@" not in email:
        return jsonify({"error": "Email inválido"}), 400
    # Guarda el mensaje en la base de datos
    conn = conectar_db()
    cursor = conn.cursor()
    cursor.execute(
        "INSERT INTO mensajes (nombre, email, mensaje) VALUES (?, ?, ?)",
        (nombre, email, mensaje)
    )
    conn.commit()
    conn.close()
    # Respuesta exitosa
    return jsonify({"success": "Mensaje enviado correctamente"})
# Ejecuta la app
if __name__ == "__main__":
    app.run(debug=True)