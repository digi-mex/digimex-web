---
layout: default
title: "Blog"
description: "Consejos y tendencias sobre reparación de equipos, diseño web y marketing digital de la mano de DIGIMEX."
keywords: "blog, consejos, reparación de pc, diseño web, marketing digital"
permalink: /blog/
---

<section class="bg-slate-900 relative overflow-hidden">
    <div class="absolute inset-0 opacity-[0.06] pointer-events-none"
         style="background-image: radial-gradient(#fff 1px, transparent 1px); background-size: 26px 26px;" aria-hidden="true"></div>
    <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-16">
        <div class="flex items-center gap-2 mb-4">
            <i class="fas fa-newspaper text-slate-400 text-sm"></i>
            <span class="text-xs font-bold uppercase tracking-widest text-slate-400">Artículos</span>
        </div>
        <h1 class="text-3xl sm:text-4xl font-extrabold text-white mb-3">Nuestro Blog</h1>
        <p class="text-slate-400 text-lg max-w-2xl leading-relaxed">
            Consejos de tecnología, mantenimiento de equipos y buenas prácticas para tu negocio.
        </p>
    </div>
</section>

<section class="bg-slate-50 py-14 sm:py-16">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {% if site.posts.size > 0 %}
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {% for post in site.posts %}
            <article class="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col">
                {% if post.image and post.image != "" %}
                <img src="{{ post.image | relative_url }}" alt="{{ post.title }}" class="w-full h-48 object-cover">
                {% else %}
                <div class="w-full h-48 bg-slate-100 flex items-center justify-center text-slate-300">
                    <i class="fas fa-newspaper text-5xl"></i>
                </div>
                {% endif %}

                <div class="p-6 flex-1 flex flex-col">
                    <div class="flex items-center gap-3 text-xs text-slate-500 mb-3">
                        <span class="bg-slate-100 text-slate-700 px-2.5 py-1 rounded-full font-semibold uppercase">{{ post.categories | first }}</span>
                        <span class="inline-flex items-center gap-1.5"><i class="far fa-calendar-alt"></i> {{ post.date | date: "%d/%m/%Y" }}</span>
                    </div>
                    <h2 class="text-lg font-bold text-slate-900 mb-3 leading-snug">
                        <a href="{{ post.url | relative_url }}" class="hover:text-slate-900 transition-colors">{{ post.title }}</a>
                    </h2>
                    <p class="text-slate-600 text-sm mb-6 line-clamp-3">
                        {{ post.excerpt | strip_html }}
                    </p>
                    <a href="{{ post.url | relative_url }}" class="mt-auto text-slate-700 font-semibold text-sm flex items-center gap-2 hover:text-slate-900 transition-colors group">
                        Leer más <i class="fas fa-arrow-right transition-transform group-hover:translate-x-1"></i>
                    </a>
                </div>
            </article>
            {% endfor %}
        </div>
        {% else %}
        <div class="text-center py-20">
            <div class="text-slate-300 text-6xl mb-4">
                <i class="fas fa-newspaper"></i>
            </div>
            <h3 class="text-2xl font-bold text-slate-900">Próximamente más contenido</h3>
            <p class="text-slate-500">Estamos preparando los mejores artículos para ti.</p>
        </div>
        {% endif %}
    </div>
</section>
