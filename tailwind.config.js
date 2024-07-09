/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-img': "url('./assets/image/webp/Hero-bg-img.webp')",
        'self-img': "url('./assets/image/webp/self-bg-img.webp')",
        'ring': "url('./assets/image/webp/ring-img.webp')",
        'women': "url('./assets/image/webp/women-img.webp')",
        'sec_bg': "url('./assets/image/webp/bg-img1.webp')",
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



