/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      animation: {
        fade: "fade ease-out-in 1s",
        wiggle: "wiggle 1s ease-in-out infinite 5s",
      },
      keyframes: {
        fade: {
          "0%": { transform: "translateY(-25%)", opacity: "0%" },
          "100%": { transform: "translateY(0%)", opacity: "100%" },
        },
        wiggle: {
          "0%, 100%": {
            transform: "rotate(-5deg)",
            "transform-origin": "center",
          },
          "50%": { transform: "rotate(5deg)", "transform-origin": "center" },
        },
      },
      fontFamily: {
        poppins: ["Poppins"],
      },
    },
  },
  plugins: ["prettier-plugin-tailwindcss", "prettier-plugin-astro"],
};
