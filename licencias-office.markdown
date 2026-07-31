---
layout: default
title: "Licencias de Microsoft Office"
description: "Compra tu licencia original de Microsoft 365 u Office 2024. Cotiza por Messenger y recibe tu licencia por correo con instalación y activación incluidas."
keywords: "licencia office, microsoft 365, office 2024, comprar office, licencia original, activación office"
permalink: /licencias-office/
---

<!-- ============================================================
     HERO — LICENCIAS OFFICE
     ============================================================ -->
<section class="bg-gradient-to-br from-blue-600 via-blue-500 to-cyan-400 py-20 sm:py-28 relative overflow-hidden">
    <div class="absolute -top-24 -right-24 w-[450px] h-[450px] bg-white/10 rounded-full blur-[120px] pointer-events-none" aria-hidden="true"></div>
    <div class="absolute -bottom-32 -left-24 w-[400px] h-[400px] bg-cyan-300/20 rounded-full blur-[120px] pointer-events-none" aria-hidden="true"></div>

    <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
        <div>
            <span class="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-cyan-200 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 mb-6">
                <i class="fas fa-cube"></i> Licencias Originales
            </span>
            <h1 class="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6">
                Microsoft <span class="text-cyan-200">Office</span> con<br class="hidden sm:block"> instalación incluida
            </h1>
            <p class="text-blue-50 text-lg leading-relaxed mb-8 max-w-xl">
                Adquiere tu licencia original de <strong class="text-white">Microsoft 365</strong> o
                <strong class="text-white">Office 2024</strong> con nosotros. Cotiza sin compromiso por
                Messenger y recibe tu licencia por correo, con instalación y activación incluidas.
            </p>
            <div class="flex flex-wrap gap-4">
                <a href="https://m.me/d1g1mex" target="_blank"
                   class="inline-flex items-center gap-3 bg-white text-blue-700 font-bold px-8 py-4 rounded-xl transition-all duration-300 shadow-xl shadow-blue-900/30 hover:-translate-y-0.5 hover:bg-blue-50">
                    <i class="fab fa-facebook-messenger text-lg text-blue-600"></i> Cotizar por Messenger
                </a>
                <a href="{{ '/galeria-reparaciones/' | relative_url }}"
                   class="inline-flex items-center gap-3 bg-blue-500/20 hover:bg-blue-500/30 border border-white/30 text-white font-bold px-8 py-4 rounded-xl transition-all duration-300 backdrop-blur-sm hover:-translate-y-0.5">
                    <i class="fas fa-wrench"></i> Servicios de Reparación
                </a>
            </div>
        </div>

        <!-- Panel de confianza -->
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {% assign confianza = "fa-shield-halved|Activación oficial|Licencias 100% originales y verificadas|#1d4ed8;fa-envelope|Entrega por correo|Recibe tu clave e instrucciones el mismo día|#1d4ed8;fa-gift|Instalación incluida|Te ayudamos a activar tu Office|#0891b2;fa-headset|Soporte técnico|Acompañamiento después de tu compra|#0891b2" | split: ";" %}
            {% for item in confianza %}
            {% assign parts = item | split: "|" %}
            <div class="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 hover:bg-white/15 hover:-translate-y-1 transition-all duration-300">
                <span class="w-12 h-12 rounded-xl flex items-center justify-center text-xl mb-4" style="color: {{ parts[3] }}; background-color: rgba(255,255,255,0.15);">
                    <i class="fas {{ parts[0] }}"></i>
                </span>
                <h3 class="text-white font-bold mb-1.5">{{ parts[1] }}</h3>
                <p class="text-blue-100 text-sm leading-relaxed">{{ parts[2] }}</p>
            </div>
            {% endfor %}
        </div>
    </div>
</section>

<!-- ============================================================
     CATÁLOGO DE LICENCIAS
     ============================================================ -->
