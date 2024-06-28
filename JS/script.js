// SELECCION DE ELEMENTOS
const maquinaImagen = document.querySelector(".imagen-maquina");

// JUGADOR OPCIONES
const jugadorPiedra = document.querySelector(".piedra-jugador");
const jugadorPapel = document.querySelector(".papel-jugador");
const jugadorTijera = document.querySelector(".tijera-jugador");

// MARCADOR DE PUNTAJES
const marcadorMaquina = document.querySelector(".puntaje-valor-maquina");
const marcadorJugador = document.querySelector(".puntaje-valor-jugador");

let puntajeMaquina = 0;
let puntajeJugador = 0;

// IMAGEN DE LA MAQUINA
function actualizarImagenMaquina(eleccion) {
    if (eleccion === 1) {
        maquinaImagen.src = "IMG/piedra.png";
    } else if (eleccion === 2) {
        maquinaImagen.src = "IMG/papel.png";
    } else if (eleccion === 3) {
        maquinaImagen.src = "IMG/tijera.png";
    }
}

// FUNCION PARA JUGAR
function jugar(eleccionJugador) {
    const maquinaEleccion = Math.floor(Math.random() * 3) + 1;
    actualizarImagenMaquina(maquinaEleccion);

    if (eleccionJugador === maquinaEleccion) {
        // EMPATE
    } else if (
        (eleccionJugador === 1 && maquinaEleccion === 3) ||
        (eleccionJugador === 2 && maquinaEleccion === 1) ||
        (eleccionJugador === 3 && maquinaEleccion === 2)
    ) {
        puntajeJugador++;
    } else {
        puntajeMaquina++;
    }

    marcadorMaquina.textContent = puntajeMaquina;
    marcadorJugador.textContent = puntajeJugador;

    if (puntajeJugador >= 3 || puntajeMaquina >= 3) {
        anunciarGanador();
    }
}

// SE ANUNCIA EL GANADOR
function anunciarGanador() {
    let mensaje = "";
    if (puntajeJugador >= 3) {
        mensaje = "¡El jugador gana la partida!";
    } else if (puntajeMaquina >= 3) {
        mensaje = "¡La máquina gana la partida!";
    }
    alert(mensaje);
    reiniciarJuego();
}

// REINICIAR EL JUEGO
function reiniciarJuego() {
    puntajeMaquina = 0;
    puntajeJugador = 0;
    marcadorMaquina.textContent = puntajeMaquina;
    marcadorJugador.textContent = puntajeJugador;
    maquinaImagen.src = "IMG/interrogacion.png";
}

// EVENTOS DEL JUGADOR
jugadorPiedra.addEventListener("click", () => {
    if (puntajeJugador < 3 && puntajeMaquina < 3) {
        jugar(1);
    }
});
jugadorPapel.addEventListener("click", () => {
    if (puntajeJugador < 3 && puntajeMaquina < 3) {
        jugar(2);
    }
});
jugadorTijera.addEventListener("click", () => {
    if (puntajeJugador < 3 && puntajeMaquina < 3) {
        jugar(3);
    }
});
