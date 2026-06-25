---
layout: default
title: "Reparación de PC y Laptop"
description: "Servicio especializado en reparaciones de primer nivel para PC y Laptop en DIGIMEX. Diagnóstico express, cambio de componentes y optimización de sistemas."
keywords: "reparación de pc, soporte técnico, cambio de display, instalación de sistema, respaldo de información, mantenimiento de laptops, cambio de disco duro, instalación de office"
---

<!-- HERO BANNER INMERSIVO - ANCHO COMPLETO -->
<div id="hero-banner" style="position: relative; width: 100%; height: 90vh; min-height: 500px; overflow: hidden; display: flex; align-items: center; justify-content: flex-start;">

    <!-- Imagen de fondo: cubre todo el ancho y alto del banner -->
    <img src="{{ '/img/repair_hero.png' | relative_url }}"
         alt="Reparación especializada de PC y Laptop - Digimex"
         style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; object-fit: cover; object-position: center; z-index: 0;">

    <!-- Overlay oscuro para que el texto se lea bien -->
    <div style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; background: linear-gradient(to right, rgba(17,24,39,0.88) 40%, rgba(17,24,39,0.35) 100%); z-index: 1;"></div>

    <!-- Contenido del Hero (sobre la imagen) -->
    <div style="position: relative; z-index: 2; max-width: 750px; padding: 3rem 4rem;">
        <span style="display: inline-flex; align-items: center; gap: 8px; padding: 6px 18px; border-radius: 999px; background: rgba(16,185,129,0.15); border: 1px solid rgba(16,185,129,0.35); color: #10b981; font-size: 0.8rem; font-weight: 800; letter-spacing: 0.15em; text-transform: uppercase; margin-bottom: 1.5rem;">
            <i class="fas fa-check-circle"></i> Especialistas Certificados
        </span>

        <h1 style="font-size: clamp(2.5rem, 6vw, 5rem); font-weight: 900; color: #ffffff; line-height: 1.05; margin: 0 0 1.5rem 0; letter-spacing: -0.02em; text-shadow: 0 4px 30px rgba(0,0,0,0.5);">
            Reparación de<br>
            <span style="color: #10b981;">PC y Laptop</span>
        </h1>

        <p style="font-size: clamp(1rem, 2vw, 1.3rem); color: rgba(255,255,255,0.85); max-width: 520px; line-height: 1.7; margin: 0 0 2.5rem 0; font-weight: 500;">
            Diagnóstico preciso, resultados duraderos y garantía real. Llevamos tu equipo de vuelta al máximo rendimiento.
        </p>

        <div style="display: flex; gap: 1rem; flex-wrap: wrap;">
            <a href="https://www.facebook.com/d1g1mex" target="_blank" style="display: inline-flex; align-items: center; gap: 10px; padding: 1rem 2rem; background: #1877F2; color: #ffffff; font-weight: 800; font-size: 1.1rem; border-radius: 14px; text-decoration: none; transition: all 0.3s; box-shadow: 0 10px 40px rgba(24,119,242,0.3);">
                <i class="fab fa-facebook-square"></i> Contactar en Facebook
            </a>
            <a href="{{ '/galeria-reparaciones/' | relative_url }}" style="display: inline-flex; align-items: center; gap: 10px; padding: 1rem 2rem; background: rgba(255,255,255,0.1); border: 2px solid rgba(255,255,255,0.3); color: #ffffff; font-weight: 700; font-size: 1rem; border-radius: 14px; text-decoration: none; backdrop-filter: blur(10px); transition: all 0.3s;">
                Ver Trabajos <i class="fas fa-arrow-right" style="font-size: 0.75rem;"></i>
            </a>
        </div>
    </div>
</div>


