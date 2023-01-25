/*

  ARGENPUNK 2086 - SIMULADOR DE CREADOR DE PERSONAJES DE ROL

*/

// Funciones

function Bienvenida() {
  let consulta;
  let continuar = false;
  alert("Bienvenid@ a 'ARGENPUNK 2086'");
  do {
    consulta = prompt(
      `Estas por crear un personaje de rol, escribe:

      Si = para continuar.
      ESC = para salir.
      `
    );
    if (consulta == "Si") {
      alert("¡¡¡ Empecemos !!!");
      continuar = true;
      return continuar;
    }
  } while (consulta != "ESC");
  return continuar;
}

function pedirNombre() {
  let nombre;
  do {
    nombre = prompt("Ingrese el nombre del personaje");
    if (nombre == "") {
      alert("Ingrese un nombre valido para comenzar");
    }
  } while (nombre === "");
  return nombre;
}

function elegirClase() {
  let clase;
  do {
    alert("Escoje el camino de vida de tu personaje");
    clase = Number(
      prompt(
        `Ingrese:
      (1) para "Hacker"
      (2) para "Policia"
      (3) para "Corpo"
      `
      )
    );
    switch (clase) {
      case 1:
        clase = "Hacker";
        alert("Has escogido: " + clase);
        break;
      case 2:
        clase = "Policia";
        alert("Has escogido: " + clase);
        break;
      case 3:
        clase = "Corpo";
        alert("Has escogido: " + clase);
        break;
      default:
        alert("Por favor escoja un numero del 1 al 3");
        break;
    }
    if (clase < 1 || clase > 3) {
      alert("Ingresa un valor valido");
    } else {
    }
  } while (clase < 1 || clase > 3);
  return clase;
}

let pedirValorDeAtributo = (nombreDelAtributo) => {
  let valorDeAtributo = 0;
  do {
    alert("Te quedan " + totalPuntos + " puntos de hablidad disponibles...");
    valorDeAtributo = Number(
      prompt("Asigne los puntos a " + nombreDelAtributo + ":")
    );
    if (valorDeAtributo < 0 || valorDeAtributo > totalPuntos) {
      alert("Ingrese un valor valido");
    } else {
      return valorDeAtributo;
    }
  } while (true);
}

function pedirAtributos() {
  let puntosDeFuerza = pedirValorDeAtributo("Fuerza");
  totalPuntos = totalPuntos - puntosDeFuerza;

  let puntosDeReflejos = pedirValorDeAtributo("Reflejos");
  totalPuntos = totalPuntos - puntosDeReflejos;

  let puntosDeHabilidadTecnica = pedirValorDeAtributo("Habilidad tecnica");
  totalPuntos = totalPuntos - puntosDeHabilidadTecnica;

  let puntosDeInteligencia = pedirValorDeAtributo("Inteligencia");
  totalPuntos = totalPuntos - puntosDeInteligencia;

  let puntosDeOnda = pedirValorDeAtributo("Onda");
  totalPuntos = totalPuntos - puntosDeOnda;

  let atributos = new Atributos();
  atributos.puntosDeFuerza = puntosDeFuerza;
  atributos.puntosDeReflejos = puntosDeReflejos;
  atributos.puntosDeHabilidadTecnica = puntosDeHabilidadTecnica;
  atributos.puntosDeInteligencia = puntosDeInteligencia;
  atributos.puntosDeOnda = puntosDeOnda;

  return atributos;
}

function anunciarEstadisticas() {
  salud = puntosDeFuerza + puntosDeReflejos;
  alert("Tienes un total de: " + salud + " puntos de Salud");
  energia = puntosDeReflejos + puntosDeHabilidadTecnica;
  alert("Tienes un todal de: " + energia + " puntos de Energia");
  sabiduria = puntosDeHabilidadTecnica + puntosDeInteligencia;
  alert("Tienes un total de: " + sabiduria + " puntos de Sabiduria");
  suerte = puntosDeInteligencia + puntosDeOnda;
  alert("Tienes un total de: " + suerte + " puntos de Suerte");
}

