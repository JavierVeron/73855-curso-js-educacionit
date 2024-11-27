const renderCarrito = async () => {
    const carrito = await cargarCarrito();
    let contenidoHTML = "";

    if (await totalCarrito() > 0) {
        contenidoHTML = `<table class="table">
        <tr>
        <td colspan="6" class="text-end"><button class="btn btn-warning btn-sm" onclick="vaciarCarrito();">Vaciar Carrito [x]</button></td>
        </tr>`;

        carrito.productos.forEach(item => {
            contenidoHTML += `<tr>
            <td><img src="${item.imagen}" alt="${item.nombre}" width="96"></td>
            <td class="text-start align-middle">${item.nombre}</td>
            <td class="text-start align-middle">$${item.precio}</td>
            <td class="text-start align-middle"><button class="btn btn-warning btn-sm" title="Decrementar" onclick="decrementarItem(${item.id});">-</button> X${item.cantidad} <button class="btn btn-warning btn-sm" title="Incrementar" onclick="incrementarItem(${item.id});">+</button></td>
            <td class="text-start align-middle">$${item.cantidad * item.precio}</td>
            <td class="text-end align-middle"><button class="btn btn-warning btn-sm" onclick="eliminarProducto(${item.id});"><i class="bi bi-trash"></i></button></td>
            </tr>`;
        });

        contenidoHTML += `<tr>
        <td>&nbsp;</td>
        <td colspan="3">Total a Pagar</td>
        <td>$${await sumaCarrito()}</td>
        <td class="text-end"><a href='checkout.html' class="btn btn-warning btn-sm">Checkout</a></td>
        </tr>
        </table>`;
    } else {
        contenidoHTML = `<div class="alert alert-warning my-5 p-3 text-center" role="alert">No se encontaron Productos en el Carrito!</div>`;
    }

    document.getElementById("contenido").innerHTML = contenidoHTML;
}

renderCarrito();
renderBotonFavoritos();
renderBotonCarrito();
renderUserSection();