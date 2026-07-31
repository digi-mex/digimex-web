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
                // Escala completa de cyan (sin ella, las clases cyan-400/500
                // no se compilan y los acentos quedan sin color).
                cyan: {
                    DEFAULT: '#22d3ee',
                    50: '#ecfeff',
                    100: '#cffafe',
                    200: '#a5f3fc',
                    300: '#67e8f9',
                    400: '#22d3ee',
                    500: '#06b6d4',
                    600: '#0891b2',
                    700: '#0e7490',
                    800: '#155e75',
                    900: '#164e63',
                    950: '#083344',
                },
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
