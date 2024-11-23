const renderCompletarFormModificarPerfil = async () => {
    let id = getSessionId();
    const usuario = await buscarUsuarioPorId(id);
    document.getElementById("nombre").value = usuario.nombre;
    document.getElementById("email").value = usuario.email;
    document.getElementById("direccion").value = usuario.direccion;
    document.getElementById("ciudad").value = usuario.ciudad;
}

const modificarPerfil = async () => {
    const userId = getUserId();
    const usuario = await buscarUsuarioPorId(userId);
    const nombre = document.getElementById("nombre").value;
    const email = document.getElementById("email").value;
    const clave = document.getElementById("clave").value;
    const direccion = document.getElementById("direccion").value;
    const ciudad = document.getElementById("ciudad").value;
    let usuarioActualizado = {
        nombre:nombre,
        email:email,
        clave:clave ? clave : usuario.clave,
        direccion:direccion,
        ciudad:ciudad
    }

    await fetch("http://localhost:3000/usuarios/" + id, {
        method: "PUT",
        body: JSON.stringify(usuarioActualizado),
        headers: {"Content-type": "application/json; charset=UTF-8"}
    }).then(resultado => {
        mostrarMensaje("Los datos se actualizaron correctamente!");
    })
}

renderCompletarFormModificarPerfil();
renderBotonFavoritos();
renderBotonCarrito();
renderUserSection();