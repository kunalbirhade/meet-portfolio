module.exports = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "dark-charcoal": "#313131",
        "dark-gray": "#18191B",
        "light-gray": "#777B84",
        offwhite: "#f7f7f7",
        "bim-gray-1": "#f2f2f4",
        "bim-gray-2": "#e6e7ea",
        "bim-gray-3": "#a8a9ad",
        "border-custom": "#272727",
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
    },
  },
  plugins: [],
};
