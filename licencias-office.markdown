---
layout: default
title: "Licencias de Microsoft Office"
description: "Compra tu licencia original de Microsoft Office 2019 u Office 2024. Cotiza por Messenger y recibe tu licencia por correo con instalación y activación incluidas."
keywords: "licencia office, office 2019, office 2024, comprar office, licencia original, activación office"
permalink: /licencias-office/
---

<!-- ============================================================
     HERO — LICENCIAS OFFICE
     ============================================================ -->
<section class="relative overflow-hidden bg-slate-900">
    <div class="absolute -top-32 -right-32 w-[500px] h-[500px] bg-white/5 rounded-full blur-[120px] pointer-events-none" aria-hidden="true"></div>
    <div class="absolute -bottom-40 -left-32 w-[460px] h-[460px] bg-white/5 rounded-full blur-[120px] pointer-events-none" aria-hidden="true"></div>

    <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-28 grid lg:grid-cols-[1.05fr_0.95fr] gap-14 items-center">

        <!-- Texto -->
        <div class="text-center lg:text-left">
            <span class="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-slate-300 bg-white/10 border border-white/10 rounded-full px-4 py-1.5 mb-6">
                <i class="fas fa-cube"></i> Licencias Originales
            </span>
            <h1 class="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-[1.05] mb-6">
                Office <span class="text-blue-400">2019</span> y<br class="hidden sm:block">
                <span class="text-blue-400">2024</span>, licencia permanente
            </h1>
            <p class="text-slate-400 text-lg leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0">
                Códigos de activación genuinos de 25 dígitos, de pago único y sin renovaciones.
                Te entregamos tu clave por correo el mismo día, con instalación y activación incluidas.
            </p>

            <div class="flex flex-wrap gap-4 justify-center lg:justify-start">
                <a href="https://m.me/d1g1mex" target="_blank"
                   class="inline-flex items-center gap-3 bg-white text-slate-900 font-bold px-8 py-4 rounded-xl shadow-xl shadow-slate-900/40 transition-all duration-300 hover:-translate-y-0.5 hover:bg-slate-100">
                    <i class="fab fa-facebook-messenger text-lg text-blue-600"></i> Cotizar por Messenger
                </a>
                <a href="#productos"
                   class="inline-flex items-center gap-3 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold px-8 py-4 rounded-xl transition-all duration-300 hover:-translate-y-0.5">
                    Ver licencias <i class="fas fa-arrow-down text-xs"></i>
                </a>
            </div>

            <ul class="mt-10 flex flex-wrap gap-x-6 gap-y-3 justify-center lg:justify-start text-sm text-slate-400">
                <li class="flex items-center gap-2"><i class="fas fa-check-circle text-slate-500"></i> Entrega por correo el mismo día</li>
                <li class="flex items-center gap-2"><i class="fas fa-check-circle text-slate-500"></i> Instalación y activación incluidas</li>
                <li class="flex items-center gap-2"><i class="fas fa-check-circle text-slate-500"></i> Soporte después de la compra</li>
            </ul>
        </div>

        <!-- Imágenes de producto -->
        <div class="relative flex justify-center items-end gap-6 sm:gap-10 py-8">
            <!-- Office 2019 -->
            <div class="w-44 sm:w-56 transition-transform duration-300 hover:-translate-y-2 hover:scale-105">
                <img src="{{ '/img/office/office-2019.webp' | relative_url }}" alt="Microsoft Office 2019 Pro Plus"
                     class="w-full h-auto drop-shadow-2xl rounded-2xl" loading="eager">
            </div>
            <!-- Office 2024 (destacado) -->
            <div class="relative w-48 sm:w-64 transition-transform duration-300 hover:-translate-y-2 hover:scale-105 z-10">
                <span class="absolute -top-3 left-1/2 -translate-x-1/2 text-[10px] sm:text-[11px] font-bold uppercase tracking-widest text-white bg-blue-600 rounded-full px-3 py-1.5 shadow-lg z-20 whitespace-nowrap">
                    Más vendido
                </span>
                <img src="{{ '/img/office/office-2024.jpg' | relative_url }}" alt="Microsoft Office 2024 Pro Plus"
                     class="w-full h-auto drop-shadow-2xl rounded-2xl" loading="eager">
            </div>
        </div>
        <!-- Sello de confianza -->
        <div class="flex justify-center pb-8">
            <div class="bg-white/10 backdrop-blur-sm rounded-full px-5 py-2.5 flex items-center gap-2.5">
                <i class="fas fa-shield-halved text-blue-400"></i>
                <span class="text-sm text-slate-300 font-medium">Activación oficial · 100% verificadas</span>
            </div>
        </div>
    </div>
</section>

<!-- ============================================================
     PRODUCTOS
     ============================================================ -->
