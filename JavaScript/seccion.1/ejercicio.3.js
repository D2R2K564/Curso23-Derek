/*
3. Crea un código que le pida un numero entre 1 y 12 e imprima el nombre del mes correspondiente.
  (1 = enero, 2 = febrero, etc.). Si el número no está entre 1 y 12, imprime "Número no válido".
*/

let number= Number(prompt("ingrese un numero del 1-12"))

switch (number){
  case 1:
    console.log("enero ");
  break;

  case 2:
    console.log("febrero");
  break;

  case 3:
    console.log("marzo ");
  break;

  case 4:
    console.log("abril");
  break;

  case 5:
    console.log("mayo");
  break;

  case 6:
    console.log("junio");
  break;

  case 7:
    console.log("julio");
  break;

  case 8:
    console.log("agosto");
  break;

  case 9:
    console.log("septiembre");
  break;

  case 10:
    console.log("octubre");
  break;

  case 11:
    console.log("noviembre");
  break;

  case 12:
    console.log("diciembre");
  break;

  case 13:
    default:
    console.log("opercacion no valida");
  break;
}
