let contador = 0;

document.getElementById("btn")?.addEventListener("click", () => {
    contador++;

    const elemento = document.getElementById("cont");

    if (elemento) {
        elemento.textContent = contador.toString();
    }
});