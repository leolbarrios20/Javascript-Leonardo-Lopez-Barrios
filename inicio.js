button.addEventListener("click", () =>{

    location.assign("main.html");

  });

  let dataBank = document.querySelector("#dataBank");
  fetch("https://api.estadisticasbcra.com/inflacion_interanual_oficial", {
    headers: {
      Authorization: "BEARER eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2OTc0MjM0MzksInR5cGUiOiJleHRlcm5hbCIsInVzZXIiOiJsZW9sYmFycmlvczIwQGdtYWlsLmNvbSJ9.4JweCeRe-W6XTGk0_jmU6yE8MHhwlvVxETuLnFo85XdwCiuh8zK-4XJ0wIb2H519so2Q_AVmhaR1qIgA-Mk51A",
    },
  })
  .then((response) => response.json())
  .then((data) => {

    data.forEach((info) =>{
      const contenido = document.createElement("div")
      contenido.innerHTML = `
        <h4> En la fecha: ${info.d} la inflación fue de %${info.v} </h4>
      `
      dataBank.append(contenido);
    })
  })

  
  


  


