//Manejo de DOM 
const openMenu = document.querySelector('#open-menu');
const closeMenu = document.querySelector('#close-menu');
const aside = document.querySelector('aside');

//Funcion para abrir el menu
openMenu.addEventListener('click', () => {
    aside.classList.add('aside-visible');
})

//Funcion para cerrar el menu
closeMenu.addEventListener('click', () => {
    aside.classList.remove('aside-visible');
})

//En caso de que el usuario toque alguna opcion, se cierra el menu
botonesCategorias.forEach(boton => boton.addEventListener('click', () => {
    aside.classList.remove('aside-visible');
}));