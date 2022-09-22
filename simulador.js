const parrafo1 = document.getElementById("parrafo1");
const parrafo2 = document.getElementById("parrafo2");
const parrafo3 = document.getElementById("parrafo3");
const parrafo4 = document.getElementById("parrafo4");
const parrafo5 = document.getElementById("parrafo5");

const tituloPrincipal = document.getElementById("tituloPrincipal");
const tituloSecundario = document.getElementById("tituloSecundario");

const formNombre = document.getElementById("formNombre");
const formApellido = document.getElementById("formApellido");
const formEdad = document.getElementById("formEdad");
const formCuotas = document.getElementById("formCuotas");
const formPrestamo = document.getElementById("formPrestamo");

const nombreForm = document.getElementById("nombreForm");
const apellidoForm = document.getElementById("apellidoForm");
const edadForm = document.getElementById("edadForm");
const cuotasForm = document.getElementById("cuotasForm");
const prestamoForm = document.getElementById("prestamoForm");

const importeMinimo = 10000;
const importeMaximo = 200000;

class Cliente {
  constructor(nombre, apellido, edad, cuotas, prestamo) {
      this.nombre = nombre;
      this.apellido = apellido;
      this.edad = edad;
      this.cuotas = cuotas;
      this.prestamo = prestamo;
  }
}

const miFormulario = document.getElementById("miFormulario");

miFormulario.addEventListener("submit", (e) =>{
    e.preventDefault();

    const nombre = document.getElementById("formNombre");

    if(nombre.value == ""){
      nombreForm.innerHTML = ("Debés ingresar un nombre.");
      miFormulario.reset();
      HTMLFormElement.reset();
    }

    const apellido = document.getElementById("formApellido");

    if(apellido.value == ""){
      apellidoForm.innerHTML = ("Debés ingresar un apellido.");
    }

    const edad = document.getElementById("formEdad");

    if(edad.value < 18){
      edadForm.innerHTML = ("Debes tener mas de 18 años para solicitar el prestamo");
    }else if(edad.value > 79){
      edadForm.innerHTML = ("Debes tener menos de 80 años para solicitar el prestamo");
    }

    const prestamo = document.getElementById("formPrestamo");

    if(prestamo.value > importeMaximo || prestamo.value < importeMinimo){           
      prestamoForm.innerHTML = ("No es un importe válido. Recordá que podés pedir un préstamo desde $10.000 hasta $200.000"); 
  }

    const cuotas = document.getElementById("formCuotas");

    for(let i = 0; i < 1; i++){
      if(cuotas.value == 12){
        parrafo1.innerHTML = ("Préstamo personal solicitado: $" + prestamo.value);
        parrafo2.innerHTML = ("Monto mensual a abonar: $" + (prestamo.value / cuotas.value * 1.45).toFixed(2));
        parrafo3.innerHTML = ("Intereses por cuota: $" + (prestamo.value / cuotas.value * 1.45 - (prestamo.value / cuotas.value)).toFixed(2));
        parrafo4.innerHTML = ("Intereses totales: $" + ((prestamo.value / cuotas.value * 1.45 - (prestamo.value / cuotas.value)) * cuotas.value).toFixed(2));
        parrafo5.innerHTML = ("Cuotas a pagar: " + cuotas.value);
        tituloPrincipal.innerHTML = (`Gracias ${nombre.value} ${apellido.value}!`);
        tituloSecundario.innerHTML = `Este es el detalle de tu préstamo personal`;
      }else if(cuotas.value == 24){
        parrafo1.innerHTML = ("Préstamo personal solicitado: $" + prestamo.value);
        parrafo2.innerHTML = ("Monto mensual a abonar: $" + (prestamo.value / cuotas.value * 1.60).toFixed(2));
        parrafo3.innerHTML = ("Intereses por cuota: $" + (prestamo.value / cuotas.value * 1.60 - (prestamo.value / cuotas.value)).toFixed(2));
        parrafo4.innerHTML = ("Intereses totales: $" + ((prestamo.value / cuotas.value * 1.60 - (prestamo.value / cuotas.value)) * cuotas.value).toFixed(2));
        parrafo5.innerHTML = ("Cuotas a pagar: " + cuotas.value);
        tituloPrincipal.innerHTML = ("Gracias " + cliente.value + "!");
        tituloSecundario.innerHTML = `Este es el detalle de tu préstamo personal`;
      }else if(cuotas.value == 36){
        parrafo1.innerHTML = ("Préstamo personal solicitado: $" + prestamo.value);
        parrafo2.innerHTML = ("Monto mensual a abonar: $" + (prestamo.value / cuotas.value * 1.80).toFixed(2));
        parrafo3.innerHTML = ("Intereses por cuota: $" + (prestamo.value / cuotas.value * 1.80 - (prestamo.value / cuotas.value)).toFixed(2));
        parrafo4.innerHTML = ("Intereses totales: $" + ((prestamo.value / cuotas.value * 1.80 - (prestamo.value / cuotas.value)) * cuotas.value).toFixed(2));
        parrafo5.innerHTML = ("Cuotas a pagar: " + cuotas.value);
        tituloPrincipal.innerHTML = ("Gracias " + cliente.value + "!");
        tituloSecundario.innerHTML = `Este es el detalle de tu préstamo personal`;
      }else{
        cuotasForm.innerHTML = ("Recordá que las cuotas pueden ser 12, 24 o 36");
      }
    }
    
    const cliente = new Cliente(nombre.value, apellido.value, edad.value, cuotas.value, prestamo.value);
    console.log(Cliente);
    miFormulario.reset();
});





