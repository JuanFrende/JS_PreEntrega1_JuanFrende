function Iniciando() {
  let cuenta1 = 1;
  let cuenta2 = 2;
  let cuenta3 = 3;
  console.log("ARGENPUNK 2086");
  console.log("Iniciando...");
  console.log(cuenta3 + "...");
  console.log(cuenta2 + "...");
  console.log(cuenta1 + "...");
  console.log("System ok");
}

function Bienvenida() {
  let consulta;
  let continuar = false;
  alert("Bienvenid@ a 'ARGENPUNK 2086'");
  do {
    consulta = prompt(
      "Estas por crear un personaje de rol - Escribe: 'Si' para continuar o 'ESC' para salir."
    );
    if (consulta == "Si") {
      alert("¡¡¡ Empecemos !!!");
      continuar = true;
      return continuar;
    }
  } while (consulta != "ESC");
  return continuar;
}

function perdirNombre() {
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
      prompt("Ingrese (1) para 'Hacker', (2) para 'Policia', (3) para 'Corpo'.")
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

let personajeCreado = () => {
  console.log("Tu personaje: " + nombre + " fue creado.");
  console.log("Camino de vida: " + clase);
  console.log("Estadisticas:");
  console.log("SALUD: " + salud);
  console.log("ENERGIA: " + energia);       
  console.log("SABIDURIA: " + sabiduria);
  console.log("SUERTE: " + suerte);
}

Iniciando();
const continuar = Bienvenida();
let nombre;
let clase;
let totalPuntos;
let puntosDeFuerza;
let puntosDeReflejos;
let puntosDeHabilidadTecnica;
let puntosDeInteligencia;
let puntosDeOnda;
let salud;
let energia;
let sabiduria;
let suerte;
if (continuar) {
  nombre = perdirNombre();
  clase = elegirClase();
  totalPuntos = 20;
  alert(
    "Tienes 20 puntos de habilidad para asignar en los siguientes atributos: Fuerza, Reflejos, Habilidad tecnica, Inteligencia, Onda."
  );
  puntosDeFuerza = pedirValorDeAtributo("Fuerza");
  totalPuntos = totalPuntos - puntosDeFuerza;

  puntosDeReflejos = pedirValorDeAtributo("Reflejos");
  totalPuntos = totalPuntos - puntosDeReflejos;

  puntosDeHabilidadTecnica = pedirValorDeAtributo("Habilidad tecnica");
  totalPuntos = totalPuntos - puntosDeHabilidadTecnica;

  puntosDeInteligencia = pedirValorDeAtributo("Inteligencia");
  totalPuntos = totalPuntos - puntosDeInteligencia;

  puntosDeOnda = pedirValorDeAtributo("Onda");
  totalPuntos = totalPuntos - puntosDeOnda;

  anunciarEstadisticas();
  personajeCreado();  
}