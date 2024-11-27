const getUserId = () => {
    return JSON.parse(localStorage.getItem("userId")) || null;
}

const cargarProductos = async () => {
    const response = await fetch("http://localhost:3000/productos")
    const data = await response.json();
    
    return new Promise((resolve) => {
        resolve(data);
    })
}

const cargarCarrito = async () => {
    const userId = getUserId();
    const response = await fetch("http://localhost:3000/carrito/" + userId);

    if (!response.ok) {
        await fetch("http://localhost:3000/carrito", {
            method: "POST",
            body: JSON.stringify({id:userId, productos:[]}),
            headers: {"Content-type": "application/json; charset=UTF-8"}
        })

        response = await fetch("http://localhost:3000/carrito/" + userId);
    }

    const data = await response.json();
    
    return new Promise((resolve) => {        
        resolve(data);
    })
}

const cargarFavoritos = async () => {
    const userId = getUserId();
    let response = await fetch("http://localhost:3000/favoritos/" + userId);
        
    if (!response.ok) {     
        await fetch("http://localhost:3000/favoritos", {
            method: "POST",
            body: JSON.stringify({id:userId, productos:[]}),
            headers: {"Content-type": "application/json; charset=UTF-8"}
        })

        response = await fetch("http://localhost:3000/favoritos/" + userId);        
    }

    const data = await response.json();
        
    return new Promise((resolve) => {
        resolve(data);
    })
}

const cargarOrdenes = async () => {
    const userId = getUserId();
    let response = await fetch("http://localhost:3000/ordenes/" + userId);
        
    if (!response.ok) {     
        await fetch("http://localhost:3000/ordenes", {
            method: "POST",
            body: JSON.stringify({id:userId, ordenes:[]}),
            headers: {"Content-type": "application/json; charset=UTF-8"}
        })

        response = await fetch("http://localhost:3000/ordenes/" + userId);        
    }

    const data = await response.json();
        
    return new Promise((resolve) => {
        resolve(data);
    })
}

const guardarCarrito = async(productos) => {
    const userId = getUserId();
    await fetch("http://localhost:3000/carrito/" + userId, {
        method: "PUT",
        body: JSON.stringify({productos:productos}),
        headers: {"Content-type": "application/json; charset=UTF-8"}
    })
}

const guardarFavorito = async(favoritos) => {
    const userId = getUserId();
    await fetch("http://localhost:3000/favoritos/" + userId, {
        method: "PUT",
        body: JSON.stringify({productos:favoritos}),
        headers: {"Content-type": "application/json; charset=UTF-8"}
    })
}

const estaEnElCarrito = async (id) => {
    const carrito = await cargarCarrito();

    return new Promise((resolve) => {
        resolve(carrito.productos.some(item => item.id == id));
    })
}

const estaEnElFavorito = async (productId) => {
    const favoritos = await cargarFavoritos();

    return new Promise((resolve) => {
        resolve(favoritos.productos.some(item => item.id == productId));
    })
}

const agregarProducto = async (id) => {
    const carrito = await cargarCarrito();
    let producto = "";
    
    if (await estaEnElCarrito(id)) {
        producto = carrito.productos.find(item => item.id == id);        
        producto.cantidad += 1;
    } else {        
        const productos = await cargarProductos();
        producto = productos.find(item => item.id == id);
        producto.cantidad = 1;
        carrito.productos.push(producto);
    }

    await guardarCarrito(carrito.productos);
    await renderBotonCarrito();
    mostrarMensaje("Agregaste " + producto.nombre + " al Carrito!", "ok");
}

const decrementarItem = async (productId) => {
    const carrito = await cargarCarrito();
    const producto = carrito.productos.find(item => item.id == productId);
    
    if (producto.cantidad > 1) {
        producto.cantidad -= 1;
        await guardarCarrito(carrito.productos);
    } else {
        await eliminarProducto(productId);
    }

    await renderBotonCarrito();
    await renderCarrito();
}

const incrementarItem = async (productId) => {
    const carrito = await cargarCarrito();
    const producto = carrito.productos.find(item => item.id == productId);        
    producto.cantidad += 1;
    await guardarCarrito(carrito.productos);
    await renderBotonCarrito();
    await renderCarrito();
}

const toggleFavorito = async (productId) => {
    const favoritos = await cargarFavoritos();

    if (await estaEnElFavorito(productId)) {
        const nuevosFavoritos = favoritos.productos.filter(item => item.id != productId);
        await guardarFavorito(nuevosFavoritos);
    } else {
        const productos = await cargarProductos();
        const producto = productos.find(item => item.id == productId);
        favoritos.productos.push(producto);
        await guardarFavorito(favoritos.productos);
    }

    await renderBotonFavoritos();
}

const totalCarrito = async () => {
    const carrito = await cargarCarrito(); 
    
    return new Promise((resolve) => {
        resolve(carrito.productos.reduce((acum, item) => acum += item.cantidad, 0));
    })
}

const totalFavoritos = async () => {
    const userId = getUserId();
    const favoritos = await cargarFavoritos(userId);    
    
    return new Promise((resolve) => {
        resolve(favoritos.productos.length);
    })
}

const totalOrdenes = async () => {
    const ordenes = await cargarOrdenes(); 
    
    return new Promise((resolve) => {
        resolve(ordenes.ordenes.length);
    })
}

const sumaCarrito = async () => {
    const carrito = await cargarCarrito();
    
    return new Promise((resolve) => {
        resolve(carrito.productos.reduce((acum, item) => acum += item.cantidad * item.precio, 0));
    })
}

