// Proceso asicronico

// Promesas
/* Poseen 3 estados, el estado por defecto es pending (pendiente), fullfilled (resuelva) o rejected (rechaza) */

/* const promesa = new Promise((resolve, rejected) => {
    console.log("Estoy dentro la promesa!");
    //resolve("La promesa se completó!"); // Finalizaría aquí la ejecución de mi promesa
    rejected("La promesa NO SE COMPLETÓ!");
})

console.log(promesa); */

// Otro Ejemplo - Validador de Cupones de Descuento
/* const validarCupon = (importe, cupon) => {
    return new Promise((resolver, rechazar) => {
        if (cupon == "DESCUENTO10") {            
            importe -= importe * 0.1;
            resolver("Cupón válido! $" + importe);
        }
        
        rechazar("Error! Cupón inválido!");
    })
};

console.log(validarCupon(10000, "DESCUENTO10")); */

// Definir una promesa que se completa siempre
/* const productos = [
    {id:1, nombre:"Coca Cola", precio:2000},
    {id:2, nombre:"Pepsi", precio:1800},
    {id:3, nombre:"Seven Up", precio:1800}
]

const getProductos = new Promise((res) => {
    res(productos);
})

console.log(getProductos); */


// Ejemplo de División
/* const division = () => {
    return new Promise((res, rej) => {
        const n1 = parseFloat(prompt("Ingrese Número #1:"));
        const n2 = parseFloat(prompt("Ingrese Número #2:"));

        if (n2 == 0) {
            rej("Valor del Número #2 inválido!")
        }

        res(n1/n2);
    })
}

console.log(division()); */


// Ejemplo de Consulta de API con Promesas
const getAPI = (url) => {
    return new Promise((res, rej) => {
        const xhr = new XMLHttpRequest();
        xhr.responseType = "json";
        xhr.open("GET", url);
        xhr.send();
        xhr.addEventListener("load", () => {
            if (Array.isArray(xhr.response)) {
                res(xhr.response);
            } else {
                rej("Error de Conexión con la API!");
            }  
        })
    })
}

//console.log(getAPI("https://jsonplaceholder.typicode.com/users"));
/* getAPI("https://jsonplaceholder.typicode.com/userss")
.then(resultado => {
    console.log(resultado);
    renderCards(resultado);
})
.catch(error => {
    console.log("ERROR!", error);
    mostrarError(error);
})
.finally(() => {
    console.log("Proceso Finalizado!");
})

const renderCards = (cards) => {
    let contenido = document.getElementById("contenido");
    let contenidoHTML = "";

    cards.forEach(card => {
        contenidoHTML += `<div class="col-md-3">
        <div class="card mb-4">
        <div class="card-body">
            <h5 class="card-title">${card.name}</h5>
            <h6 class="card-subtitle mb-2 text-body-secondary">${card.username}</h6>
            <a href="#" class="card-link" style="font-size:11px;">${card.email}</a>
            <a href="#" class="card-link" style="font-size:11px;">${card.phone}</a>
        </div>
        </div>
        </div>`;
    });

    contenido.innerHTML = contenidoHTML;
}

const mostrarError = (mensaje) => {
    let contenido = document.getElementById("contenido");
    let contenidoHTML = `<div class="col-md-12 text-center p-3">
    <div class="alert alert-danger" role="alert">
    ${mensaje}
    </div>
    </div>`;
    contenido.innerHTML = contenidoHTML;
} */


// Asynct - Await
// Declarar una función asíncrona
/* const obtenerPosts = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts/");
    const data = await response.json(); // obtener el resultado de la promesa
    
    return data;
}

const filtrarPostsUsuario = async (idUsuario, posts) => posts.filter(post => post.userId == idUsuario);

const obtenerCantidadPosts = async (posts) => {
    return posts.length;
}

const Proceso = async (id) => {
    let posts = await obtenerPosts();    
    let postsPorUsuario = await filtrarPostsUsuario(id, posts);    
    let cantidadPostsPorUsuario = obtenerCantidadPosts(postsPorUsuario);

    return cantidadPostsPorUsuario;
}

const mostrarResultado = async (id) => {
    let cantidad = await Proceso(id);
    let contenido = document.getElementById("contenido");
    let contenidoHTML = `<div class="col-md-12 text-center p-3">
    <div class="alert alert-success" role="alert">El Usuario con ID: #${id} tiene un total de Posts: ${cantidad}
    </div>
    </div>`;
    contenido.innerHTML = contenidoHTML;
}

mostrarResultado(5); */

