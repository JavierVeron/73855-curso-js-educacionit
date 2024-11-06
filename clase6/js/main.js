// Funciones
// Ejemplo #1 => Utilizando la palabra reservada function
/* function saludar() {
    alert("Hola Mundo!")
} */

// Ejemplo #2 => Función Anónima => Una función sin nombre asignada a una variable. Esta variable toma el nombre de la función
/* let saludar = function() {
    alert("Hola Mundo!")
} */

// Ejemplo #3 => Función flecha o Arrow Function => Simil al anterior pero usamos el operador "=>" en vez de la palabra "function"
/* const saludar = () => {
    alert("Hola Mundo!")
} */

// Observación es buena práctica definir los objetos, array y funciones como "constantes" (const)

//saludar();

// Ejemplo #4 => Una función que recibe valores
/* function saludar(nombre) {
    alert("Hola, " + nombre)
} */
/* const saludar = (nombre) => {
    alert("Hola, " + nombre);
    alert("Adios!");
}

saludar("Luisa"); */

// Efecto secundario
/* const dividirPorCero = () => {
    let params = new URLSearchParams(location.search);
    let val1 = params.get("valor1");
    let val2 = params.get("valor2");

    return val1/val2;
}

let resultado = dividirPorCero();
console.log(resultado); */


// Código Estratégico
//document.querySelector("#texto").innerHTML = "Educación IT"

// Funciones como valores
/* console.log(function() {
    return 10
});

console.log(10); */

// Funciones Puras
/* const dividirPorCero = () => {
    let params = new URLSearchParams(location.search);
    let val1 = params.get("valor1");
    let val2 = params.get("valor2");

    return val1/val2;
}

const obtenerValores = () => {
    let params = new URLSearchParams(location.search);
    let val1 = Number(params.get("valor1"));
    let val2 = Number(params.get("valor2"));
    let resultado = {n1:val1, n2:val2}

    return resultado
}

const dividir = (valor1, valor2) => {
    return valor1/valor2;
}

const dividirPorCeroRefactor = () => {
    let resultado = obtenerValores();

    return dividir(resultado.n1, resultado.n2);
}

console.log(dividirPorCeroRefactor()); */


// Funciones de Orden Superior
/* let mayorQueAlgo = (valor) => { // Esto sería una función de orden superior, una función que recibe un valor o función (como parámetro) y devuelve una valor o función (como resultado)
    return x => x > valor; // Devolver una función con una condición
}

let mayorQue10 = mayorQueAlgo(10); // 10 param => x => x > 10
console.log(mayorQue10); // x => x > 10

console.log(mayorQue10(20)); // 20 => 20 > 10 => true
console.log(mayorQue10(5)); // 20 => 20 > 10 => false */

// Ejemplo con el método filter de Arrays
/* let bebidas = [
    {id:1, nombre:"Coca Cola", precio:1800, azucar:true},
    {id:2, nombre:"Pepsi Black", precio:1700, azucar:false},
    {id:3, nombre:"Seven Up", precio:1700, azucar:true}
]

const bebidasAzucaradas = bebidas.filter(item => item.azucar == true);
console.log(bebidasAzucaradas); */


// Composición
let bebidas = [
    {id:1, nombre:"Coca Cola", precio:1800, azucar:true},
    {id:2, nombre:"Pepsi Black", precio:1700, azucar:false},
    {id:3, nombre:"Seven Up", precio:1600, azucar:true},
    {id:4, nombre:"Sprite Zero", precio:1700, azucar:false}
]

/* const filtrarProductos = (productos) => {
    return (precio) => {
        return productos.filter(item => item.precio <= precio)
    }
}

const productoAFiltrar = filtrarProductos(bebidas); // ("coca cola") => productos.filter(item => item.nombre == "coca cola");
const productosCoca = productoAFiltrar(1750); // Un array con los elementos que coinciden con la condición
console.log(productosCoca); */


// Callback
/* let bebidaBuscada = bebidas.find((item) => item.precio > 1700);
console.log(bebidaBuscada); */

// Funciones recursivas
/* const buscarProducto = (nombre, posicion, items) => {
    if (posicion == items.length) {
        return undefined;
    }

    if (items[posicion].nombre.toUpperCase() == nombre.toUpperCase()) {
        return items[posicion];
    }

    posicion++;

    return buscarProducto(nombre, posicion, items);
}

let resultado = buscarProducto("seven up2", 0, bebidas)
console.log(resultado); */

// Pipelines
/* const map = (callback) => {
    return async (input) => {
        return input.map(callback)
    }
}

const pipe = (stages) => {
    return async (input) => {
        let resultado = input;
        for (const i in stages) {
            const currentStage = await stages(i);
            resultado = currentStage(resultado);
        }
    }
};

bebidasFiltro = pipe(map(item => (item.nombre.toUpperCase())))
bebidasFiltro(bebidas)
.then(resultado => {    
    console.log(resultado);
}) */


// Loadash
console.log(bebidas);
// Chunk => Agrupa array por un valor definido
/* console.log(_.chunk(bebidas, 2));
console.log(_.chunk(bebidas, 3)); */

// concat => Concatena un nuevo elemento a un array existente
/* const nuevasBebidas = _.concat(bebidas, {id:5, nombre:"Manaos", precio:1400, azucar:true})
console.log(nuevasBebidas); */

// drop => Devuelve un array con los elementos menos el del valor pasado por parámetro
/* let resultado = _.drop(bebidas);
console.log(resultado); */

// remove => Modificar el array original con los valores que no coincidan y devulve un nuevo array con los elementos eliminados
/* const nuevasBebidas = _.remove(bebidas, item => item.precio <= 1600)
console.log(bebidas);
console.log(nuevasBebidas); */

// Variables global y locales
var resultado = 10; // variable global

const sumar = (valor1, valor2) => {
    let resultado = valor1 + valor2; // resultado sería una variable local

    return resultado
}

console.log(resultado);
console.log(sumar(20, 30))
console.log(resultado);

