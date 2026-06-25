---
layout: default
title: "Blog"
description: "Noticias, consejos y tendencias sobre diseño web y marketing digital de la mano de DIGIMEX."
---

<section class="py-16 sm:py-24 bg-gray-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 class="text-4xl sm:text-5xl font-extrabold text-navy text-center mb-6">
            Nuestro <span class="text-cyan">Blog</span>
        </h1>
        <p class="text-lg text-gray-700 text-center max-w-2xl mx-auto mb-16">
            Explora nuestros últimos artículos sobre tecnología, marketing y diseño para potenciar tu negocio.
        </p>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {% for post in site.posts %}
            <article class="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 flex flex-col">
                {% if post.image %}
                <img src="{{ post.image | relative_url }}" alt="{{ post.title }}" class="w-full h-48 object-cover">
                {% else %}
                <div class="w-full h-48 bg-navy flex items-center justify-center text-cyan">
                    <i class="fas fa-newspaper text-5xl"></i>
                </div>
                {% endif %}
                
                <div class="p-6 flex-1 flex flex-col">
                    <div class="flex items-center gap-2 text-xs text-gray-400 mb-3">
                        <span class="bg-cyan/10 text-cyan px-2 py-1 rounded-full font-boldUpper uppercase">{{ post.categories | first }}</span>
                        <span>{{ post.date | date: "%d/%m/%Y" }}</span>
                    </div>
                    <h2 class="text-xl font-bold text-navy mb-3">
                        <a href="{{ post.url | relative_url }}" class="hover:text-cyan transition-colors">{{ post.title }}</a>
                    </h2>
                    <p class="text-gray-600 text-sm mb-6 line-clamp-3">
                        {{ post.excerpt | strip_html }}
                    </p>
                    <a href="{{ post.url | relative_url }}" class="mt-auto text-navy font-bold flex items-center gap-2 hover:text-cyan transition-colors group">
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
            <h3 class="text-2xl font-bold text-navy">Próximamente más contenido</h3>
            <p class="text-gray-500">Estamos preparando los mejores artículos para ti.</p>
        </div>
        {% endif %}
    </div>
</section>
