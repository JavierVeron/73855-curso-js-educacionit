const renderProductos = () => {
    const productos = cargarProductos();
    let parametros = new URLSearchParams(location.search);
    let categoria = parametros.get("categoria");
    const productosFiltro = categoria ? productos.filter(item => item.categoria == categoria) : productos;
    let contenidoHTML = "";

    productosFiltro.forEach(item => {
        contenidoHTML += `<div class="col-md-2">
        <a href="${"producto.html?id=" + item.id}" class="text-decoration-none text-dark">
            <div class="card border-0 mb-3 text-center">
                <img src="${item.imagen}" class="img-fluid" alt="${item.nombre}">
                <div class="card-body">
                    <p class="card-text">${item.nombre}<br>$${item.precio}</p>
                </div>
            </div>
        </a>
        </div>`;
    });

    document.getElementById("contenido").innerHTML = contenidoHTML;
}

renderProductos();
renderBotonCarrito();