// Pipelines
/* const obtenerNumeros = () => {
    return {
        n1:Number(prompt("Ingrese Número #1:")),
        n2:Number(prompt("Ingrese Número #2:"))
    }
}

const validarNumero2 = (numeros) => {
    if (numeros.n2 == 0) {
        throw new Error("Error! El segundo número es un 0!");
    }

    return numeros;
}

const dividir = (numeros) => {
    return numeros.n1 / numeros.n2;
}

const mostrarResultado = (resultado) => {
    console.log("Resultado División: ", resultado.toFixed(2));
} */

// Ejecutar de forma síncrona (tradicional)
/* let resultado = obtenerNumeros(); // 10 y 2
resultado = validarNumero2(resultado); // 10 y 2
resultado = dividir(resultado); // 5
mostrarResultado(resultado); */

// Repaso del método reduce
/* const productos = [
    {id:1, nombre:"Coca Cola", precio:2000},
    {id:2, nombre:"Pepsi", precio:1800},
    {id:3, nombre:"Seven Up", precio:1800}
]
console.log(productos);
let total = productos.reduce((acumulador, item) => acumulador += item.precio, 0);
console.log("total", total); */

// Aplicar el método reduce para Pipelines
/* const pipe = (inicial, stages) => stages.reduce((resultado, stage) => stage(resultado), inicial);
let numeros = obtenerNumeros();
let procesos = [validarNumero2, divivir];
console.log(numeros);
console.log(procesos);
let resultado = pipe(numeros, procesos, mostrarResultado);
console.log("División:", resultado); */

// Encadenar Promesas
/* const obtenerNumeros = new Promise((res) => {
    res ({
        n1:Number(prompt("Ingrese Número #1:")),
        n2:Number(prompt("Ingrese Número #2:"))
    })
})

const validarNumeros = (objeto) => {
    return new Promise((res, rej) => {
        if (isNaN(objeto.n1)){
            rej("El Número #1 no es número!");
        }

        if (isNaN(objeto.n2)){
            rej("El Número #2 no es número!");
        }

        res(objeto);
    })
}

const validarNumero2 = (objeto) => {
    return new Promise((res, rej) => {
        if (objeto.n2 == 0) {
            rej("El segundo número es un 0!");
        }
    
        res(objeto);
    })
}

const dividir = (objeto) => {
    return new Promise((res) => {
        res(objeto.n1 / objeto.n2);
    })
}

const mostrarResultado = (resultado) => {
    console.log("Resultado División: ", resultado.toFixed(2));
} */

/* obtenerNumeros
.then(resultado => validarNumero2(resultado))
.then(resultado => dividir(resultado))
.then(resultado => mostrarResultado(resultado))
.catch(error => {
    console.error("Error!!!", error);
}) */

// Es equivalente a lo de arriba, más resumido
/* obtenerNumeros
.then(validarNumeros)
.then(validarNumero2)
.then(dividir)
.then(mostrarResultado)
.catch(error => {
    console.error("Error!!!", error);
}) */


// Operaciones
fetch("https://jsonplaceholder.typicode.com/posts/")
.then(response => response.json())
.then(data => {
    let contenido = document.getElementById("contenido");
    let contenidoHTML = "";

    data.forEach(post => {
        contenidoHTML += `<div class="col-md-3">
        <div class="card mb-4">
        <div class="card-body">
            <h5 class="card-title">${post.title}</h5>
            <p class="card-subtitle mb-2 text-body-secondary">${post.body}</p>
        </div>
        </div>
        </div>`;
    });

    contenido.innerHTML = contenidoHTML;
})