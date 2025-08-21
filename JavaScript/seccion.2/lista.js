/*
2. Según el siguiente objeto
    {
      verduras: ["lechuga", "pepino", "cebolla"],
      frutas: ["manzana", "mazorca", "tomate"],
      carnes: ["pollo", "res", "cerdo"]
    }
  Imprime todas las verduras.
  3. Según el objeto anterior, imprime todas las verduras, frutas y carnes.
*/

let alimentos = {
  verduras: ["lechuga", "pepino", "cebolla"],
  frutas: ["manzana", "mazorca", "tomate"],
  carnes: ["pollo", "res", "cerdo"]
};

for (let i = 0; i < alimentos.verduras.length; i++) {
  console.log(alimentos.verduras[i]);
}

for (let i= 0 ; i < alimentos.frutas.length; i++ ) {
  console.log(alimentos.frutas[i])
}

for(let i = 0; i > alimentos.carnes.length; i++ ){
  console.log(alimentos.carnes[i])
}