var estudiantes = ["juan","matias","hachiko"]

function saludarEstudiantes(estudiante){
console.log(`hola, ${estudiante}`);
}

for(var i = 0;i < estudiantes.length; i++){
    saludarEstudiantes(estudiantes[i])
}// trae primero a maria y a medida q incrementa trae a uno por uno con 
//la funcion 

//otra manera de hacerlo es 
for(var estudiante of estudiantes){
    saludarEstudiantes(estudiante);
}