// de esta manera si se cumle una condicion que sea verdad pasa lo otro en este caso el hola
if (true) {
    console.log("hola");
    }
// en este caso si es falsa la afirmacion pasa este hola no se ejecuta 
//y entonces se ejecuta el nojoda
if (false) {
console.log("hola");
} else{
    console.log("nojoda");
}
// en este caso si no es verdadero entonses else if
// y si no es else if es else
var edad =18
if (edad=== 18) {
    console.log("puede votar, es tu primera vez");
    } else if (edad > 18) {
console.log ("puedes votar")
    } else {
 console.log("eres menor no puedes votar")
    }

//ternaria
condition ? true : false;
//ejemplo
var  numero = 1;
var resultado = numero === 1 ? "si soy un uno": "no soy un uno";

// si cambio la variable numero en la consola cambia el resultado 
//usando la ternaria como condicion 

