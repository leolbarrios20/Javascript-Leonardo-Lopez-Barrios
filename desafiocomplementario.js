alert("Para continuar, presioná Aceptar");

let nombreCliente = prompt("Ingresá tu nombre");

function saludar() {
  alert("Bienvenido/a " + nombreCliente + "! Simulá tu préstamo personal, ingresando un importe entre $10.000 y $200.000. Elegí las cuotas a pagar, entre 12, 24 y 36.");
}

while(nombreCliente == ""){
  alert("Debés ingresar un nombre.");
  nombreCliente = prompt("Ingresá tu nombre");
}

let edadCliente = prompt("Ingresá tu edad");

while(edadCliente < 18){
  alert("Lamentamos informarte, que debés tener al menos 18 años para solicitar tu préstamo personal.");
  edadCliente = prompt("Ingresá tu edad");
}

while(edadCliente > 79){
  alert("Lamentamos informarte, que debés tener menos de 80 años en el momento que solicitás tu préstamo personal.");
  edadCliente = prompt("Ingresá tu edad");
}

  saludar();         //Cuando se cumplan todas las condiciones anteriores, se ejecutará la función "saludar".
  
let prestamoCliente = prompt("Cuanto dinero necesitás? (ingresá el monto sin puntos)");

while(prestamoCliente > 200000 || prestamoCliente < 10000){           
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

for(let i = 0; i < 2; i++){
  if(confirmacionPrestamo === confirmacionTrue){
    alert("Felicitaciones! A continuación te mostraremos el detalle de tu prestamo personal.");
    break;
  }else if(confirmacionPrestamo === confirmacionFalse){
    alert("Lamentamos que no quieras continuar, si cambiás de opinión, tus $" + prestamoCliente + " te esperan!");
    break;
  }else{
    confirmacionPrestamo = prompt(confirmacionPrestamo + " No es un dato válido, intentá de nuevo.");
  }
}

for(let i = 0; i < 1; i++){
  if(cuotasPrestamo == 12 && confirmacionPrestamo == "si"){
    alert("Préstamo personal solicitado: $" + arrayCliente[2] + ". Monto mensual a abonar: $" + (arrayCliente[2] / arrayCliente[3] * 1.35).toFixed(2) + ". Intereses por cuota: $" + (arrayCliente[2] / arrayCliente[3] * 1.35 - (arrayCliente[2] / arrayCliente[3])).toFixed(2) + ". Intereses totales: $" + ((arrayCliente[2] / arrayCliente[3] * 1.35 - (arrayCliente[2] / arrayCliente[3])) * arrayCliente[3]).toFixed(2));
  }else if(cuotasPrestamo == 24 && confirmacionPrestamo == "si"){
    alert("Préstamo personal solicitado: $" + arrayCliente[2] + ". Monto mensual a abonar: $" + (arrayCliente[2] / arrayCliente[3] * 1.50).toFixed(2) + ". Intereses por cuota: $" + (arrayCliente[2] / arrayCliente[3] * 1.50 - (arrayCliente[2] / arrayCliente[3])).toFixed(2) + ". Intereses totales: $" + ((arrayCliente[2] / arrayCliente[3] * 1.50 - (arrayCliente[2] / arrayCliente[3])) * arrayCliente[3]).toFixed(2));
  }else if(cuotasPrestamo == 36 && confirmacionPrestamo == "si"){
    alert("Préstamo personal solicitado: $" + arrayCliente[2] + ". Monto mensual a abonar: $" + (arrayCliente[2] / arrayCliente[3] * 1.70).toFixed(2) + ". Intereses por cuota: $" + (arrayCliente[2] / arrayCliente[3] * 1.70 - (arrayCliente[2] / arrayCliente[3])).toFixed(2) + ". Intereses totales: $" + ((arrayCliente[2] / arrayCliente[3] * 1.70 - (arrayCliente[2] / arrayCliente[3])) * arrayCliente[3]).toFixed(2));
  }
}

if(confirmacionPrestamo == "si"){
  alert(propiedadesCliente.nombre + "! Nos alegra haberte ayudado. Ahora, si estás desde un ordenador, podés visualizar los datos ingresados, haciendo click derecho - inspeccionar, y luego dirigite a la solapa 'consola'. De lo contrario, desestimá este mensaje.");
}

const buscado = arrayCliente.filter(cliente => propiedadesCliente.edad > 18);
console.log("Datos ingresados: ");
console.log(propiedadesCliente);