<section class="bg-gray-50 py-20 sm:py-28">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
            <span class="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-blue-600 bg-blue-50 border border-blue-200 rounded-full px-4 py-1.5 mb-5">
                <i class="fas fa-cubes"></i> Catálogo
            </span>
            <h2 class="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-4">
                Elige tu <span class="text-blue-600">licencia</span>
            </h2>
            <p class="text-gray-600 text-lg">
                Suscripción anual o pago único. Cotización por Messenger.
            </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
            {% for licencia in site.data.licencias.licencias %}
            <div class="relative bg-white border rounded-2xl p-7 flex flex-col gap-5 shadow-sm shadow-gray-200/60 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-blue-100 {% if licencia.destaque %}border-blue-500 ring-2 ring-blue-500/20{% else %}border-gray-200 hover:border-blue-300{% endif %}">
                {% if licencia.destaque %}
                <span class="absolute -top-3 left-1/2 -translate-x-1/2 text-[11px] font-bold uppercase tracking-widest text-white bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full px-4 py-1.5 shadow-lg shadow-blue-600/30">
                    Más vendido
                </span>
                {% endif %}

                <div class="flex items-start justify-between gap-3">
                    <span class="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl {% if licencia.destaque %}bg-gradient-to-br from-blue-600 to-cyan-500 text-white shadow-lg shadow-blue-600/30{% else %}bg-blue-50 text-blue-600{% endif %}">
                        <i class="fas {{ licencia.icono }}"></i>
                    </span>
                    <span class="text-[11px] font-bold uppercase tracking-wider text-blue-700 border border-blue-200 bg-blue-50 rounded-full px-3 py-1 whitespace-nowrap">
                        {{ licencia.tipo }}
                    </span>
                </div>

                <div>
                    <h3 class="text-slate-900 text-lg font-bold mb-1.5">{{ licencia.nombre }}</h3>
                    <p class="text-sm text-gray-600 leading-relaxed">{{ licencia.descripcion }}</p>
                </div>

                <ul class="space-y-2.5 text-sm text-gray-700 flex-1">
                    {% for c in licencia.caracteristicas %}
                    <li class="flex items-start gap-2.5">
                        <i class="fas fa-check-circle text-emerald-500 mt-0.5 text-xs"></i>
                        <span>{{ c }}</span>
                    </li>
                    {% endfor %}
                </ul>

                <p class="text-xs text-gray-500 bg-gray-50 border border-gray-200 rounded-lg px-3 py-2">
                    <i class="fas fa-user-check text-blue-600 mr-1.5"></i>{{ licencia.nota }}
                </p>

                <a href="https://m.me/d1g1mex" target="_blank"
                   class="inline-flex items-center justify-center gap-2 font-bold py-3.5 px-5 rounded-xl transition-all duration-300 {% if licencia.destaque %}bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white shadow-lg shadow-blue-600/25{% else %}bg-blue-600 hover:bg-blue-700 text-white shadow-md shadow-blue-600/20{% endif %}">
                    <i class="fab fa-facebook-messenger"></i> Cotizar
                </a>
            </div>
            {% endfor %}
        </div>
    </div>
</section>

<!-- ============================================================
     CÓMO FUNCIONA
     ============================================================ -->
<section class="bg-white py-20 sm:py-24">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center max-w-2xl mx-auto mb-12">
            <span class="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-blue-600 bg-blue-50 border border-blue-200 rounded-full px-4 py-1.5 mb-5">
                <i class="fas fa-list-ol"></i> Proceso
            </span>
            <h2 class="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-4">
                ¿Cómo lo <span class="text-blue-600">obtengo?</span>
            </h2>
            <p class="text-gray-600 text-lg">En 3 pasos, sin complicaciones.</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div class="bg-gray-50 border border-gray-200 rounded-2xl p-7 hover:border-blue-300 hover:shadow-lg hover:shadow-blue-100 transition-all duration-300">
                <span class="w-10 h-10 rounded-full bg-gradient-to-br from-blue-600 to-cyan-500 text-white font-extrabold flex items-center justify-center mb-5 shadow-md shadow-blue-600/25">1</span>
                <h3 class="text-slate-900 font-bold mb-2">Cotiza por Messenger</h3>
                <p class="text-sm text-gray-600 leading-relaxed">Escríbenos y te pasamos disponibilidad al momento.</p>
            </div>
            <div class="bg-gray-50 border border-gray-200 rounded-2xl p-7 hover:border-blue-300 hover:shadow-lg hover:shadow-blue-100 transition-all duration-300">
                <span class="w-10 h-10 rounded-full bg-gradient-to-br from-blue-600 to-cyan-500 text-white font-extrabold flex items-center justify-center mb-5 shadow-md shadow-blue-600/25">2</span>
                <h3 class="text-slate-900 font-bold mb-2">Paga y recibe tu licencia</h3>
                <p class="text-sm text-gray-600 leading-relaxed">Realiza tu pago y recibe tu clave original por correo el mismo día.</p>
            </div>
            <div class="bg-gray-50 border border-gray-200 rounded-2xl p-7 hover:border-blue-300 hover:shadow-lg hover:shadow-blue-100 transition-all duration-300">
                <span class="w-10 h-10 rounded-full bg-gradient-to-br from-blue-600 to-cyan-500 text-white font-extrabold flex items-center justify-center mb-5 shadow-md shadow-blue-600/25">3</span>
                <h3 class="text-slate-900 font-bold mb-2">Instalación y activación</h3>
                <p class="text-sm text-gray-600 leading-relaxed">Te ayudamos a instalar y activar tu Office, incluso a distancia.</p>
            </div>
        </div>

        <div class="mt-14 text-center">
            <a href="https://m.me/d1g1mex" target="_blank"
               class="inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white font-bold px-10 py-4 rounded-xl transition-all duration-300 shadow-lg shadow-blue-600/25 hover:-translate-y-0.5">
                <i class="fab fa-facebook-messenger text-lg"></i> Escríbenos por Messenger
            </a>
        </div>
    </div>
</section>
