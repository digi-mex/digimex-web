---
layout: default
title: "Galería de Reparaciones"
description: "Conoce los servicios de reparación de PC y laptops de DIGIMEX, organizados por categoría con imágenes reales de nuestro taller."
permalink: /galeria-reparaciones/
---

<section class="bg-white py-20 sm:py-28 relative overflow-hidden">
    <div class="absolute -top-40 -left-40 w-[600px] h-[600px] bg-blue-100/70 rounded-full blur-[160px] pointer-events-none" aria-hidden="true"></div>
    <div class="absolute -bottom-48 -right-40 w-[550px] h-[550px] bg-cyan-100/60 rounded-full blur-[160px] pointer-events-none" aria-hidden="true"></div>

    <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <span class="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-blue-600 bg-blue-50 border border-blue-200 rounded-full px-4 py-1.5 mb-5">
                <i class="fas fa-wrench"></i> Nuestros Servicios
            </span>
            <h1 class="text-4xl sm:text-5xl font-extrabold text-slate-900 mb-4">
                Reparaciones <span class="text-blue-600">Organizadas</span>
            </h1>
            <p class="text-gray-600 text-lg leading-relaxed">
                Explora los servicios que realizamos en nuestro taller, organizados por categoría
                con imágenes reales de los trabajos y equipos que atendemos.
            </p>
        </div>

        {% include galeria.html %}

        <div class="mt-16 text-center">
            <a href="{{ '/' | relative_url }}" class="inline-flex items-center gap-2 text-blue-600 font-bold hover:text-blue-800 transition-colors">
                <i class="fas fa-arrow-left"></i> Volver al inicio
            </a>
        </div>
    </div>
</section>
