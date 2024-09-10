/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        red: "var(--red)",
        "red-light": "var(--red-light)",

        black: "var(--black)",
        "black-light": "var(--black-light)",
        "light-cream": "var(--light-cream)",

        // Default theme variables
        background: "var(--background)",
        text: "var(--text)",

        "background-btn": "var(--background-btn)",
        "text-btn": "var(--text-btn)",
        "background-nav-bar": "var(--background-nav-bar)",
        "text-nav-bar": "var(--text-nav-bar)",

        "background-nav-link": "var(--background-nav-link)",
        "text-nav-link": "var(--text-nav-link)",
        "background-nav-link-hover": "var(--background-nav-link-hover)",
        "text-nav-link-hover": "var(--text-nav-link-hover)",

        "background-btn-primary": "var(--background-btn-primary)",
        "text-btn-primary": "var(--text-btn-primary)",
        "background-btn-primary-hover": "var(--background-btn-primary-hover)",
        "text-btn-primary-hover": "var(--text-btn-primary-hover)",
      },
      fontFamily: {
        truculenta: ["Truculenta", "sans-serif"], // Ajout de la police "Truculenta"
      },
    },
  },
  plugins: [],
};
