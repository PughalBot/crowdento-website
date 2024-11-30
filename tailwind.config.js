/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
        'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'radial': 'radial-gradient(circle, #B3C2FF, #D0AFFF, #E8E2F1)',
      },
      fontFamily: {
        'lol' : ['Anton', 'sans-serif'],
        'rs' : ['Rubik Iso', 'cursive'],
        'bo' : ['Bungee Outline', 'cursive'],
        'jb' : ['JetBrains Mono', 'monospace'],
        'bs' : ['Big Shoulders Display', 'cursive'],
        'pp' : ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [
    require('tailwindcss-gradients'),
  ],
}
