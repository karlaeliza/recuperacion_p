//El método map() crea un nuevo array con los resultados de la llamada a la función indicada aplicados a cada uno de sus elementos.//
//map//
// caso de uso: saber cuantos animales ahi en la granja//
var numbers = [0, 1, 2, 3];
var doubles = numbers.map(function(x) {
   return x * 2;
});

var numbers = [1, 5, 8];
var roots = numbers.map(function(num) {
    return Math.sqrt(num);
});
console.log(doubles,roots);
//filter//
//caso de uso: seleccionar animal mayor a seis letras//
const words = ['caballo', 'vacas', 'gallinas', 'cerdos', 'patos', 'borregos'];

const result = words.filter(word => word.length > 6);

console.log(result);