<section id="productos" class="bg-white py-20 sm:py-28">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center max-w-2xl mx-auto mb-14 sm:mb-16">
            <span class="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-slate-600 bg-slate-100 border border-slate-200 rounded-full px-4 py-1.5 mb-5">
                <i class="fas fa-box-open"></i> Nuestras Licencias
            </span>
            <h2 class="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-4">
                Dos versiones, <span class="text-slate-900">una sola compra</span>
            </h2>
            <p class="text-gray-600 text-lg leading-relaxed">
                Ambos paquetes son licencias permanentes de pago único. Tú decides según lo que necesites.
            </p>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {% for licencia in site.data.licencias.licencias %}

            <article class="relative flex flex-col sm:flex-row gap-8 bg-white border rounded-3xl p-8 sm:p-10 transition-all duration-300 hover:shadow-xl {% if licencia.destaque %}border-slate-900 ring-2 ring-slate-900/10 shadow-lg shadow-slate-100{% else %}border-gray-200 shadow-sm shadow-gray-100 hover:border-slate-300{% endif %}">

                {% if licencia.destaque %}
                <span class="absolute -top-3 left-8 text-[11px] font-bold uppercase tracking-widest text-white bg-slate-900 rounded-full px-4 py-1.5 shadow-lg shadow-slate-900/20">
                    Más vendido
                </span>
                {% endif %}

                <div class="shrink-0 w-32 sm:w-36 flex items-center justify-center bg-slate-50 rounded-2xl p-3">
                    {% if licencia.nombre contains "2019" %}
                    <img src="{{ '/img/office/office-2019.webp' | relative_url }}" alt="{{ licencia.nombre }}"
                         class="w-full h-auto rounded-xl drop-shadow-md">
                    {% else %}
                    <img src="{{ '/img/office/office-2024.jpg' | relative_url }}" alt="{{ licencia.nombre }}"
                         class="w-full h-auto rounded-xl drop-shadow-md">
                    {% endif %}
                </div>

                <div class="flex flex-col flex-1">
                    <div class="flex items-start justify-between gap-3 mb-3">
                        <h3 class="text-2xl font-extrabold text-slate-900">{{ licencia.nombre }}</h3>
                        <span class="text-[11px] font-bold uppercase tracking-wider text-slate-600 border border-slate-200 bg-slate-100 rounded-full px-3 py-1 whitespace-nowrap">
                            {{ licencia.tipo }}
                        </span>
                    </div>
                    <p class="text-gray-600 leading-relaxed mb-4">{{ licencia.descripcion }}</p>

                    <ul class="space-y-3 text-sm text-gray-700 mb-7">
                        {% for c in licencia.caracteristicas %}
                        <li class="flex items-start gap-3">
                            <i class="fas fa-check-circle text-emerald-500 mt-0.5"></i>
                            <span>{{ c }}</span>
                        </li>
                        {% endfor %}
                    </ul>

                    <p class="text-xs text-gray-500 bg-gray-50 border border-gray-200 rounded-lg px-3 py-2 mb-7">
                        <i class="fas fa-user-check text-slate-600 mr-1.5"></i>{{ licencia.nota }}
                    </p>

                    <a href="https://m.me/d1g1mex" target="_blank"
                       class="mt-auto inline-flex items-center justify-center gap-2.5 font-bold py-4 px-6 rounded-xl transition-all duration-300 bg-blue-600 hover:bg-blue-700 text-white shadow-md shadow-blue-600/20">
                        <i class="fab fa-facebook-messenger"></i> Cotizar {{ licencia.nombre }}
                    </a>
                </div>
            </article>
            {% endfor %}
        </div>
    </div>
</section>

<!-- ============================================================
     COMPARACIÓN — ¿CUÁL ELEGIR?
     ============================================================ -->
