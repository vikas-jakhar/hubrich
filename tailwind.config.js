/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-img': "url('./Assets/image/webp/Hero-bg-img.png')",
        'self-img': "url('./Assets/image/webp/self-bg-img.png')",
        'ring': "url('./Assets/image/webp/ring-img.png')",
      },
      fontFamily: {
        'inter': "Inter, sans-serif",
        'neue': "Helvetica Neue, sans-serif",
        'poppins': "Poppins, sans-serif",
      }
    },
    container: {
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1140px',
        '2xl': '1140px'
      },
      center: true,
    }
  },
  plugins: [],
}



