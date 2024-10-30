// Repaso de Eventos Drag & Drop
/* let DragAndDrop = document.getElementById("DragAndDrop");

DragAndDrop.addEventListener("dragenter", () => {
    console.log("Estás dentro del Elemento HTML");
    DragAndDrop.classList.remove("border-1");
    DragAndDrop.classList.add("border-5");
})

DragAndDrop.addEventListener("drop", () => {
    console.log("Soltaste el archivo!");
    DragAndDrop.classList.remove("border-secondary");
    DragAndDrop.classList.add("border-primary");
    return false;
})

DragAndDrop.addEventListener("dragleave", () => {
    console.log("Estás fuera del Elemento HTML");
    DragAndDrop.classList.remove("border-5");
    DragAndDrop.classList.add("border-1");
}) */

// Repositorios Origen y Destinos
const repositorioOrigen = document.getElementById("repositorioOrigen");
const repositorioDestino = document.getElementById("repositorioDestino");

/* repositorioOrigen.addEventListener("dragenter", (e) => {
    const elementoSeleccionado = e.target;
    //console.log(elementoSeleccionado);
    //console.log("Elemento Seleccionado: #" + elementoSeleccionado.id);
    repositorioOrigen.removeChild(elementoSeleccionado);
}) */

repositorioOrigen.addEventListener("drag", (e) => {
    const elementoSeleccionado = e.target;
    //console.log(elementoSeleccionado);
    //console.log(repositorioOrigen);
    //let nodo = repositorioOrigen.childNodes[2];    
    //repositorioOrigen.removeChild(elementoSeleccionado);
    //repositorioDestino.appendChild(elementoSeleccionado)
    repositorioDestino.addEventListener("dragover", (e) => {
        repositorioDestino.appendChild(elementoSeleccionado)
    })
})