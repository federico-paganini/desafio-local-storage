document.addEventListener("DOMContentLoaded", function () {
    const data = document.getElementById("data");
    
    /* Obteniendo datos del localStorage y mostrandolo en etiqueta Span */
    console.log(localStorage.getItem("nuevosdatos"));
    data.innerHTML = localStorage.getItem("nuevosdatos");
});