// API History
const navegar = (url) => {
    history.pushState({}, '', url)
}   

const botonAtras = () => {
    history.go(-1)
}

const botonAdelante = () => {
    history.go(1)
}

document.querySelector("#btnAtras").addEventListener("click", botonAtras);
document.querySelector("#btnLink").addEventListener("click", () => {
    navegar("servicios.html");
});
document.querySelector("#btnAdelante").addEventListener("click", botonAdelante);