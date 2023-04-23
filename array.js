//2) Escribir una funcion que reciba 2 array y devuelva un array con todos los elementos que coinciden entre ellos

//Ejemplo 1:
//Array1: ['rojo', 'azul', 'amarillo']
//Array2: ['blanco', 'negro', 'rojo']
//Resultado: ['rojo']

 //Ejemplo 2:

//Array1: [4, 3, true, 'manzana']
//Array2: ['pera', 3, f alse, true, 3, true]
//Resultado: [3, true]




function something_In_Common(array1,array2){
return array2.filter( item => array1.includes (item));

}

const array1= ['computadora',10,'cafe','jirafa','limon','vestido',25,true];
const array2=['cafe','elefante','mouse','computadora',true,10];


let result= something_In_Common(array1,array2);
console.log(result);
