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

// ============================================
// SISTEMA DE BÚSQUEDA DEL SITIO (CLIENT-SIDE)
// ============================================
const SEARCH_DATABASE = [
    {
        title: "Reparación de Laptop y PC",
        description: "Servicio de diagnóstico express y cambio de componentes para laptops y computadoras.",
        url: "/#reparaciones",
        keywords: "reparacion laptop pc computadoras bisagras pantallas teclado mantenimiento"
    },
    {
        title: "Mantenimiento Preventivo",
        description: "Limpieza interna profunda, ventiladores y cambio de pasta térmica para evitar sobrecalentamiento.",
        url: "/#reparaciones",
        keywords: "mantenimiento limpieza pasta termica calentamiento ventilador lento mantenimineto"
    },
    {
        title: "Display y Estructura (Pantallas)",
        description: "Reemplazo de pantallas rotas, reparación de bisagras y cambio de carcasas.",
        url: "/#reparaciones",
        keywords: "display pantalla bisagra bisagras carcasa display roto rota"
    },
    {
        title: "Sistemas y Software (Windows/Office)",
        description: "Instalación de sistema operativo Windows, paquetería Office y software esencial.",
        url: "/#reparaciones",
        keywords: "sistema operativo windows office software programas formatear"
    },
    {
        title: "Respaldo e Integridad de Datos (Backup)",
        description: "Respaldo y recuperación de información y archivos de discos duros o SSD.",
        url: "/#reparaciones",
        keywords: "respaldo backup datos archivos disco duro recuperar recuperacion"
    },
    {
        title: "Diseño Web Performance",
        description: "Creación de sitios web rápidos, responsivos y modernos enfocados en convertir visitas en ventas.",
        url: "/servicios-digitales/#diseno-web",
        keywords: "diseño web paginas internet landing page ecommerce tienda en linea"
    },
    {
        title: "Google Ads & SEM",
        description: "Campañas publicitarias inteligentes para posicionarte en los primeros resultados de Google.",
        url: "/servicios-digitales/#google-ads",
        keywords: "google ads anuncios publicidad sem marketing digital google analytics"
    },
    {
        title: "Meta Ads (Facebook e Instagram)",
        description: "Estrategias de publicidad segmentada en redes sociales para captar clientes potenciales.",
        url: "/servicios-digitales/#meta-ads",
        keywords: "facebook instagram meta ads publicidad redes sociales anuncios"
    },
    {
        title: "Portafolio de Proyectos",
        description: "Conoce nuestros casos de éxito y proyectos web completados.",
        url: "/portafolio-diseno/",
        keywords: "portafolio proyectos diseno web trabajos completados"
    },
    {
        title: "Proyecto: Ecología Industrial",
        description: "Sitio web interactivo enfocado en soluciones sostenibles y optimización industrial.",
        url: "/portafolio-diseno/",
        keywords: "ecologia industrial netlify sustentabilidad"
    },
    {
        title: "Galería de Equipos Reparados",
        description: "Fotos de nuestros trabajos y éxitos en mantenimiento de hardware.",
        url: "/galeria-reparaciones/",
        keywords: "galeria fotos imagenes laptop pc mantenimiento"
    },
    {
        title: "Contacto y Ubicación",
        description: "Ponte en contacto con nuestro soporte técnico y área digital.",
        url: "/#contacto",
        keywords: "contacto cotizar cotizacion messenger facebook correo"
    },
    {
        title: "Blog de Tecnología",
        description: "Artículos, consejos y tendencias sobre diseño web, SEO y tecnología.",
        url: "/blog/",
        keywords: "blog articulos jekyll noticias marketing consejos"
    }
];

document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('site-search');
    const resultsContainer = document.getElementById('search-results');
    if (!searchInput || !resultsContainer) return;

    searchInput.addEventListener('input', function() {
        const query = searchInput.value.toLowerCase().trim();
        if (!query) {
            resultsContainer.innerHTML = '';
            resultsContainer.classList.add('hidden');
            return;
        }

        const filtered = SEARCH_DATABASE.filter(item => {
            return item.title.toLowerCase().includes(query) ||
                   item.description.toLowerCase().includes(query) ||
                   item.keywords.toLowerCase().includes(query);
        });

        if (filtered.length === 0) {
            resultsContainer.innerHTML = `
                <div class="p-4 text-sm text-gray-500 text-center">
                    No se encontraron resultados para "${escapeHTML(query)}"
                </div>`;
        } else {
            const baseurl = window.siteBaseUrl || '/digimex-web';
            resultsContainer.innerHTML = filtered.map(item => {
                const fullUrl = item.url.startsWith('/') ? `${baseurl}${item.url}` : item.url;
                return `
                    <a href="${fullUrl}" class="block p-4 hover:bg-gray-50 border-b border-gray-100 last:border-none transition duration-150 no-underline text-left">
                        <div class="font-bold text-navy text-sm hover:text-cyan transition-colors">${escapeHTML(item.title)}</div>
                        <div class="text-xs text-gray-500 mt-1 line-clamp-2">${escapeHTML(item.description)}</div>
                    </a>`;
            }).join('');
        }
        resultsContainer.classList.remove('hidden');
    });

    // Hide dropdown when clicking outside
    document.addEventListener('click', function(e) {
        if (!searchInput.contains(e.target) && !resultsContainer.contains(e.target)) {
            resultsContainer.classList.add('hidden');
        }
    });

    // Re-show dropdown on focus if input has value
    searchInput.addEventListener('focus', function() {
        if (searchInput.value.trim()) {
            resultsContainer.classList.remove('hidden');
        }
    });
});

function escapeHTML(str) {
    return str.replace(/[&<>'"]/g, 
        tag => ({
            '&': '&amp;',
            '<': '&lt;',
            '>': '&gt;',
            "'": '&#39;',
            '"': '&quot;'
        }[tag] || tag)
    );
}