<!-- SECCIÓN: REPARACIONES DE PC Y LAPTOP -->
<section class="py-16 sm:py-24 bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 class="text-4xl sm:text-5xl font-extrabold text-navy text-center mb-6">
            Especialistas en <span class="text-cyan">Reparación de PC y Laptop</span>
        </h1>
        <p class="text-lg text-gray-700 text-center max-w-4xl mx-auto mb-16">
            En <span class="text-navy font-bold">DIGIMEX</span> nos enfocamos en brindarte soluciones rápidas y efectivas para tus equipos de cómputo. Nuestro proceso es transparente: realizamos un <strong>diagnóstico preciso</strong>, detectamos la falla y procedemos con el <strong>cambio de componentes</strong> o ajustes necesarios.
        </p>

        <!-- Banner Informativo -->
        <div class="mb-16 bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-xl">
            <div class="flex items-start gap-4">
                <span class="text-blue-500 text-2xl mt-1"><i class="fas fa-info-circle"></i></span>
                <div>
                    <h3 class="text-lg font-bold text-navy mb-1 text-blue-900">Nota Importante</h3>
                    <p class="text-blue-800 text-sm italic">
                        Por el momento, nos especializamos exclusivamente en reparaciones de primer nivel (cambio de componentes y software). No realizamos reparaciones electrónicas a nivel componente (micro-soldadura).
                    </p>
                </div>
            </div>
        </div>

        <!-- Grid de Servicios -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
            <!-- Servicio 1: Pantallas y Estructura -->
            <div class="p-8 rounded-2xl bg-gray-50 border border-gray-100 hover:shadow-xl transition-all duration-300">
                <div class="w-16 h-16 bg-cyan/10 rounded-full flex items-center justify-center text-cyan text-3xl mb-6">
                    <i class="fas fa-laptop"></i>
                </div>
                <h3 class="text-xl font-bold text-navy mb-4">Display y Estructura</h3>
                <ul class="space-y-3 text-gray-600">
                    <li class="flex items-center gap-2"><i class="fas fa-check-circle text-cyan"></i> Cambio de displays</li>
                    <li class="flex items-center gap-2"><i class="fas fa-check-circle text-cyan"></i> Reparación de bisagras</li>
                    <li class="flex items-center gap-2"><i class="fas fa-check-circle text-cyan"></i> Reemplazo de carcasas</li>
                </ul>
            </div>

            <!-- Servicio 2: Optimización y Hardware -->
            <div class="p-8 rounded-2xl bg-gray-50 border border-gray-100 hover:shadow-xl transition-all duration-300">
                <div class="w-16 h-16 bg-navy/10 rounded-full flex items-center justify-center text-navy text-3xl mb-6">
                    <i class="fas fa-microchip"></i>
                </div>
                <h3 class="text-xl font-bold text-navy mb-4">Hardware y Rendimiento</h3>
                <ul class="space-y-3 text-gray-600">
                    <li class="flex items-center gap-2"><i class="fas fa-check-circle text-navy"></i> Cambio de discos duros / SSD</li>
                    <li class="flex items-center gap-2"><i class="fas fa-check-circle text-navy"></i> Ampliación de memoria RAM</li>
                    <li class="flex items-center gap-2"><i class="fas fa-check-circle text-navy"></i> Cambio de pasta térmica</li>
                </ul>
            </div>

            <!-- Servicio 3: Software y Respaldo -->
            <div class="p-8 rounded-2xl bg-gray-50 border border-gray-100 hover:shadow-xl transition-all duration-300">
                <div class="w-16 h-16 bg-blue-600/10 rounded-full flex items-center justify-center text-blue-600 text-3xl mb-6">
                    <i class="fas fa-compact-disc"></i>
                </div>
                <h3 class="text-xl font-bold text-navy mb-4">Software, Sistemas y Respaldo</h3>
                <ul class="space-y-3 text-gray-600">
                    <li class="flex items-center gap-2 font-bold text-navy"><i class="fas fa-save text-blue-600"></i> Respaldo de información (Backup)</li>
                    <li class="flex items-center gap-2"><i class="fas fa-check-circle text-blue-600"></i> Instalación de sistema operativo</li>
                    <li class="flex items-center gap-2"><i class="fas fa-check-circle text-blue-600"></i> Instalación de Office</li>
                </ul>
            </div>
        </div>

        <!-- Opiniones de Clientes (Movidas desde Home anteriormente) -->
        <div class="mb-24 bg-gray-50 py-16 rounded-3xl border border-gray-100 overflow-hidden px-6 lg:px-12">
            <div class="text-center mb-12">
                <h2 class="text-3xl font-extrabold text-navy mb-4">Lo que dicen nuestros <span class="text-cyan">Clientes</span></h2>
                <div class="flex items-center justify-center gap-1 text-yellow-400 text-xl mb-2">
                    <i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>
                </div>
                <p class="text-gray-500 font-medium italic">"Reparaciones honestas y garantizadas"</p>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <!-- Testimonios -->
                <div class="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                    <div class="flex items-center gap-3 mb-4">
                        <div class="w-10 h-10 bg-cyan/20 rounded-full flex items-center justify-center text-cyan font-bold">M</div>
                        <h4 class="font-bold text-navy text-sm">Monica S</h4>
                    </div>
                    <p class="text-gray-600 text-xs italic leading-relaxed">
                        "Excelente servicio. Recomiendo por qué es gente honesta..."
                    </p>
                </div>
                <div class="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                    <div class="flex items-center gap-3 mb-4">
                        <div class="w-10 h-10 bg-navy/20 rounded-full flex items-center justify-center text-navy font-bold">A</div>
                        <h4 class="font-bold text-navy text-sm">Adrián GR GT</h4>
                    </div>
                    <p class="text-gray-600 text-xs italic leading-relaxed">
                        "Muy buena atención, muy profesional te explican que es lo que tiene el equipo..."
                    </p>
                </div>
                <div class="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                    <div class="flex items-center gap-3 mb-4">
                        <div class="w-10 h-10 bg-blue-600/20 rounded-full flex items-center justify-center text-blue-600 font-bold">H</div>
                        <h4 class="font-bold text-navy text-sm">Hanoch Michel</h4>
                    </div>
                    <p class="text-gray-600 text-xs italic leading-relaxed">
                        "Muy profesional el servicio,honestidad y calidad. Lo recomiendo al 100%..."
                    </p>
                </div>
            </div>
            <div class="text-center mt-8">
                <a href="https://www.google.com/search?q=Digitalizaci%C3%B3n-M%C3%A9xico+Opiniones" target="_blank" class="text-xs text-navy font-bold hover:text-cyan transition-colors flex items-center justify-center gap-1">
                    Ver más testimonios <i class="fas fa-external-link-alt"></i>
                </a>
            </div>
        </div>

        <!-- Enlace a la Galería -->
        <div class="mb-24 text-center">
            <h2 class="text-3xl font-extrabold text-navy mb-6">Galería de <span class="text-cyan">Trabajos de Reparación</span></h2>
            <a href="{{ '/galeria-reparaciones/' | relative_url }}" class="inline-flex items-center gap-3 bg-cyan text-white font-extrabold px-10 py-4 rounded-xl hover:bg-navy transition-all duration-300 shadow-xl shadow-cyan/20">
                <i class="fas fa-images text-xl"></i>
                Ver Galería Completa de Equipos
            </a>
        </div>
    </div>
