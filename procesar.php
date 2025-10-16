<?php
// ====== procesar.php ======
// Archivo para procesar el formulario de contacto

if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $nombre = htmlspecialchars($_POST['nombre']);
    $correo = htmlspecialchars($_POST['correo']);
    $mensaje = htmlspecialchars($_POST['mensaje']);

    // Simulación de procesamiento (guardar o enviar)
    echo "<h2>Mensaje recibido correctamente</h2>";
    echo "<p><strong>Nombre:</strong> $nombre</p>";
    echo "<p><strong>Correo:</strong> $correo</p>";
    echo "<p><strong>Mensaje:</strong> $mensaje</p>";
} else {
    echo "<h2>No se ha enviado el formulario correctamente.</h2>";
}
?>
