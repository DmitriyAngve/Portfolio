/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      "animation": {
        "text": "text 5s ease infinite",
      },
      "keyframes": {
        "text": {
          "0%, 100%": {
            "background-size": "200% 200%",
            "background-position": "left center",
          },
          "50%": {
            "background-size": "200% 200%",
            "background-position": "right center",
          },
        },
      },
      boxShadow: {
        "right": "10px 0 25px -10px rgba(231, 148, 14, 0.43)",
      },
    },
  },
  plugins: [],
};
