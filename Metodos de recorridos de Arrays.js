var articulos = [
{ nombre:"bici", costo: "3000"},
{ nombre:"tv", costo: "2500"},
{ nombre:"libro", costo: "320"},
{ nombre:"celular", costo: "10000"},
{ nombre:"laptop", costo: "20000"},
{ nombre:"teclado", costo: "500"},
{ nombre:"Audifonos", costo: "1700"},
];

//metodo de filtracion
var articulosFiltrados = articulos.filter(function(articulo){
    return articulo.costo <= 500
});// trae todos los articulos menores o iguales a 500

//metodo de map
var nombreArticulos = articulos.map(function(articulo){
    return articulo.nombre
});//trae  todos los nombres de los articulos

