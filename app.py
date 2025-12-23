from flask import Flask, request, jsonify, render_template
import sqlite3
import os
app = Flask(__name__)
BASE_DIR = os.path.dirname(os.path.abspath(__file__))
DB_PATH = os.path.join(BASE_DIR, "database.db")
def conectar_db():
    return sqlite3.connect(DB_PATH)
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
crear_tabla()
@app.route("/")
def index():
    return render_template("index.html")
@app.route("/personajes")
def personajes():
    return render_template("personajes.html")
@app.route("/warframe")
def warframe():
    return render_template("warframe.html")
@app.route("/about")
def about():
    return render_template("about.html")
@app.route("/contacto", methods=["GET", "POST"])
def contacto():
    if request.method == "GET":
        return render_template("contacto.html")
    data = request.json
    if not data:
        return jsonify({"error": "Datos no recibidos"}), 400
    nombre = data.get("nombre", "").strip()
    email = data.get("email", "").strip()
    mensaje = data.get("mensaje", "").strip()
    if not nombre or not email or not mensaje:
        return jsonify({"error": "Todos los campos son obligatorios"}), 400
    if "@" not in email:
        return jsonify({"error": "Email inválido"}), 400
    conn = conectar_db()
    cursor = conn.cursor()
    cursor.execute(
        "INSERT INTO mensajes (nombre, email, mensaje) VALUES (?, ?, ?)",
        (nombre, email, mensaje)
    )
    conn.commit()
    conn.close()
    return jsonify({"success": "Mensaje enviado correctamente"})
if __name__ == "__main__":
    app.run(debug=True)