const vaciarCarrito = async () => {
    await guardarCarrito([]);    
    await renderBotonCarrito();
    await renderCarrito();
    mostrarMensaje("Se vació el Carrito!", "ok");
}

const renderBotonCarrito = async () => {
    let contenidoHTML = "";

    if (isLoggedIn()) {
        contenidoHTML = `<a href="carrito.html" class="text-decoration-none mx-1">
            <button type="button" class="btn btn-warning position-relative">
                <i class="bi bi-cart"></i> <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">${await totalCarrito()}</span>
            </button>
        </a>`;
    }

    document.getElementById("totalCarrito").innerHTML = contenidoHTML;
}

const renderBotonFavoritos = async () => {
    let contenidoHTML = "";

    if (isLoggedIn()) {
        contenidoHTML = `<a href="favoritos.html" class="text-decoration-none mx-1">
            <button type="button" class="btn btn-warning position-relative">
                <i class="bi bi-heart"></i> <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">${await totalFavoritos()}</span>
            </button>
        </a>`;
    }

    document.getElementById("totalFavoritos").innerHTML = contenidoHTML;
}

const renderUserSection = () => {
    let contenidoHTML = "";

    if (isLoggedIn()) {
        contenidoHTML = `<a href="modificar_perfil.html" class="text-decoration-none mx-1">
            <button type="button" class="btn btn-warning position-relative" title='Modificar Perfil'>
                <i class="bi bi-person-circle"></i>
            </button>
        </a>
        <a href="ordenes.html" class="text-decoration-none mx-1">
            <button type="button" class="btn btn-warning position-relative" title='Ordenes'>
                <i class="bi bi-bag-check"></i>
            </button>
        </a>
        <button type="button" class="btn btn-warning position-relative" title='Cerrar Sesión' onclick="cerrarSesion();">
            <i class="bi bi-box-arrow-right"></i>
        </button>`;
    } else {
        contenidoHTML = `<a href="ingresar.html" class="btn btn-warning px-5">Ingresar</a>`;
    }

    document.getElementById("userSection").innerHTML = contenidoHTML;
}

const eliminarProducto = async (productId) => {
    const carrito = await cargarCarrito();
    const nuevoCarrito = carrito.productos.filter(item => item.id != productId);
    await guardarCarrito(nuevoCarrito);
    await renderBotonFavoritos();
    await renderBotonCarrito();
    await renderCarrito();
    mostrarMensaje("El producto #" + id + " se eliminó correctamente!", "ok");
}

const mostrarMensaje = (mensaje, tipo = "ok") => {
    Swal.fire({
        position: "top-end",
        icon: tipo == "ok" ? "success" : "error",
        title: mensaje,
        showConfirmButton: false,
        timer: 3000
    });
}

const detalleCompra = async (orden) => {
    const carrito = orden.productos;
    let mensaje = "Detalle de la Compra:\n\n";

    carrito.forEach(item => {
        mensaje += `${item.nombre} x${item.cantidad} $${item.cantidad * item.precio}\n` 
    });

    mensaje += `\nTotal a Pagar: $${await sumaCarrito()}\n\n`;    

    vaciarFormulario();
    await vaciarCarrito();
    await renderBotonCarrito();

    await Swal.fire({
        position: "top-center",
        icon: "success",
        title: mensaje,
        confirmButtonText: "Aceptar",
        showCancelButton: true,
        cancelButtonText: "Cancelar"
    }).then((result) => {
        if (result.isConfirmed) {
            location.href = "index.html";
        }
    });
}

const vaciarFormulario = () => {
    document.getElementById("nombre").value = "";
    document.getElementById("email").value = "";
    document.getElementById("telefono").value = "";
    document.getElementById("direccion").value = "";
    document.getElementById("ciudad").value = "";
}

const generarOrden = async () => {
    const carrito = await cargarCarrito();
    const nombre = document.getElementById("nombre").value;
    const email = document.getElementById("email").value;
    const telefono = document.getElementById("telefono").value;
    const direccion = document.getElementById("direccion").value;
    const ciudad = document.getElementById("ciudad").value;

    const datosCliente = {
        nombre:nombre,
        email:email,
        telefono:telefono,
        direccion:direccion,
        ciudad:ciudad
    }

    const fechaActual = new Date();
    const fecha = `${fechaActual.getDate()}-${fechaActual.getMonth()+1}-${fechaActual.getFullYear()}`; //DD-MM-YYYY

    const orden = {
        datosCliente:datosCliente,
        productos:carrito.productos,
        sumaTotal:await sumaCarrito(),
        fecha:fecha
    }   

    await guardarOrden(orden);
    await detalleCompra(orden);
}

const guardarOrden = async (orden) => {
    const userId = getUserId();
    const ordenes = await cargarOrdenes();
    ordenes.ordenes.push(orden);    

    fetch("http://localhost:3000/ordenes/" + userId, {
        method: "PUT",
        body: JSON.stringify({ordenes:ordenes.ordenes}),
        headers: {"Content-type": "application/json; charset=UTF-8"}
    })
}

const renderCompletarPerfil = async () => {
    const userId = getUserId();
    const usuario = await buscarUsuarioPorId(userId);
    document.getElementById("nombre").value = usuario.nombre;
    document.getElementById("email").value = usuario.email;
    document.getElementById("direccion").value = usuario.direccion;
    document.getElementById("ciudad").value = usuario.ciudad;
}