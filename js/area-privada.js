// area-privada.js

let consumos = [];

function openAdminModal() {
    const password = prompt('Ingrese la contraseña de administrador:');
    if (password === 'admin123') {
        document.getElementById('adminModal').style.display = 'flex';
    } else if (password !== null) {
        alert('Contraseña incorrecta');
    }
}

function closeAdminModal() {
    document.getElementById('adminModal').style.display = 'none';
}

function calcularMaquina1() {
    const litros = parseFloat(document.getElementById('m1-litros').value);
    const energia = parseFloat(document.getElementById('m1-energia').value);
    
    if (litros && energia) {
        const costoEnergia = energia * 500;
        const result = `Consumo: ${litros}ml | Energía: ${energia}kWh | Costo aprox: $${costoEnergia.toLocaleString()}`;
        document.getElementById('result-m1').textContent = result;
        agregarConsumo('Máquina 1', `${litros}ml`, energia);
    } else {
        alert('Por favor complete todos los campos');
    }
}

function calcularMaquina2() {
    const lux = parseFloat(document.getElementById('m2-lux').value);
    const energia = parseFloat(document.getElementById('m2-energia').value);
    
    if (lux && energia) {
        const costoEnergia = energia * 500;
        const result = `Intensidad: ${lux} lux | Energía: ${energia}kWh | Costo aprox: $${costoEnergia.toLocaleString()}`;
        document.getElementById('result-m2').textContent = result;
        agregarConsumo('Máquina 2', `${lux} lux`, energia);
    } else {
        alert('Por favor complete todos los campos');
    }
}

function calcularMaquina3() {
    const presion = parseFloat(document.getElementById('m3-presion').value);
    const energia = parseFloat(document.getElementById('m3-energia').value);
    
    if (presion && energia) {
        const costoEnergia = energia * 500;
        const result = `Presión: ${presion} bar | Energía: ${energia}kWh | Costo aprox: $${costoEnergia.toLocaleString()}`;
        document.getElementById('result-m3').textContent = result;
        agregarConsumo('Máquina 3', `${presion} bar`, energia);
    } else {
        alert('Por favor complete todos los campos');
    }
}

function agregarConsumo(maquina, consumo, energia) {
    const fecha = new Date().toLocaleString('es-CO');
    consumos.push({ maquina, fecha, consumo, energia });
    actualizarTabla();
}

function actualizarTabla() {
    const tbody = document.getElementById('consumosBody');
    tbody.innerHTML = '';
    consumos.forEach(c => {
        const row = tbody.insertRow();
        row.innerHTML = `
            <td>${c.maquina}</td>
            <td>${c.fecha}</td>
            <td>${c.consumo}</td>
            <td>${c.energia} kWh</td>
        `;
    });
}

window.onclick = function(event) {
    const serviceModal = document.getElementById('serviceModal');
    const adminModal = document.getElementById('adminModal');
    if (event.target === serviceModal) serviceModal.style.display = 'none';
    if (event.target === adminModal) adminModal.style.display = 'none';
};
