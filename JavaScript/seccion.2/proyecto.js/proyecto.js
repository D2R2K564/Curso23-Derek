/*
  1. Crea una función que reciba un texto o parrafo y verifique si contiene alguna las siguientes malas palabras:
  - "tonto"
  - "chispas"
  - "recorcholis"
  - "rayos"
  - "caracoles"
  - "cielos"
  Si el texto contiene alguna de estas palabras, sustituye por "****" y retorna el texto modificado.
  Si no contiene ninguna, retorna el texto original.
*/
function Malas_Palabra(texto){
  let MalasPalabras = [
    "tonto",
    "chispas",
    "recorcholis",
    "rayos",
    "caracoles",
    "cielos"
  ];
  let censurado = texto;
  for (let palabra of MalasPalabras) {
    let regex = new RegExp(palabra, "gi");
    censurado = censurado.replace(regex, "****");
  }
  return censurado;
}
console.log(
  Malas_Palabra("caracoles esto esta muy difcil dios mio rayos y centellas ")
)

/*
  2. Según el siguiente array de objetos
  let personas = [
    { nombre: "Juan", edad: 25, pais: "España", sexo: "masculino" },
    { nombre: "María", edad: 30, pais: "México", sexo: "femenino" },
    { nombre: "Pedro", edad: 22, pais: "Argentina", sexo: "masculino" },
    { nombre: "Ana", edad: 28, pais: "Chile", sexo: "femenino" },
    { nombre: "Luis", edad: 35, pais: "España", sexo: "masculino" },
  ];

  Crea un código que me haga un filtro del array creando un nuevo array que contenga solo
  las personas que sean mayores de 25 años.

  Luego haz un código que me cree un nuevo array con las personas sean de españa y sean hombres

  Fecha de entrega: 11/07/25
*/
let personas = [
    { nombre: "Juan", edad: 25, pais: "España", sexo: "masculino" },
    { nombre: "María", edad: 30, pais: "México", sexo: "femenino" },
    { nombre: "Pedro", edad: 22, pais: "Argentina", sexo: "masculino" },
    { nombre: "Ana", edad: 28, pais: "Chile", sexo: "femenino" },
    { nombre: "Luis", edad: 35, pais: "España", sexo: "masculino" },
  ];
  // Personas mayores de 25 años
  console.log(personas.filter(persona => persona.edad > 25));

  // Personas de España y hombres
  console.log(
    personas.filter(
      persona =>
        persona.pais.toLowerCase() === "españa" &&
        persona.sexo.toLowerCase() === "masculino"
    )
  );