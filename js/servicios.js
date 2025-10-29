      let selectedService = null;
        let selectedDay = null;
        let selectedTime = null;

        function openBookingModal(serviceId) {
            const serviceNames = {
                'estetica': 'Estética Facial',
                'belleza': 'Belleza Integral',
                'barberia': 'Barbería',
                'unas': 'Manicure & Pedicure',
                'oculista': 'Oculista',
                'ortodoncia': 'Ortodoncia'
            };
            
            document.getElementById('bookingModal').classList.add('active');
            generateTimes();
            
            if (serviceId) {
                selectService(serviceId, serviceNames[serviceId]);
            }
        }

        function closeBookingModal() {
            document.getElementById('bookingModal').classList.remove('active');
        }

        function selectService(serviceId, serviceName) {
            selectedService = { id: serviceId, name: serviceName };
            
            document.querySelectorAll('.service-btn').forEach(btn => {
                btn.classList.remove('active');
            });
            
            event.target.closest('.service-btn').classList.add('active');
            document.getElementById('selectedServiceText').textContent = serviceName;
            
            const ortodonciaInfo = document.getElementById('ortodonciaInfo');
            ortodonciaInfo.style.display = serviceId === 'ortodoncia' ? 'block' : 'none';
        }

        function selectDay(day) {
            selectedDay = day;
            
            document.querySelectorAll('.day-btn').forEach(btn => {
                btn.classList.remove('active');
            });
            
            event.target.classList.add('active');
            generateTimes();
        }

        function generateTimes() {
            const timesGrid = document.getElementById('timesGrid');
            timesGrid.innerHTML = '';
            
            const times = [];
            for (let h = 8; h <= 18; h++) {
                for (let m = 0; m < 60; m += 30) {
                    const hour = h.toString().padStart(2, '0');
                    const minute = m.toString().padStart(2, '0');
                    times.push(`${hour}:${minute}`);
                }
            }
            
            times.forEach(time => {
                const btn = document.createElement('button');
                btn.className = 'time-btn';
                btn.textContent = time;
                btn.onclick = () => selectTime(time);
                timesGrid.appendChild(btn);
            });
        }

        function selectTime(time) {
            selectedTime = time;
            
            document.querySelectorAll('.time-btn').forEach(btn => {
                btn.classList.remove('active');
            });
            
            event.target.classList.add('active');
        }

        function confirmAppointment() {
            const name = document.getElementById('nameInput').value;
            const phone = document.getElementById('phoneInput').value;
            const email = document.getElementById('emailInput').value;
            const comments = document.getElementById('commentsInput').value;
            
            if (!selectedService) {
                alert('Por favor selecciona un servicio');
                return;
            }
            
            if (!selectedDay) {
                alert('Por favor selecciona un día');
                return;
            }
            
            if (!selectedTime) {
                alert('Por favor selecciona una hora');
                return;
            }
            
            if (!name || !phone) {
                alert('Por favor completa los campos obligatorios (nombre y teléfono)');
                return;
            }
            
            const summary = document.getElementById('summary');
            const summaryContent = document.getElementById('summaryContent');
            
            summaryContent.innerHTML = `
                <p><strong>Servicio:</strong> ${selectedService.name}</p>
                <p><strong>Día:</strong> ${selectedDay}</p>
                <p><strong>Hora:</strong> ${selectedTime}</p>
                <p><strong>Nombre:</strong> ${name}</p>
                <p><strong>Teléfono:</strong> ${phone}</p>
                ${email ? `<p><strong>Email:</strong> ${email}</p>` : ''}
                ${comments ? `<p><strong>Comentarios:</strong> ${comments}</p>` : ''}
            `;
            
            summary.style.display = 'block';
            summary.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
            
            alert('¡Cita confirmada exitosamente! Te contactaremos pronto.');
        }

        function suscribir() {
            alert('¡Gracias por suscribirte!');
        }

        document.getElementById('bookingModal').addEventListener('click', function(e) {
            if (e.target === this) {
                closeBookingModal();
            }
        });