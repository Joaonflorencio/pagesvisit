document.addEventListener('DOMContentLoaded', (event) => {
    let contador = localStorage.getItem('contadorVisitas');
    contador = contador ? parseInt(contador) : 0;
    contador++;
    localStorage.setItem('contadorVisitas', contador.toString());
    document.getElementById('contador').innerText = contador;

    document.getElementById('resetButton').addEventListener('click', function() {
        localStorage.setItem('contadorVisitas', '0');
        document.getElementById('contador').innerText = '0';
    });
});