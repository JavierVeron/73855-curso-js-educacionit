// Tipos de Datos Primitivos
/* let nombre = "Leandro"; // String
let edad = 25; // Number
let soltero = true; // Boolean
console.log(soltero);
console.log(typeof(soltero)); */

/* let sosMayorEdad = false

if (sosMayorEdad) {
    alert("Si, sos mayor de edad!")
} else {
    alert("No, no soy mayor de edad!")
} */


/* let academia = "Educación IT"; // Declarar y Asignar un valor
let curso; // Declarar la variable (esta en undefined)
curso = "Curso de JS Avanzado"; // Asignar a la variable curso el texto en string
console.log(curso);
console.log(typeof curso); */


// Objetos
/* const fichaTecnica = {ean:7790895000997, tipoProducto:"Gaseosa"};
console.log(fichaTecnica);
const bebida = {id:1, nombre:"Coca Cola", precio:2000, categoria:"bebidas", fichaTecnica:fichaTecnica};
console.log(bebida);
console.log("Nombre: " + bebida.nombre);
console.log("Precio: $" + bebida.precio);
console.log("Calorías: " + bebida.calorias); // Sale undefined porque no existe esa propiedad en el objeto
bebida.precio = 3000;
bebida.calorias = 120; // si no tenes la propiedad, te la agrega...
console.log(bebida);
console.log("EAN: " + bebida.fichaTecnica.ean); */

// Objetos, Arrays y Funciones RECOMENDABLE definir como CONST
/* console.log(bebida.nombre); */


// Variables por Copia
/* let nombre = "Luis";
let nombre2 = nombre; // Crear una nueva varible con la copia del valor de la variable nombre
console.log(nombre);
console.log(nombre2);
nombre = "Carlos";
console.log(nombre);
console.log(nombre2); */

// Variables del tipo Objetos, Arrays y Funciones guardan valor por referencia
/* const bebida1 = {id:1, nombre:"Coca Cola", precio:2000, categoria:"bebidas"};
const bebida2 = bebida1; // No tiene una copia de bebida1, sino la referencia al objeto bebida1
console.log(bebida1);
console.log(bebida2);
bebida1.nombre = "Pepsi";
bebida1.precio = 1900;
console.log(bebida1);
console.log(bebida2);
const bebida3 = {...bebida1}; // los 3 puntitos es el operador "spread" => desparrama todos las propiedades un objeto en un nuevo objeto (crea un nuevo objeto)
bebida3.nombre = "Sprite";
console.log(bebida3); */


// Arrays
/* const nombres = ["Gustavo", "Luisa", "Luis", "Juan"];
console.log(nombres);
console.log(nombres[1]);
nombres[2] = "Emilia";
console.log(nombres); */


// Funciones
// Opción #1 utilizando la palabra reservada function
/* function saludar() {
    console.log("Hola");
    console.log("Chau");
} */

// Opción #2 definimos una función "anónima"
/* const saludar = function() {
    console.log("Hola");
    console.log("---");
    console.log("Chau");
} */

// Opción #3 definimos una función "flecha" o "arrow function" 
/* const saludar = (nombre) => {
    console.log("Hola, " + nombre);
    console.log("---");
    console.log("Chau");
}

let nombre = "Gustavo";
saludar(nombre);
saludar("Luisa"); */


// BOM
/* window.onload = () => {
    alert("Hola a Todos!")
} */


// DOM
/* console.log(document);
console.log(document.head);
console.log(document.body); */
/* console.log(document.body.children[1])
document.body.children[0].innerHTML = "EDUCACIÓN IT...";
document.body.children[1].innerText = "Curso de <b>JavaScript</b>";
document.body.children[1].innerHTML = "Curso de <b>JavaScript</b>"; // Respeta el código en formato html
document.body.children[1].textContent = "Curso de <b>JavaScript</b>"; */

// getElementById => Busca 1 elemento html por su ID
/* let academia = document.getElementById("academia");
console.log(academia);
academia.innerHTML = "Educación IT";
academia.className = "text-primary display-1";
document.getElementById("curso").innerHTML = "Curso de <b>JavaScript Desarrollador Avanzado</b>"; */

// getElementsByClassName y getElementsByTagName
/* let elementos = document.getElementsByClassName("paises");
console.log(elementos[1]);
elementos[2].innerHTML = "Colombia"; */

// querySelector => Busca 1 elemento html por id, clase o etiqueta
//let elemento = document.querySelector("#academia"); // Para buscar por ID
//let elemento = document.querySelector(".paises"); // Para buscar por Clase
//let elemento = document.querySelector("li"); // Para buscar por Etiqueta
/* let elemento = document.querySelector("li.paises"); // Para buscar por Etiqueta y Clase
console.log(elemento); */

// querySelectorAll => Busca todos los elementos por id, clase o etiqueta
//let paises = document.querySelectorAll(".paises");
/* let paises = document.querySelectorAll("li.paises");
console.log(paises); */

// Dataset => Acceder a elementos html por medio de etiquetas personalizadas
/* let elemento = document.querySelector("p.paises");
console.log(elemento);

if (elemento.dataset.if == "mostrar") {
    elemento.innerHTML = "Nuevo Texto";
} */

// getAttribute => Accede a los atributos del elemento html
/* let elemento = document.querySelector("p.paises");
//let nuevoTexto = "Próximamente voy a estudiar <b>React JS</b>";
let texto = elemento.getAttribute("title");
console.log(texto); */

// createElement => Crear elementos html
/* let parrafo = document.createElement("p");
parrafo.innerHTML = "Esto es un párrafo creado desde JS!";
console.log(parrafo); */

// appendChild => Agregar un elemento html a nuestro html
//document.body.appendChild(parrafo) // Agregar el parrafo al final de los elementos html
let contenedor = document.querySelector(".col.my-5");
//contenedor.appendChild(parrafo); // Agrega al final
//contenedor.prepend(parrafo); // Agrega al comienzo

// createDocumentFragment => crear varios elemento htmls
/* const fragmento = document.createDocumentFragment();
const nombres = ["Gustavo", "Luisa", "Luis", "Juan"];

for (const nombre of nombres) {
    fragmento.innerHTML += "<p>" + nombre.toUpperCase() + "</p>";
}

document.getElementById("contenido").appendChild(fragmento); */


// setAttribute => Permite modificar atributos de un elemento html
/* let textoPais = document.querySelector("p.paises");
textoPais.setAttribute("title", "ESTO LO ESTOY MODIFICANDO DESDE JS!"); */


const agregarTarea = () => {
    let tarea = document.getElementById("tarea");
    let item = document.createElement("li");
    item.innerHTML = tarea.value;
    document.getElementById("tareas").appendChild(item);
    tarea.value = "";
}

// Agregando Eventos a un Elemento HTML
// Opción #1 => addEventListener
//document.getElementById("btnAgregar").addEventListener("click", agregarTarea);
// Opción #2 => propiedad onclick
document.getElementById("btnAgregar").onclick = agregarTarea;