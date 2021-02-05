var estudiantes = ["juan","matias","hachiko","pepa"]

function saludarEstudiantes(estudiante){
    console.log(`hola,${estudiante}`);
}

while (estudiantes.length > 0){
var estudiante= estudiante.shift();
saludarEstudiantes(estudiante)
}

//va a traer los nombres primero los cuatro
//luego trae tres, dos y uno hasta que el atamaño llega a cero
//de esta manera recorre el array