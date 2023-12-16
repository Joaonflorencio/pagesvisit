const contadorVisitasSpan = document.getElementById('contadorVisitas');
const btnReestablecer = document.getElementById('btnReestablecer')

// Obtener el contador de visitas del localStorage
const obtenerContadorLocalStorage = () => parseInt(localStorage.getItem('contadorVisitas')) || 0;
let contadorVisitas = obtenerContadorLocalStorage();
const guardarContadorLocalStorage = (contador) => localStorage.setItem('contadorVisitas', contador);

const actualizarContador = () => {
    contadorVisitasSpan.textContent = contadorVisitas;
    // Guardar el contador actualizado en el localStorage
    guardarContadorLocalStorage(contadorVisitas);
}

// Incrementar el contador y actualizar la página
contadorVisitas++;
actualizarContador();

btnReestablecer.addEventListener("click", () => {
  localStorage.setItem('contadorVisitas', 0)
  contadorVisitasSpan.textContent = localStorage.getItem('contadorVisitas');
});