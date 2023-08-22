/* Ingreso de datos*/
document.addEventListener("DOMContentLoaded", function() {
    const btntxt = document.getElementById("buttonText");
    const inputxt = document.getElementById("inputText");

    btntxt.addEventListener("click", function(event) {
        event.preventDefault();

        /* Guardando datos en localSorage */
        localStorage.setItem("nuevosdatos", inputxt.value);
    });
});