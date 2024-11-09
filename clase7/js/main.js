// Creando objetos
/* let objeto1 = {id:1, nombre:"Coca Cola"}; // Opción #1
let objeto2 = new Object();  // Opción #2
objeto2.id = 2; 
objeto2.nombre = "Pepsi";
let objeto3 = Object.create({id:3, nombre:"Seven Up", precio:2000});  // Opción #3
console.log(objeto1);
console.log(objeto2);
console.log(objeto3);
console.log(`${objeto1.nombre} (${objeto1.id})`);
console.log(`${objeto2.nombre} (${objeto2.id})`);
console.log(`${objeto3.nombre} (${objeto3.id})`);
console.log(typeof objeto1);
console.log(typeof objeto2);
console.log(typeof objeto3); */
/* objeto3.prototype = {
    precioIVA:() => {
        return this.precio * 1.21
    }
} */
//console.log("Precio", objeto3.precio);
//console.log("Precio c/IVA", objeto3.precioIVA());


// API Object
/* let objeto3 = {
    id:3,
    nombre:"Seven Up",
    precio:2000,
    get nombreActual() {
        return this.nombre;
    },
    set nombreActual(nuevoNombre) {
        this.nombre = nuevoNombre
    }
};

console.log(objeto3);
console.log(Object.getOwnPropertyDescriptor(objeto3, "nombre"));
console.log(objeto3.nombreActual);
objeto3.nombreActual = "Coca cola";
console.log(objeto3.nombreActual);
console.log(objeto3.nombre); */


// Funciones Constructoras
/* let objeto1 = {id:1, nombre:"Coca Cola"};
let objeto2 = new Object;
objeto2.id = 2;
objeto2.nombre = "Pepsi";
let nombres1 = ["Fabian", "Fiama", "Lucas"];
let nombres2 = new Array("Fabian", "Fiama", "Lucas");
console.log(objeto1);
console.log(objeto2);
console.log(nombres1);
console.log(nombres2); */

// Crear una Función Constructora Producto
/* const Producto = function(nombreProducto, precioProducto, imagenProducto) {
    this.nombre = nombreProducto.toUpperCase(); // Esto es una propiedad (variables)
    this.precio = precioProducto;
    this.imagen = imagenProducto;
    this.precioIVA = Number((precioProducto * 1.21).toFixed(2));
    this.vendido = false;
    this.venderProducto = () => {  // Esto es un método (funciones)
        this.vendido = true;
    }
    this.aplicarDescuento = () => {
        this.precio = this.precio * 0.9;
        this.precioIVA = this.precioIVA * 0.9
    }
}

Producto.prototype = {
    venderProducto:() => {
        this.vendido = true;
    },
    estadoProducto:() => {
        //this.vendido = true;
        return this.vendido ? "Producto VENDIDO!" : "Producto NO VENDIDO!";
    }
}

let productoML = new Producto("Zapatillas Jaguar Oficial Deportiva", 21840, "https://http2.mlstatic.com/D_NQ_NP_913614-MLA79341144608_092024-O.webp")
console.log(productoML);
//console.log(productoML.nombre);
//console.log(productoML.precio);
productoML.aplicarDescuento();
productoML.venderProducto();
console.log(productoML.estadoProducto());
console.log(productoML); */


// Clases
/* const productoML1 = new Producto("Chevrolet Trailblazer 2.8 Nueva Ltz Tdci 200cv", 50296007, "https://http2.mlstatic.com/D_NQ_NP_691178-MLA80283747114_112024-O.webp", `*EL PRECIO CORRESPONDE AL ANTICIPO
    *EL SALDO EN CUOTAS FIJAS EN PESOS
    *UNIDADES FISICAS DE STOCK CON NRO DE MOTOR Y CHASIS
    *COMPRA TU 0KM DE LA FORMA MAS SEGURA
    **ENTREGA INMEDIATA**`);
console.log(productoML1);
productoML1.renderProducto(); */

/* let Producto2 = class {
    constructor(nombreProducto, precioProducto, imagenProducto) {
        this.nombre = nombreProducto.toUpperCase(); // Esto es una propiedad (variables)
        this.precio = precioProducto;
        this.imagen = imagenProducto;
    }
}

const productoML2 = new Producto2("Zapatillas Jaguar Oficial Deportiva", 21840, "https://http2.mlstatic.com/D_NQ_NP_913614-MLA79341144608_092024-O.webp")
console.log(productoML2); */

/* let autoML = new Auto("Chevrolet", "Trailblazer 2.8 Nueva Ltz Tdci 200cv", 2024, 4);
autoML.venderAuto();
console.log(autoML); */


// Subclases
/* let mascota1 = new Perro("Mora");
mascota1.hablar()
mascota1.tieneCollar();
console.log(mascota1);
//mascota1.ronronear()

let mascota2 = new Gato("Amy");
mascota2.hablar()
mascota2.ronronear()
console.log(mascota2); */


// Desafio
let postML = new Post(1, "Samsung Galaxy S24 Ultra 256 GB Negro 12 GB RAM", `Lo que tenés que saber de este producto

    - Dispositivo liberado para que elijas la compañía telefónica que prefieras.
    - Compatible con redes 5G.
    - Pantalla Dynamic AMOLED 2X de 6.8".
    - Tiene 4 cámaras traseras de 200Mpx/50Mpx/10Mpx/12Mpx.
    - Cámaras delanteras de 12Mpx.
    - Batería de 5000mAh con carga inalámbrica.
    - Memoria interna de 256GB.
    - Resistente al agua.
    - Con reconocimiento facial y sensor de huella dactilar.
    - Resistente al polvo.
    - Tarjeta eSIM incluida.`);
console.log(postML);
postML.TypeCheck();
