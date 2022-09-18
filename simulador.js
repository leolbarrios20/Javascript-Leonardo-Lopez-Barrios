const parrafo1 = document.getElementById("parrafo1");
const parrafo2 = document.getElementById("parrafo2");
const parrafo3 = document.getElementById("parrafo3");
const parrafo4 = document.getElementById("parrafo4");
const tituloPrincipal = document.getElementById("tituloPrincipal");
const tituloSecundario = document.getElementById("tituloSecundario");

const importeMinimo = 10000;
const importeMaximo = 200000;

let nombreCliente = prompt("Ingresá tu nombre");

let bienvenidaCliente = `Bienvenido/a ${nombreCliente}! Simulá tu préstamo personal, ingresando un importe entre $${importeMinimo} y $${importeMaximo}. Elegí las cuotas a pagar, entre 12, 24 y 36.`;
let edadNoValida = `Lamentamos informarte ${nombreCliente}, que debés tener al menos 18 años para solicitar tu préstamo personal.`;

function saludar() {
  alert(bienvenidaCliente);
}

while(nombreCliente == ""){
  alert("Debés ingresar un nombre.");
  nombreCliente = prompt("Ingresá tu nombre");
}

let edadCliente = prompt("Ingresá tu edad");

while(edadCliente < 18){
  alert(edadNoValida);
  edadCliente = prompt("Ingresá tu edad");
}

while(edadCliente > 79){
  alert(edadNoValida);
  edadCliente = prompt("Ingresá tu edad");
}

  saludar();         //Cuando se cumplan todas las condiciones anteriores, se ejecutará la función "saludar".
  
let prestamoCliente = prompt("Cuanto dinero necesitás? (ingresá el monto sin puntos)");

while(prestamoCliente > importeMaximo || prestamoCliente < importeMinimo){           
    alert("No es un importe válido. Recordá que podés pedir un préstamo desde $10.000 hasta $200.000");
    prestamoCliente = prompt("Cuanto dinero necesitás? (ingresá el monto sin puntos)");
}

let arrayCliente = [nombreCliente, edadCliente, prestamoCliente];
alert("Estás por simular un préstamo por $" + arrayCliente[2]);

let cuotasPrestamo = prompt("En cuantas cuotas querés abonar tu préstamo? Elegi entre 12, 24 y 36 cuotas.");

while(cuotasPrestamo != 12 && cuotasPrestamo != 24 && cuotasPrestamo != 36){
    alert("Recordá que las cuotas pueden ser entre 12, 24 y 36");
    cuotasPrestamo = prompt("Elegí entre 12, 24 y 36");
}

const propiedadesCliente = {
  nombre: nombreCliente,
  edad: edadCliente,
  prestamoSolicitado: prestamoCliente,
  cuotasSolicitadas: cuotasPrestamo
};

arrayCliente.push(cuotasPrestamo);

if(cuotasPrestamo == 12){
  alert("Terminás abonando por mes $" + (prestamoCliente / cuotasPrestamo * 1.35).toFixed(2));
}else if (cuotasPrestamo == 24){
alert("Terminás abonando por mes $" + (prestamoCliente / cuotasPrestamo  * 1.50).toFixed(2));
}else if (cuotasPrestamo == 36){
alert("Terminás abonando por mes $" + (prestamoCliente / cuotasPrestamo  * 1.70).toFixed(2));
}

let confirmacionPrestamo = prompt("Para confirmar y mostrarte el importe e intereses de tu préstamo, ingresá 'si', de lo contrario, ingresá 'no'");
const confirmacionTrue = "si";
const confirmacionFalse = "no";

let prestamoSolicitadoFinal12 = "Préstamo personal solicitado: $" + arrayCliente[2];
let montoMensual12 = "Monto mensual a abonar: $" + (arrayCliente[2] / arrayCliente[3] * 1.45).toFixed(2);
let interesesPorCuota12 = "Intereses por cuota: $" + (arrayCliente[2] / arrayCliente[3] * 1.45 - (arrayCliente[2] / arrayCliente[3])).toFixed(2);
let interesesTotales12 = "Intereses totales: $" + ((arrayCliente[2] / arrayCliente[3] * 1.45 - (arrayCliente[2] / arrayCliente[3])) * arrayCliente[3]).toFixed(2);

let prestamoSolicitadoFinal24 = "Préstamo personal solicitado: $" + arrayCliente[2];
let montoMensual24 = "Monto mensual a abonar: $" + (arrayCliente[2] / arrayCliente[3] * 1.60).toFixed(2);
let interesesPorCuota24 = "Intereses por cuota: $" + (arrayCliente[2] / arrayCliente[3] * 1.60 - (arrayCliente[2] / arrayCliente[3])).toFixed(2);
let interesesTotales24 = "Intereses totales: $" + ((arrayCliente[2] / arrayCliente[3] * 1.60 - (arrayCliente[2] / arrayCliente[3])) * arrayCliente[3]).toFixed(2);

