/**
 * Inline script to set data-theme before first paint to avoid flash.
 * Rendered in layout <head>.
 */
export function ThemeScript() {
  const script = `
    (function() {
      var key = 'meet-portfolio-theme';
      var stored = localStorage.getItem(key);
      var prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
      var theme = stored === 'light' || stored === 'dark' ? stored : (prefersDark ? 'dark' : 'light');
      document.documentElement.setAttribute('data-theme', theme);
    })();
  `;
  return <script dangerouslySetInnerHTML={{ __html: script }} />;
}
