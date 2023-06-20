module.exports = {
  darkMode: ["class", '[data-mode="light"]'],
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      primary: "Poppins",
      secondary: "Lora",
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
        limpidBlue: "rgba(77, 181, 255, 0.9)",
        bgLightMode: "rgb(241, 240, 240)",
      },
      backgroundImage: {
        texture: "url('./assets/bg-texture.png')",
        workBg: "url(./assets/img/wallpaper-dev.jpg)",
      },
    },
  },
  plugins: [],
};
