// Proxy
let usuario = {
    nombre:"Ronald",
    apellido:"Conde Coronel",
    edad:25,
    email:"rcc@gmail.com"
}

/* const proxy = new Proxy(usuario, {});
console.log(usuario);
console.log(proxy);
console.log(usuario.nombre);
console.log(usuario.email); // undefined
console.log(proxy.nombre);
console.log(proxy.email); // undefined */

// Redefinir mi objeto usuario como objeto "proxy"
usuario = new Proxy(usuario, {
    get(target, prop) {
        //return "Nada..."
        switch(prop) {
            case "apellido":
                return target[prop].toUpperCase();
            case "edad":
                return target[prop] * 2;
            default:
                return target[prop];
        }
    },
    set(target, prop, value) {
        switch(prop) {
            case "nombre":                     
                if (typeof value == "string") {
                    target[prop] = value.toUpperCase();
                } else {
                    throw new Error("Solo se permiten valores del tipo String!");
                }
                break;
            case "apellido":
                if (typeof value == "string") {
                    target[prop] = value.toUpperCase();
                } else {
                    throw new Error("Solo se permiten valores del tipo String!");
                }
                break;
            case "edad":
                if (typeof value == "number") {
                    target[prop] = value;
                } else {
                    throw new Error("Solo se permiten valores del tipo Number!");
                }
                break;
            default:
                target[prop] = value;
                break;
        }
    }
})

/* // Accediendo a los datos
console.log(usuario);
console.log(usuario.nombre);
console.log(usuario.apellido);
console.log(usuario.edad);
console.log(usuario.email);
// Modificar datos
usuario.nombre = "Luisa";
usuario.apellido = "colón";
usuario.edad = 23;
usuario.email = "luisa@gmail.com";
console.log(usuario.nombre);
console.log(usuario.apellido);
console.log(usuario.edad);
console.log(usuario.email); */


// Otro Ejemplo de Proxy
const contenido = new Proxy({}, {
    set(target, prop, value) {
        document.getElementById(prop).innerHTML = value;
    }
})

contenido.texto1 = "Educación IT";
contenido.texto2 = "Curso de JavaScript Avanzado";


// Iteradores
const nombres = ["Luisa", "Ronald", "Fiama", "Gustavo", "Fabián"];
/* const iterador = nombres[Symbol.iterator]();
let finalizar = false;

while (!finalizar) {
    let objeto = iterador.next(); 
    console.log(objeto.value);
    finalizar = objeto.done;
} */

// Generadores
/* const generador = function * (min, max, nombres) {
    for (let i=min; i<=max; i++) {
        yield nombres[i]
    }
}

let nombres2 = generador(1, 3, nombres);
console.log(nombres2.next());
console.log(nombres2.next());
console.log(nombres2.next());
console.log(nombres2.next()); */


// Storage API
// Crea las storage
localStorage.setItem("nombre", "Santiago Latorre");
localStorage.setItem("nombre2", "Lionel Messi");
sessionStorage.setItem("nombre", "Fiama Monte");

// Accediendo a las Storage
console.log(localStorage.getItem("nombre"));

// Modificar las Storage
localStorage.setItem("nombre", "Santiago La Torre"); // Volver a crea la localStorage
localStorage.nombre = "Santi La Torre"; // Modifico como si fuera objeto
localStorage["nombre"] = "SANTIAGO LA TORRE"; // Modifico como si fuera un Array

// Eliminar Storage
//localStorage.removeItem("nombre2"); // Elimina la localStorage pasada por parámetro

// Eliminar todas las localStorage
//localStorage.clear();
//sessionStorage.clear();

// Total de localStorages
console.log("Total: ", localStorage.length);

// Acceder localStorage por posición
console.log("localStorage #1: ", localStorage.key(1));

// Qué pasa con guardamos objetos y arrays en localStorage?
/* localStorage.setItem("nombres", nombres);
console.log(localStorage.getItem("nombres"));
console.log(typeof localStorage.getItem("nombres")); */

const bebida = {id:1, nombre:"Coca Cola", precio:2000};
const bebidas = [
    {id:1, nombre:"Coca Cola", precio:2000},
    {id:2, nombre:"Pepsi", precio:1800},
    {id:3, nombre:"Sprite", precio:1900}
]
localStorage.setItem("bebida", bebida);
localStorage.setItem("bebidas", bebidas);
console.log(localStorage.getItem("bebida"));
console.log(localStorage.getItem("bebidas"));
localStorage.setItem("edad", 43);
localStorage.setItem("casado", false);
console.log(typeof localStorage.getItem("edad"));
console.log(typeof localStorage.getItem("casado"));

// PROBLEMA: LAS STORAGES SIEMPRE GUARDAN LAS INFORMACIÓN EN FORMATO STRING
// SOLUCIÓN: Usar JSON.stringify() para convertir en formato JSON, y JSON.parse() para parsear y convertir ese JSON en su valor original
localStorage.setItem("bebida", JSON.stringify(bebida));
localStorage.setItem("bebidas", JSON.stringify(bebidas));
console.log(JSON.parse(localStorage.getItem("bebida")));
console.log(JSON.parse(localStorage.getItem("bebidas")));






