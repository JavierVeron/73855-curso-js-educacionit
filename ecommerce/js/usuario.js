const buscarUsuarioPorId = async (userId) => {
    const response = await fetch("http://localhost:3000/usuarios/" + userId)
    const data = await response.json();
    
    return new Promise((resolve) => {        
        resolve(data);
    })
}

const buscarUsuarioPorEmail = async (email) => {
    const response = await fetch("http://localhost:3000/usuarios?email=" + email)
    const data = await response.json();
    
    return new Promise((resolve) => {        
        resolve(data);
    })
}

const validarUsuario = async (email, clave) => {
    const response = await fetch("http://localhost:3000/usuarios?email=" + email + "&clave=" + clave)
    const data = await response.json();
    
    return new Promise((resolve) => {        
        resolve(data);
    })
}

const registrarUsuario = async () => {
    const nombre = document.getElementById("nombre").value;
    const email = document.getElementById("email").value;
    const clave = document.getElementById("clave").value;
    const direccion = document.getElementById("direccion").value;
    const ciudad = document.getElementById("ciudad").value;
    const usuario = {
        nombre:nombre,
        email:email,
        clave:clave,
        direccion:direccion,
        ciudad:ciudad
    }

    await fetch("http://localhost:3000/usuarios", {
        method: "POST",
        body: JSON.stringify(usuario),
        headers: {"Content-type": "application/json; charset=UTF-8"}
    })

    mostrarMensaje("Gracias por tu Registración!");
    location.href = "login.html";
}

const recuperarContrasena = async () => {
    const email = document.getElementById("email").value; 
    const usuario = await buscarUsuarioPorEmail(email);

    if (usuario.length > 0) {
        const pass = "123456";
        usuario[0].clave = pass;
        
        await fetch("http://localhost:3000/usuarios/" + usuario[0].id, {
            method: "PUT",
            body: JSON.stringify(usuario),
            headers: {"Content-type": "application/json; charset=UTF-8"}
        })
        mostrarMensaje("Tu nueva contraseña es: " + pass);
        location.href = "login.html";
    } else {
        mostrarMensaje("Error! No se encuentra el Usuario Registrado!", "error");
    }
}

const login = async () => {
    const email = document.getElementById("email").value;
    const clave = document.getElementById("clave").value;
    const usuario = await validarUsuario(email, clave);
    console.log(usuario);
    

    if (usuario.length > 0) {
        localStorage.setItem("loggedIn", JSON.stringify(true));
        localStorage.setItem("userId", JSON.stringify(usuario[0].id));
        location.href = "index.html";
    } else {
        mostrarMensaje("Error! No se encuentra el Usuario Registrado!", "error");
    }
}

const isLoggedIn = () => {
    return JSON.parse(localStorage.getItem("loggedIn")) || false;
}

const cerrarSesion = () => {
    localStorage.clear();
    location.href = "index.html";
}