/*valor de variables globales*/
var colores = document.documentElement.style;



var negro = colores.setProperty('--negro', 'rgb(2, 2, 32)');
var blanco = colores.setProperty('--blanco', 'rgba(207, 109, 207, 0.7)');
var colorUno = colores.setProperty('--color-uno', 'rgb(230, 193, 227)');
var colorDos = colores.setProperty('--color-dos', 'rgb(204, 28, 104)');

/*fUNCIÓN PARA CAMBIAR EL COLOR DE LAS VARIABLES CSS*/

// function cambiarColorVariables(color, ){

// }



/*colores de iconos*/
// const conjuntoIconos = document.getElementsByTagName("svg");

// const NavAbierto = conjuntoIconos[0].firstElementChild;
// const NavCerrado = conjuntoIconos[1].firstElementChild;
// const IconLlamar = conjuntoIconos[2].firstElementChild;

// let colorNavAbierto = colores.getPropertyValue('--negro');

 



// colorNavAbierto.setAttribute("stroke", blanco); 
// colorNavAbierto.setAttribute("fill", blanco); 

// colorNavCerrado.setAttribute("stroke", blanco); 
// colorNavCerrado.setAttribute("fill", blanco); 

// colorIconLlamar.setAttribute("stroke", blanco); 
// colorIconLlamar.setAttribute("stroke", blanco); 












/*llamamos a una función contadora, cuando hay clikc en .foto en contador aunmenta o decrece según la función. Las fotos tienen un número como nombre y su valor se introduce con el método SRC*/
var num=1;

function adelante() {
    num++;
    if (num>3) 
        num=1;
    var foto=document.getElementById("foto");
    return foto.src="img/"+num+".jpg";
}

function atras() {
    num--;
    if (num<1) 
        num=3;
    var foto=document.getElementById("foto");
    return foto.src="img/"+num+".jpg";
}
//al hacer CLICK en .svg se hace TOGGLE en .activo, para que desapezca el menú

const button = document.querySelector('.header__button');
const nav = document.querySelector('.nav');
const openIconMenu = document.querySelector('.header__svg--abierto');
const closeIconMenu = document.querySelector('.header__svg--cerrado');

button.addEventListener('click', ()=>{
   let estadoMenu = nav.classList.toggle('nav__activo');
   estadoMenu === true ? ( closeIconMenu.style.display = 'block') : ( closeIconMenu.style.display = 'none') ;
} )
const enlaceDesplegable = document.querySelector('.nav__a--desplegable');
const submenu = document.querySelector('.nav__menu--desplegable');

enlaceDesplegable.addEventListener('click', ()=>{
    submenu.classList.toggle('nav__menu--activo')

} )









