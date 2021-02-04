var piedra;
var papel ;
var tijera;

function juego() {
if (piedra == tijera || tijera == piedra) {
    console.log("ganaste piedra! pisa a tijera")
}else if (piedra == papel || papel == piedra){
    console.log("perdiste piedra gana papel, envuelve")}
else if (piedra == piedra || papel == papel || tijera== tijera){
    console.log("empate")}
else if ( tijera == papel || papel == tijera){
    console.log("ganas tijera")}
    else {
        console.log("sigue jugando")
    }
}

 

