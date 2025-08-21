/*
Ejercicios para practicar funciones:
  1. Crea una función llamada semaforo que reciba un número del 1 al 3 y muestre un mensaje según el semáforo:
  - 1: "Rojo, detente"
  - 2: "Amarillo, precaución"
  - 3: "Verde, avanza"

  Ejecutala 3 veces con diferentes números, debes realizar validaciones para que al
  enviar un numero fuera del rango 1-3, se muestre un mensaje de error.
*/
function semaforo(number)
{
if (number < 1 || number > 3) {
    console.log("Error: El número debe estar entre 1 y 3.");
    return;
  }

  switch (number) {
    case 1:
      console.log("Rojo , detente")
      break
    case 2:
      console.log("Amarillo , Precaución")
      break
    case 3:
      console.log("Verde , Avanza")
      break
  }
}
semaforo(1)
semaforo(2)
semaforo(3)