<section class="bg-gray-50 py-20 sm:py-28">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center max-w-2xl mx-auto mb-12">
            <span class="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-slate-600 bg-white border border-slate-200 rounded-full px-4 py-1.5 mb-5">
                <i class="fas fa-scale-balanced"></i> Comparativa
            </span>
            <h2 class="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-4">
                ¿Cuál me <span class="text-slate-900">conviene?</span>
            </h2>
        </div>

        <div class="bg-white border border-gray-200 rounded-3xl overflow-hidden shadow-sm">
            <table class="w-full text-sm text-left">
                <thead>
                    <tr class="border-b border-gray-200 bg-gray-50/70">
                        <th class="py-5 px-6 font-bold text-slate-500"></th>
                        <th class="py-5 px-6 font-extrabold text-slate-900">Office 2019</th>
                        <th class="py-5 px-6 font-extrabold text-slate-900 bg-slate-50/60">Office 2024 <span class="text-[10px] align-top">★</span></th>
                    </tr>
                </thead>
                <tbody class="divide-y divide-gray-100">
                    <tr>
                        <th scope="row" class="py-4 px-6 text-gray-500 text-left font-medium">Tipo de licencia</th>
                        <td class="py-4 px-6 font-semibold text-slate-800">Permanente, pago único</td>
                        <td class="py-4 px-6 font-semibold text-slate-800 bg-slate-50/40">Permanente, pago único</td>
                    </tr>
                    <tr>
                        <th scope="row" class="py-4 px-6 text-gray-500 text-left font-medium">Aplicaciones</th>
                        <td class="py-4 px-6 text-slate-800">Word, Excel, PowerPoint, Outlook y más</td>
                        <td class="py-4 px-6 text-slate-800 bg-slate-50/40">Word, Excel, PowerPoint, Outlook y más</td>
                    </tr>
                    <tr>
                        <th scope="row" class="py-4 px-6 text-gray-500 text-left font-medium">Actualidad</th>
                        <td class="py-4 px-6 text-slate-800">Versión clásica y estable</td>
                        <td class="py-4 px-6 font-semibold text-slate-800 bg-slate-50/40">Última versión de Office</td>
                    </tr>
                    <tr>
                        <th scope="row" class="py-4 px-6 text-gray-500 text-left font-medium">Dispositivo</th>
                        <td class="py-4 px-6 text-slate-800">1 PC o Mac</td>
                        <td class="py-4 px-6 text-slate-800 bg-slate-50/40">1 PC o Mac</td>
                    </tr>
                    <tr>
                        <th scope="row" class="py-4 px-6 text-gray-500 text-left font-medium">Entrega</th>
                        <td class="py-4 px-6 text-slate-800">Correo el mismo día</td>
                        <td class="py-4 px-6 text-slate-800 bg-slate-50/40">Correo el mismo día</td>
                    </tr>
                </tbody>
            </table>
        </div>

        <p class="text-center text-sm text-gray-500 mt-6">
            ¿Dudas? Escríbenos por Messenger y te recomendamos la mejor opción para tu caso.
        </p>
    </div>
</section>

<!-- ============================================================
     CÓMO FUNCIONA
     ============================================================ -->
<section class="bg-white py-20 sm:py-28">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center max-w-2xl mx-auto mb-14">
            <span class="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-slate-600 bg-slate-100 border border-slate-200 rounded-full px-4 py-1.5 mb-5">
                <i class="fas fa-list-ol"></i> Proceso
            </span>
            <h2 class="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-4">
                Así de <span class="text-slate-900">sencillo</span>
            </h2>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <div class="bg-gray-50 border border-gray-200 rounded-2xl p-7 hover:border-slate-300 hover:shadow-lg hover:shadow-slate-100 transition-all duration-300">
                <span class="w-11 h-11 rounded-full bg-slate-900 text-white font-extrabold flex items-center justify-center mb-5 shadow-md shadow-slate-900/20">1</span>
                <h3 class="text-slate-900 font-bold mb-2">Cotiza por Messenger</h3>
                <p class="text-sm text-gray-600 leading-relaxed">Escríbenos y te confirmamos disponibilidad y forma de pago al momento.</p>
            </div>
            <div class="bg-gray-50 border border-gray-200 rounded-2xl p-7 hover:border-slate-300 hover:shadow-lg hover:shadow-slate-100 transition-all duration-300">
                <span class="w-11 h-11 rounded-full bg-slate-900 text-white font-extrabold flex items-center justify-center mb-5 shadow-md shadow-slate-900/20">2</span>
                <h3 class="text-slate-900 font-bold mb-2">Recibe tu clave por correo</h3>
                <p class="text-sm text-gray-600 leading-relaxed">Realizas tu pago y envíamos tu código de activación el mismo día.</p>
            </div>
            <div class="bg-gray-50 border border-gray-200 rounded-2xl p-7 hover:border-slate-300 hover:shadow-lg hover:shadow-slate-100 transition-all duration-300">
                <span class="w-11 h-11 rounded-full bg-slate-900 text-white font-extrabold flex items-center justify-center mb-5 shadow-md shadow-slate-900/20">3</span>
                <h3 class="text-slate-900 font-bold mb-2">Instalamos y activamos</h3>
                <p class="text-sm text-gray-600 leading-relaxed">Te guiamos en la instalación y activación, incluso a distancia.</p>
            </div>
        </div>
    </div>
</section>

<!-- ============================================================
     CTA FINAL
     ============================================================ -->
<section class="bg-slate-900 py-20 sm:py-24">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <span class="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-slate-300 bg-white/10 border border-white/15 rounded-full px-4 py-1.5 mb-5">
            <i class="fas fa-envelope-open-text"></i> Entrega el mismo día
        </span>
        <h2 class="text-3xl sm:text-4xl font-extrabold text-white mb-4">
            ¿Listo para tener tu <span class="text-white">Office original?</span>
        </h2>
        <p class="text-slate-300 text-lg mb-9 max-w-xl mx-auto leading-relaxed">
            Sin anticipos raros ni claves de dudosa procedencia. Licencias genuinas y acompañamiento real.
        </p>
        <a href="https://m.me/d1g1mex" target="_blank"
           class="inline-flex items-center gap-3 bg-blue-600 hover:bg-blue-700 text-white font-bold px-10 py-4 rounded-xl shadow-lg shadow-slate-900/30 transition-all duration-300 hover:-translate-y-0.5">
            <i class="fab fa-facebook-messenger text-lg"></i> Escribir por Messenger
        </a>
    </div>
</section>
