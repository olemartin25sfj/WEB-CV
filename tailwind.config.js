/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        primary: "#2563eb", // Blå som primærfarge
        "primary-dark": "#1e40af",
      },
    },
  },
  plugins: [],
};
