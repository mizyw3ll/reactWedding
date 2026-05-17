/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{ts,tsx,js,jsx}"   // Здесь Tailwind будет искать классы
  ],
  theme: {
    extend: {
      colors: {
        beige: '#ffffff',
        sage: '#A8957A', // теплый светло-коричневый
        'sage-dark': '#7D6B5A', // приятный темно-коричневый
        'gray-warm': '#9B9A95',
      },
      fontFamily: {
        serif: ['"kudry_weird-headline"', 'serif'],
        display: ['"Playfair Display"', 'serif'],
        sans: ['"Montserrat"', 'sans-serif'],
        'baskerville': ['"Libre Baskerville"', 'serif'],
        'great-vibes': ['"Great Vibes"', 'cursive'],
        'dancing': ['"Dancing Script"', 'cursive'],
        'hero': ['"Pattaya"', 'cursive'],
      },
      animation: {
        'slide-in-left': 'slideInLeft 1.8s ease-out forwards',
        'slide-in-right': 'slideInRight 1.8s ease-out forwards',
      },
      keyframes: {
        slideInLeft: {
          '0%': { transform: 'translateX(-100%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        slideInRight: {
          '0%': { transform: 'translateX(100%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [
    require('tailwindcss-animate'),
  ],
}