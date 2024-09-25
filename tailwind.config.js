module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
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
      keyframes: {
        morph: {
          "0%": {
            borderRadius: "60% 40% 30% 70% / 60% 30% 70% 40%",
          },
          "50%": {
            borderRadius: "30% 60% 70% 40% / 50% 60% 40% 60%",
          },
          "100%": {
            borderRadius: "60% 40% 30% 70% / 60% 30% 70% 40%",
          },
        },
      },
      animation: {
        morph: "morph 5s ease-in-out infinite",
      },
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
        portfolio: { raw: "(max-width: 640px)" },
      },
      gridTemplateRows: {
        // Simple 16 row grid
        21: "repeat(4, minmax(300px, 1fr))",

        // Complex site-specific row configuration
        layout: "200px minmax(900px, 1fr) 100px",
      },
    },
  },
  plugins: [],
};
