const renderCarrito = () => {
    const carrito = cargarCarrito();
    let contenidoHTML = "";

    if (totalCarrito() > 0) {
        contenidoHTML = `<table class="table">
        <tr>
        <td colspan="6" class="text-end"><button class="btn btn-warning btn-sm" onclick="vaciarCarrito();">Vaciar Carrito [x]</button></td>
        </tr>`;

        carrito.forEach(item => {
            contenidoHTML += `<tr>
            <td><img src="${item.imagen}" alt="${item.nombre}" width="96"></td>
            <td class="text-start align-middle">${item.nombre}</td>
            <td class="text-start align-middle">$${item.precio}</td>
            <td class="text-start align-middle">X${item.cantidad}</td>
            <td class="text-start align-middle">$${item.cantidad * item.precio}</td>
            <td class="text-end align-middle"><button class="btn btn-warning btn-sm" onclick="eliminarProducto(${item.id});"><i class="bi bi-trash"></i></button></td>
            </tr>`;
        });

        contenidoHTML += `<tr>
        <td>&nbsp;</td>
        <td colspan="3">Total a Pagar</td>
        <td>$${sumaCarrito()}</td>
        <td class="text-end"><button class="btn btn-warning btn-sm" onclick="finalizarCompra();">Finalizar Compra</button></td>
        </tr>
        </table>`;
    } else {
        contenidoHTML = `<div class="alert alert-warning my-5 p-3 text-center" role="alert">No se encontaron Productos en el Carrito!</div>`;
    }

    document.getElementById("contenido").innerHTML = contenidoHTML;
}

renderCarrito();
renderBotonCarrito();