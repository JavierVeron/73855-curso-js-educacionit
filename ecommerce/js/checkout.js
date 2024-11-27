const renderCheckout = async () => {
    const carrito = await cargarCarrito();
    let contenidoHTML = "";

    if (await totalCarrito() > 0) {
        contenidoHTML = `<table class="table">`;

        carrito.productos.forEach(item => {
            contenidoHTML += `<tr>
            <td><img src="${item.imagen}" alt="${item.nombre}" width="96"></td>
            <td class="text-start align-middle">${item.nombre}</td>
            <td class="text-start align-middle">$${item.precio}</td>
            <td class="text-start align-middle">X${item.cantidad}</td>
            <td class="text-start align-middle">$${item.cantidad * item.precio}</td>
            </tr>`;
        });

        contenidoHTML += `<tr>
        <td>&nbsp;</td>
        <td colspan="3">Total a Pagar</td>
        <td>$${await sumaCarrito()}</td>
        </tr>
        </table>`;
    } else {
        contenidoHTML = `<div class="alert alert-warning my-5 p-3 text-center" role="alert">No se encontaron Productos en el Carrito!</div>`;
    }

    document.getElementById("contenido").innerHTML = contenidoHTML;
}

renderCompletarPerfil();
renderCheckout();
renderBotonFavoritos();
renderBotonCarrito();
renderUserSection();