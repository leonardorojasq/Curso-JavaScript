//Código organizado
// Archivo: js/index.js

// ==========================================
// 1. REFERENCIAS AL DOM
// ==========================================

const producto = document.getElementById('description');
const cantidad = document.getElementById('quantity');
const precioCompra = document.getElementById('purchase-price');
const margenGanancia = document.getElementById('profit');
const iva = document.getElementById('tax');
const formulario = document.getElementById('product-form');
const agregarProductoBtn = document.getElementById('agregar-producto')

// Mostarr los productos
const listaProductos = document.getElementById('product-list');
const contadorProductos = document.getElementById('product-count');


// ==========================================
// 2. CLASE PRODUCTO
// ==========================================

class Producto {

    constructor(descripcion, cantidad, precioCompra, margenGanancia, iva) {
        this.descripcion = descripcion;
        this.cantidad = cantidad;
        this.precioCompra = precioCompra;
        this.margenGanancia = margenGanancia;
        this.iva = iva;
    }

    calcularGanancia() {
        let ganancia = this.precioCompra * (this.margenGanancia / 100);
        return ganancia;
    }

    calcularPrecioVenta() {
        let ganancia = this.calcularGanancia();
        let precioVenta = this.precioCompra + ganancia;
        return precioVenta;
    }

    calcularIVA() {
        if (this.iva === "excluded" || this.iva === 0) {
            return 0;
        }

        let precioVenta = this.calcularPrecioVenta();
        let valorIVA = precioVenta * (this.iva / 100);

        return valorIVA;
    }

    calcularPrecioFinal() {
        let precioVenta = this.calcularPrecioVenta();
        let valorIVA = this.calcularIVA();

        let precioTotal = precioVenta + valorIVA;

        return precioTotal;
    }
}

// ==========================================
// 3. EVENTO DEL FORMULARIO
// ==========================================

formulario.addEventListener('submit', async (event) => {

    event.preventDefault();
    
    // Capturar los datos actuales de los inputs
    const productoNuevo = {
        descripcion: producto.value.trim(),
        cantidad: Number(cantidad.value),
        precioCompra: Number(precioCompra.value),
        margenGanancia: Number(margenGanancia.value),
        iva: iva.value === "excluded" ? "excluded" : Number(iva.value)
    };

    // Crear instancia de Producto
    const nuevoProducto = new Producto(
        productoNuevo.descripcion,
        productoNuevo.cantidad,
        productoNuevo.precioCompra,
        productoNuevo.margenGanancia,
        productoNuevo.iva
    );

    // Comprobar resultados este es el eque se manipula
    console.log(nuevoProducto);
    console.log("Ganancia:", nuevoProducto.calcularGanancia());
    console.log("Precio de venta:", nuevoProducto.calcularPrecioVenta());
    console.log("IVA:", nuevoProducto.calcularIVA());
    console.log("Precio final:", nuevoProducto.calcularPrecioFinal());

    const datosJson = JSON.stringify(nuevoProducto)

    try {
        // fetch()	Envía una solicitud HTTP.
        const respuesta = await fetch('http://127.0.0.1:5000/api/productos', {
            method:'POST',// method: 'POST'	Indica que vamos a enviar información.
            headers:{ 'Content-Type': 'application/json'},// headers	Informa que enviamos JSON.
            body: datosJson // body: datosJSON	Contiene el producto serializado.

        });

        const resultado = await respuesta.json(); // await	Espera a que termine la operación.
        if (!respuesta.ok) {
            throw new Error(resultado.error || 'Error al registrar el producto');
        }
        console.log('Respuesta de Flask: ' ,resultado)// respuesta.json()	Convierte la respuesta JSON de Flask en un objeto JavaScript.
        await cargarProductos();
        // Limpiar formulario después de guardar correctamente
        formulario.reset();

    }catch (error) {
        console.log('Error al conectar con flask: ',error)
    }
    
    
    

});

//cargar los productos para mostrarlos
async function cargarProductos() {
    try {
        const respuesta = await fetch('http://127.0.0.1:5000/api/productos');

        if (!respuesta.ok) {
            throw new Error('No se pudieron consultar los productos');
        }

        const productos = await respuesta.json();
        listaProductos.innerHTML = '';

        if (productos.length === 0) {
            listaProductos.innerHTML = `
                <tr>
                    <td colspan="6" class="empty-message">
                        No hay productos registrados.
                    </td>
                </tr>
            `;
            contadorProductos.textContent = '0 productos';
            return;
        }

        productos.forEach((producto) => {
            const fila = document.createElement('tr');
        
            fila.innerHTML = `
                <td>${producto.descripcion}</td>
                <td>${producto.cantidad}</td>
                <td>${producto.precioCompra}</td>
                <td>${producto.margenGanancia}%</td>
                <td>${producto.iva === "excluded" ? "Excluido" : producto.iva + "%"}</td>
                <td>
                    <button type="button">Editar</button>
                    <button type="button">Eliminar</button>
                </td>
            `;
        
            listaProductos.appendChild(fila);
});

contadorProductos.textContent = `${productos.length} productos`;

        console.log('Productos obtenidos:', productos);

    } catch (error) {
        console.error('Error al cargar productos:', error);
    }
}


// Cargar productos al abrir la página
cargarProductos();
