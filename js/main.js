//Array para agregar los productos
let productos = [];

//Llamado al JSON para obtener los productos y agregar al array "productos"
async function obtenerProductos() {
  try {
    const response = await fetch("./js/productos.json");
    const data = await response.json();
    productos = data;
    cargarProductos(productos);
  } catch (error) {
    console.error("Error al cargar los productos:", error);
  }
}

obtenerProductos();

//Variabes, manejo de DOM
const contenedorProductos = document.querySelector('#contenedor-productos');
const botonesCategorias = document.querySelectorAll('.boton-categoria');
const tituloPrincipal = document.querySelector('#titulo-principal');
let botonesAgregar = document.querySelectorAll('.producto-agregar');
const numerito = document.querySelector('#numerito');

//Funcion para mostrar los productos en venta
function cargarProductos(productosElegidos){

    contenedorProductos.innerHTML = "";

    productosElegidos.forEach(producto => {
    
        const div = document.createElement('div');
        
        div.classList.add('producto');

        div.innerHTML = `
            <img class="producto-imagen" src="${producto.imagen}" alt="${producto.titulo}">

            <div class="producto-detalles">
                <h3 class="producto-titulo">${producto.titulo}</h3>
                <p class="producto-precio">Precio: $${producto.precio.toLocaleString("es-AR")}</p>
                <button class="producto-agregar" id="${producto.id}">Agregar</button>
            </div>
        `;

        contenedorProductos.append(div);
    })
    actualizarBotonesAgregar();
}



//Manejo de eventos en el menu, dependiendo la seccion que elija el usuario
botonesCategorias.forEach(boton => {
    boton.addEventListener('click', (e) => {
        
        botonesCategorias.forEach(boton => boton.classList.remove('active'));

        e.currentTarget.classList.add('active');

        if(e.currentTarget.id != 'todos'){
            const productoCategoria = productos.find(producto => producto.categoria.id === e.currentTarget.id);
            tituloPrincipal.innerText = productoCategoria.categoria.nombre;
            const productosBoton = productos.filter(producto => producto.categoria.id === e.currentTarget.id);
        
             cargarProductos(productosBoton);
        } else{
            tituloPrincipal.innerText = 'Todos los productos';
            cargarProductos(productos);
        }  
    })
});

//En caso de que el usuario presione el boton de "Agregar", agrega el producto al carriot
function actualizarBotonesAgregar(){
    botonesAgregar = document.querySelectorAll('.producto-agregar');

    botonesAgregar.forEach(boton => {
        boton.addEventListener('click', agregarAlCarrito);
    })
}

//Funcion para agregar productos al carrito
function agregarAlCarrito(e){
    Toastify({
        text: "Producto agregado",
        duration: 3000,
        close: true,
        gravity: "top", // `top` or `bottom`
        position: "right", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
            background: "linear-gradient(to right, #A02014, #e7948c)",
            borderRadius: '2rem',
            textTransform: 'uppercase',
            fontSize: '.75rem'
        },
        offset: {
            x: '1.5rem', // horizontal axis - can be a number or a string indicating unity. eg: '2em'
            y: '1.5rem' // vertical axis - can be a number or a string indicating unity. eg: '2em'
        },
        onClick: function(){} // Callback after click
    }).showToast();

    const idBoton = e.currentTarget.id;

    const productoAgregado = productos.find(producto => producto.id === idBoton);

    if(productosEnCarrito.some(producto => producto.id === idBoton)){
        const index = productosEnCarrito.findIndex(producto => producto.id === idBoton);
        productosEnCarrito[index].cantidad++;
    }else{
        productoAgregado.cantidad = 1;
        productosEnCarrito.push(productoAgregado);
    }

    actualizarNumerito();

    localStorage.setItem('productosEnCarrito', JSON.stringify(productosEnCarrito));
}

//Guarda en LocalStorage el carrito del usuario
let productosEnCarrito;

let productosEnCarritoLocalStorage = localStorage.getItem('productosEnCarrito');    

if(productosEnCarritoLocalStorage){
    productosEnCarrito = JSON.parse(productosEnCarritoLocalStorage);
    actualizarNumerito();
}else{
    productosEnCarrito = [];
}

//Actualiza el numero de productos en el menu, en la seccion "Carrito"
function actualizarNumerito(){
    let nuevoNumerito = productosEnCarrito.reduce((acc, producto) => acc + producto.cantidad, 0);
    numerito.innerText = nuevoNumerito;
}


