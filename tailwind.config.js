/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./_includes/**/*.html",
        "./_layouts/**/*.html",
        "./_posts/**/*.{markdown,md}",
        "./*.{html,markdown,md}",
        "./assets/js/**/*.js"
    ],
    theme: {
        extend: {
            colors: {
                navy: '#0a192f',
                cyan: '#64ffda',
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
                mono: ['Roboto Mono', 'monospace'],
            },
        },
    },
    plugins: [],
    // Optimizaciones adicionales
    corePlugins: {
        preflight: true,
    },
    // Purge agresivo para reducir CSS no utilizado
    safelist: [],
}
