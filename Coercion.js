//coercion implicita

var a = 4 + "7";
// va a ser indefinida y arrojara  cuando coloque typeof
// un 47 pegando los dos numeros pero asignandolo como un string
// el signo + genera una concatenacion 

var b = 4 * 7;
//en este caso tambien arroja que sefun el typeof es indefinida
// pero muestra  que es un numero ya que el signo * genera multiplicacion 
//y esta es una asignacion matematica mas clara 


//coercion explicita
// es caundo nosotros obligamos que un valor pase de un tipo a otro tipo

var a = 20;// es un numero
var b = a +"";// genera como resultado un string
var c = String(a);//de esta manera  volvemos el valor de a dentro de c en string