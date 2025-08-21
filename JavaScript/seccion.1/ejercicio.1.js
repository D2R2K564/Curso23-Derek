/* 1. Pidele tres datos al usuario. Numero 1, Numero 2 y operacion (suma, resta, multiplicación o división). Crea
  un condicional que imprima el resultado de la operación entre los dos números.
*/

let number1 = Number( prompt("ingrese el primer dato "))

let string =  String(  prompt ("Ingrese :suma,resta,multiplicacion,o division"))

let number2 = Number( prompt("ingrese el segundo dato "))


let resultado = 0;
switch (string) {
  case "suma":
    resultado = number1 + number2;
    console.log("El resultado es: " + resultado);
    break;

  case "resta":
    resultado = number1 - number2;
    console.log("El resultado es: " + resultado);
    break;

  case "multiplicacion":
    resultado = number1 * number2;
    console.log("El resultado es: " + resultado);
    break;

  case "division":
    if (number2 !== 0) {
      resultado = number1 / number2;
      console.log("El resultado es: " + resultado);
    } else {
      console.log("No se puede dividir por cero");
    }
    break;

  default:
    console.log("operacion no valida");
}

