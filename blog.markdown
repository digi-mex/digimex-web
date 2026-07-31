---
layout: default
title: "Blog"
description: "Noticias, consejos y tendencias sobre reparación de equipos, diseño web y marketing digital de la mano de DIGIMEX."
keywords: "blog, consejos, reparación de pc, diseño web, marketing digital"
permalink: /blog/
---

<section class="bg-white py-16 sm:py-24 relative overflow-hidden">
    <div class="absolute -top-32 -left-32 w-[500px] h-[500px] bg-blue-100/60 rounded-full blur-[140px] pointer-events-none" aria-hidden="true"></div>
    <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center max-w-2xl mx-auto mb-14 sm:mb-16">
            <span class="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-blue-600 bg-blue-50 border border-blue-200 rounded-full px-4 py-1.5 mb-5">
                <i class="fas fa-newspaper"></i> Artículos
            </span>
            <h1 class="text-4xl sm:text-5xl font-extrabold text-slate-900 mb-4">
                Nuestro <span class="logo-gradient">Blog</span>
            </h1>
            <p class="text-lg text-gray-600 leading-relaxed">
                Explora nuestros últimos artículos sobre tecnología, marketing y diseño para potenciar tu negocio.
            </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {% for post in site.posts %}
            <article class="bg-white rounded-2xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-xl hover:shadow-blue-100 hover:border-blue-300 transition-all duration-300 flex flex-col">
                {% if post.image %}
                <img src="{{ post.image | relative_url }}" alt="{{ post.title }}" class="w-full h-48 object-cover">
                {% else %}
                <div class="w-full h-48 bg-gradient-to-br from-blue-100 to-cyan-100 flex items-center justify-center text-blue-400">
                    <i class="fas fa-newspaper text-5xl"></i>
                </div>
                {% endif %}

                <div class="p-6 flex-1 flex flex-col">
                    <div class="flex items-center gap-2 text-xs text-gray-500 mb-3">
                        <span class="bg-blue-50 text-blue-700 px-2 py-1 rounded-full font-bold uppercase">{{ post.categories | first }}</span>
                        <span>{{ post.date | date: "%d/%m/%Y" }}</span>
                    </div>
                    <h2 class="text-xl font-bold text-slate-900 mb-3">
                        <a href="{{ post.url | relative_url }}" class="hover:text-blue-600 transition-colors">{{ post.title }}</a>
                    </h2>
                    <p class="text-gray-600 text-sm mb-6 line-clamp-3">
                        {{ post.excerpt | strip_html }}
                    </p>
                    <a href="{{ post.url | relative_url }}" class="mt-auto text-blue-600 font-bold flex items-center gap-2 hover:text-blue-800 transition-colors group">
                        Leer más <i class="fas fa-arrow-right transition-transform group-hover:translate-x-1"></i>
                    </a>
                </div>
            </article>
            {% endfor %}
        </div>

        {% if site.posts.size == 0 %}
        <div class="text-center py-20">
            <div class="text-gray-300 text-6xl mb-4">
                <i class="fas fa-box-open"></i>
            </div>
            <h3 class="text-2xl font-bold text-slate-900">Próximamente más contenido</h3>
            <p class="text-gray-500">Estamos preparando los mejores artículos para ti.</p>
        </div>
        {% endif %}
    </div>
</section>