</section>

<!-- SECCIÓN DE CONTACTO - PREMIUM REDESIGN -->
<section id="contacto" style="background: linear-gradient(135deg, #111827 0%, #1f2937 100%); padding: 5rem 1.5rem;">
    <div style="max-width: 900px; margin: 0 auto; text-align: center;">
        <span style="display: inline-block; padding: 5px 16px; border-radius: 999px; background: rgba(16,185,129,0.15); border: 1px solid rgba(16,185,129,0.3); color: #10b981; font-size: 0.78rem; font-weight: 700; letter-spacing: 0.12em; text-transform: uppercase; margin-bottom: 1.2rem;">
            Atención Personalizada
        </span>
        <h2 style="font-size: clamp(1.8rem, 4vw, 2.8rem); font-weight: 800; color: #ffffff; margin: 0 0 1rem 0; line-height: 1.2;">
            ¿Cómo podemos <span style="color: #10b981;">ayudarte?</span>
        </h2>
        <p style="color: rgba(255,255,255,0.55); font-size: 1rem; margin: 0 auto 3.5rem auto; max-width: 480px; line-height: 1.7;">
            Contáctanos a través de Facebook o envíanos un mensaje por correo electrónico.
        </p>

        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 2rem; text-align: left;">

            <!-- Facebook -->
            <div style="background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.1); border-radius: 24px; padding: 2.5rem; display: flex; flex-direction: column; gap: 1.5rem;">
                <div style="width: 56px; height: 56px; background: #1877F2; border-radius: 16px; display: flex; align-items: center; justify-content: center; font-size: 1.5rem; color: white;">
                    <i class="fab fa-facebook-square"></i>
                </div>
                <div>
                    <h3 style="color: #ffffff; font-size: 1.3rem; font-weight: 700; margin: 0 0 0.5rem 0;">Facebook</h3>
                    <p style="color: rgba(255,255,255,0.5); font-size: 0.9rem; line-height: 1.6; margin: 0;">
                        Escríbenos en Facebook para diagnósticos y presupuestos. Atención rápida y personalizada.
                    </p>
                </div>
                <a href="https://www.facebook.com/d1g1mex" target="_blank"
                   style="display: inline-flex; align-items: center; justify-content: center; gap: 10px; padding: 0.9rem 1.5rem; background: #1877F2; color: #ffffff; font-weight: 700; font-size: 1rem; border-radius: 12px; text-decoration: none; transition: background 0.3s; margin-top: auto;"
                   onmouseover="this.style.background='#1565c0'" onmouseout="this.style.background='#1877F2'">
                    <i class="fab fa-facebook-square"></i> Escribir en Facebook
                </a>
            </div>

            <!-- Correo Electrónico -->
            <div style="background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.1); border-radius: 24px; padding: 2.5rem;">
                <div style="display: flex; align-items: center; gap: 1rem; margin-bottom: 1.5rem;">
                    <div style="width: 56px; height: 56px; background: #10b981; border-radius: 16px; display: flex; align-items: center; justify-content: center; font-size: 1.5rem; color: white; flex-shrink: 0;">
                        <i class="fas fa-envelope"></i>
                    </div>
                    <div>
                        <h3 style="color: #ffffff; font-size: 1.3rem; font-weight: 700; margin: 0 0 0.2rem 0;">Correo Electrónico</h3>
                        <p style="color: rgba(255,255,255,0.4); font-size: 0.85rem; margin: 0;">Te respondemos en menos de 24hrs.</p>
                    </div>
                </div>
                <form action="https://formspree.io/f/xnnkjzqr" method="POST" style="display: flex; flex-direction: column; gap: 0.9rem;" id="contact-form">
                    <input type="text" name="name" placeholder="Tu nombre completo" required
                           style="background: rgba(255,255,255,0.06); border: 1px solid rgba(255,255,255,0.12); color: white; padding: 0.8rem 1rem; border-radius: 10px; font-size: 0.95rem; outline: none; transition: border 0.3s; width: 100%; box-sizing: border-box;"
                           onfocus="this.style.border='1px solid #10b981'" onblur="this.style.border='1px solid rgba(255,255,255,0.12)'">
                    <input type="email" name="email" placeholder="tu@correo.com" required
                           style="background: rgba(255,255,255,0.06); border: 1px solid rgba(255,255,255,0.12); color: white; padding: 0.8rem 1rem; border-radius: 10px; font-size: 0.95rem; outline: none; transition: border 0.3s; width: 100%; box-sizing: border-box;"
                           onfocus="this.style.border='1px solid #10b981'" onblur="this.style.border='1px solid rgba(255,255,255,0.12)'">
                    <textarea name="message" placeholder="¿En qué podemos ayudarte?" rows="3" required
                              style="background: rgba(255,255,255,0.06); border: 1px solid rgba(255,255,255,0.12); color: white; padding: 0.8rem 1rem; border-radius: 10px; font-size: 0.95rem; outline: none; transition: border 0.3s; width: 100%; box-sizing: border-box; resize: vertical;"
                              onfocus="this.style.border='1px solid #10b981'" onblur="this.style.border='1px solid rgba(255,255,255,0.12)'"></textarea>
                    <button type="submit" id="submit-btn"
                            style="background: #10b981; color: white; font-weight: 700; font-size: 1rem; padding: 0.9rem 1.5rem; border-radius: 12px; border: none; cursor: pointer; display: flex; align-items: center; justify-content: center; gap: 8px; transition: background 0.3s;"
                            onmouseover="this.style.background='#059669'" onmouseout="this.style.background='#10b981'">
                        <i class="fas fa-paper-plane"></i> Enviar Mensaje
                    </button>
                    <div id="form-status" class="hidden" style="margin-top: 0.5rem;"></div>
                </form>
            </div>

        </div>
    </div>
</section>
