const plugin = require("tailwindcss/plugin");

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
        rotate: {
          "0%": {
            transform: "translate(-20%, -50%) rotate(0deg)",
          },
          "50%": {
            transform: "translate(-20%, -50%) scale(1, 1.2) rotate(180deg)",
          },
          "100%": {
            transform: "translate(-10%, -50%) rotate(360deg)",
          },
        },
        blob: {
          "0%": { transform: "translate(0px, 0px) scale(1)" },
          "33%": { transform: "translate(30px, -50px) scale(1.1)" },
          "66%": { transform: "translate(-9px, 20px) scale(0.9)" },
          "100%": { transform: "translate(0px, 0px) scale(1)" },
        },
        scaleInOut: {
          "0%, 100%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.5)" },
        },
      },
      // animation: {
      //   morph: "morph 5s ease-in-out infinite",
      //   rotate: "rotate 10s infinite",
      //   blob: "blob 7s infinite",
      //   scaleInOut: "scaleInOut 3s infinite",
      //   blobScaleDelay2000: "blob 5s ease-in-out infinite",
      //   blobScaleDelay4000: "blob 7s ease-in-out infinite",
      //   blobSlowDelay: "blob 7s ease-in-out infinite 5s",
      // },
      animation: {
        morph: "morph 10s ease-in-out infinite",
        rotate: "rotate 20s linear infinite",
        blob: "blob 14s ease-in-out infinite",
        scaleInOut: "scaleInOut 8s ease-in-out infinite",
        blobScale:
          "blob 14s ease-in-out infinite, scaleInOut 8s ease-in-out infinite",

        // Delayed blob scale animations for staggered movement
        blobScaleDelay2000:
          "blob 14s ease-in-out infinite, scaleInOut 8s ease-in-out infinite",
        blobScaleDelay4000:
          "blob 14s ease-in-out infinite, scaleInOut 8s ease-in-out infinite",
        blobScaleDelay6000:
          "blob 14s ease-in-out infinite, scaleInOut 8s ease-in-out infinite 4s",
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
        21: "repeat(4, minmax(300px, 1fr))",
        layout: "200px minmax(900px, 1fr) 100px",
      },
    },
  },
  plugins: [
    plugin(function ({ addUtilities, theme }) {
      addUtilities({
        ".blur-bg": {
          position: "fixed",
          top: "0",
          left: "0",
          width: "100%",
          height: "100%",
          zIndex: "1",
          backdropFilter: "blur(200px)",
        },
        ".cursor-effect": {
          position: "fixed",
          top: "50%",
          left: "50%",
          background:
            "linear-gradient(to right, rgb(24, 24, 141), rgb(174, 22, 167))",
          height: "60%",
          aspectRatio: "1 / 1",
          borderRadius: "50%",
          zIndex: "1",
          transform: "translate(-50%, -50%)",
          animation: "rotate 10s infinite",
        },
      });

      // Responsive blur effect for .cursor-effect on small screens
      addUtilities(
        {
          ".sm\\:cursor-blur": {
            filter: "blur(200px)",
          },
        },
        {
          variants: ["responsive"],
        }
      );
    }),
  ],
};
