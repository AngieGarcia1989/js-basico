var frutas =[manzana,banano,uva,mandarina,kiwi];
console.log(frutas)

//imprime el array

console.log(frutas.length);
//imprime el tamaño es decir 5 

console.log(frutas[0]);
//imprime manzana

console.log(frutas[2]);
//imprime uva

var mas_frutas = frutas.push("tomate") // de esta manera agrego un elemento al final
var menos_frutas = frutas.pop("tomate") // de esta manera quito un elemento
var nueva_fruta = frutas.unshift("tomate") // de esta manera ubica el elemento al principio de el array
var borrar_fruta = frutas.shift("tomate")// siempre va a borarr el primer elemento 
var pisicion = frutas.indexOf("mandarina")

posicion 
4// de esta manera se ve en que posicion esta el elemento que queremos buscar en un array