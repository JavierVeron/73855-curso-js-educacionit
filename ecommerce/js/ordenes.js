const renderOrdenes = async () => {
    const ordenes = await cargarOrdenes();    
    let contenidoHTML = "";

    if (await totalOrdenes() > 0) {        
        ordenes.ordenes.forEach(datos => {                     
            contenidoHTML += `<table class="table">`;
            contenidoHTML += `<tr>
            <td>${datos.datosCliente.nombre}</td>
            <td>${datos.datosCliente.email}</td>
            </tr>
            <tr>
            <td>${datos.datosCliente.direccion}</td>
            <td>${datos.datosCliente.ciudad}</td>
            </tr>
            <tr>
            <td colspan='2'>
            <table class="table">`;
            datos.productos.forEach(item => {
                contenidoHTML += `<tr>
                <td><img src="${item.imagen}" alt="${item.nombre}" width="96"></td>
                <td class="text-start align-middle">${item.nombre}</td>
                <td class="text-start align-middle">$${item.precio}</td>
                </tr>`;
            });
            contenidoHTML += `<tr>
            <td colspan='2'>Pagado</td>
            <td>$${datos.sumaTotal}</td>
            </table>
            </td>
            </tr>
            </table>`;
        });
    } else {
        contenidoHTML = `<div class="alert alert-warning my-5 p-3 text-center" role="alert">No se encontaron Ordenes</div>`;
    }

    document.getElementById("contenido").innerHTML = contenidoHTML;
}

renderOrdenes();
renderBotonFavoritos();
renderBotonCarrito();
renderUserSection();