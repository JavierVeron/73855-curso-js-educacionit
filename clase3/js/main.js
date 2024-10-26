// AJAX - Petición con API XmlHttpRequest
/* const consultarApiXML = () => {
    const url = document.querySelector("#url").value;
    const urlError = document.querySelector("#urlError");

    var xhr = new XMLHttpRequest();
    xhr.addEventListener("loading", () => {
        urlError.innerHTML = "Ejecutando...";
        urlError.className = "text-secondary";
    })
    xhr.addEventListener("load", () => {
        if (xhr.status == 200) { // Respuesta OK
            console.log(xhr.response);
        } else {
            urlError.innerHTML = "Error! No se encuentra la URL indicada!";
            urlError.className = "text-danger";
        }
    })
    xhr.open("GET", url); // Obtener la información de la url ingresada
    xhr.send(); // Disparar la petición
} */

/* const consultarApiFetch = () => {
    const url = document.querySelector("#url").value;
    const urlError = document.querySelector("#urlError");
    const divContenido = document.querySelector("#contenido");
    let contenidoHTML = "";

    fetch(url)
    .then(response => response.json())
    .then(data => {
        urlError.innerHTML = "";

        data.forEach(elemento => {
            contenidoHTML += `<div class="card m-3" style="width: 18rem;">
            <div class="card-body">
                <h5 class="card-title">${elemento.title}</h5>
                <p class="card-text">${elemento.body}</p>
            </div>
            </div>`;
        });

        divContenido.innerHTML = contenidoHTML;

        // Ejemplo de localStorage
        //localStorage.setItem("posts", JSON.stringify([{id:1, nombre:"Coca"}, {id:2, nombre:"Pepsi"}])); // con stringify convierte el array en formato json
        //let valor = JSON.parse(localStorage.getItem("posts")); // con parse, parsea es decir convierte el string en formato json al valor original
        //console.log(valor);
        //console.log(10);
        //console.log("10");
    })
    .catch(error => {
        urlError.innerHTML = "Error! No se encuentra la URL indicada! (" + error + ")";
        urlError.className = "text-danger";
        divContenido.innerHTML = "";
    })
} */


// Operaciones con la Api XMLHttpRequest
const operacionesConXML = () => {
    // Ejemplo #1
    /* const getJson = ({url, onLoad}) => {
        const xhr = new XMLHttpRequest();
        xhr.responseType = "json";
        xhr.open("GET", url);
        xhr.addEventListener("load", () => {
            onLoad(xhr.response)
        })
        xhr.send();
    }

    getJson({
        url:document.querySelector("#url").value,
        onLoad:(resultado) => {
            console.log(resultado);
        }
    }) */

    // Ejemplo #2
    /* const getDocument = ({url, onLoad}) => {
        const xhr = new XMLHttpRequest();
        xhr.responseType = "document";
        xhr.open("GET", url);
        xhr.addEventListener("load", () => {                        
            onLoad(xhr.response);
        })
        xhr.send();
    }

    getDocument({
        url:document.querySelector("#url").value,
        onLoad:(resultado) => {
            console.log(resultado); 
        }
    }) */

    // Ejemplo #3
    const getPage = ({url, onLoad}) => {
        const xhr = new XMLHttpRequest();
        //xhr.responseType = "json";
        xhr.open("GET", url);
        xhr.addEventListener("load", () => {                        
            onLoad(xhr.response);
        })
        xhr.send();
    }

    getPage({
        url:document.querySelector("#url").value,
        onLoad:(resultado) => {
            console.log(resultado); 
        }
    })
}



document.querySelector("#btnForm").addEventListener("click", operacionesConXML);