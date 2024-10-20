/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontWeight: {
        'slight-bold': 300,  // Custom weight
        'custom-weight': 1000,  // Custom weight
      },
    },
  },
  plugins: [],
}

