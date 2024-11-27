const renderFavoritos = async () => {
    const favoritos = await cargarFavoritos();
    let contenidoHTML = "";

    if (await totalFavoritos() > 0) {
        contenidoHTML = `<table class="table">`;

        favoritos.productos.forEach(item => {
            contenidoHTML += `<tr>
            <td><img src="${item.imagen}" alt="${item.nombre}" width="96"></td>
            <td class="text-start align-middle">${item.nombre}</td>
            <td class="text-start align-middle">$${item.precio}</td>
            <td class="text-end align-middle"><button class="btn btn-warning btn-sm" onclick="toggleFavorito(${getUserId()}, ${item.id});" title='Eliminar'><i class="bi bi-heart-fill"></i></button></td>
            </tr>`;
        });

        contenidoHTML += `</table>`;
    } else {
        contenidoHTML = `<div class="alert alert-warning my-5 p-3 text-center" role="alert">No se encontaron Productos Favoritos!</div>`;
    }

    document.getElementById("contenido").innerHTML = contenidoHTML;
}

renderFavoritos();
renderBotonFavoritos();
renderBotonCarrito();
renderUserSection();