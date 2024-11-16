/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        aboutMeBgColor: 'rgb(239, 236, 226)',
      },
      boxShadow: {
        'y-axis-only':
          '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.56)',
        'custom-strong': '30px 35px 0px rgba(0, 0, 0, 1)',
      },
      transitionDuration: {
        4000: '4000ms',
      },
      keyframes: {
        colorChange: {
          '0% ': { color: 'text-gray-900' },
          '100%': { color: 'text-white' },
        },
      },
      animation: {
        colorTransition: 'colorChange 4s ease-in-out',
      },
      lineHeight: {
        'extra-relaxed': '2.3',
      },
      spacing: {
        'bottom-btn': '4rem',
      },
    },
  },
  plugins: [],
}
