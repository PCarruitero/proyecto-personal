Warframe Wiki — Sistema Web

Proyecto universitario de una aplicación web tipo wiki para explorar Warframes, sus estadísticas y habilidades, con un sistema de contacto integrado.

Información Académica

Curso: Desarrollo de Aplicaciones Web

Proyecto: Warframe Wiki

Año: 2025

Tecnologías: Flask, HTML, CSS, JavaScript, SQLite

Tipo: Proyecto educativo

Autor

Nombre: Piero Carruitero Zea

Carrera: Ingeniería de Sistemas

Descripción

Warframe Wiki es una aplicación web desarrollada con Flask que permite a los usuarios:

Explorar una lista visual de Warframes

Consultar estadísticas y habilidades de cada personaje

Buscar Warframes por nombre

Enviar mensajes a través de un formulario de contacto

Los mensajes se almacenan en una base de datos SQLite.

Funcionalidades

Página principal informativa

Listado de Warframes con buscador en tiempo real

Página de detalle de cada Warframe

Sección "Sobre el proyecto"

Formulario de contacto con validación

Guardado de mensajes en base de datos

Instrucciones para Ejecutar

Clonar el proyecto

git clone https://github.com/tu-usuario/warframe-wiki

cd warframe-wiki

Crear entorno virtual (opcional)

python -m venv venv

venv\Scripts\activate   # Windows

source venv/bin/activate # Linux/Mac

Instalar dependencias

pip install flask

Ejecutar la aplicación

python app.py

Abrir en el navegador

http://127.0.0.1:5000

Rutas principales

Ruta	Descripción

/	Página principal

/personajes	Lista de Warframes

/warframe	Detalle de Warframe

/about	Sobre el proyecto

/contacto	Formulario de contacto
