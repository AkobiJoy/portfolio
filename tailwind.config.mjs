/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // lightBg: '#fcf4ff',
        // blackBg: '#2a004af',
        darkTheme: '#11001F',
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    
    },
  },
  plugins: [require('tailwind-scrollbar'),],
};
