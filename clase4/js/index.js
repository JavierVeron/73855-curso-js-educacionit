const contenido = document.getElementById("contenido");

const ajax = (url) => {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", url);
    xhr.send();

    return xhr;
}

// Esto no sirve
/* let enlaces = document.querySelectorAll("a");

for (let i=0; i<router.length; i++) {    
    enlaces[i].href = router[i].pagina;
} */

const cargarPaginaInicio = () => {
    let contenidoPagina = ajax("inicio.html");
    contenidoPagina.addEventListener("load", () => {
        contenido.innerHTML = contenidoPagina.response;
    })
}

cargarPaginaInicio();

const enlaces = document.querySelectorAll("a");
enlaces.forEach(enlace => {
    enlace.addEventListener("click", () => {
        let url = enlace.id + ".html";
        let contenidoPagina = ajax(url);
        contenidoPagina.addEventListener("load", () => {
            contenido.innerHTML = contenidoPagina.response;
        })
    })
})