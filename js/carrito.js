let productosEnCarrito = localStorage.getItem('productosEnCarrito');
productosEnCarrito = JSON.parse(productosEnCarrito);

const carritoVacio = document.querySelector('#carrito-vacio');
const carritoProductos = document.querySelector('#carrito-productos');
const carritoAcciones = document.querySelector('#carrito-acciones');
const carritoComprado = document.querySelector('#carrito-comprado');
let botonesEliminar = document.querySelectorAll('.carrito-producto-eliminar');
const botonVaciar = document.querySelector('#carrito-acciones-vaciar');
const total = document.querySelector('#total');
const botonComprar = document.querySelector('#carrito-acciones-comprar');

function cargarProductosCarrito(){
    if(productosEnCarrito && productosEnCarrito.length>0){

        carritoVacio.classList.add('disabled');
        carritoProductos.classList.remove('disabled');
        carritoAcciones.classList.remove('disabled');
        carritoComprado.classList.add('disabled');

        carritoProductos.innerHTML = "";

        productosEnCarrito.forEach(producto => {
            const div = document.createElement('div');
            div.classList.add('carrito-producto');
            div.innerHTML = `
                <img class="carrito-producto-imagen" src=".${producto.imagen}" alt="${producto.titulo}">

                <div class="carrito-producto-titulos">
                    <small>Título</small>
                    <h3>${producto.titulo}</h3>
                </div>

                <div class="carrito-producto-cantidad">
                    <small>Cantidad</small>
                    <p>${producto.cantidad}</p>
                </div>

                <div class="carrito-producto-precio">
                    <small>Precio</small>
                    <p>$${producto.precio}</p>
                </div>

                <div class="carrito-producto-subtotal">
                    <small>Subtotal</small>
                    <p>$${producto.precio * producto.cantidad}</p>
                </div>

                <button class="carrito-producto-eliminar" id="${producto.id}"><i class="bi bi-trash-fill"></i></button>
            `;

            carritoProductos.append(div);
            })

            actualizarBotonesEliminar();
            actualizarTotal();  
    }else{
        carritoVacio.classList.remove('disabled');
        carritoProductos.classList.add('disabled');
        carritoAcciones.classList.add('disabled');
        carritoComprado.classList.add('disabled');
    }

    
}

cargarProductosCarrito();


function actualizarBotonesEliminar(){
    botonesEliminar = document.querySelectorAll('.carrito-producto-eliminar');

    botonesEliminar.forEach(boton => {
        boton.addEventListener('click', eliminarDelCarrito);
    })
}

function eliminarDelCarrito(e){
    const idBoton = e.currentTarget.id;
    const index = productosEnCarrito.findIndex(producto => producto.id === idBoton);

    productosEnCarrito.splice(index, 1);
    cargarProductosCarrito();

    localStorage.setItem('productosEnCarrito', JSON.stringify(productosEnCarrito));
    
}

botonVaciar.addEventListener('click', vaciarCarrito);

function vaciarCarrito(){
    productosEnCarrito.length = 0;
    localStorage.setItem('productosEnCarrito', JSON.stringify(productosEnCarrito));
    cargarProductosCarrito();
}

function actualizarTotal(){
    const totalCalculado = productosEnCarrito.reduce((acc, producto) => acc + (producto.precio * producto.cantidad), 0);
    total.innerText = `$${totalCalculado}`;
}

botonComprar.addEventListener('click', comprarCarrito);

function comprarCarrito(){
    productosEnCarrito.length = 0;
    localStorage.setItem('productosEnCarrito', JSON.stringify(productosEnCarrito));

    carritoVacio.classList.add('disabled');
    carritoProductos.classList.add('disabled');
    carritoAcciones.classList.add('disabled');
    carritoComprado.classList.remove('disabled');
}
