/* const productos = [
    {id:1, nombre:"Doble Cuarto de Libra con Queso", calorias:771, descripcion:"Imaginá la sensación del clásico Cuarto de Libra. Imaginalo con un medallón de deliciosa carne 100% vacuna, queso cheddar, cebolla, kétchup y mostaza ¿Listo? Ahora duplicá esa sensación. Ya tenés el Doble Cuarto en la cabeza.", imagen:"https://cache-backend-mcd.mcdonaldscupones.com/media/image/product$kqXt7Sq2/200/200/original?country=ar", precio:15000, categoria:"hamburguesas"},
    {id:2, nombre:"Big Mac", calorias:505, descripcion:"Quizás sean las dos hamburguesas de carne 100% vacuna con esa salsa especial y queso derretido, el toque de cebolla y la frescura de la lechuga o el crocante del pepino, lo que la hace la hamburguesa más famosa del mundo. Un sabor único.", "imagen":"https://cache-backend-mcd.mcdonaldscupones.com/media/image/product$kqX3vl0y/200/200/original?country=ar", precio:14000, categoria:"hamburguesas"},
    {id:3, nombre:"McNífica", calorias:513, descripcion:"En un mundo donde todos buscan lo nuevo todo el tiempo, la McNífica viene a rectificar lo bueno de ser clásico. Carne, queso cheddar, tomate, lechuga y cebolla, acompañados de kétchup, mostaza y mayonesa.", "imagen":"https://cache-backend-mcd.mcdonaldscupones.com/media/image/product$kqXXaUUP/200/200/original?country=ar", precio:13000, categoria:"hamburguesas"},
    {id:4, nombre:"McNuggets 6 unidades", calorias:238, descripcion:"Seis piezas del mejor pollo rebozado sólo para vos. Comelas como quieras: con salsas o solas; todas son igual de deliciosas!", imagen:"https://cache-backend-mcd.mcdonaldscupones.com/media/image/product$kcXp9cg0/200/200/original?country=ar", precio:9000, categoria:"pollo"},
    {id:5, nombre:"Papas Grandes", calorias:339, descripcion:"Calientes, crujientes y deliciosas, tus aliadas perfectas para cualquier comida. Disfrutá de nuestras papas mundialmente famosas, desde la primera hasta la última.", imagen:"https://cache-backend-mcd.mcdonaldscupones.com/media/image/product$kcXXQgnB/200/200/original?country=ar", precio:5000, categoria:"papas"},
    {id:6, nombre:"McFlurry Oreo", calorias:424, descripcion:"Un helado de vainilla que se banca compartir el protagonismo con trocitos de deliciosas galletitas Oreo y la salsa que elijas. Amalo hasta el final.", imagen:"https://cache-backend-mcd.mcdonaldscupones.com/media/image/product$kcX83hlT/200/200/original?country=ar", precio:4000, categoria:"postres"}
]

const cargarProductos = () => {
    return productos;
}

const buscarProducto = (id) => {
    const productos = cargarProductos();

    return productos.find(item => item.id == id);
}

const productoBuscado = 388;
console.log(buscarProducto(productoBuscado) ? "Existe el Producto #" + productoBuscado : "No, no existe el Producto #" + productoBuscado); */

// Ejemplo Servidor Web
// server.mjs
/* import { createServer } from 'node:http';

const server = createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hola Mundo!!!\n');
});

// starts a simple http server locally on port 3000
server.listen(3000, '127.0.0.1', () => {
  console.log('Listening on 127.0.0.1:3000');
}); */

// run with `node server.mjs`