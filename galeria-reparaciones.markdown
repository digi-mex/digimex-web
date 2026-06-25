---
layout: default
title: "Galería de Equipos Reparados"
description: "Visualiza nuestros trabajos de reparación de laptops y PC. Proceso de diagnóstico y solución rápida en DIGIMEX."
---

<section class="py-16 sm:py-24 bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 class="text-4xl sm:text-5xl font-extrabold text-navy text-center mb-6">
            Galería de <span class="text-cyan">Éxitos</span>
        </h1>
        <p class="text-lg text-gray-700 text-center max-w-3xl mx-auto mb-16">
            Una muestra de los equipos que han pasado por nuestro taller para mantenimiento preventivo y correctivo.
        </p>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <!-- Item 1 -->
            <div class="flex flex-col gap-4">
                <div class="group relative overflow-hidden rounded-3xl aspect-[4/3] shadow-xl">
                    <img src="{{ '/img/reparaciones/pc_repair_1.png' | relative_url }}" alt="Mantenimiento preventivo" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110">
                </div>
                <div>
                    <h3 class="text-xl font-bold text-navy">Mantenimiento Interno</h3>
                    <p class="text-gray-600 text-sm">Limpieza profunda y cambio de pasta térmica para optimizar la temperatura.</p>
                </div>
            </div>

            <!-- Item 2 -->
            <div class="flex flex-col gap-4">
                <div class="group relative overflow-hidden rounded-3xl aspect-[4/3] shadow-xl">
                    <img src="{{ '/img/reparaciones/pc_repair_2.png' | relative_url }}" alt="Cambio de disco" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110">
                </div>
                <div>
                    <h3 class="text-xl font-bold text-navy">Upgrade de Hardware</h3>
                    <p class="text-gray-600 text-sm">Instalación de discos SSD y aumento de RAM para máxima velocidad.</p>
                </div>
            </div>

            <!-- Item 3 -->
            <div class="flex flex-col gap-4">
                <div class="group relative overflow-hidden rounded-3xl aspect-[4/3] shadow-xl">
                    <img src="{{ '/img/reparaciones/pc_repair_3.png' | relative_url }}" alt="Diagnóstico avanzado" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110">
                </div>
                <div>
                    <h3 class="text-xl font-bold text-navy">Diagnóstico y Pruebas</h3>
                    <p class="text-gray-600 text-sm">Pruebas de estrés y estabilidad para asegurar el funcionamiento óptimo.</p>
                </div>
            </div>
        </div>

        <div class="mt-20 text-center">
            <a href="{{ '/reparaciones-de-pc/' | relative_url }}" class="text-navy font-bold hover:text-cyan transition-colors flex items-center justify-center gap-2">
                <i class="fas fa-arrow-left"></i> Volver a Servicios de Reparación
            </a>
        </div>
    </div>
</section>
