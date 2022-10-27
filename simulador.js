const nombre = document.getElementById("nombre");
const apellido = document.getElementById("apellido");
const edad = document.getElementById("edad");
const cuotas = document.getElementById("cuotas");
const prestamo = document.getElementById("prestamo");
const email = document.getElementById("email");

const datosIngresados = document.getElementById("datosIngresados");

//Elimina el botón "Enviar" cuando se envía el formulario

function eliminarBoton(){
  let verDatos = document.getElementById("verDatos");
  verDatos.parentNode.removeChild(verDatos);
}

//Alerta cuando hay un error en las cuotas seleccionadas

function errorCuotas(){
  Swal.fire({
    icon: "warning",
    title: "<p style = 'color: black; font-size: 20px; text-shadow: none'>" + `No es un importe válido. Elegí entre 12, 24 y 36 cuotas.</p>`,
    confirmButtonText: "Aceptar"
  });
}

function desliza(){
  Swal.fire({
    icon: "success",
    title: "<p style = 'color: black; font-size: 20px; text-shadow: none'>" +  `Deslizá para visualizar los detalles.</p>`,
    confirmButtonText: "Aceptar"
  });
}

function agregarCliente() {
  const nombre = document.getElementById("nombre").value;
  const apellido = document.getElementById("apellido").value;
  const edad = document.getElementById("edad").value;
  const cuotas = document.getElementById("cuotas").value;
  const prestamo = document.getElementById("prestamo").value;
  const email = document.getElementById("email");
  const nuevoCliente = new Cliente(nombre, apellido, edad, cuotas, prestamo, email);
  clientes.push(nuevoCliente);
}

function mostrarDatos12() {
    desliza();
    agregarCliente();
    eliminarBoton();
    clientes.forEach( cliente => {
        const div = document.createElement("div");
        div.innerHTML = `
                        <div class = "datosIngresados mx-auto">
                          <h2>Datos Ingresados</h2>
                          <p>Nombre: ${nombre.value + " " + apellido.value}</p>
                          <p>Edad: ${edad.value} años</p>
                          <p>Email: ${email.value}</p>
                          <p>Cuotas seleccionadas: ${cuotas.value}</p>
                          <p>Prestamo simulado: $${prestamo.value}</p>
                          <p>Monto mensual: $${(prestamo.value / cuotas.value * 1.45).toFixed(2)}</p>
                          <p>Intereses por cuota: $${(prestamo.value / cuotas.value * 1.45 - (prestamo.value / cuotas.value)).toFixed(2)}</p>
                          <p>Intereses totales: $${((prestamo.value / cuotas.value * 1.45 - (prestamo.value / cuotas.value)) * cuotas.value).toFixed(2)}</p>
                        </div>
                        `;
        datosIngresados.appendChild(div);
    })
    formulario.reset();
}

function mostrarDatos24() {
  desliza();
  agregarCliente();
  eliminarBoton();
  datosIngresados.innerHTML = "";
  clientes.forEach( cliente => {
      const div = document.createElement("div");
      div.innerHTML = `
                      <div class = "datosIngresados mx-auto">
                        <h2>Datos Ingresados</h2>
                        <p>Nombre: ${nombre.value + " " + apellido.value}</p>
                        <p>Edad: ${edad.value} años</p>
                        <p>Email: ${email.value}</p>
                        <p>Cuotas seleccionadas: ${cuotas.value}</p>
                        <p>Prestamo simulado: $${prestamo.value}</p>
                        <p>Monto mensual: $${(prestamo.value / cuotas.value * 1.60).toFixed(2)}</p>
                        <p>Intereses por cuota: $${(prestamo.value / cuotas.value * 1.60 - (prestamo.value / cuotas.value)).toFixed(2)}</p>
                        <p>Intereses totales: $${((prestamo.value / cuotas.value * 1.60 - (prestamo.value / cuotas.value)) * cuotas.value).toFixed(2)}</p>
                      </div>
                      `;
      datosIngresados.appendChild(div);
  })
  formulario.reset();
}

function mostrarDatos36() {
  desliza();
  agregarCliente();
  eliminarBoton();
  datosIngresados.innerHTML = "";
  clientes.forEach( cliente => {
      const div = document.createElement("div");
      div.innerHTML = `
                      <div class = "datosIngresados mx-auto">
                        <h2>Datos Ingresados</h2>
                        <p>Nombre: ${nombre.value + " " + apellido.value}</p>
                        <p>Edad: ${edad.value} años</p>
                        <p>Email: ${email.value}</p>
                        <p>Cuotas seleccionadas: ${cuotas.value}</p>
                        <p>Prestamo simulado: $${prestamo.value}</p>
                        <p>Monto mensual: $${(prestamo.value / cuotas.value * 1.80).toFixed(2)}</p>
                        <p>Intereses por cuota: $${(prestamo.value / cuotas.value * 1.80 - (prestamo.value / cuotas.value)).toFixed(2)}</p>
                        <p>Intereses totales: $${((prestamo.value / cuotas.value * 1.80 - (prestamo.value / cuotas.value)) * cuotas.value).toFixed(2)}</p>
                      </div>
                      `;
      datosIngresados.appendChild(div);
  })
  formulario.reset();
}

const reiniciar = document.getElementById("reiniciar");

class Cliente {
  constructor(nombre, apellido, edad, cuotas, prestamo, email) {
      this.nombre = nombre;
      this.apellido = apellido;
      this.edad = Number(edad);
      this.cuotas = Number(cuotas);
      this.prestamo = Number(prestamo);
      this.email = email;
  }
}

const cliente = new Cliente(nombre.value, apellido.value, edad.value, email.value, cuotas.value, prestamo.value);

const clientes = [];


let [cliente1, cliente2, cliente3, cliente4, cliente5, cliente6, cliente7, cliente8, cliente9, cliente10] = clientes;

const formulario = document.getElementById("formulario");

formulario.addEventListener("submit", (e) =>{
  e.preventDefault();

  let resultadoCuotas12 = Number((cuotas.value));
  resultadoCuotas12 == 12 && mostrarDatos12();
  resultadoCuotas12 != 12 && errorCuotas(); 
      
  let resultadoCuotas24 = Number((cuotas.value));
  resultadoCuotas24 == 24 && mostrarDatos24();

  let resultadoCuotas36 = Number((cuotas.value));
  resultadoCuotas36 == 36 && mostrarDatos36();

});

//recarga la página

reiniciar.addEventListener("click", () => {
  window.location.reload();
})



