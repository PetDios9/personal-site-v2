import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      keyframes: {
        typing: {
          "0%": {
            width: "0%",
            visibility: "hidden",
          },
          "100%": {
            width: "100%",
          },
        },
        blink: {
          "50%": {
            borderColor: "transparent",
          },
          "100%": {
            borderColor: "orange-500",
          },
        },
      },
      animation: {
        typing: "typing 1s steps(10) infinite alternate, blink .7s infinite",
      },
      fontFamily: {
        cedarville: ['"Cedarville Cursive"', "cursive"],
      },
    },
  },
  plugins: [],
};
export default config;
