/*
🟢 Ejercicio 1: Fácil — Imprimir números del 1 al 10
Enunciado: Escribe un programa que utilice un bucle para imprimir 
en la consola los números del 1 al 10, uno por línea. Puedes usar 
cualquier tipo de bucle (for, while, o do...while), pero asegúrate de que el resultado sea exactamente:
*/

for(let i =0 ; i <=10 ; i += 1 )[
  console.log(i) 
]


/*
del siguiente array con un bucle imprima cada uno de los elementos del array mas la posicion de cada elemento dentro del array
= ["nike", "adidas", "Jordan","gucci", "timberland"]
*/

zapatos=["nike", "adidas", "Jordan","gucci", "timberland"]
for(let posicion in zapatos ){
  console.log(posicion + ":" + zapatos[posicion])
}