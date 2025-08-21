/*Nivel medio:
  2. Crea una función que reciba un array de frutas e imprima uno a uno cada fruta.
  */
let arrayfrutas=["manzana","pera", "patilla", "uvas"]

function imprimirFrutas(arrayfrutas,numero){
  if(numero > 3)return;
console.log(arrayfrutas[numero])
imprimirFrutas(arrayfrutas,numero+1)
}

imprimirFrutas(arrayfrutas,0);