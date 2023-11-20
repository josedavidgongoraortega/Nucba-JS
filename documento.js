// 1
// function verSiEsPar(num) {
//   return num % 2 === 0;
// }

// console.log(verSiEsPar(2));

// 2

// function cualEsMayor(num1, num2) {
//   if (num1 > num2) {
//     console.log(`${num1} los numeros son diferentes`);
//   } else if (num2 > num1) {
//     console.log(`${num2} los numeros son diferentes`);
//   } else {
//     console.log("los numeros son iguales");
//   }
// }
// console.log(cualEsMayor(10, 10));

// 3

// function multiplo(numero) {
//   if (numero % 5 === 0) {
//     console.log(`${numero} es multiplo del 5`);
//   } else if (numero % 5 !== 0) {
//     console.log(`${numero} no es multiplo del 5`);
//   }
// }

// console.log(multiplo(20));

// 4

// function ejercicio(num) {
//   for (let i = 0; i <= num; i++) {
//     console.log(`faltan ${i} para llegar a tu numero`);
//   }
// }

// ejercicio(10);

// 5;

// function imprimirNumero(name, num) {
//   if (typeof num !== `number` || num <= 0) {
//     console.log("La cantidad debe ser un número mayor que cero");
//     return;
//   }
//   for (let i = 0; i < num; i++) {
//     console.log(name);
//   }
// }

// imprimirNumero("pepito", 5);

// 6;

// const nombres = ["hola", "pizza", "CR7", "messi", "nucba", "pepito", "juan"];

// function names(array) {
//   for (let i = 0; i < array.length; i++) {
//     console.log(array[i]);
//   }
// }

// console.log(names(nombres));

// 7;

// const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// function imprimir(array) {
//   if (array.length < 5) {
//     return;
//   }

//   for (let i = 0; i < array.length; i++) {
//     if (i !== 4) {
//       console.log(array[i]);
//     }
//   }
// }

// imprimir(numeros);

// 8;

// const array = [1, 2, 3, 4, 5, 6];

// function multiplicarPorPotenciador(array, potenciador) {
//   array.forEach((numero) => console.log(numero * potenciador));
// }

// multiplicarPorPotenciador(array, 3);
