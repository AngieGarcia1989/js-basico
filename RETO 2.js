var elemento_de_juego;
switch(elemento_de_juego) {
    case piedra == piedra || papel == papel || tijera == tijera:
        console.log("empate");
        break;
    case piedra == papel || papel == piedra:
            console.log("ganas papel");
        break;
    case tijera == piedra || piedra == tijera:
            console.log("gana piedra");
        break;
    case tijera == papel || papel == tijera:
            console.log("gana tijera");
        break;
        default:
            console.log("no es elemento");

    } 