
alert("Para continuar, presiona aceptar");

let nombreCliente = prompt("Ingrese su nombre");

function saludar() {

    alert("Bienvenido " + nombreCliente + "! Simulá tu préstamo personal, ingresando un importe entre $10.000 y $200.000. Elegí las cuotas a pagar, entre 12, 24 y 36.");

  }

  while(nombreCliente == ""){
    alert(`Debe agregar un nombre!`);
    nombreCliente = prompt("Ingrese su nombre");
  }

  saludar();
  
let prestamoCliente = prompt("Cuanto dinero necesitás? (ingresá el monto sin puntos)");

while(prestamoCliente > 200000 || prestamoCliente < 10000){
    alert("No es importe válido. Recordá que podes pedir un préstamo desde $10.000 hasta $200.000");
    prestamoCliente = prompt("Cuanto dinero necesitás? (ingresá el monto sin puntos)");
}

let cuotasPrestamo = prompt("En cuantas cuotas querés abonar tu préstamo? Elegi entre 12, 24 y 36 cuotas.");


while(cuotasPrestamo != 12 && cuotasPrestamo != 24 && cuotasPrestamo != 36){
    alert("Recordá que las cuotas pueden ser entre 12, 24 y 36");
    cuotasPrestamo = prompt("Elegí entre 12, 24 y 36");
}

if (cuotasPrestamo == 12){
    alert("Terminás abonando por mes $" + (prestamoCliente / 12 * 1.35).toFixed(2));
}else if (cuotasPrestamo == 24){
  alert("Terminás abonando por mes $" + (prestamoCliente / 24 * 1.55).toFixed(2));
}else if (cuotasPrestamo == 36){
  alert("Terminás abonando por mes $" + (prestamoCliente / 36 * 1.70).toFixed(2));
}







