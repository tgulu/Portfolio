module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    fontFamily: {
      signature: ["Karla"],
      style: ["Anton"],
      jazz: ["Jost"],
      rise: ["IBM+Plex+Mono"],
      float: ["Anuphan"],
      sedgwick: ["Sedgwick Ave Display"],
      tilt: ["Tilt Prism"],
      lilita: ["Lilita One"],
      neue: ["Bebas Neue"],
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
      "portfolio": {"raw": "(max-width: 640px)"},
    },
   
  },
  plugins: [],
};
