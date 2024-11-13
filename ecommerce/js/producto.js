const renderProducto = () => {
    const productos = cargarProductos();
    let parametros = new URLSearchParams(location.search);
    let id = parametros.get("id");
    const producto = productos.find(item => item.id == id);
    let contenidoHTML = `<div class="col">
        <div class="row">
            <div class="col-md-4 offset-md-2">
                <img src="${producto.imagen}" class="img-fluid" alt="${producto.nombre}">
            </div>
            <div class="col-md-4">
                <h1>${producto.nombre}</h1>
                <h5>${producto.calorias} kcal</h5>
                <p>$${producto.precio}</p>
                <p>${producto.descripcion}</p>
                <p><button class="btn btn-warning" onclick="agregarProducto(${producto.id});">Agregar (+)</button></p>
            </div>    
        </div>
    </div>`;
    document.getElementById("contenido").innerHTML = contenidoHTML;
}

renderProducto();
renderBotonCarrito();