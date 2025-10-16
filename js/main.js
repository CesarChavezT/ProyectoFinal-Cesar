// ====== main.js ======
// Archivo JavaScript para manejo básico del formulario y validaciones

document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("contactForm");
    const mensajeResultado = document.getElementById("mensajeResultado");

    form.addEventListener("submit", (e) => {
        const nombre = document.getElementById("nombre").value.trim();
        const correo = document.getElementById("correo").value.trim();
        const mensaje = document.getElementById("mensaje").value.trim();

        // Validación básica
        if (nombre === "" || correo === "" || mensaje === "") {
            e.preventDefault(); 
            mensajeResultado.textContent = "⚠️ Todos los campos son obligatorios.";
            mensajeResultado.style.color = "red";
        } else {
            mensajeResultado.textContent = "✅ Enviando   datos.....";
            mensajeResultado.style.color = "green";
        }
    });

});   
