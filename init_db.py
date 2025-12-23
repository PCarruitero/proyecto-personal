import sqlite3
conn = sqlite3.connect("database.db")
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
print("Base de datos creada correctamente")