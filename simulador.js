

const nombre = document.getElementById("nombre");
const apellido = document.getElementById("apellido");
const edad = document.getElementById("edad");
const cuotas = document.getElementById("cuotas");
const prestamo = document.getElementById("prestamo");

function errorCuotas(){
  const cont = document.getElementById("formulario");
  const parrafo = document.createElement("p");
  const texto = document.createTextNode(`No podés abonar en ${cuotas.value} cuota/s. Elegí entre 12, 24 o 36.`);
  parrafo.appendChild(texto);
  cont.replaceChild(parrafo, cont.firstChild);
}

const reiniciar = document.getElementById("reiniciar");

class Cliente {
  constructor(nombre, apellido, edad, cuotas, prestamo, genero) {
      this.nombre = nombre;
      this.apellido = apellido;
      this.edad = Number(edad);
      this.cuotas = Number(cuotas);
      this.prestamo = Number(prestamo);
      this.genero = genero;
  }
}

const cliente = new Cliente(nombre.value, apellido.value, edad.value, cuotas.value, prestamo.value);

const clientes = [];

/*
if(localStorage.getItem("clientes")) {
  let cliente = JSON.parse(localStorage.getItem("clientes"));
  for(let i = 0; i < cliente.length; i++ ) {
      clientes.push(cliente[i]);
  }
}
*/

let [cliente1, cliente2, cliente3, cliente4, cliente5, cliente6, cliente7, cliente8, cliente9, cliente10] = clientes;

const formulario = document.getElementById("formulario");

const button = document.getElementById("button");

function agregarCliente() {
  const nombre = document.getElementById("nombre").value;
  const apellido = document.getElementById("apellido").value;
  const edad = document.getElementById("edad").value;
  const cuotas = document.getElementById("cuotas").value;
  const prestamo = document.getElementById("prestamo").value;
  const genero = document.getElementById("genero");
  const nuevoCliente = new Cliente(nombre, apellido, edad, cuotas, prestamo, genero);
  clientes.push(nuevoCliente);
  /*
  localStorage.setItem("clientes", JSON.stringify(clientes));
  formulario.reset();
  */
}

function desliza(){
  const cont = document.getElementById("formulario");
  const parrafo = document.createElement("p");
  const texto = document.createTextNode("Deslizá hacia abajo para visualizar los detalles.");
  parrafo.appendChild(texto);
  cont.replaceChild(parrafo, cont.firstChild);
}

const datosIngresados = document.getElementById("datosIngresados");

function mostrarDatos12() {
    desliza();
    agregarCliente();
    datosIngresados.innerHTML = "";
    clientes.forEach( cliente => {
        const div = document.createElement("div");
        div.innerHTML = `
                        <div class = "datosIngresados">
                          <h2>Datos Ingresados</h2>
                          <p>Nombre del cliente: ${nombre.value + " " + apellido.value}</p>
                          <p>Edad: ${edad.value} años</p>
                          <p>Cuotas seleccionadas: ${cuotas.value}</p>
                          <p>Prestamo simulado: ${prestamo.value}</p>
                          <p>Monto mensual: ${(prestamo.value / cuotas.value * 1.45).toFixed(2)}</p>
                          <p>Intereses por cuota: ${(prestamo.value / cuotas.value * 1.45 - (prestamo.value / cuotas.value)).toFixed(2)}</p>
                          <p>Intereses totales: ${((prestamo.value / cuotas.value * 1.45 - (prestamo.value / cuotas.value)) * cuotas.value).toFixed(2)}</p>
                        </div>
                        `;
        datosIngresados.appendChild(div);
    })
}

function mostrarDatos24() {
  desliza();
  agregarCliente();
  datosIngresados.innerHTML = "";
  clientes.forEach( cliente => {
      const div = document.createElement("div");
      div.innerHTML = `
                      <div class = "datosIngresados">
                        <h2>Datos Ingresados</h2>
                        <p>Nombre del cliente: ${nombre.value + " " + apellido.value}</p>
                        <p>Edad: ${edad.value} años</p>
                        <p>Cuotas seleccionadas: ${cuotas.value}</p>
                        <p>Prestamo simulado: ${prestamo.value}</p>
                        <p>Monto mensual: ${(prestamo.value / cuotas.value * 1.60).toFixed(2)}</p>
                        <p>Intereses por cuota: ${(prestamo.value / cuotas.value * 1.60 - (prestamo.value / cuotas.value)).toFixed(2)}</p>
                        <p>Intereses totales: ${((prestamo.value / cuotas.value * 1.60 - (prestamo.value / cuotas.value)) * cuotas.value).toFixed(2)}</p>
                      </div>
                      `;
      datosIngresados.appendChild(div);
  })
}

function mostrarDatos36() {
  desliza();
  agregarCliente();
  datosIngresados.innerHTML = "";
  clientes.forEach( cliente => {
      const div = document.createElement("div");
      div.innerHTML = `
                      <div class = "datosIngresados">
                        <h2>Datos Ingresados</h2>
                        <p class = "parrafoinner">Nombre del cliente: ${nombre.value + " " + apellido.value}</p>
                        <p class = "parrafoinner">Edad: ${edad.value} años</p>
                        <p class = "parrafoinner">Cuotas seleccionadas: ${cuotas.value}</p>
                        <p class = "parrafoinner">Prestamo simulado: ${prestamo.value}</p>
                        <p class = "parrafoinner">Monto mensual: ${(prestamo.value / cuotas.value * 1.80).toFixed(2)}</p>
                        <p class = "parrafoinner">Intereses por cuota: ${(prestamo.value / cuotas.value * 1.80 - (prestamo.value / cuotas.value)).toFixed(2)}</p>
                        <p class = "parrafoinner">Intereses totales: ${((prestamo.value / cuotas.value * 1.80 - (prestamo.value / cuotas.value)) * cuotas.value).toFixed(2)}</p>
                      </div>
                      `;
      datosIngresados.appendChild(div);
  })
}

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




function reinciarFormulario () {
  window.location.reload();
}

reiniciar.addEventListener("click", () => {
  reinciarFormulario(); 
})

/*
location.assign("resultado.html");  

window.location.replace("resultado.html");
*/

console.log(cliente);