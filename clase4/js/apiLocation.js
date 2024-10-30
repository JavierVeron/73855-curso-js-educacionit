console.log(location);
// Propiedad HASH => Obtener el anclaje seleccionado HAS
//console.log("Anclaje: ", location.hash);

// Propiedad search
console.log(location.search);
/* let url = location.search.split("?");
let parametros = url[1].split("&");
console.log(parametros); */

const modificarURL = () => {
    let parametros = new URLSearchParams(location.search);
    location.search = "?q=" + document.getElementById("campoBusqueda").value;
}

const obtenerParametro = () => {
    let parametros = new URLSearchParams(location.search);
    document.getElementById("campoBusqueda").value = parametros.get("q");
}

//obtenerParametro();
document.getElementById("btnModificarURL").addEventListener("click", modificarURL);

// Propiedad pathname
console.log(location.pathname);
document.getElementById("campoBusqueda").value = location.pathname;

