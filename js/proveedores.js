// proveedores.js

function showSection(section) {
    document.getElementById('servicios').classList.add('hidden');
    document.getElementById('proveedores').classList.add('hidden');
    document.getElementById(section).classList.remove('hidden');
}

function suscribir() {
    alert('¡Gracias por suscribirte! Recibirás nuestras novedades y promociones.');
}
