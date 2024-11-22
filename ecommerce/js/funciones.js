const obtenerUserId = () => {
    return JSON.parse(localStorage.getItem("userId")) || null;
}

const generarIdUsuario = () => {
    if (!obtenerUserId()) {
        const userId = Date.now();
        localStorage.setItem("userId", JSON.stringify(userId));
        fetch("http://localhost:3000/carrito", {
            method: "POST",
            body: JSON.stringify({userId:userId, carrito:[]}),
            headers: {"Content-type": "application/json; charset=UTF-8"}
        })
    }
}

const cargarProductos = async () => {
    const response = await fetch("http://localhost:3000/productos")
    const data = await response.json();
    
    return new Promise((resolve) => {
        resolve(data);
    })
}

const cargarCarrito = async () => {
    const userId = obtenerUserId();
    const response = await fetch("http://localhost:3000/carrito/?userId=" + userId)
    const data = await response.json();
    
    return new Promise((resolve) => {        
        resolve(data);
    })
}

const cargarFavoritos = async () => {
    const response = await fetch("http://localhost:3000/favoritos")
    const data = await response.json();
    
    return new Promise((resolve) => {
        resolve(data);
    })
}

const actualizarCarrito = async(carrito) => {
    const userId = obtenerUserId();
    await fetch("http://localhost:3000/carrito/?userId=" + userId, {
        method: "PUT",
        body: JSON.stringify({productos:carrito}),
        headers: {"Content-type": "application/json; charset=UTF-8"}
    })
}

const guardarCarrito = async(producto) => {
    const userId = obtenerUserId();
    await fetch("http://localhost:3000/carrito", {
        method: "POST",
        body: JSON.stringify({userId:userId, producto:producto}),
        headers: {"Content-type": "application/json; charset=UTF-8"}
    })
}

const guardarFavorito = async(producto) => {
    await fetch("http://localhost:3000/favoritos", {
        method: "POST",
        body: JSON.stringify(producto),
        headers: {"Content-type": "application/json; charset=UTF-8"}
    })
}

const eliminarFavorito = async(id) => {
    await fetch("http://localhost:3000/favoritos/" + id, {
        method: "DELETE"
    });
}

const estaEnElCarrito = async (id) => {
    const carrito = await cargarCarrito();

    return new Promise((resolve) => {
        resolve(carrito.carrito.some(item => item.id == id));
    })
}

const estaEnElFavorito = async (id) => {
    const carrito = await cargarFavoritos();

    return new Promise((resolve) => {
        resolve(carrito.some(item => item.id == id));
    })
}

const agregarProducto = async (id) => {
    let producto = "";
    const carrito = await cargarCarrito(userId);
    
    if (await estaEnElCarrito(id)) {
        producto = carrito.carrito.find(item => item.id == id);        
        producto.cantidad += 1;
    } else {        
        const productos = await cargarProductos();
        producto = productos.find(item => item.id == id);
        producto.cantidad = 1;
        carrito.carrito.push(producto);
    }

    await actualizarCarrito(carrito);
    await renderBotonCarrito();
    mostrarMensaje("Agregaste " + producto.nombre + " al Carrito!", "ok");
}

const decrementarItem = async (id) => {
    const carrito = await cargarCarrito();
    producto = carrito.find(item => item.id == id);
    
    if (producto.cantidad > 1) {
        producto.cantidad -= 1;
        await actualizarCarrito(id, producto);
    } else {
        await eliminarProducto(id);
    }

    await renderBotonCarrito();
    await renderCarrito();
}

const incrementarItem = async (id) => {
    const carrito = await cargarCarrito();
    producto = carrito.find(item => item.id == id);        
    producto.cantidad += 1;
    await actualizarCarrito(id, producto);
    await renderBotonCarrito();
    await renderCarrito();
}

const toggleFavorito = async (id) => {        
    if (await estaEnElFavorito(id)) {
        await eliminarFavorito(id);
    } else {
        const productos = await cargarProductos();
        const producto = productos.find(item => item.id == id);
        await guardarFavorito(producto);
    }

    await renderBotonFavoritos();
}

const totalCarrito = async () => {
    const carrito = await cargarCarrito();   
    
    return new Promise((resolve) => {
        resolve(carrito.reduce((acum, item) => acum += item.cantidad, 0));
    })
}

const totalFavoritos = async () => {
    const favoritos = await cargarFavoritos();   
    
    return new Promise((resolve) => {
        resolve(favoritos.length);
    })
}

const sumaCarrito = async () => {
    const carrito = await cargarCarrito();
    
    return new Promise((resolve) => {
        resolve(carrito.reduce((acum, item) => acum += item.cantidad * item.precio, 0));
    })
}

const vaciarCarrito = async () => {
    const carrito = await cargarCarrito();

    carrito.forEach(item => {
        fetch("http://localhost:3000/carrito/" + item.id, {
            method: "DELETE"
        });
    })
    
    await renderBotonCarrito();
    await renderCarrito();
    mostrarMensaje("Se vació el Carrito!", "ok");
}

const renderBotonCarrito = async () => {
    document.getElementById("totalCarrito").innerHTML = await totalCarrito();
}

const renderBotonFavoritos = async () => {
    document.getElementById("totalFavoritos").innerHTML = await totalFavoritos();
}

const eliminarProducto = async (id) => {
    await fetch("http://localhost:3000/carrito/" + id, {
        method: "DELETE"
    });

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
        timer: 2000
    });
}

const detalleCompra = async (orden) => {
    const carrito = orden.productos;
    let mensaje = "Detalle de la Compra:\n\n";

    carrito.forEach(item => {
        mensaje += `${item.nombre} x${item.cantidad} $${item.cantidad * item.precio}\n` 
    });

    mensaje += `\nTotal a Pagar: $${await sumaCarrito()}\n\n`;

    if (await totalCarrito() > 0) {
        console.log("estoy aca");
        
        Swal.fire({
            position: "top-center",
            icon: "success",
            title: mensaje,
            showConfirmButton: true,
            confirmButtonText: "Aceptar"
        }).then((result) => {
            if (result.isConfirmed) {
                vaciarFormulario();
                vaciarCarrito();
                renderBotonCarrito();
                location.href = "index.html";
            }
        });     
    }
}

const vaciarFormulario = () => {
    document.getElementById("nombre").value = "";
    document.getElementById("email").value = "";
    document.getElementById("telefono").value = "";
    document.getElementById("direccion").value = "";
}

const generarOrden = async () => {
    const carrito = await cargarCarrito();
    const nombre = document.getElementById("nombre").value;
    const email = document.getElementById("email").value;
    const telefono = document.getElementById("telefono").value;
    const direccion = document.getElementById("direccion").value;

    const datosCliente = {
        nombre:nombre,
        email:email,
        telefono:telefono,
        direccion:direccion
    }

    const fechaActual = new Date();
    const fecha = `${fechaActual.getDate()}-${fechaActual.getMonth()+1}-${fechaActual.getFullYear()}`; //DD-MM-YYYY

    const orden = {
        datosCliente:datosCliente,
        productos:carrito,
        sumaTotal:await sumaCarrito(),
        fecha:fecha
    }

    fetch("http://localhost:3000/ordenes", {
        method: "POST",
        body: JSON.stringify(orden),
        headers: {"Content-type": "application/json; charset=UTF-8"}
    })

    detalleCompra(orden);
}