 /*Nivel difícil:
  3. Crea una función recursiva que calcule el factorial de un número dado.
*/
function calculo(numero){
  if (numero < 0) return undefined; // Factorial not defined for negative numbers
  if (numero === 0 || numero === 1) return 1;
  return numero * calculo(numero - 1);
}

console.log(calculo(5))