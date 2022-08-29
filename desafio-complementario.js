let prestamoCliente = prompt("Cuanto dinero necesitás? (ingresá el monto sin puntos)");

if(prestamoCliente <= 200000 & prestamoCliente >= 10000){
    cuotasPrestamo = prompt("Elegí en cuantas cuotas querés abonar, podes elegir entre 12, 24 y 36");
}else{
    alert("Probá con otro importe, recordá que podés pedir entre $10.000 y $200.000");
}

while(prestamoCliente < 10000 && prestamoCliente > 200000){
    alert("Recordá que podés pedir entre $10.000 y $200.000");
    prestamoCliente = prompt("Elegí entre $10.000 y $200.000");
}

if (cuotasPrestamo == 12){
    alert("Terminás abonando por mes $" + prestamoCliente / 12 * 1.35);
}

if (cuotasPrestamo == 24){
    alert("Terminás abonando por mes $" + prestamoCliente / 12 * 1.45);
}

if (cuotasPrestamo == 36){
    alert("Terminás abonando por mes $" + prestamoCliente / 12 * 1.60);
}


while(cuotasPrestamo != 12 && cuotasPrestamo != 24 && cuotasPrestamo != 36){
    alert("Recordá que las cuotas pueden ser entre 12, 24 y 36");
    cuotasPrestamo = prompt("Elegí entre 12, 24 y 36");
}

if (cuotasPrestamo == 12){
    alert("Terminás abonando por mes $" + prestamoCliente / 12 * 1.35);
}

if (cuotasPrestamo == 24){
    alert("Terminás abonando por mes $" + prestamoCliente / 12 * 1.45);
}

if (cuotasPrestamo == 36){
    alert("Terminás abonando por mes $" + prestamoCliente / 12 * 1.60);
}








