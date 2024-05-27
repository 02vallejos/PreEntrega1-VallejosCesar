//Primera pre entrega
//Alumno: Vallejos Cesar 
//Curso: JavaScript
//Comisión: 57710

alert('Bienvenido al juego Piedra 🪨, Papel 🧻 o Tijera ✂️');

let again = true
while (again) {
    let prp;
    let eleccionJugador = jugadorElige();
    let eleccionMaquina = maquinaElige();
    if (jugar(eleccionJugador, eleccionMaquina)) {
        alert(`Felicidades me ganaste! 🎉\n Jugador ${eleccionJugador} y Maquina ${eleccionMaquina}`);
    } else {
        alert('Perdiste te gane 🤪')
    }
    while (true) {
        prp = prompt('Jugamos de nuevo? Si o No');
        if (prp.toLocaleUpperCase() == 'NO') {
            again = false;
            break;
        } else if (prp.toLocaleUpperCase() == 'SI') {
            break;
        } else {
            alert('Opcion incorrecta 🙃');
        }
    }

}

function jugadorElige() {
    let elige;
    while (true) {
        elige = prompt('Elige Piedra✅, Papel✅ o Tijera✅');
        if (elige.toLocaleUpperCase() == 'PIEDRA' ||
            elige.toLocaleUpperCase() == 'PAPEL' ||
            elige.toLocaleUpperCase() == 'TIJERA') {
            break;
        } else {
            alert('Esa no es una opción 🚫.')
        }
    }
    return elige.toLocaleUpperCase();
}

function maquinaElige() {
    let op = Math.floor(Math.random() * 3 + 1);
    let elige = '';
    switch (op) {
        case 1:
            elige = 'PIEDRA';
            break;
        case 2:
            elige = 'PAPEL';
        case 3:
            elige = 'TIJERA';
            break;
    }
    return elige;
}

function jugar(opPlayer, oPMachine) {
    let win = false;
    if (opPlayer == 'PIEDRA' && oPMachine == 'TIJERA' ||
        opPlayer == 'PAPEL' && oPMachine == 'PIEDRA' ||
        opPlayer == 'TIJERA' && oPMachine == 'PAPEL') {
        win = true;
    }
    return win;
}