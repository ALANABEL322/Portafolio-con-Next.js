import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#22d3ee",

          secondary: "#7dd3fc",

          accent: "#9ca3af",

          neutral: "#6b7280",

          "base-100": "#4b5563",

          info: "#06b6d4",

          success: "#00ff00",

          warning: "#fde047",

          error: "#ff0000",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};

export default config;
