/**
 * Central theme colors for light and dark mode.
 * Use these token names as CSS variables: var(--color-name)
 * or via Tailwind: bg-dark-gray, text-light-gray, etc. (see tailwind.config.js)
 */

export const themeColors = {
  light: {
    // Page & layout
    "page-bg": "#e5e5e5", // outer chrome (replaces dark-charcoal)
    "main-bg": "#f6f6f6", // content area (replaces dark-gray)
    "card-bg": "#ffffff",
    "body-bg": "#f6f6f6",
    // Text
    "text-primary": "#111827",
    "text-muted": "#4b5563",
    "text-inverse": "#f9fafb", // for text on dark surfaces
    "text-accent": "#565656",
    // Borders & surfaces
    border: "#d1d5db",
    "border-strong": "#9ca3af",
    surface: "#e6e7ea",
    "surface-elevated": "#f2f2f4",
    // Grays (semantic)
    "dark-charcoal": "#4b5563",
    "dark-gray": "#f3f4f6",
    "light-gray": "#6b7280",
    offwhite: "#f7f7f7",
    "bim-gray-1": "#f2f2f4",
    "bim-gray-2": "#e6e7ea",
    "bim-gray-3": "#a8a9ad",
    "border-custom": "#d1d5db",
    // UI
    muted: "#6b7280",
    primary: "#111827",
    scrollbar: "#9ca3af",
    "scrollbar-hover": "#4b5563",
    // Hardcoded replacements (for reference)
    "hero-stroke": "#9ca3af",
    "hero-stroke-text": "#374151",
    "overlay-on-image": "#1f2937",
    "overlay-text": "#f3f4f6",
    "button-bg": "#374151",
    "button-bg-hover": "#4b5563",
    "input-bg": "#374151",
    "modal-overlay": "rgba(0,0,0,0.4)",
    "modal-bg": "#ffffff",
  },
  dark: {
    // Page & layout (current design)
    "page-bg": "#313131",
    "main-bg": "#18191B",
    "card-bg": "#272727",
    "body-bg": "#f6f6f6",
    // Text
    "text-primary": "#f9fafb",
    "text-muted": "#777B84",
    "text-inverse": "#111827",
    "text-accent": "#565656",
    // Borders & surfaces
    border: "#272727",
    "border-strong": "#777B84",
    surface: "#272727",
    "surface-elevated": "#313131",
    // Grays (current Tailwind names)
    "dark-charcoal": "#313131",
    "dark-gray": "#18191B",
    "light-gray": "#777B84",
    offwhite: "#f7f7f7",
    "bim-gray-1": "#f2f2f4",
    "bim-gray-2": "#e6e7ea",
    "bim-gray-3": "#a8a9ad",
    "border-custom": "#272727",
    // UI
    muted: "#6b7280",
    primary: "#111827",
    scrollbar: "#6b7280",
    "scrollbar-hover": "#111827",
    "hero-stroke": "#777B84",
    "hero-stroke-text": "#272727",
    "overlay-on-image": "#313131",
    "overlay-text": "#EEEEEE",
    "button-bg": "#272727",
    "button-bg-hover": "#313131",
    "input-bg": "#272727",
    "modal-overlay": "rgba(0,0,0,0.4)",
    "modal-bg": "#ffffff",
  },
} as const;

export type ThemeMode = keyof typeof themeColors;
export type ColorToken = keyof typeof themeColors.light;
