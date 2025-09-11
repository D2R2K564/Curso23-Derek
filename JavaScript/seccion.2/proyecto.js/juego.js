/*
  Crea un videojuego que tenga las siguientes clases:
  - personaje: Clase base para todos los personajes del juego.
  - guerrero: Clase que hereda de personaje y representa a un guerrero.
  - mago: Clase que hereda de personaje y representa a un mago.
  - arquero: Clase que hereda de personaje y representa a un arquero.

  personaje tiene las siguientes propiedades y metodos:
  - nombre: Nombre del personaje.
  - vida: Vida del personaje.
  - daño: Daño del personaje.
  - defensa: Defensa del personaje.
  - velocidad: Velocidad del personaje.
  - atacar(): Metodo utilizado para atacar (con los puños).
  - saludar(): Método utilizado para saludar indicando nombre y clase.

  guerrero tiene las siguientes propiedades y metodos:
  - array_de_armas: Armas que puede usar el guerrero.
  - atacar_con_arma(): Método utilizado para atacar con un arma aleatoria del array.

  mago tiene las siguientes propiedades y metodos:
  - array_de_hechizos: Hechizos que puede usar el mago.
  - atacar_con_hechizo(): Método utilizado para atacar con un hechizo aleatorio del array.

  arquero tiene las siguientes propiedades y metodos:
  - array_de_flechas: Flechas que puede usar el arquero.
  - disparar(): Método utilizado para disparar una flecha aleatoria del array.

  Debes de crear al menos 5 personajes, al menos 2 deben de ser guerreros, 2 magos y 1 arquero.

  Al iniciar el juego, cada personaje debe saludar indicando su nombre y clase.

  Luego habrá una ronda de ataques. En cada ronda, cada personaje atacará a otro personaje de forma aleatoria.

  Cada personaje solo puede atacar una vez por ronda.

  Además, el orden de la ronda debe ser determinado de forma aleatoria pero tomando en cuenta la velocidad de cada personaje.

  Para ello debes jugar con las probabilidades de cada personaje, por ejemplo:
  - Si el personaje tiene una velocidad de 10, debes generar un numero aleatorio entre 1 y 10.
  - Según el numero aleatorio generado, será determinado el orden de ataque de cada personaje en esa ronda

  Ejemplo:
  Personaje 1: 5
  Personaje 2: 8
  Personaje 3: 2
  Personaje 4: 10
  Personaje 5: 6

  El personaje 4 atacará primero, luego el personaje 2, luego el personaje 5, luego el personaje 1 y por último el personaje 3.

  Cuando un personaje ataque a otro, se utilizara la siguiente lógica:

  El personaje atacado se intentara defender, este generara un numero aleatorio entre 1 y su defensa.
  Si el numero aleatorio es mayor que el daño del atacante, el ataque falla y no se le resta vida al personaje atacado.
  Si el numero aleatorio es menor o igual al daño del atacante, el ataque tiene éxito y se le resta vida al personaje atacado.

  Al momento de atacar, se debe mostrar un mensaje indicando quién ataca a quién y si el ataque fue exitoso o fallido.

  Además, hay un tercio de posibilidades de que un personaje ataque con sus puños y dos tercios de posibilidades de que ataque con su arma, hechizo o flecha (según su clase).

  Cuando la vida de un personaje llegue a 0, este será eliminado del juego y no podrá atacar más.
  El juego termina cuando solo quede un personaje con vida.

  Es importante que cuando un personaje muera, se muestre un mensaje indicando que ha muerto y que no puede atacar más.
  Además, al final del juego, se debe mostrar un mensaje indicando quién es el ganador.

  El juego es ganado por el personaje que quede con vida al final.

  Nota: es importante imprimir cada numero de ronda
  ejemplo: "Ronda 1", "Ronda 2", etc.

  Puntos opcionales:
  - Implementa un sistema de habilidades especiales para cada clase, estas habilidades solo se pueden ser utilizadas una vez por juego.
  - Implementa un inventario y objetos para cada personaje, los cuales pueden ser utilizados para mejorar sus habilidades o recuperar vida, sin embargo
  Estos consumirán un turno de ataque y tienen un número limitado de usos.
  - Agrega la clase "vampiro" cuyos ataques regenerar un % aleatorio de vida al personaje.
  - Agrega la posibilidad de 1 entre 10 de que un personaje se tropiece y no pueda hacer nada en esa ronda.
*/

class Personaje {
constructor(nombre,vida,dano,defensa,velocidad,){
  this.nombre = nombre;
  this.vida = vida ;
  this.dano = dano;
  this.defensa = defensa;
  this.velocidad = velocidad;
}
saludar(){
  console.log(`hola un gusto mi nombres es ${this.nombre} y soy civil`)
}
atacar(){
  console.log(`${this.nombre} ataca con su puño`)
}
}

let juan = new Personaje("juan",200,35,10,10);

class guerrero extends Personaje{
  constructor(nombre,vida,dano,defensa,velocidad,arma){
  super(nombre,vida,dano,defensa,velocidad,arma)
  this.arma = [
    { nombre: "Espada Libertadora", dano: 50 },
    { nombre: "Machetes", dano: 30 },
    { nombre: "Cuchillo", dano: 20 },
    { nombre: "Cuerdas", dano: 15 },
    { nombre: "Bate de Chavez", dano: 40 }
  ]
  }
  saludar(){
    console.log(`hola un gusto mi nombre es ${this.nombre} Y SOY UN GERRERO DE SPARTA!!!`)
  }
  atacar(){
    console.log(`${this.nombre} ataca con su puño`)
  }
  atacar_con_arma(){
  const indice = Math.floor(Math.random() * this.arma.length);
  const arma= this.arma[indice];
  console.log(`${this.nombre} ataca con su ${arma.nombre} que causa ${arma.dano} de daño`);
  }

}

