/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: '#FFD700',
        dark: '#181818',
        offwhite: '#F5F5F5',
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(135deg, #FFD700 0%, #181818 100%)',
        'section-gradient': 'linear-gradient(135deg, #181818 0%, #333 100%)',
      },
    },
  },
  plugins: [],
};
