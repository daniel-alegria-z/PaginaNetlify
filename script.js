document.addEventListener('DOMContentLoaded', function() {
  // Funcionalidad de las pestañas
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('.seccion-contenido');
  
  navLinks.forEach(link => {
      link.addEventListener('click', function(e) {
          const target = this.getAttribute('data-target');

          // Si el enlace tiene un atributo href que apunta a otra página, no interceptar el evento
          if (this.getAttribute('href') && this.getAttribute('href') !== '#') {
              return; // Permitir la redirección predeterminada
          }

          e.preventDefault();

          // Remover clase active de todos los links y secciones
          navLinks.forEach(l => l.classList.remove('active'));
          sections.forEach(section => section.classList.remove('active'));

          // Agregar clase active al link clickeado
          this.classList.add('active');

          // Mostrar la sección correspondiente
          if (target) {
              document.getElementById(target).classList.add('active');
          }

          // Desplazamiento suave
          document.querySelector('.contenido-dinamico').scrollIntoView({
              behavior: 'smooth'
          });
      });
  });

  // Efecto hover para los servicios
  const servicios = document.querySelectorAll('.servicio');
  servicios.forEach(servicio => {
      servicio.addEventListener('mouseenter', function() {
          const icono = this.querySelector('.servicio-icono i');
          icono.style.transform = 'scale(1.2)';
          icono.style.transition = 'transform 0.3s ease';
      });

      servicio.addEventListener('mouseleave', function() {
          const icono = this.querySelector('.servicio-icono i');
          icono.style.transform = 'scale(1)';
      });
  });

  // Efecto hover para los doctores
  const doctores = document.querySelectorAll('.doctor');
  doctores.forEach(doctor => {
      doctor.addEventListener('mouseenter', function() {
          const imagen = this.querySelector('.doctor-imagen');
          imagen.style.borderColor = '#2980b9';
          imagen.style.transform = 'rotate(5deg)';
          imagen.style.transition = 'all 0.3s ease';
      });

      doctor.addEventListener('mouseleave', function() {
          const imagen = this.querySelector('.doctor-imagen');
          imagen.style.borderColor = '#3498db';
          imagen.style.transform = 'rotate(0)';
      });
  });

  // Validación básica del formulario de contacto
  const formularioContacto = document.querySelector('.formulario-contacto form');
  if (formularioContacto) {
      formularioContacto.addEventListener('submit', function(e) {
          e.preventDefault();

          // Validación simple
          const nombre = this.querySelector('input[type="text"]').value;
          const email = this.querySelector('input[type="email"]').value;
          const mensaje = this.querySelector('textarea').value;

          if (nombre && email && mensaje) {
              alert('Gracias por tu mensaje. Nos pondremos en contacto contigo pronto.');
              this.reset();
          } else {
              alert('Por favor completa todos los campos requeridos.');
          }
      });
  }
});