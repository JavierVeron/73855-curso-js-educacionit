// DOMContentLoaded
document.addEventListener("DOMContentLoaded", () => {
    console.log("Página cargada sin archivos .css y .js");
})

// Window.load
window.onload = () => {
    console.log("Página cargada! Incluyendo todos los archivos .css y .js");
}

// Window.popstate
window.onpopstate = () => {
    console.log("Hubo cambios en tu Página Web! Estamos atentos!");
}

// Capturar cierre de la página
/* window.onclose = (e) => {
    e.stopPropagation();
    e.preventDefault();
    alert("ATENCIÓN TU COMPUTADORA TIENE VIRUS!!!");
    alert("QUEDATE Y VE NUESTROS ANUNCIOS!!!");
    return false;
} */