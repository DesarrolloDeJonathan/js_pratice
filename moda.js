const lista1 = [1, 2, 3, 1, 2, 3, 4, 2, 2, 2, 1];

const lista1Count = {};

// Convertimos array en objeto y lo guardamos asi en una varible
lista1.map(function (elemento) {
  if (lista1Count[elemento]) {
    lista1Count[elemento] += 1;
  } else {
    lista1Count[elemento] = 1;
  }
});

// Convetimos objeto a un array
const lista1Array = Object.entries(lista1Count).sort(function (
  elementoA,
  elementoB,
) {
  // Determinamos el index del array a evaluar
  return elementoA[1] - elementoB[1];
});

const moda = lista1Array[lista1Array.length - 1];

// Otra solución
// Podria generar problemas de performace

// const NUMBERS = [2, 2, 2, 2, 2, 4, 5, 5, 5, 5, 5, 5, 5, 5, 9];

// function mode(arr) {
//   return arr
//     .sort(
//       (a, b) =>
//         arr.filter((v) => v === a).length - arr.filter((v) => v === b).length,
//     )
//     .pop();
// }

// console.log(mode(NUMBERS)); //5
