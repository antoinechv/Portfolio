
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    fontFamily: {
      truculenta: ['"Truculenta"'],
    },
    extend: {
      gridTemplateColumns: {
        '13': 'repeat(13, minmax(0, 1fr))',
      },
      colors: {
        red: "var(--red)",
        "red-light": "var(--red-light)",

        "black-light": "var(--black-light)",

        "black-50": "var(--black-50)",
        "light-cream": "var(--light-cream)",
        "grey": "var(--grey)",


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

    },
  },
  plugins: [

  ],
};
