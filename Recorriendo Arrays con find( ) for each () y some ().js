var articulos = [
    { nombre:"bici", costo: "3000"},
    { nombre:"tv", costo: "2500"},
    { nombre:"libro", costo: "320"},
    { nombre:"celular", costo: "10000"},
    { nombre:"laptop", costo: "20000"},
    { nombre:"teclado", costo: "500"},
    { nombre:"Audifonos", costo: "1700"},
    ];

    //metodo find
    var encuentraArticulo = articulos.find(function(articulo){
        return articulo.nombre === "laptop"
    });// trae toda la informacion de laptop

// metodo foreach
articulos.forEach(function(articulo){
console.log(articulo.nombre);
})// trae los nombres de los objetos que tengo dentro del array articulos 