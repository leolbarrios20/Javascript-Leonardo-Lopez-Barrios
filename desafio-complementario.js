alert("Para continuar, presioná Aceptar")

let nombreCliente = prompt("Ingresá tu nombre");

function saludar() {
  alert("Bienvenido/a " + nombreCliente + "! Simulá tu préstamo personal, ingresando un importe entre $10.000 y $200.000. Elegí las cuotas a pagar, entre 12, 24 y 36.");

}

while(nombreCliente == ""){
  alert("Debés ingresar un nombre.");
  nombreCliente = prompt("Ingresá tu nombre");
}

let edadCliente = prompt("Ingresá tu edad");

while(edadCliente == ""){
  alert("Debés ingresar un número válido.");
  edadCliente = prompt("Ingresá tu edad");
}

while(edadCliente < 18 || edadCliente > 79){
  alert("Lamentamos informarte, que debés tener al menos 18 años para solicitar el préstamo y menos de 80 años.");
  edadCliente = prompt("Ingresá tu edad");
}

  saludar();         //Cuando se cumplan todas las condiciones anteriores, se ejecutará la función "saludar".
  
let prestamoCliente = prompt("Cuanto dinero necesitás? (ingresá el monto sin puntos)");

while(prestamoCliente > 200000 || prestamoCliente < 10000){           
    alert("No es importe válido. Recordá que podés pedir un préstamo desde $10.000 hasta $200.000");
    prestamoCliente = prompt("Cuanto dinero necesitás? (ingresá el monto sin puntos)");
}

let cuotasPrestamo = prompt("En cuantas cuotas querés abonar tu préstamo? Elegi entre 12, 24 y 36 cuotas.");

while(cuotasPrestamo != 12 && cuotasPrestamo != 24 && cuotasPrestamo != 36){
    alert("Recordá que las cuotas pueden ser entre 12, 24 y 36");
    cuotasPrestamo = prompt("Elegí entre 12, 24 y 36");
}

function confirmacion(){
 confirmacionPrestamo = prompt("Para confirmar la operación, ingresá 'si' de lo contrario, ingresá 'no'");
 if (confirmacionPrestamo == "si"){
  alert ("A continuación, te pediremos un número de cuenta o alias para depositar el dinero.");
 }else if (confirmacionPrestamo == "no"){
  alert("Lamentamos que no quieras continuar, si cambias de opinion, tus " + prestamoCliente + " te esperan!");
 }
}

if (cuotasPrestamo == 12){
    alert("Terminás abonando por mes $" + (prestamoCliente / 12 * 1.35).toFixed(2));
}else if (cuotasPrestamo == 24){
  alert("Terminás abonando por mes $" + (prestamoCliente / 24 * 1.50).toFixed(2));
}else if (cuotasPrestamo == 36){
  alert("Terminás abonando por mes $" + (prestamoCliente / 36 * 1.70).toFixed(2));
}

confirmacion();