let prestamoSolicitadoFinal36 = "Préstamo personal solicitado: $" + arrayCliente[2];
let montoMensual36 = "Monto mensual a abonar: $" + (arrayCliente[2] / arrayCliente[3] * 1.80).toFixed(2);
let interesesPorCuota36 = "Intereses por cuota: $" + (arrayCliente[2] / arrayCliente[3] * 1.80 - (arrayCliente[2] / arrayCliente[3])).toFixed(2);
let interesesTotales36 = "Intereses totales: $" + ((arrayCliente[2] / arrayCliente[3] * 1.80 - (arrayCliente[2] / arrayCliente[3])) * arrayCliente[3]).toFixed(2);

let confirmacionPrestamo12 = ("Préstamo personal solicitado: $" + arrayCliente[2] + ". Monto mensual a abonar: $" + (arrayCliente[2] / arrayCliente[3] * 1.45).toFixed(2) + ". Intereses por cuota: $" + (arrayCliente[2] / arrayCliente[3] * 1.45 - (arrayCliente[2] / arrayCliente[3])).toFixed(2) + ". Intereses totales: $" + ((arrayCliente[2] / arrayCliente[3] * 1.45 - (arrayCliente[2] / arrayCliente[3])) * arrayCliente[3]).toFixed(2));
let confirmacionPrestamo24 = ("Préstamo personal solicitado: $" + arrayCliente[2] + ". Monto mensual a abonar: $" + (arrayCliente[2] / arrayCliente[3] * 1.60).toFixed(2) + ". Intereses por cuota: $" + (arrayCliente[2] / arrayCliente[3] * 1.60 - (arrayCliente[2] / arrayCliente[3])).toFixed(2) + ". Intereses totales: $" + ((arrayCliente[2] / arrayCliente[3] * 1.60 - (arrayCliente[2] / arrayCliente[3])) * arrayCliente[3]).toFixed(2));
let confirmacionPrestamo36 = ("Préstamo personal solicitado: $" + arrayCliente[2] + ". Monto mensual a abonar: $" + (arrayCliente[2] / arrayCliente[3] * 1.80).toFixed(2) + ". Intereses por cuota: $" + (arrayCliente[2] / arrayCliente[3] * 1.80 - (arrayCliente[2] / arrayCliente[3])).toFixed(2) + ". Intereses totales: $" + ((arrayCliente[2] / arrayCliente[3] * 1.80 - (arrayCliente[2] / arrayCliente[3])) * arrayCliente[3]).toFixed(2));

for(let i = 0; i < 1; i++){
  if(cuotasPrestamo == 12 && confirmacionPrestamo == "si"){
    alert("Felicitaciones! A continuación te mostraremos el detalle de tu préstamo personal.");
    parrafo1.innerHTML = (prestamoSolicitadoFinal12);
    parrafo2.innerHTML = (montoMensual12);
    parrafo3.innerHTML = (interesesPorCuota12);
    parrafo4.innerHTML = (interesesTotales12);
    tituloPrincipal.innerHTML = ("Detalle de tu préstamo personal");
    tituloSecundario.innerHTML = `Gracias ${propiedadesCliente.nombre}!`;
  }else if(cuotasPrestamo == 24 && confirmacionPrestamo == "si"){
    alert("Felicitaciones! A continuación te mostraremos el detalle de tu préstamo personal.");
    parrafo1.innerHTML = (prestamoSolicitadoFinal24);
    parrafo2.innerHTML = (montoMensual24);
    parrafo3.innerHTML = (interesesPorCuota24);
    parrafo4.innerHTML = (interesesTotales24);
    tituloPrincipal.innerHTML = ("Detalle de tu préstamo personal");
    tituloSecundario.innerHTML = `Gracias ${propiedadesCliente.nombre}!`;
  }else if(cuotasPrestamo == 36 && confirmacionPrestamo == "si"){
    alert("Felicitaciones! A continuación te mostraremos el detalle de tu préstamo personal.");
    parrafo1.innerHTML = (prestamoSolicitadoFinal36);
    parrafo2.innerHTML = (montoMensual36);
    parrafo3.innerHTML = (interesesPorCuota36);
    parrafo4.innerHTML = (interesesTotales36);
    tituloPrincipal.innerHTML = ("Detalle de tu préstamo personal");
    tituloSecundario.innerHTML = `Gracias ${propiedadesCliente.nombre}!`;
  }else if(confirmacionPrestamo === confirmacionFalse){
    alert(`Lamentamos que no quieras continuar, si cambiás de opinión, tus $${prestamoCliente} te esperan!`);
    tituloPrincipal.innerHTML = ("Volvé pronto " + nombreCliente + "!");
    break;
}else{
  confirmacionPrestamo = prompt(confirmacionPrestamo + " No es un dato válido, intentá de nuevo.");
  }
}

const buscado = arrayCliente.filter(cliente => propiedadesCliente.edad > 18);

