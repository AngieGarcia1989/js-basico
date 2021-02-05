var persona = {
    edad: 28,
    apellido: "garcia",
    sexo:"femenino"
}

//para acceder a algo especifico 
persona.edad
// asi traemos cada propiedad
//la podemos volver funcion 
 Metodos 
 var miAuto = {
    marca: "toyota",
    modelo: "corola",
    annio:2020,
    detalleDelAuto: function(){
        console.log(`Auto ${this.modelo} ${this.annio}`)
    }
}