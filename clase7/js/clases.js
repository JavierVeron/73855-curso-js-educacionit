class Producto {
    constructor(nombreProducto, precioProducto, imagenProducto, descripcionProducto) {
        this.nombre = nombreProducto.toUpperCase(); // Esto es una propiedad (variables)
        this.precio = precioProducto;
        this.imagen = imagenProducto;
        this.descripcion = descripcionProducto;
        this.precioIVA = Number((precioProducto * 1.21).toFixed(2));
        this.vendido = false;
    }

    renderImagen() {
        document.getElementById("imagen_producto").innerHTML = `<img src="${this.imagen}" class="img-fluid" />`;
    }

    renderDescripcion() {
        document.getElementById("descripcion_producto").innerHTML = `<h1>${this.nombre}</h1>
        <h3>$${this.precio}</h3>
        <p>${this.descripcion}</p>`;
    }

    renderProducto() {
        this.renderImagen();
        this.renderDescripcion();
    }
}

class Auto {
    constructor(marca, modelo, anio, puertas) {
        this.marca = marca;
        this.modelo = modelo;
        this.anio = anio;
        this.puertas = puertas;
        this.vendido = false;
    }

    venderAuto() {
        this.vendido = true;
    }
}

class Animal {
    constructor(nombre) {
        this.nombre = nombre;
        this.collar = false;
    }
    hablar() {
        console.log(this.nombre + ' hace un ruido.');
    }
}

class Perro extends Animal {
    /* constructor() {
        //this.collar = false;
    } */
    hablar() {
        console.log(this.nombre + ' ladra.');
    }
    tieneCollar() {
        this.collar = true;
    }
}

class Gato extends Animal {
    ronronear() {
        console.log(this.nombre + ' ronronea.');
    }
}