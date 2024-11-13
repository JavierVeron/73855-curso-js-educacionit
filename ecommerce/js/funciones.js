const productos = [
    {id:1, nombre:"Doble Cuarto de Libra con Queso", calorias:771, descripcion:"Imaginá la sensación del clásico Cuarto de Libra. Imaginalo con un medallón de deliciosa carne 100% vacuna, queso cheddar, cebolla, kétchup y mostaza ¿Listo? Ahora duplicá esa sensación. Ya tenés el Doble Cuarto en la cabeza.", imagen:"https://cache-backend-mcd.mcdonaldscupones.com/media/image/product$kqXt7Sq2/200/200/original?country=ar", precio:15000},
    {id:2, nombre:"Big Mac", calorias:505, descripcion:"Quizás sean las dos hamburguesas de carne 100% vacuna con esa salsa especial y queso derretido, el toque de cebolla y la frescura de la lechuga o el crocante del pepino, lo que la hace la hamburguesa más famosa del mundo. Un sabor único.", "imagen":"https://cache-backend-mcd.mcdonaldscupones.com/media/image/product$kqX3vl0y/200/200/original?country=ar", precio:14000},
    {id:3, nombre:"McNífica", calorias:513, descripcion:"En un mundo donde todos buscan lo nuevo todo el tiempo, la McNífica viene a rectificar lo bueno de ser clásico. Carne, queso cheddar, tomate, lechuga y cebolla, acompañados de kétchup, mostaza y mayonesa.", "imagen":"https://cache-backend-mcd.mcdonaldscupones.com/media/image/product$kqXXaUUP/200/200/original?country=ar", precio:13000},
    {id:4, nombre:"McNuggets 6 unidades", calorias:238, descripcion:"Seis piezas del mejor pollo rebozado sólo para vos. Comelas como quieras: con salsas o solas; todas son igual de deliciosas!", imagen:"https://cache-backend-mcd.mcdonaldscupones.com/media/image/product$kcXp9cg0/200/200/original?country=ar", precio:9000},
    {id:5, nombre:"Papas Grandes", calorias:339, descripcion:"Calientes, crujientes y deliciosas, tus aliadas perfectas para cualquier comida. Disfrutá de nuestras papas mundialmente famosas, desde la primera hasta la última.", imagen:"https://cache-backend-mcd.mcdonaldscupones.com/media/image/product$kcXXQgnB/200/200/original?country=ar", precio:5000},
    {id:6, nombre:"McFlurry Oreo", calorias:424, descripcion:"Un helado de vainilla que se banca compartir el protagonismo con trocitos de deliciosas galletitas Oreo y la salsa que elijas. Amalo hasta el final.", imagen:"https://cache-backend-mcd.mcdonaldscupones.com/media/image/product$kcX83hlT/200/200/original?country=ar", precio:4000}
]

/* const cargarProductos = async () => {
    fetch("json/productos.json")
    .then(response => response.json())
    .then(data => {
        return data;
    })
} */

const cargarProductos = () => {
    return productos;
}

const cargarCarrito = () => {
    return JSON.parse(localStorage.getItem("carrito")) || [];
}

const guardarCarrito = (carrito) => {
    localStorage.setItem("carrito", JSON.stringify(carrito));
}

const agregarProducto = (id) => {
    const productos = cargarProductos();
    const producto = productos.find(item => item.id == id);
    const carrito = cargarCarrito();
    carrito.push(producto);
    guardarCarrito(carrito);
    renderBotonCarrito();
    console.log("El producto #" + id + " se agregó correctamente!");
}

const totalCarrito = () => {
    const carrito = cargarCarrito();
    
    return carrito.length;
}

const sumaCarrito = () => {
    const carrito = cargarCarrito();
    
    return carrito.reduce((acum, item) => acum += item.precio, 0);
}

const vaciarCarrito = () => {
    localStorage.removeItem("carrito");
    renderBotonCarrito();
    renderCarrito();
}

const renderBotonCarrito = () => {
    document.getElementById("totalCarrito").innerHTML = totalCarrito();
}

const eliminarProducto = (id) => {
    const carrito = cargarCarrito();
    const carritoActualizado = carrito.filter(item => item.id != id);
    guardarCarrito(carritoActualizado);
    renderBotonCarrito();
    renderCarrito();
    console.log("El producto #" + id + " se eliminó correctamente!");
}