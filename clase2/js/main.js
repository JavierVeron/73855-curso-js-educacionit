/* const hacerClick = () => {
    console.log("Hiciste Click en el Botón!");
}

const presionarBoton = () => {
    let contenido = document.getElementById("contenido");
    contenido.innerHTML = "<p>Escribiendo...</p>";
}

const capturarTexto = () => {
    let campoTexto = document.getElementById("campoTexto");
    let contenido = document.getElementById("contenido");
    contenido.innerHTML = "<p>" + campoTexto.value + "</p>";
}

const capturarTextoConEvent = (event) => { // el parámetro que reciba debe ser un event
    let textoIngresado = event.target.value; // capturo el elemento html donde se dispara el evento y obtengo su valor
    let contenido = document.getElementById("contenido");
    contenido.innerHTML = "<p>" + textoIngresado + "</p>";
}

const validarCampo = (event) => {
    if (event.target.value == "") {
        event.target.classList.remove("is-valid");
        event.target.classList.add("is-invalid");
    } else {
        event.target.classList.remove("is-invalid");
        event.target.classList.add("is-valid");
    }    
}

const elegirMoneda = (event) => {
    let monedaSeleccionada = event.target.value;
    let contenido = document.getElementById("contenido");
    contenido.innerHTML = "<p>" + monedaSeleccionada + "</p>";
}

const monstrarMensajeES = () => {
    alert("Hola Mundo!")
}

const monstrarMensajeEN = () => {
    alert("Hello World!")
}

const asignarIdioma = () => {
    const idiomaES = document.getElementById("idiomaES");
    const idiomaEN = document.getElementById("idiomaEN");
    const boton = document.getElementById("boton");

    if (idiomaES.checked) {
        boton.onclick = monstrarMensajeES;
    } else {
        boton.onclick = monstrarMensajeEN;
    }
}

const asignarIdioma2 = (event) => {
    const boton = document.getElementById("boton");
    boton.onclick = event.target.id == "idiomaES" ? monstrarMensajeES : monstrarMensajeEN;
} */


// API Event Target
const hacerClick = () => {
    console.log("Hiciste Click en el Botón!");
}

const hacerClick2 = () => {
    console.log("Hiciste Click en el Botón #2!");
}

const arribaDelBoton = () => {
    console.log("Estás arriba del Botón!");
}

const fueraDelBoton = () => {
    console.log("Estás fuera del Botón!");
}

/* let boton = document.getElementById("boton");
boton.addEventListener("click", hacerClick); // Opción #1 utilizando el addEventListener
boton.addEventListener("click", hacerClick2); // Opción #1 utilizando el addEventListener
boton.addEventListener("mouseover", arribaDelBoton); // Opción #1 utilizando el addEventListener
boton.addEventListener("mouseout", fueraDelBoton); // Opción #1 utilizando el addEventListener
//boton.onclick = hacerClick; // Opción #2 utilizando la propiedad onclick
boton.removeEventListener("click", hacerClick2); // Quitar el evento click para la función hacerClick2 */

/* const capturarNombre = () => {
    let textoIngresado = document.getElementById("nombreIngresado").value;
    alert("Hola, " + textoIngresado);
}

let boton = document.getElementById("boton");
boton.addEventListener("click", capturarNombre); */


// Creando un Event Target Personalizado
/* const Carrito = {
    eventTarget:new EventTarget(),
    items:[],
    agregar:(item) => {
        Carrito.items.push(item);
        Carrito.eventTarget.dispatchEvent(new Event('itemAgregado'));
    },
    quitar:(item) => {
        Carrito.items = Carrito.items.filter(elemento => elemento != item);
        Carrito.eventTarget.dispatchEvent(new Event('itemEliminado'));
    }
}

Carrito.eventTarget.addEventListener("itemAgregado", () => {
    console.log("Se agregó un nuevo Item!");
})
Carrito.eventTarget.addEventListener("itemEliminado", () => {
    console.log("Se eliminó un Item!");
})

Carrito.agregar("Miguel");
Carrito.agregar("Luisa");
Carrito.agregar("Lucas");
Carrito.agregar("Fiama");
console.log(Carrito);
Carrito.quitar("Lucas");
console.log(Carrito); */


