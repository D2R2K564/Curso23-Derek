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
/**
 * 
 */

/*
  Regex (Regular expressions)
  Las expresiones regulares son patrones utilizados para buscar y manipular texto.
  Son muy útiles para validar formatos, buscar coincidencias, reemplazar texto, etc.
*/

// /patron/modificador
/*
  ^      -> Inicio de la cadena
  $      -> Fin de la cadena
  []      -> Conjunto de caracteres
  {n}   -> Cantidad exacta de repeticiones
  {n,}  -> Mínimo n repeticiones
  {n,m} -> Entre n y m repeticiones
  +    -> Una o más repeticiones
  *    -> Cero o más repeticiones
  ?    -> Cero o una repetición
  \d   -> Dígitos (0-9)
  \w   -> Caracteres alfanuméricos (letras, números y guiones bajos)
  \s   -> Espacios en blanco
  \D   -> No dígitos
  \W   -> No caracteres alfanuméricos
  \S   -> No espacios en blanco
  .    -> Cualquier carácter excepto saltos de línea
  |    -> Alternativa (OR)
  modificadores:
  g    -> Búsqueda global (todas las coincidencias)
  i   -> Ignorar mayúsculas y minúsculas
*/

// Document Object Model (DOM) y Programación Orientada a Eventos (POE):

/**
 * Recuperar elementos desde el DOM
 *
 * El método querySelector() devuelve el primer elemento que coincide con el selector especificado en el documento.
 * El selector especificado puede ser un nombre de elemento HTML, un nombre de clase, un nombre de ID o un selector CSS.
 *
 * Por ejemplo:
 * - document.querySelector("p") devuelve el primer elemento <p> en el documento
 * - document.querySelector("#title") devuelve el elemento con el ID "title"
 * - document.querySelector(".message") devuelve el primer elemento con la clase "message" en el documento
 *
 * Se trata de una herramienta mucho más versátil que el uso de getElementById() y getElementsByClassName().
 * quienes poseen comportamientos similares.
 */

/**
 * Event listeners:
 *
 * Los event listeners son funciones que se ejecutan cuando un evento específico ocurre en un elemento del DOM.
 * Algunos eventos comunes son:
 * - click: Cuando se hace clic en un elemento
 * - mouseover: Cuando el mouse pasa por encima de un elemento
 * - mouseout: Cuando el mouse sale de un elemento
 * - submit: Cuando se envía un formulario
 * - change: Cuando el valor de un elemento cambia
 *
 * El metodo addEventListener() se utiliza para agregar un event listener a un elemento del DOM.
 * El mismo espera dos párametos:
 * - event: El evento a escuchar.
 * - callback: La función que debe ejecutarse cuando el evento ocurra.
 *
 * El callback puede ser definido como una única función y asignado luego:
 *
 * ```
 *    function callback() {
 *      console.log("Button clicked!");
 *    }
 *
 *    btn.addEventListener("click", callback);
 * ```
 *
 * O enviado directamente como una función anónima:
 *
 * ```
 *    btn.addEventListener("click", () => {
 *      console.log("Button clicked!");
 *    });
 * ```
 */

/**
 * Nota adicional:
 *
 * Usa element.classList.add() o element.classList.remove() para agregar o quitar clases de
 * TailwindCSS de un elemento.
 * También puedes usar element.classList.toggle() para entre clases.
 */

/**
 * Alerts y Prompts
 *
 * Los alert() y prompt() son funciones que se utilizan para mostrar alertas y prompts en la pantalla del navegador.
 * Se trata de pequeños avisos que se muestran en la parte superior de la pantalla.
 * No son lo más recomendable de utilizar según los conceptos de UI/UX, pero hacen el trabajo.
 */

// nameInput.addEventListener("focus", createNewElementBasedOnInput);
// emailInput.addEventListener("focus", createNewElementBasedOnInput);

/**
 * Manipulación del DOM (Document Object Model) en Formularios
 *
 * Los formularios son elementos que permiten a los usuarios enviar datos a un servidor.
 */