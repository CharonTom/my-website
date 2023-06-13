module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      primary: "Poppins",
    },
    container: {
      padding: {
        DEFAULT: "15px",
      },
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1440px",
    },
    extend: {
      colors: {
        primary: "#4db5ff",
        primaryVariant: "rgba(77, 181, 255, 0.4)",
        secondary: "#1f1f38",
        secondaryVariant: "#2c2c6c",
        light: "rgba(255, 255, 255, 0.6)",
      },
      backgroundImage: { texture: "url('./assets/bg-texture.png')" },
    },
  },
  plugins: [],
};