// Fases (Bubbling)
/* document.addEventListener("click", (event) => {
    event.stopPropagation();
    console.log("Hiciste Click en alguna parte del DOM!");
}, true)

document.getElementById("boton").addEventListener("click", () => {
    console.log("Hiciste Click en el Botón!");
}, true) */


// Formularios
// Validación de un Formulario con un Botón del tipo "button"
/* const validarFormulario = (event) => {
    event.preventDefault(); // Detiene el envío el Formulario. Utilizarlo cuando tengamos un Form con botón submit
    const campoEmail = document.getElementById("email");
    const emailError = document.getElementById("emailError");
    const campoClave = document.getElementById("clave");
    const claveError = document.getElementById("claveError");

    if (campoEmail.value == "") {
        campoEmail.classList.remove("is-valid");
        campoEmail.classList.add("is-invalid");
        emailError.innerHTML = "Error! Complete el Campo Email!";
        emailError.className = "text-danger";
        return false;
    } else {
        campoEmail.classList.remove("is-invalid");
        campoEmail.classList.add("is-valid");
        emailError.innerHTML = "";
    }

    if (campoClave.value == "") {
        campoClave.classList.remove("is-valid");
        campoClave.classList.add("is-invalid");
        claveError.innerHTML = "Error! Complete el Campo Clave!";
        claveError.className = "text-danger";
        return false;
    } else {
        campoClave.classList.remove("is-invalid");
        campoClave.classList.add("is-valid");
        claveError.innerHTML = "";
    }

    console.log("Se envía el Formulario");
    //document.getElementById("form1").submit(); // Si llegué acá, tengo completos los campos Email y Clave
} */



//document.getElementById("btnForm").addEventListener("click", validarFormulario);


// Check Validity
const validator = document.querySelector("#validation");
validator.addEventListener("submit", (event) => {
    event.preventDefault();
    event.stopPropagation();

    let nombre = event.target[0];
    //console.log(nombre.checkValidity());
    //console.log(nombre.validity);
    
    if (nombre.value.length < 3) {
        nombre.setCustomValidity("Ingrese un nombre con al menos 3 letras!");
    }
})








// Repaso del métodos Find, Filter y Map (Arrays)
/* const nombres = ["Miguel", "Luisa", "Fiama", "Santi"];
console.log(nombres); 
const nombresFiltrados = nombres.filter(item => item != "Fiama"); // Crea un nuevo array a partir de una condición
console.log(nombresFiltrados);
//let nombreEncontrado = nombres.find(item => item == "Fiama");
let nombreEncontrado = nombres.includes("Fiama");
console.log(nombreEncontrado);
const bebidas = [
    {id:1, nombre:"Coca Cola 1.5L", precio:1800, marca:"Coca Cola"},
    {id:2, nombre:"Pepsi", precio:1700, marca:"Pepsi"},
    {id:3, nombre:"Manaos", precio:1500, marca:"Manaos"},
    {id:4, nombre:"Coca Cola 2.0L", precio:2500, marca:"Coca Cola"}
]
console.log(bebidas);
//let bebida = bebidas.includes("Coca Cola");
//let bebida = bebidas.find(item => item.nombre == "Coca Cola");
//let bebida = bebidas.find(item => item.precio >= 2000);
let bebida = bebidas.find(item => item.marca == "Coca Cola");
console.log(bebida);
const bebidasFiltro = bebidas.filter(item => item.marca != "Coca Cola");
const bebidasMap = bebidas.map(item => ({id:item.id, name:item.nombre.toUpperCase(), price:item.precio * 1.1}));
const bebidasMap2 = bebidas.map(item => (item.nombre));
console.log(bebidasFiltro);
console.log(bebidasMap);
console.log(bebidasMap2); */




