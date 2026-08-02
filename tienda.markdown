---
layout: default
title: "Tienda de artículos"
description: "Artículos disponibles de DIGIMEX: equipos, componentes y productos en venta."
keywords: "tienda, artículos, venta, equipos, componentes, DIGIMEX"
permalink: /tienda/
---

<!-- ============================================================
     ENCABEZADO
     ============================================================ -->
<section class="bg-gradient-to-br from-blue-800 via-blue-700 to-sky-600">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 text-center">
        <span class="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-sky-200 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 mb-5">
            <i class="fas fa-store"></i> Tienda DIGIMEX
        </span>
        <h1 class="text-4xl sm:text-5xl font-extrabold text-white mb-4">
            Artículos <span class="text-sky-300">disponibles</span>
        </h1>
        <p class="text-blue-100 text-lg max-w-xl mx-auto leading-relaxed">
            Equipos y componentes en venta. Pregunta por cualquier artículo por Messenger.
        </p>
    </div>
</section>

<!-- ============================================================
     GRID DE ARTÍCULOS
     ============================================================ -->
<section class="bg-white py-16 sm:py-24">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {% assign articulos = site.data.tienda.articulos %}

        {% if articulos.size > 0 %}
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {% for a in articulos %}
            {% assign msg = 'Hola, me interesa: ' | append: a.nombre | url_encode %}
            <article class="group bg-white border border-gray-200 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl hover:border-blue-200 transition-all duration-300 flex flex-col">
                {% if a.imagen %}
                <div class="relative aspect-[4/3] overflow-hidden bg-blue-50">
                    <img src="{{ a.imagen | relative_url }}" alt="{{ a.nombre }}" loading="lazy"
                         class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500">
                    {% if a.etiqueta %}
                    <span class="absolute top-4 left-4 text-[11px] font-bold uppercase tracking-widest text-white bg-gradient-to-r from-blue-600 to-sky-500 rounded-full px-3 py-1.5 shadow-lg">
                        {{ a.etiqueta }}
                    </span>
                    {% endif %}
                </div>
                {% else %}
                <div class="relative aspect-[4/3] bg-gradient-to-br from-blue-50 to-sky-50 flex items-center justify-center">
                    <i class="fas fa-box-open text-blue-200 text-6xl"></i>
                    {% if a.etiqueta %}
                    <span class="absolute top-4 left-4 text-[11px] font-bold uppercase tracking-widest text-white bg-gradient-to-r from-blue-600 to-sky-500 rounded-full px-3 py-1.5 shadow-lg">
                        {{ a.etiqueta }}
                    </span>
                    {% endif %}
                </div>
                {% endif %}

                <div class="p-6 flex flex-col flex-1">
                    <div class="flex items-start justify-between gap-3 mb-2">
                        <h2 class="text-lg font-bold text-slate-900 leading-snug">{{ a.nombre }}</h2>
                        {% if a.precio %}
                        <span class="text-lg font-extrabold text-blue-600 whitespace-nowrap">{{ a.precio }}</span>
                        {% endif %}
                    </div>
                    {% if a.descripcion %}
                    <p class="text-sm text-gray-600 leading-relaxed mb-5">{{ a.descripcion }}</p>
                    {% endif %}
                    <a href="https://m.me/d1g1mex?text={{ msg }}" target="_blank"
                       class="mt-auto inline-flex items-center justify-center gap-2.5 bg-blue-600 hover:bg-blue-700 text-white font-bold py-3.5 px-6 rounded-xl transition-all duration-300 shadow-md shadow-blue-600/20">
                        <i class="fab fa-facebook-messenger"></i> Preguntar por este artículo
                    </a>
                </div>
            </article>
            {% endfor %}
        </div>
        {% else %}
        <!-- Estado vacío: aún no hay artículos cargados -->
        <div class="max-w-lg mx-auto text-center bg-gray-50 border border-gray-200 rounded-3xl p-10 sm:p-14">
            <span class="w-20 h-20 mx-auto mb-6 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center text-3xl">
                <i class="fas fa-box-open"></i>
            </span>
            <h2 class="text-2xl font-extrabold text-slate-900 mb-3">Estamos preparando la tienda</h2>
            <p class="text-gray-600 leading-relaxed mb-8">
                Pronto publicaremos los artículos disponibles. Mientras tanto, escríbenos y te decimos qué tenemos.
            </p>
            <a href="https://m.me/d1g1mex?text=Hola, ¿qué artículos tienen disponibles?"
               target="_blank"
               class="inline-flex items-center justify-center gap-2.5 bg-gradient-to-r from-sky-500 to-cyan-400 hover:from-sky-600 hover:to-cyan-500 text-white font-bold px-8 py-4 rounded-xl shadow-lg shadow-sky-500/25 transition-all duration-300">
                <i class="fab fa-facebook-messenger"></i> Preguntar por Messenger
            </a>
        </div>
        {% endif %}

    </div>
</section>
