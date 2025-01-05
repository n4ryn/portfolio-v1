/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        text: {
          primary: "var(--color-text-primary)",
        },
        background: {
          primary: "var(--color-background-primary)",
        },
      },
    },
  },
  plugins: [],
};
