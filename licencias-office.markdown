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
<section class="relative overflow-hidden bg-gradient-to-br from-blue-800 via-blue-700 to-sky-600">
    <div class="absolute -top-32 -right-32 w-[500px] h-[500px] bg-white/10 rounded-full blur-[120px] pointer-events-none" aria-hidden="true"></div>
    <div class="absolute -bottom-40 -left-32 w-[460px] h-[460px] bg-sky-400/20 rounded-full blur-[120px] pointer-events-none" aria-hidden="true"></div>

    <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-28 grid lg:grid-cols-[1.05fr_0.95fr] gap-14 items-center">

        <!-- Texto -->
        <div class="text-center lg:text-left">
            <span class="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-sky-200 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 mb-6">
                <i class="fas fa-cube"></i> Licencias Originales
            </span>
            <h1 class="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-[1.05] mb-6">
                Office <span class="text-sky-300">2019</span> y<br class="hidden sm:block">
                <span class="text-sky-300">2024</span>, licencia permanente
            </h1>
            <p class="text-blue-100 text-lg leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0">
                Códigos de activación genuinos de 25 dígitos, de pago único y sin renovaciones.
                Te entregamos tu clave por correo el mismo día, con instalación y activación incluidas.
            </p>

            <div class="flex flex-wrap gap-4 justify-center lg:justify-start">
                <a href="https://m.me/d1g1mex" target="_blank"
                   class="inline-flex items-center gap-3 bg-white text-blue-700 font-bold px-8 py-4 rounded-xl shadow-xl shadow-blue-900/30 transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue-50">
                    <i class="fab fa-facebook-messenger text-lg text-blue-600"></i> Cotizar por Messenger
                </a>
                <a href="#productos"
                   class="inline-flex items-center gap-3 bg-blue-500/20 hover:bg-blue-500/30 border border-white/30 text-white font-bold px-8 py-4 rounded-xl backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5">
                    Ver licencias <i class="fas fa-arrow-down text-xs"></i>
                </a>
            </div>

            <ul class="mt-10 flex flex-wrap gap-x-6 gap-y-3 justify-center lg:justify-start text-sm text-blue-100">
                <li class="flex items-center gap-2"><i class="fas fa-check-circle text-sky-300"></i> Entrega por correo el mismo día</li>
                <li class="flex items-center gap-2"><i class="fas fa-check-circle text-sky-300"></i> Instalación y activación incluidas</li>
                <li class="flex items-center gap-2"><i class="fas fa-check-circle text-sky-300"></i> Soporte después de la compra</li>
            </ul>
        </div>

        <!-- Imágenes de producto -->
        <div class="relative flex items-end justify-center gap-6 sm:gap-10">
            <!-- Office 2019 -->
            <div class="w-40 sm:w-48 lg:w-56 drop-shadow-2xl transition-transform duration-300 hover:-translate-y-2">
                <img src="{{ '/img/office/office-2019.svg' | relative_url }}" alt="Microsoft Office 2019 Pro Plus" class="w-full h-auto">
            </div>
            <!-- Office 2024 (destacado, al frente) -->
            <div class="relative -ml-4 sm:-ml-6 w-48 sm:w-56 lg:w-64 drop-shadow-2xl transition-transform duration-300 hover:-translate-y-2 z-10">
                <span class="absolute -top-3 left-1/2 -translate-x-1/2 text-[11px] font-bold uppercase tracking-widest text-white bg-sky-400 rounded-full px-4 py-1.5 shadow-lg shadow-sky-900/40 z-20">
                    Más vendido
                </span>
                <img src="{{ '/img/office/office-2024.svg' | relative_url }}" alt="Microsoft Office 2024 Pro Plus" class="w-full h-auto">
            </div>
            <!-- sello de confianza -->
            <div class="absolute -bottom-4 right-0 sm:right-2 bg-white rounded-2xl shadow-xl shadow-blue-900/20 border border-blue-100 px-5 py-3 flex items-center gap-3">
                <span class="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center text-lg"><i class="fas fa-shield-halved"></i></span>
                <div>
                    <p class="text-sm font-bold text-slate-900">Activación oficial</p>
                    <p class="text-xs text-gray-500">Licencias 100% verificadas</p>
                </div>
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
            <span class="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-blue-600 bg-blue-50 border border-blue-200 rounded-full px-4 py-1.5 mb-5">
                <i class="fas fa-box-open"></i> Nuestras Licencias
            </span>
            <h2 class="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-4">
                Dos versiones, <span class="logo-gradient">una sola compra</span>
            </h2>
            <p class="text-gray-600 text-lg leading-relaxed">
                Ambos paquetes son licencias permanentes de pago único. Tú decides según lo que necesites.
            </p>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {% for licencia in site.data.licencias.licencias %}

            <article class="relative flex flex-col sm:flex-row gap-8 bg-white border rounded-3xl p-8 sm:p-10 transition-all duration-300 hover:shadow-xl {% if licencia.destaque %}border-sky-300 ring-2 ring-sky-500/20 shadow-lg shadow-sky-100{% else %}border-gray-200 shadow-sm shadow-gray-100 hover:border-blue-300{% endif %}">

                {% if licencia.destaque %}
                <span class="absolute -top-3 left-8 text-[11px] font-bold uppercase tracking-widest text-white bg-gradient-to-r from-sky-500 to-cyan-400 rounded-full px-4 py-1.5 shadow-lg shadow-sky-500/30">
                    Más vendido
                </span>
                {% endif %}

                <div class="shrink-0 flex items-center justify-center bg-gradient-to-br from-blue-50 to-sky-50 border border-blue-100 rounded-2xl p-4">
                    {% if licencia.nombre contains "2019" %}
                    <img src="{{ '/img/office/office-2019.svg' | relative_url }}" alt="{{ licencia.nombre }}"
                         class="w-36 sm:w-40 h-auto">
                    {% else %}
                    <img src="{{ '/img/office/office-2024.svg' | relative_url }}" alt="{{ licencia.nombre }}"
                         class="w-36 sm:w-40 h-auto">
                    {% endif %}
                </div>

                <div class="flex flex-col flex-1">
                    <div class="flex items-start justify-between gap-3 mb-3">
                        <h3 class="text-2xl font-extrabold text-slate-900">{{ licencia.nombre }}</h3>
                        <span class="text-[11px] font-bold uppercase tracking-wider text-blue-700 border border-blue-200 bg-blue-50 rounded-full px-3 py-1 whitespace-nowrap">
                            {{ licencia.tipo }}
                        </span>
                    </div>
                    <p class="text-gray-600 leading-relaxed mb-6">{{ licencia.descripcion }}</p>

                    <ul class="space-y-3 text-sm text-gray-700 mb-7">
                        {% for c in licencia.caracteristicas %}
                        <li class="flex items-start gap-3">
                            <i class="fas fa-check-circle text-emerald-500 mt-0.5"></i>
                            <span>{{ c }}</span>
                        </li>
                        {% endfor %}
                    </ul>

                    <p class="text-xs text-gray-500 bg-gray-50 border border-gray-200 rounded-lg px-3 py-2 mb-7">
                        <i class="fas fa-user-check text-blue-600 mr-1.5"></i>{{ licencia.nota }}
                    </p>

                    <a href="https://m.me/d1g1mex" target="_blank"
                       class="mt-auto inline-flex items-center justify-center gap-2.5 font-bold py-4 px-6 rounded-xl transition-all duration-300 {% if licencia.destaque %}bg-gradient-to-r from-sky-500 to-cyan-400 hover:from-sky-600 hover:to-cyan-500 text-white shadow-lg shadow-sky-500/25{% else %}bg-blue-600 hover:bg-blue-700 text-white shadow-md shadow-blue-600/20{% endif %}">
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
            <span class="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-blue-600 bg-white border border-blue-200 rounded-full px-4 py-1.5 mb-5">
                <i class="fas fa-scale-balanced"></i> Comparativa
            </span>
            <h2 class="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-4">
                ¿Cuál me <span class="logo-gradient">conviene?</span>
            </h2>
        </div>

        <div class="bg-white border border-gray-200 rounded-3xl overflow-hidden shadow-sm">
            <table class="w-full text-sm text-left">
                <thead>
                    <tr class="border-b border-gray-200 bg-gray-50/70">
                        <th class="py-5 px-6 font-bold text-slate-500"></th>
                        <th class="py-5 px-6 font-extrabold text-slate-900">Office 2019</th>
                        <th class="py-5 px-6 font-extrabold text-sky-600 bg-sky-50/60">Office 2024 <span class="text-[10px] align-top">★</span></th>
                    </tr>
                </thead>
                <tbody class="divide-y divide-gray-100">
                    <tr>
                        <td class="py-4 px-6 text-gray-500">Tipo de licencia</td>
                        <td class="py-4 px-6 font-semibold text-slate-800">Permanente, pago único</td>
                        <td class="py-4 px-6 font-semibold text-slate-800 bg-sky-50/40">Permanente, pago único</td>
                    </tr>
                    <tr>
                        <td class="py-4 px-6 text-gray-500">Aplicaciones</td>
                        <td class="py-4 px-6 text-slate-800">Word, Excel, PowerPoint, Outlook y más</td>
                        <td class="py-4 px-6 text-slate-800 bg-sky-50/40">Word, Excel, PowerPoint, Outlook y más</td>
                    </tr>
                    <tr>
                        <td class="py-4 px-6 text-gray-500">Actualidad</td>
                        <td class="py-4 px-6 text-slate-800">Versión clásica y estable</td>
                        <td class="py-4 px-6 font-semibold text-slate-800 bg-sky-50/40">Última versión de Office</td>
                    </tr>
                    <tr>
                        <td class="py-4 px-6 text-gray-500">Dispositivo</td>
                        <td class="py-4 px-6 text-slate-800">1 PC o Mac</td>
                        <td class="py-4 px-6 text-slate-800 bg-sky-50/40">1 PC o Mac</td>
                    </tr>
                    <tr>
                        <td class="py-4 px-6 text-gray-500">Entrega</td>
                        <td class="py-4 px-6 text-slate-800">Correo el mismo día</td>
                        <td class="py-4 px-6 text-slate-800 bg-sky-50/40">Correo el mismo día</td>
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
            <span class="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-blue-600 bg-blue-50 border border-blue-200 rounded-full px-4 py-1.5 mb-5">
                <i class="fas fa-list-ol"></i> Proceso
            </span>
            <h2 class="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-4">
                Así de <span class="logo-gradient">sencillo</span>
            </h2>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <div class="bg-gray-50 border border-gray-200 rounded-2xl p-7 hover:border-blue-300 hover:shadow-lg hover:shadow-blue-100 transition-all duration-300">
                <span class="w-11 h-11 rounded-full bg-gradient-to-br from-blue-600 to-sky-500 text-white font-extrabold flex items-center justify-center mb-5 shadow-md shadow-blue-600/25">1</span>
                <h3 class="text-slate-900 font-bold mb-2">Cotiza por Messenger</h3>
                <p class="text-sm text-gray-600 leading-relaxed">Escríbenos y te confirmamos disponibilidad y forma de pago al momento.</p>
            </div>
            <div class="bg-gray-50 border border-gray-200 rounded-2xl p-7 hover:border-blue-300 hover:shadow-lg hover:shadow-blue-100 transition-all duration-300">
                <span class="w-11 h-11 rounded-full bg-gradient-to-br from-blue-600 to-sky-500 text-white font-extrabold flex items-center justify-center mb-5 shadow-md shadow-blue-600/25">2</span>
                <h3 class="text-slate-900 font-bold mb-2">Recibe tu clave por correo</h3>
                <p class="text-sm text-gray-600 leading-relaxed">Realizas tu pago y envíamos tu código de activación el mismo día.</p>
            </div>
            <div class="bg-gray-50 border border-gray-200 rounded-2xl p-7 hover:border-blue-300 hover:shadow-lg hover:shadow-blue-100 transition-all duration-300">
                <span class="w-11 h-11 rounded-full bg-gradient-to-br from-blue-600 to-sky-500 text-white font-extrabold flex items-center justify-center mb-5 shadow-md shadow-blue-600/25">3</span>
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
        <span class="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-sky-300 bg-white/10 border border-white/15 rounded-full px-4 py-1.5 mb-5">
            <i class="fas fa-envelope-open-text"></i> Entrega el mismo día
        </span>
        <h2 class="text-3xl sm:text-4xl font-extrabold text-white mb-4">
            ¿Listo para tener tu <span class="logo-gradient">Office original?</span>
        </h2>
        <p class="text-slate-300 text-lg mb-9 max-w-xl mx-auto leading-relaxed">
            Sin anticipos raros ni claves de dudosa procedencia. Licencias genuinas y acompañamiento real.
        </p>
        <a href="https://m.me/d1g1mex" target="_blank"
           class="inline-flex items-center gap-3 bg-gradient-to-r from-sky-500 to-cyan-400 hover:from-sky-600 hover:to-cyan-500 text-white font-bold px-10 py-4 rounded-xl shadow-lg shadow-sky-500/25 transition-all duration-300 hover:-translate-y-0.5">
            <i class="fab fa-facebook-messenger text-lg"></i> Escribir por Messenger
        </a>
    </div>
</section>
