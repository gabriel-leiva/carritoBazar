//Array de Productos
const productos = [
    //Cocina
    {
        id: 'c1',
        titulo: 'Cazuela Nro. 10',
        imagen: './img/cocina/c1-cazuela-n10.jpg',
        categoria: {
            nombre: 'Cocina',
            id: 'cocina'
        },
        precio: 6500
    },
    {
        id: 'c2',
        titulo: 'Hermetico Verde 950ml',
        imagen: './img/cocina/c2-hermetico-rect-verde-950ml.jpg',
        categoria: {
            nombre: 'Cocina',
            id: 'cocina'
        },
        precio: 2000
    },
    {
        id: 'c3',
        titulo: 'Pelapapas',
        imagen: './img/cocina/c3-pelapapas.jpg',
        categoria: {
            nombre: 'Cocina',
            id: 'cocina'
        },
        precio: 4000
    },
    {
        id: 'c4',
        titulo: 'Panquequera Nro.22 Gris',
        imagen: './img/cocina/c4-panquequera-loreto-n22-gris.jpg',
        categoria: {
            nombre: 'Cocina',
            id: 'cocina'
        },
        precio: 16000
    },
    {
        id: 'c5',
        titulo: 'Budinera 26cm Linea Eco',
        imagen: './img/cocina/c5-budinera-26cm-linea-eco.jpg',
        categoria: {
            nombre: 'Cocina',
            id: 'cocina'
        },
        precio: 9900
    },
    {
        id: 'c6',
        titulo: 'Cacerola Tramada 22cm',
        imagen: './img/cocina/c6-cacerola-gris-tramada-22cm.jpg',
        categoria: {
            nombre: 'Cocina',
            id: 'cocina'
        },
        precio: 57000
    },
    {
        id: 'c7',
        titulo: 'Cacerola Daily 26cm',
        imagen: './img/cocina/c7-cacerola-daily-26cm.jpg',
        categoria: {
            nombre: 'Cocina',
            id: 'cocina'
        },
        precio: 57500
    },
    {
        id: 'c8',
        titulo: 'Cacerola con Medidor',
        imagen: './img/cocina/c8-cacerola-24cm-medidor.jpg',
        categoria: {
            nombre: 'Cocina',
            id: 'cocina'
        },
        precio: 43000
    },
    {
        id: 'c9',
        titulo: 'Provoletera con asas',
        imagen: './img/cocina/c9-provoletera-asas.jpg',
        categoria: {
            nombre: 'Cocina',
            id: 'cocina'
        },
        precio: 9600
    },
    {
        id: 'c10',
        titulo: 'Asadera Redondeada',
        imagen: './img/cocina/c10-asadera-redondeada-n6.jpg',
        categoria: {
            nombre: 'Cocina',
            id: 'cocina'
        },
        precio: 40900
    },
    //Mesa
    {
        id: 'm1',
        titulo: 'Vaso Montecarlo',
        imagen: './img/mesa/m1-vaso-montecarlo.jpg',
        categoria: {
            nombre: 'Mesa',
            id: 'mesa'
        },
        precio: 3200
    },
    {
        id: 'm2',
        titulo: 'Copa de Champagne',
        imagen: './img/mesa/m2-copa-champagne.jpg',
        categoria: {
            nombre: 'Mesa',
            id: 'mesa'
        },
        precio: 3800
    },
    {
        id: 'm3',
        titulo: 'Copa de Vino',
        imagen: './img/mesa/m3-copa-vino.jpg',
        categoria: {
            nombre: 'Mesa',
            id: 'mesa'
        },
        precio: 12000
    },
    {
        id: 'm4',
        titulo: 'Tenedor color Negro',
        imagen: './img/mesa/m4-tenedor-negro.jpg',
        categoria: {
            nombre: 'Mesa',
            id: 'mesa'
        },
        precio: 1300
    },
    {
        id: 'm5',
        titulo: 'Cuchara color Negro',
        imagen: './img/mesa/m5-cuchara-negro.jpg',
        categoria: {
            nombre: 'Mesa',
            id: 'mesa'
        },
        precio: 1300
    },
    {
        id: 'm6',
        titulo: 'Cuchillo color Negro',
        imagen: './img/mesa/m6-cuchillo-negro.jpg',
        categoria: {
            nombre: 'Mesa',
            id: 'mesa'
        },
        precio: 1300
    },
    {
        id: 'm7',
        titulo: 'Plato hondo color Negro',
        imagen: './img/mesa/m7-plato-hondo-negro.jpg',
        categoria: {
            nombre: 'Mesa',
            id: 'mesa'
        },
        precio: 8000
    },
    {
        id: 'm8',
        titulo: 'Jarro para Cafe',
        imagen: './img/mesa/m8-jarro-cafe.jpg',
        categoria: {
            nombre: 'Mesa',
            id: 'mesa'
        },
        precio: 1800
    },
    //Baño
    {
        id: 'b1',
        titulo: 'Alfombra para Baño',
        imagen: './img/bano/b1-alfombra-bano-blanco.jpg',
        categoria: {
            nombre: 'Baño',
            id: 'bano'
        },
        precio: 12000
    },
    {
        id: 'b2',
        titulo: 'Dispenser de Jabon',
        imagen: './img/bano/b2-dispenser-jabon-blanco.jpg',
        categoria: {
            nombre: 'Baño',
            id: 'bano'
        },
        precio: 5200
    },
    {
        id: 'b3',
        titulo: 'Set de Baño color Beige',
        imagen: './img/bano/b3-set-bano-beige.jpg',
        categoria: {
            nombre: 'Baño',
            id: 'bano'
        },
        precio: 11654
    },
    {
        id: 'b4',
        titulo: 'Cesto para Baño',
        imagen: './img/bano/b4-cesto-bano-beige.jpg',
        categoria: {
            nombre: 'Baño',
            id: 'bano'
        },
        precio: 11654
    }  
];
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

cargarProductos(productos);

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


