
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
// const conjuntoIconos = document.getElementsByTagName("svg");

// const colorNavAbierto = conjuntoIconos[0].firstElementChild;
// const colorNavCerrado = conjuntoIconos[1].firstElementChild;
// const colorIconLlamar = conjuntoIconos[2].firstElementChild;

// colorNavAbierto.setAttribute("stroke", "red"); 
// colorNavAbierto.setAttribute("fill", "red"); 

// colorNavCerrado.setAttribute("stroke", "red"); 
// colorNavCerrado.setAttribute("fill", "red"); 

// colorIconLlamar.setAttribute("stroke", "red"); 






