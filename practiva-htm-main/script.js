
alert("¡Bienvenido a mi portafolio!");


const boton = document.getElementById("btnCambiar");
const texto = document.getElementById("texto");

boton.addEventListener("click", () => {
  texto.textContent = "¡hola !";
});


const toggleBtn = document.getElementById("btnToggle");
const contenido = document.getElementById("contenido");

toggleBtn.addEventListener("click", () => {
  if (contenido.style.display === "none") {
    contenido.style.display = "block";
  } else {
    contenido.style.display = "none";
  }
});