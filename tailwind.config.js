/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        // Tablet Portrait (up to 1200px approx) -> Mobile styles
        // Tablet Landscape -> Desktop styles
        // 'md' usually triggers at 768px. We restrict it to landscape or very large screens.
        'md': {'raw': '(min-width: 768px) and (orientation: landscape), (min-width: 1280px)'},
        // 'lg' usually triggers at 1024px. We restrict it to landscape or very large screens.
        'lg': {'raw': '(min-width: 1024px) and (orientation: landscape), (min-width: 1280px)'},
        // 'xl' triggers at 1280px. This is our "safe desktop" width (covers typical laptops and 1200px+ landscape)
        'xl': '1280px',
        '2xl': '1536px',
      },
    },
  },
  plugins: [],
}
