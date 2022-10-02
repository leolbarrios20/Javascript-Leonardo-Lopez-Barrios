const nombre = document.getElementById("nombre");
const apellido = document.getElementById("apellido");
const edad = document.getElementById("edad");
const cuotas = document.getElementById("cuotas");
const prestamo = document.getElementById("prestamo");

const nombreCliente = document.getElementById("nombreCliente");
const edadCliente = document.getElementById("edadCliente");

const prestamoCliente = document.getElementById("prestamoCliente");
const montoMensual = document.getElementById("montoMensual");
const interesesCuota = document.getElementById("interesesCuota");
const interesesTotales = document.getElementById("interesesTotales");
const cuotasTotales = document.getElementById("cuotasTotales");


const datosIngresados = document.getElementById("datosIngresados");

const reiniciar = document.getElementById("reiniciar");

class Cliente {
  constructor(nombre, apellido, edad, cuotas, prestamo, genero) {
      this.nombre = nombre;
      this.apellido = apellido;
      this.edad = edad;
      this.cuotas = cuotas;
      this.prestamo = prestamo;
      this.genero = genero;
  }
}

const clientes = [];

if(localStorage.getItem("clientes")) {
  let cliente = JSON.parse(localStorage.getItem("clientes"));
  for(let i = 0; i < cliente.length; i++ ) {
      clientes.push(cliente[i]);
  }
}

const formulario = document.getElementById("formulario");



function veinticuatro(){
  nombreCliente.innerHTML = (`Nombre del cliente: ${nombre.value} ${apellido.value}`);
  edadCliente.innerHTML = (`Edad del cliente: ${edad.value} años`);
  prestamoCliente.innerHTML = ("Préstamo personal solicitado: $" + prestamo.value);
  montoMensual.innerHTML = ("Monto mensual a abonar: $" + (prestamo.value / cuotas.value * 1.60).toFixed(2));
  interesesCuota.innerHTML = ("Intereses por cuota: $" + (prestamo.value / cuotas.value * 1.60 - (prestamo.value / cuotas.value)).toFixed(2));
  interesesTotales.innerHTML = ("Intereses totales: $" + ((prestamo.value / cuotas.value * 1.60 - (prestamo.value / cuotas.value)) * cuotas.value).toFixed(2));
  cuotasTotales.innerHTML = ("Cuotas a pagar: " + cuotas.value);
  desliza();
  agregarCliente();
  datosIngresados.innerHTML = (`Datos ingresados`);
}

function treintaiseis(){
  nombreCliente.innerHTML = (`Nombre del cliente: ${nombre.value} ${apellido.value}`);
  edadCliente.innerHTML = (`Edad del cliente: ${edad.value} años`);
  prestamoCliente.innerHTML = ("Préstamo personal solicitado: $" + prestamo.value);
  montoMensual.innerHTML = ("Monto mensual a abonar: $" + (prestamo.value / cuotas.value * 1.80).toFixed(2));
  interesesCuota.innerHTML = ("Intereses por cuota: $" + (prestamo.value / cuotas.value * 1.80 - (prestamo.value / cuotas.value)).toFixed(2));
  interesesTotales.innerHTML = ("Intereses totales: $" + ((prestamo.value / cuotas.value * 1.80 - (prestamo.value / cuotas.value)) * cuotas.value).toFixed(2));
  cuotasTotales.innerHTML = ("Cuotas a pagar: " + cuotas.value);
  desliza();
  agregarCliente();
  datosIngresados.innerHTML = (`Datos ingresados`);
}

function agregarCliente() {
  const nombre = document.getElementById("nombre").value;
  const apellido = document.getElementById("apellido").value;
  const edad = document.getElementById("edad").value;
  const cuotas = document.getElementById("cuotas").value;
  const prestamo = document.getElementById("prestamo").value;
  const genero = document.getElementById("genero");
  const nuevoCliente = new Cliente(nombre, apellido, edad, cuotas, prestamo, genero);
  clientes.push(nuevoCliente);
  localStorage.setItem("clientes", JSON.stringify(clientes));
  formulario.reset();
}

function desliza(){
  const cont = document.getElementById("formulario");
  const parrafo = document.createElement("p");
  const texto = document.createTextNode("Deslizá hacia abajo para visualizar los detalles.");
  parrafo.appendChild(texto);
  cont.replaceChild(parrafo, cont.firstChild);
}

function errorCuotas(){
  const cont = document.getElementById("formulario");
  const parrafo = document.createElement("p");
  const texto = document.createTextNode(`No podés abonar en ${cuotas.value} cuota/s. Elegí entre 12, 24 o 36.`);
  parrafo.appendChild(texto);
  cont.replaceChild(parrafo, cont.firstChild);
}

formulario.addEventListener("submit", (e) =>{
    e.preventDefault();

    const nombre = document.getElementById("nombre");

    const apellido = document.getElementById("apellido");
    
    const edad = document.getElementById("edad");

    const prestamo = document.getElementById("prestamo");

    const cuotas = document.getElementById("cuotas");


    function doce(){
      nombreCliente.innerHTML = (`Nombre del cliente: ${nombre.value} ${apellido.value}`);
      edadCliente.innerHTML = (`Edad del cliente: ${edad.value} años`);
      prestamoCliente.innerHTML = ("Préstamo personal solicitado: $" + prestamo.value);
      montoMensual.innerHTML = ("Monto mensual a abonar: $" + (prestamo.value / cuotas.value * 1.45).toFixed(2));
      interesesCuota.innerHTML = ("Intereses por cuota: $" + (prestamo.value / cuotas.value * 1.45 - (prestamo.value / cuotas.value)).toFixed(2));
      interesesTotales.innerHTML = ("Intereses totales: $" + ((prestamo.value / cuotas.value * 1.45 - (prestamo.value / cuotas.value)) * cuotas.value).toFixed(2));
      cuotasTotales.innerHTML = ("Cuotas a pagar: " + cuotas.value);
      desliza();
      agregarCliente();
      datosIngresados.innerHTML = (`Datos ingresados`);
    }

    cuotas.value == 12 ? doce() : errorCuotas();

});

const cliente = new Cliente(nombre.value, apellido.value, edad.value, cuotas.value, prestamo.value);

function reinciarFormulario () {
  window.location.reload();
}

reiniciar.addEventListener("click", () => {
  reinciarFormulario(); 
})



