// JavaScript para el Menú Móvil
function toggleMenu() {
    const menu = document.getElementById('mobile-menu');
    const button = document.getElementById('menu-button');
    const icon = button.querySelector('i');

    const isMenuOpen = menu.style.display === "block";
    menu.style.display = isMenuOpen ? "none" : "block";

    if (!isMenuOpen) {
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-times');
    } else {
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
    }
}

// Inicializar el evento del menú solo cuando el DOM esté listo
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function () {
        const menuButton = document.getElementById('menu-button');
        if (menuButton) {
            menuButton.addEventListener('click', toggleMenu);
        }
    });
} else {
    const menuButton = document.getElementById('menu-button');
    if (menuButton) {
        menuButton.addEventListener('click', toggleMenu);
    }
}

// JavaScript para la animación de nodos
const canvas = document.getElementById('nodeCanvas');
if (canvas) {
    const ctx = canvas.getContext('2d', { alpha: true, desynchronized: true });
    let width, height;
    let particles = [];
    const numParticles = 80; // Número de nodos
    const maxDistance = 150; // Distancia máxima para conectar líneas
    let animationId;

    // Función para ajustar el tamaño del canvas
    function resizeCanvas() {
        width = canvas.width = canvas.offsetWidth;
        height = canvas.height = canvas.offsetHeight;
    }

    // Clase para representar cada nodo
    class Particle {
        constructor() {
            this.x = Math.random() * width;
            this.y = Math.random() * height;
            this.radius = Math.random() * 1.5 + 0.5; // Radio entre 0.5 y 2
            // Velocidad de movimiento sutil
            this.vx = Math.random() * 0.5 - 0.25;
            this.vy = Math.random() * 0.5 - 0.25;
        }

        // Dibuja el nodo
        draw() {
            ctx.fillStyle = 'rgba(59, 154, 235, 0.8)'; // Color cian de acento
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
            ctx.fill();
        }

        // Actualiza la posición y rebota en los bordes
        update() {
            this.x += this.vx;
            this.y += this.vy;

            // Rebotar en los bordes
            if (this.x < 0 || this.x > width) this.vx *= -1;
            if (this.y < 0 || this.y > height) this.vy *= -1;
        }
    }

    // Inicializa las partículas
    function init() {
        resizeCanvas();
        particles = [];
        for (let i = 0; i < numParticles; i++) {
            particles.push(new Particle());
        }
    }

    // Dibuja las líneas de conexión entre nodos cercanos
    function connectParticles() {
        for (let i = 0; i < numParticles; i++) {
            for (let j = i + 1; j < numParticles; j++) {
                const p1 = particles[i];
                const p2 = particles[j];

                const dx = p1.x - p2.x;
                const dy = p1.y - p2.y;
                const distance = Math.sqrt(dx * dx + dy * dy);

                if (distance < maxDistance) {
                    // Calcular opacidad basada en la distancia (más cerca = más opaca)
                    const opacity = 1 - (distance / maxDistance);
                    ctx.strokeStyle = `rgba(59, 154, 235, ${opacity * 0.4})`; // Color cian con opacidad
                    ctx.lineWidth = 0.5;
                    ctx.beginPath();
                    ctx.moveTo(p1.x, p1.y);
                    ctx.lineTo(p2.x, p2.y);
                    ctx.stroke();
                }
            }
        }
    }

    // Bucle principal de animación
    function animate() {
        // Limpiar canvas en cada frame
        ctx.clearRect(0, 0, width, height);

        connectParticles();

        // Dibujar y actualizar cada partícula
        particles.forEach(p => {
            p.update();
            p.draw();
        });

        animationId = requestAnimationFrame(animate);
    }

    // Debounce para resize
    let resizeTimeout;
    function handleResize() {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(() => {
            resizeCanvas();
        }, 150);
    }

    // Manejar el redimensionamiento de la ventana con debounce
    window.addEventListener('resize', handleResize, { passive: true });

    // Iniciar la animación al cargar la página usando requestIdleCallback si está disponible
    if ('requestIdleCallback' in window) {
        requestIdleCallback(() => {
            init();
            animate();
        });
    } else {
        // Fallback para navegadores que no soportan requestIdleCallback
        setTimeout(() => {
            init();
            animate();
        }, 1);
    }

    // Pausar animación cuando la pestaña no está visible
    document.addEventListener('visibilitychange', () => {
        if (document.hidden) {
            if (animationId) {
                cancelAnimationFrame(animationId);
            }
        } else {
            animate();
        }
    });
}



// ============================================
// MANEJO DEL FORMULARIO DE CONTACTO
// ============================================
// ============================================
// MANEJO DEL FORMULARIO DE CONTACTO
// ============================================
document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('contact-form');
    if (!form) return;

    form.addEventListener('submit', async function (event) {
        event.preventDefault();
        const data = new FormData(form);
        const status = document.getElementById('form-status');
        const submitBtn = document.getElementById('submit-btn');

        // Basic email validation
        const email = form.querySelector('input[name="email"]').value;
        if (!email || !email.includes('@')) {
            status.innerHTML = '<div class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert"><strong class="font-bold">Error!</strong> <span class="block sm:inline">Por favor ingresa un correo electrónico válido.</span></div>';
            status.classList.remove('hidden');
            return;
        }

        submitBtn.disabled = true;
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin mr-2"></i> Enviando...';

        try {
            const response = await fetch(form.action, {
                method: form.method,
                body: data,
                headers: {
                    'Accept': 'application/json'
                }
            });

            if (response.ok) {
                status.innerHTML = '<div class="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative" role="alert"><strong class="font-bold">¡Éxito!</strong> <span class="block sm:inline">Tu mensaje ha sido enviado correctamente. Te contactaremos pronto.</span></div>';
                status.classList.remove('hidden');
                form.reset();
            } else {
                const data = await response.json();
                if (data.errors) {
                    status.innerHTML = data.errors.map(error => error.message).join(", ");
                } else {
                    status.innerHTML = '<div class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert"><strong class="font-bold">Error!</strong> <span class="block sm:inline">Hubo un problema al enviar el formulario. Por favor intenta de nuevo.</span></div>';
                }
                status.classList.remove('hidden');
            }
        } catch (error) {
            status.innerHTML = '<div class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert"><strong class="font-bold">Error!</strong> <span class="block sm:inline">Hubo un problema al enviar el formulario. Por favor intenta de nuevo.</span></div>';
            status.classList.remove('hidden');
        } finally {
            submitBtn.disabled = false;
            submitBtn.innerHTML = '<i class="fas fa-paper-plane mr-2"></i> Enviar Solicitud';
        }
    });
});
