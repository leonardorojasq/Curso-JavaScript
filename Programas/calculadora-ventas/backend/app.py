
import json
from pathlib import Path
from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

# Ruta del archivo JSON
RUTA_PRODUCTOS = Path(__file__).parent / "productos.json"
# __file__: ubicación de app.py.
# .parent: carpeta donde está app.py.
# / "productos.json": construye la ruta al archivo JSON.


# Función para leer los productos
def leer_productos():

    if not RUTA_PRODUCTOS.exists():
        return []

    with open(RUTA_PRODUCTOS, "r", encoding="utf-8") as archivo:
        contenido = archivo.read()

        if not contenido.strip():
            return []

        return json.loads(contenido)


# Función para guardar los productos
def guardar_productos(productos):
    with open(RUTA_PRODUCTOS, "w", encoding="utf-8") as archivo:
        json.dump(productos, archivo, ensure_ascii=False, indent=4)


# Ruta raíz del proyecto
@app.route("/")
def index():
    return "<h1>API 1.0.0</h1>"


# Punto de entrada de los productos
@app.route("/api/productos", methods=['POST'])
def guardar_producto():

    # request: representa la solicitud HTTP que llega al servidor.
    # get_json(): extrae el contenido JSON y lo convierte en un diccionario Python.
    # silent=True: devuelve None si el contenido no es JSON válido.
    datos = request.get_json(silent=True)

    # Verificamos que se hayan recibido datos
    if not isinstance(datos, dict) or not datos:
        return jsonify({
            "error": "No se recibieron datos válidos"
        }), 400

    # Leer los productos existentes
    productos = leer_productos()

    # Agregar el nuevo producto
    productos.append(datos)

    # Guardar la lista actualizada
    guardar_productos(productos)

    print("Producto guardado:", datos)

    return jsonify({
        "mensaje": "Producto guardado correctamente",
        "producto": datos
    }), 201


# Ruta para consultar los productos
@app.route('/api/productos', methods=['GET'])
def obtener_productos():

    productos = leer_productos()
    print(productos)

    return jsonify(productos), 200


# Eliminar productos
@app.route("/api/productos/<id>", methods=['DELETE'])
def eliminar_producto(id):
    productos = leer_productos()

    producto_encontrado = next(
        (producto for producto in productos if str(producto.get("id")) == id),
        None
    )

    if producto_encontrado is None:
        return jsonify({"error": "Producto no encontrado"}), 404

    productos.remove(producto_encontrado)
    guardar_productos(productos)

    return jsonify({
        "mensaje": "Producto eliminado correctamente",
        "producto": producto_encontrado
    }), 200




if __name__ == '__main__':
    app.run(debug=True)
