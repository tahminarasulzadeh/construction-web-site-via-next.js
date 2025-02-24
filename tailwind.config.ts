import type { Config } from "tailwindcss";


export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
          parallax: 'url("../public/parallax3.jpg")',
      },
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
      sans: ['Helvetica', 'Arial', 'sans-serif'], // Add Helvetica here
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
} satisfies Config;
