---
layout: default
title: "Portafolio de Diseño Web"
description: "Descubre nuestros proyectos realizados en diseño de páginas web y marketing digital."
keywords: "diseño de páginas web, portafolio web, páginas web profesionales, desarrollo web"
permalink: /portafolio-diseno/
---

<!-- HERO -->
<section class="relative overflow-hidden bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-400">
    <div class="absolute -top-24 -right-24 w-96 h-96 bg-white/10 rounded-full blur-[100px] pointer-events-none" aria-hidden="true"></div>
    <div class="absolute -bottom-32 -left-24 w-80 h-80 bg-cyan-300/20 rounded-full blur-[100px] pointer-events-none" aria-hidden="true"></div>
    <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 text-center">
        <span class="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-widest text-cyan-200 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 mb-5">
            <i class="fas fa-laptop-code"></i> Portafolio de Diseño Web
        </span>
        <h1 class="text-4xl sm:text-5xl font-extrabold text-white mb-4">
            Diseños Web <span class="text-cyan-300">Realizados</span>
        </h1>
        <p class="text-blue-50 text-lg max-w-2xl mx-auto leading-relaxed">
            Estos son los sitios web que hemos diseñado y construido para nuestros clientes,
            de principio a fin: diseño, desarrollo y puesta en marcha.
        </p>
    </div>
</section>

<!-- GRID DE CARDS -->
<section class="bg-gray-50 py-16 sm:py-24">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <!-- Las cards se generan automáticamente desde _data/portafolio.yml -->
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">

            {% for p in site.data.portafolio.proyectos %}
            <article class="group bg-white rounded-2xl border border-gray-200 overflow-hidden flex flex-col transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-100 hover:border-blue-300">

                <!-- Imagen del proyecto -->
                <a href="{{ p.url }}" target="_blank" rel="noopener" class="relative block aspect-video overflow-hidden bg-gray-100">
                    <img src="{{ p.imagen | relative_url }}" alt="{{ p.titulo }}"
                         class="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105" loading="lazy">
                    <span class="absolute top-3 right-3 inline-flex items-center gap-1.5 bg-white/95 backdrop-blur-sm text-blue-700 text-xs font-bold px-3 py-1.5 rounded-full shadow-md">
                        <i class="fas fa-external-link-alt text-[10px]"></i> Ver sitio
                    </span>
                </a>

                <!-- Contenido de la card -->
                <div class="p-6 flex flex-col flex-1">
                    <div class="flex flex-wrap gap-2 mb-3">
                        {% for tag in p.categorias %}
                        <span class="text-[11px] font-extrabold uppercase tracking-wide px-2.5 py-1 rounded-full bg-blue-50 text-blue-700 border border-blue-100">{{ tag }}</span>
                        {% endfor %}
                    </div>
                    <h3 class="text-lg font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                        {{ p.titulo }}
                    </h3>
                    <p class="text-sm text-gray-600 leading-relaxed mb-5">{{ p.descripcion }}</p>
                    <a href="{{ p.url }}" target="_blank" rel="noopener"
                       class="mt-auto inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-bold py-2.5 rounded-lg transition-colors duration-300">
                        Visitar sitio <i class="fas fa-arrow-right text-xs"></i>
                    </a>
                </div>
            </article>
            {% endfor %}

            <!-- Card "Crea tu proyecto" -->
            <article class="group rounded-2xl border-2 border-dashed border-blue-300 bg-blue-50/50 hover:bg-blue-50 flex flex-col items-center justify-center text-center p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-100">
                <div class="w-16 h-16 rounded-2xl bg-blue-600 text-white flex items-center justify-center text-2xl mb-4 shadow-lg shadow-blue-600/30 group-hover:scale-110 transition-transform duration-300">
                    <i class="fas fa-plus"></i>
                </div>
                <h3 class="text-lg font-bold text-slate-900 mb-2">¿Tu proyecto es el siguiente?</h3>
                <p class="text-sm text-gray-600 mb-5">Cuéntanos tu idea y la convertimos en una página web profesional.</p>
                <a href="https://m.me/d1g1mex" target="_blank" rel="noopener"
                   class="inline-flex items-center gap-2 bg-white text-blue-700 border-2 border-blue-600 hover:bg-blue-600 hover:text-white text-sm font-bold px-6 py-2.5 rounded-lg transition-all duration-300">
                    <i class="fab fa-facebook-messenger"></i> Iniciar mi Proyecto
                </a>
            </article>

        </div>
    </div>
</section>
