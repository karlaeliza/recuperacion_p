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
//reduce//
//caso de uso: reduce un valor que tenga las variables//
var total = [0, 1, 2, 3].reduce(function(a, b){ return a + b; });
console.log(total);

//replace//
//caso de uso:seleccionar el alimento y remplazarlo por la variable//
var re = /apples/gi;
var str = "Apples are round, and apples are juicy.";
var newstr = str.replace(re, "oranges");
console.log(newstr);

//hoisting//
//caso de uso: 
let myArray = ['caballos', 'vacas', 'gallinas', 'patos', 'cerdos', 'borregos'];
console.log(myArray);

//ejemplos de promesa//
//Caso de uso: se seleccionara la promesa correspondida con la granja //
const getUsers = async() => {

    return new Promise((resolve, reject) => {

        setTimeout(() => {

            resolve([{

                    id: 1,

                    name: "karla",

                },

                {

                    id: 2,

                    name: "´patos",

                },

            ]);

        }, 3000);

    });

};



const getCategories = async() => {

    return new Promise((resolve, reject) => {

        setTimeout(() => {

            resolve([{

                    id: 1,

                    name: "cerdos",

                },

                {

                    id: 2,

                    name: "granja",

                },

            ]);

        }, 100);

    });

};



const getReports = async() => {

    return new Promise((resolve, reject) => {

        setTimeout(() => {

            resolve([{

                    id: 1,

                    name: "caballos",

                },

                {

                    id: 2,

                    name: "gallinas",

                },

            ]);

        }, 300);

    });

};



(async function main() {

    try {

        const users = await getUsers();

        console.log(users);

        console.log(users.length);

        const categories = await getCategories();

        console.log(categories);

        console.log(categories.length);

        const reports = await getReports();

        console.log(reports);

        console.log(reports.length);

    } catch (error) {

        console.log("Error: " + error);

    }

})();