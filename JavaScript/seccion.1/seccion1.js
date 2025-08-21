//Esto es un comentario de una línea
/*
  Comentario de multiples
  líneas
*/

//Variables
/*
  Las variables son espacios de memoria que almacenan un valor.
*/
// Declaración de una variable
let nombre = "Juan"; // Variable
console.log(nombre); // Imprime "Juan"
// Reasignación de una variable
nombre = "Pedro"; // Reasignación
console.log(nombre); // Imprime "Pedro"

// Tipos de datos
let number = 42; // Número
let float = 3.14; // Número de punto flotante
let string = "Hola, mundo"; // Cadena de texto
let boolean = true; // Booleano (true/false)
let array = ["pera", "manzana", "uva"]; // Array (lista)
console.log(array); // Imprime ["pera", "manzana", "uva"]
console.log(array[0]); // Imprime "pera" (primer elemento del array)
let nulo = null; // Nulo (sin valor)
let indefinido; // Indefinido (sin asignar)
let objeto = { nombre: "Juan", edad: 30 }; // Objeto
console.log(objeto); // Imprime { nombre: "Juan", edad: 30 }
console.log(objeto.nombre); // Imprime "Juan" (acceso a una propiedad del objeto)

let suma_numeros = 5 + 3; // Suma
let suma_string = "a10232!.;--''''-" + "2"; // Resta ()

//Practica
let prueba = "Pedro";
prueba = 23;
prueba = [1, 2, 3];
console.log(prueba);

console.log(prueba[1]); //imprime 2
console.log(2 + 2);

let estudiante = {
  nombre: "José",
  apellido: "Changir",
  edad: 17,
};

console.log(estudiante.edad);

// Operadores aritmeticos
/*
  Los operadores aritméticos son utilizados para realizar operaciones matemáticas.
  - Suma: +
  - Resta: -
  - Multiplicación: *
  - División: /
  - Módulo (resto de la división): %
  - Exponente: **
*/

let suma = 5 + 3; // Suma 8
let resta = 5 - 3; // Resta 2
let multiplicacion = 5 * 3; // Multiplicación 15
let division = 5 / 3; // División 1.6666666666666667
let modulo = 5 % 2; // Módulo (resto de la división) 1
let exponente = 5 ** 3; // Exponente (5 elevado a la 3) 125

// Operadores comparativos
/*
  Los operadores comparativos son utilizados para comparar valores y devuelven un booleano (true/false).
  - Igualdad: ==
  - Desigualdad: !=
  - Igualdad estricta: ===
  - Desigualdad estricta: !==
  - Mayor que: >
  - Menor que: <
  - Mayor o igual que: >=
  - Menor o igual que: <=
*/
let igualdad = 5 == "5"; // Igualdad (true, porque el valor es el mismo)
let desigualdad = 5 != "5"; // Desigualdad (false, porque el valor es el mismo)
let igualdadEstricta = 5 === "5"; // Igualdad estricta (false, porque el tipo es diferente)
let desigualdadEstricta = 5 !== "5"; // Desigualdad estricta (true, porque el tipo es diferente)
let mayorQue = 5 > 3; // Mayor que (true)
let menorQue = 5 < 3; // Menor que (false)
let mayorOIgualQue = 5 >= 5; // Mayor o igual que (true)
let menorOIgualQue = 5 <= 3; // Menor o igual que (false)

// Operadores lógicos
/*
  Los operadores lógicos son utilizados para combinar expresiones booleanas.
  - AND: &&
  - OR: ||
  - NOT: !
*/


let dia = 1; // Supongamos que 1 es Lunes, 2 es Martes, etc.
switch (dia) {
  case 1:
    console.log("Lunes");
    break;
  case 2:
    console.log("Martes");
    break;
  case 3:
    console.log("Miércoles");
    break;
  case 4:
    console.log("Jueves");
    break;
  case 5:
    console.log("Viernes");
    break;
  case 6:
    console.log("Sábado");
    break;
  case 7:
    console.log("Domingo");
    break;
  default:
    console.log("Día no válido");
}


/*
  Ejercicios para practicar
  1. Pidele tres datos al usuario. Numero 1, Numero 2 y operacion (suma, resta, multiplicación o división). Crea
  un condicional que imprima el resultado de la operación entre los dos números.

  2. Pidele un numero al usuario y crea un condicional que imprima si el número es par o impar.

  3. Crea un código que le pida un numero entre 1 y 12 e imprima el nombre del mes correspondiente.
  (1 = enero, 2 = febrero, etc.). Si el número no está entre 1 y 12, imprime "Número no válido".
*/