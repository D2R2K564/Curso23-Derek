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

// Operadores lógicos
/*
  Los operadores lógicos son utilizados para combinar expresiones booleanas.
  - AND: &&
  - OR: ||
  - NOT: !
*/


/*
  Metodos de strings
  Los métodos de strings son funciones que se pueden aplicar a cadenas de texto para realizar diversas operaciones.
  Algunos de los métodos más comunes son:
  - `toUpperCase()`: Convierte la cadena a mayúsculas.
  - `toLowerCase()`: Convierte la cadena a minúsculas.
  - `substring()`: Extrae una parte de la cadena.
  - `indexOf()`: Busca la posición de un carácter o subcadena en la cadena
  - `replace()`: Reemplaza una parte de la cadena por otra.
  - `split()`: Divide la cadena en un array de subcadenas.
  - `trim()`: Elimina los espacios en blanco al inicio y al final de la cadena.
  - `includes()`: Verifica si una subcadena está presente en la cadena.
  - `charAt()`: Devuelve el carácter en una posición específica.
  - `length`: Propiedad que devuelve la longitud de la cadena.
  - `startsWith()`: Verifica si la cadena comienza con una subcadena específica.
  - `endsWith()`: Verifica si la cadena termina con una subcadena específica.
  - `repeat()`: Repite la cadena un número específico de veces.
  - `concat()`: Une dos o más cadenas.
*/



//Metodos de arrays
/*
  Los métodos de arrays son funciones que se pueden aplicar a arrays para realizar diversas operaciones.
  Algunos de los métodos más comunes son:
  - `push()`: Agrega uno o más elementos al final del array.
  - `pop()`: Elimina el último elemento del array y lo devuelve.
  - `shift()`: Elimina el primer elemento del array y lo devuelve.
  - `unshift()`: Agrega uno o más elementos al inicio del array.
  - `splice()`: Cambia el contenido de un array eliminando o reemplazando elementos existentes y/o agregando nuevos elementos en su lugar.
  - `slice()`: Devuelve una copia superficial de una porción del array dentro de un nuevo array.
  - `forEach()`: Ejecuta una función proporcionada una vez por cada elemento del array.
  - `map()`: Crea un nuevo array con los resultados de la llamada a la función proporcionada en cada elemento del array.
  - `filter()`: Crea un nuevo array con todos los elementos que cumplan la condición implementada por la función proporcionada.
  - `find()`: Devuelve el primer elemento del array que cumple con la condición proporcionada en la función.
  - `includes()`: Verifica si un elemento está presente en el array.
*/

 //this es un objeto que funciona en el contexto de la clase
    //al decir this.nombre, estoy creando una propiedad nombre en el objeto this
    //Debido a que this funciona en toda la clase, ahora podre llamar a this.nombre en otras funciones si eso deseo

/*
  La herencia.
  Una clase puede heredar propiedades de otra. Piensa en ello como una serie de conjuntos, un ser vivo tiene
  ciertas propiedades, pero un gato no tiene las mismas propiedades o metodos que un humano
  aunque ambos son seres vivos. Sin embargo, si comparten ciertas cosas al ambos ser seres humanos
*/
