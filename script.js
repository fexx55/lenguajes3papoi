let juegoSeleccionado = null;

function seleccionarJuego(elemento, nombreJuego) {
    let tarjetas = document.querySelectorAll('.tarjeta');
    for (let i = 0; i < tarjetas.length; i++) {
        tarjetas[i].classList.remove('seleccionado');
    }
    
    elemento.classList.add('seleccionado');
    
    juegoSeleccionado = nombreJuego;
    
    document.getElementById('err-juego').innerHTML = "";
}

function registrar() {
    let nick = document.getElementById('nickname').value;
    let edad = document.getElementById('edad').value;
    let codigo = document.getElementById('codigo').value;

    let registroValido = true;

    let regexNick = /^[a-zA-Z0-9]{3,}$/;
    if (!regexNick.test(nick)) {
        document.getElementById('err-nick').innerHTML = "Debe tener al menos 3 caracteres (sin espacios ni símbolos).";
        registroValido = false;
    } else {
        document.getElementById('err-nick').innerHTML = "";
    }

    if (isNaN(edad) || edad === "" || parseInt(edad) <= 16) {
        document.getElementById('err-edad').innerHTML = "Debe ser un número mayor a 16.";
        registroValido = false;
    } else {
        document.getElementById('err-edad').innerHTML = "";
    }

    if (isNaN(codigo) || codigo.trim() === "" || codigo.length !== 4) {
        document.getElementById('err-codigo').innerHTML = "Debe contener exactamente 4 dígitos numéricos.";
        registroValido = false;
    } else {
        document.getElementById('err-codigo').innerHTML = "";
    }

    if (juegoSeleccionado === null) {
        document.getElementById('err-juego').innerHTML = "Por favor, seleccioná un juego de la grilla antes de continuar.";
        registroValido = false;
    }

    if (registroValido) {
        document.getElementById('seccion-preparacion').classList.remove('oculto');
    }
}

function iniciarPreparacion() {
    let p1 = prompt("¿Cuántas horas por semana dedicás a jugar?");
    let p2 = prompt("¿Preferís jugar solo o en equipo?");
    let p3 = prompt("¿Qué rol ocupás en tu equipo? (Atacante, Defensa, Soporte, etc.)");

    let res1 = (p1 === null || p1.trim() === "") ? "No respondió esta pregunta" : p1;
    let res2 = (p2 === null || p2.trim() === "") ? "No respondió esta pregunta" : p2;
    let res3 = (p3 === null || p3.trim() === "") ? "No respondió esta pregunta" : p3;

    document.getElementById('respuestas-prep').innerHTML = `
        <p><strong>Horas de juego por semana:</strong> ${res1}</p>
        <p><strong>Modalidad preferida:</strong> ${res2}</p>
        <p><strong>Rol en el equipo:</strong> ${res3}</p>
    `;
}