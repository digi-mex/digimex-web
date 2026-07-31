/**
 * ============================================================
 * GALERÍA INTERACTIVA — DIGIMEX
 * assets/js/gallery-slider.js
 *
 * 1) Slider "Antes / Después": arrastre horizontal (touch + mouse)
 *    que controla la posición de corte (--ba-pos) de cada .ba-slider.
 * 2) Filtros por categoría: muestra/oculta tarjetas (.gallery-card)
 *    según data-categoria sin recargar la página.
 *
 * Uso: se auto-inicializa en DOMContentLoaded. No requiere
 * configuración adicional; los sliders se detectan con .ba-slider.
 * ============================================================
 */
(function () {
    'use strict';

    var MIN_POS = 3;   // % mínimo de apertura del "después"
    var MAX_POS = 97;  // % máximo de apertura del "después"
    var KEY_STEP = 5;  // % por tecla de flecha

    /**
     * Inicializa los sliders de comparativa dentro de un contenedor.
     * @param {Element} root - Contenedor donde buscar .ba-slider
     */
    function initSliders(root) {
        var sliders = root.querySelectorAll('.ba-slider');

        sliders.forEach(function (slider) {
            if (slider.dataset.baInit) return;   // Evitar doble inicialización
            slider.dataset.baInit = '1';

            var handle = slider.querySelector('.ba-handle');

            // Aplica la posición del cursor como porcentaje de apertura
            function setPosition(clientX) {
                var rect = slider.getBoundingClientRect();
                if (rect.width === 0) return;

                var pct = ((clientX - rect.left) / rect.width) * 100;
                pct = Math.max(MIN_POS, Math.min(MAX_POS, pct));

                slider.style.setProperty('--ba-pos', pct.toFixed(2) + '%');
                slider.setAttribute('aria-valuenow', Math.round(pct));
            }

            // --- Arrastre con puntero (ratón y táctil) ---
            slider.addEventListener('pointerdown', function (e) {
                slider.setPointerCapture(e.pointerId);
                slider.classList.add('ba-dragging');
                setPosition(e.clientX);
            });

            slider.addEventListener('pointermove', function (e) {
                if (!slider.classList.contains('ba-dragging')) return;
                setPosition(e.clientX);
            });

            ['pointerup', 'pointercancel'].forEach(function (evt) {
                slider.addEventListener(evt, function () {
                    slider.classList.remove('ba-dragging');
                });
            });

            // --- Accesibilidad: flechas del teclado sobre el manubrio ---
            if (handle) {
                handle.addEventListener('keydown', function (e) {
                    if (e.key !== 'ArrowLeft' && e.key !== 'ArrowRight') return;

                    e.preventDefault();
                    var current = parseFloat(slider.style.getPropertyValue('--ba-pos')) || 50;
                    var direction = e.key === 'ArrowLeft' ? -KEY_STEP : KEY_STEP;
                    var next = Math.max(MIN_POS, Math.min(MAX_POS, current + direction));

                    slider.style.setProperty('--ba-pos', next.toFixed(2) + '%');
                    slider.setAttribute('aria-valuenow', Math.round(next));
                });
            }
        });
    }

    /**
     * Filtra las tarjetas de la galería por categoría.
     * Botones: #filtros-galeria > [data-filter]
     * Tarjetas: #galeria-grid > .gallery-card[data-categoria]
     */
    function initFilters() {
        var btnContainer = document.getElementById('filtros-galeria');
        var grid = document.getElementById('galeria-grid');
        var empty = document.getElementById('galeria-vacio');
        if (!btnContainer || !grid) return;

        var buttons = btnContainer.querySelectorAll('[data-filter]');

        buttons.forEach(function (btn) {
            btn.addEventListener('click', function () {
                // Estado activo del botón
                buttons.forEach(function (b) {
                    b.classList.remove('active');
                    b.setAttribute('aria-selected', 'false');
                });
                btn.classList.add('active');
                btn.setAttribute('aria-selected', 'true');

                var filter = btn.dataset.filter;
                var visibleCount = 0;

                grid.querySelectorAll('.gallery-card').forEach(function (card) {
                    var matches = filter === 'all' || card.dataset.categoria === filter;
                    card.classList.toggle('hidden', !matches);

                    if (matches) {
                        visibleCount++;
                        // Re-dispara la animación de entrada
                        card.classList.remove('gallery-card-in');
                        void card.offsetWidth;
                        card.classList.add('gallery-card-in');
                    }
                });

                // Muestra el estado vacío cuando no hay coincidencias
                if (empty) empty.classList.toggle('hidden', visibleCount > 0);
            });
        });
    }

    document.addEventListener('DOMContentLoaded', function () {
        initSliders(document);
        initFilters();
    });
})();
