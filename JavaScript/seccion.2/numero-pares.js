/* Nivel fácil:
  1. Crea una función recursiva que imprima los números pares del 0 al 100.
*/

function Numeros_pares(num){
  if (num>100) return
  else if (num % 2 == 0 )
  console.log(num)
Numeros_pares(num+1)
}
Numeros_pares(0)