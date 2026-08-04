---
layout: default
title: "Galería de Reparaciones"
description: "Conoce los servicios de reparación de PC y laptops de DIGIMEX, organizados por categoría con imágenes reales de nuestro taller."
permalink: /galeria-reparaciones/
---

<section class="bg-white py-20 sm:py-24">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <span class="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-slate-600 bg-slate-100 border border-slate-200 rounded-full px-4 py-1.5 mb-5">
                <i class="fas fa-wrench"></i> Nuestros Servicios
            </span>
            <h1 class="text-4xl sm:text-5xl font-extrabold text-slate-900 mb-4">
                Reparaciones <span class="text-slate-900">Organizadas</span>
            </h1>
            <p class="text-slate-600 text-lg leading-relaxed">
                Explora los servicios que realizamos en nuestro taller, organizados por categoría
                con imágenes reales de los trabajos y equipos que atendemos.
            </p>
        </div>

        {% include galeria.html %}

        <div class="mt-16 text-center">
            <a href="{{ '/' | relative_url }}" class="inline-flex items-center gap-2 text-slate-700 font-bold hover:text-slate-900 transition-colors">
                <i class="fas fa-arrow-left"></i> Volver al inicio
            </a>
        </div>
    </div>
</section>
