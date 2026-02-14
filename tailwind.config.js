module.exports = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        /* Theme-aware: values come from app/globals.css (:root and [data-theme="dark"]) */
        "dark-charcoal": "var(--color-dark-charcoal)",
        "dark-charcoal-95": "var(--color-dark-charcoal-95)",
        "dark-gray": "var(--color-dark-gray)",
        "dark-gray-95": "var(--color-dark-gray-95)",
        "light-gray": "var(--color-light-gray)",
        offwhite: "var(--color-offwhite)",
        "bim-gray-1": "var(--color-bim-gray-1)",
        "bim-gray-2": "var(--color-bim-gray-2)",
        "bim-gray-3": "var(--color-bim-gray-3)",
        "border-custom": "var(--color-border-custom)",
        "theme-page": "var(--color-page-bg)",
        "theme-main": "var(--color-main-bg)",
        "theme-text": "var(--color-text-primary)",
        "theme-muted": "var(--color-text-muted)",
        "theme-overlay-text": "var(--color-overlay-text)",
        "theme-button": "var(--color-button-bg)",
        "theme-button-hover": "var(--color-button-bg-hover)",
        "theme-input": "var(--color-input-bg)",
        "theme-modal": "var(--color-modal-bg)",
        "theme-hero-stroke": "var(--color-hero-stroke)",
        "theme-hero-stroke-text": "var(--color-hero-stroke-text)",
      },
      fontFamily: {
        sans: [
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
          "Apple Color Emoji",
          "Segoe UI Emoji",
          "Segoe UI Symbol",
          "Noto Color Emoji",
        ],
        "source-code": ["var(--font-source-code-pro)", "monospace"],
        montserrat: ["var(--font-montserrat)", "sans-serif"],
        bebasNeue: ["var(--font-bebasNeue)", "sans-serif"],
      },
      borderRadius: {
        current: "1.25rem",
      },
    },
  },
  plugins: [],
};