let guerrero1 = new guerrero("Kratos",230,20,25,10);

let guerrero2 = new guerrero("Atreus",210,20,20,10);

class Mago extends Personaje {
  constructor(nombre, vida, dano, defensa, velocidad,hechizo) {
    super(nombre, vida, dano, defensa, velocidad,hechizo);
    this.hechizos = [
      { nombre: "bola de fuego", dano: 40 },
      { nombre: "rayo", dano: 30 },
      { nombre: "tormenta de hielo", dano: 35 },
      { nombre: "explosión arcana", dano: 50 }
    ];
  }
  saludar() {
    console.log(`Hola, un gusto, mi nombre es ${this.nombre} y soy un mago.`);
  }
  atacar() {
    console.log(`${this.nombre} ataca con su puño`);
  }
  atacar_con_hechizo() {
    const indice = Math.floor(Math.random() * this.hechizos.length);
    const hechizo = this.hechizos[indice]; 
    console.log(`${this.nombre} ataca con el hechizo ${hechizo.nombre} que causa ${hechizo.dano} de daño`);
  }
}
let Mago1 = new Mago ("Harry Potter",210,25,20,10);

let Mago2 = new Mago("Boldemor",210,20,15,10);

class Arquero extends Personaje {
  constructor(nombre, vida, dano, defensa, velocidad, presicion) {
    super(nombre, vida, dano, defensa, velocidad,presicion);
    this.presicion = presicion;
    this.ataque_de_flechas = [
      { nombre: "flecha normal", dano: 15 },
      { nombre: "flecha explosiva", dano: 40 },
      { nombre: "flechas multiples", dano: 25 },
      { nombre: "FLECHA INDIGENAAAA ", dano: 45 }
    ];
  }
  saludar(){
    console.log(`hola un gusto mi nombres es ${this.nombre} y soy tu arquero escogido`)
  }

  atacar() {
    console.log(`${this.nombre} ataca con su puño`);
  }
  atacar_arco() {
    const Indice = Math.floor(Math.random() * this.ataque_de_flechas.length);
    const flecha = this.ataque_de_flechas[Indice];
    console.log(`${this.nombre} dispara una ${flecha.nombre} que causa ${flecha.dano} de daño`);
  }
}

let arquero = new Arquero("Juana de Arco", 220, 20, 20, 10);

// ...definición de clases y personajes igual que antes...

let personajes = [
  juan,
  guerrero1,
  guerrero2,
  Mago1,
  Mago2,
  arquero
];

// Saludo inicial
for (let personaje of personajes) {
  personaje.saludar();
}

let ronda = 1;
while (personajes.filter(p => p.vida > 0).length > 1) {
  console.log(`\n=== Ronda ${ronda} ===`);
  // Orden de ataque según velocidad y azar
  let orden = personajes
    .filter(p => p.vida > 0)
    .map(p => ({
      personaje: p,
      iniciativa: Math.floor(Math.random() * p.velocidad) + 1
    }))
    .sort((a, b) => b.iniciativa - a.iniciativa)
    .map(obj => obj.personaje);

  for (let atacante of orden) {
    if (atacante.vida <= 0) continue; // No ataca si está muerto
    let posiblesObjetivos = personajes.filter(p => p !== atacante && p.vida > 0);
    if (posiblesObjetivos.length === 0) continue;
    let objetivo = posiblesObjetivos[Math.floor(Math.random() * posiblesObjetivos.length)];
    let tipoAtaque = Math.random();
    let dano;
    if (tipoAtaque < 1/3) {
      atacante.atacar();
      console.log(`${atacante.nombre} ataca a ${objetivo.nombre} con su puño`);
      dano = atacante.dano;
    } else {
      if (atacante instanceof guerrero) {
        atacante.atacar_con_arma();
        dano = atacante.arma[Math.floor(Math.random() * atacante.arma.length)].dano;
        console.log(`${atacante.nombre} ataca a ${objetivo.nombre} con un arma`);
      } else if (atacante instanceof Mago) {
        atacante.atacar_con_hechizo();
        dano = atacante.hechizos[Math.floor(Math.random() * atacante.hechizos.length)].dano;
        console.log(`${atacante.nombre} ataca a ${objetivo.nombre} con un hechizo`);
      } else if (atacante instanceof Arquero) {
        atacante.atacar_arco();
        dano = atacante.ataque_de_flechas[Math.floor(Math.random() * atacante.ataque_de_flechas.length)].dano;
        console.log(`${atacante.nombre} ataca a ${objetivo.nombre} con una flecha`);
      } else {
        atacante.atacar();
        dano = atacante.dano;
      }
    }
    let defensa = Math.floor(Math.random() * objetivo.defensa) + 1;
    if (defensa > dano) {
      console.log(`${objetivo.nombre} se defendió exitosamente. ¡El ataque falló!`);
    } else {
      objetivo.vida -= dano;
      console.log(`${objetivo.nombre} recibió ${dano} de daño. Vida restante: ${objetivo.vida}`);
      if (objetivo.vida <= 0) {
        console.log(`${objetivo.nombre} ha muerto y no puede atacar más.`);
      }
    }
  }
  ronda++;
}

let ganador = personajes.find(p => p.vida > 0);
if (ganador) {
  console.log(`\n¡El ganador es ${ganador.nombre}!`);
} else {
  console.log(`"\nNo hay ganador."`);
}