function printMensajeIniciando() {
  console.log("Creando personaje...");
  console.log("3" + "...");
  console.log("2" + "...");
  console.log("1" + "...");
}

let personajeCreado = () => {
  console.log("Tu personaje: " + nombre + " fue creado.");
  console.log("Camino de vida: " + clase);
  console.log("Estadisticas:");
  console.log("SALUD: " + salud);
  console.log("ENERGIA: " + energia);
  console.log("SABIDURIA: " + sabiduria);
  console.log("SUERTE: " + suerte);
}

// Llamando a cada funcion
console.log("ARGENPUNK 2086");
console.log("Iniciando...");
console.log("3" + "...");
console.log("2" + "...");
console.log("1" + "...");
console.log("System ok");

const continuar = Bienvenida();

let nombre;
let clase;
let puntosDeFuerza;
let puntosDeReflejos;
let puntosDeHabilidadTecnica;
let puntosDeInteligencia;
let puntosDeOnda;
let salud;
let energia;
let sabiduria;
let suerte;

class Atributos {
  constructor() {
    this.puntosDeFuerza = 0;
    this.puntosDeReflejos = 0;
    this.puntosDeHabilidadTecnica = 0;
    this.puntosDeInteligencia = 0;
    this.puntosDeOnda = 0;
  }
}
class Personaje {
  constructor(nombre) {
    this.nombre = nombre;
    this.clase = "";
    this.atributos = new Atributos();
  }

  asignarClase(clase) {
    this.clase = clase;
  }

  salud() {
    return this.atributos.puntosDeFuerza + this.atributos.puntosDeReflejos;
  }

  energia() {
    return (
      this.atributos.puntosDeReflejos + this.atributos.puntosDeHabilidadTecnica
    );
  }

  sabiduria() {
    return (
      this.atributos.puntosDeHabilidadTecnica +
      this.atributos.puntosDeInteligencia
    );
  }

  suerte() {
    return this.atributos.puntosDeInteligencia + this.atributos.puntosDeOnda;
  }

  anunciarEstadisticas() {
    alert("Tienes un total de: " + this.salud() + " puntos de Salud");
    alert("Tienes un total de: " + this.energia() + " puntos de Energia");
    alert("Tienes un total de: " + this.sabiduria() + " puntos de Sabiduria");
    alert("Tienes un total de: " + this.suerte() + " puntos de Suerte");
  }
}

let todosLosPersonajes = [];
let totalPuntos;

if (continuar) {
  let nombre = pedirNombre();
  let nuevoPersonaje = new Personaje(nombre);
  console.log("Nombre ingresado");

  let clase = elegirClase();
  nuevoPersonaje.asignarClase(clase);

  console.log("Camino de vida seleccionado");

  totalPuntos = 20;
  alert(
    `Tienes 20 puntos de habilidad para asignar en los siguientes atributos:

    - Fuerza
    - Reflejos
    - Habilidad tecnica
    - Inteligencia
    - Onda`
  );

  pedirAtributos();

  nuevoPersonaje.atributos.puntosDeFuerza = puntosDeFuerza;
  nuevoPersonaje.atributos.puntosDeReflejos = puntosDeReflejos;
  nuevoPersonaje.atributos.puntosDeHabilidadTecnica = puntosDeHabilidadTecnica;
  nuevoPersonaje.atributos.puntosDeInteligencia = puntosDeInteligencia;
  nuevoPersonaje.atributos.puntosDeOnda = puntosDeOnda;

  console.log(nuevoPersonaje);

  console.log("Has asignado tus puntos de habilidad");

  nuevoPersonaje.anunciarEstadisticas();

  console.log(nuevoPersonaje);

  printMensajeIniciando();

  personajeCreado();

  todosLosPersonajes.push(nuevoPersonaje);
}
