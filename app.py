from flask import Flask, request, jsonify, render_template
import sqlite3
app = Flask(__name__)
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
def conectar_db():
    return sqlite3.connect("database.db")
@app.route("/contacto", methods=["POST"])
def contacto():
    data = request.json
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