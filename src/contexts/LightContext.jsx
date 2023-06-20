// import { createContext, useState, useEffect } from "react";

// export const ThemeContext = createContext();

// let datas = localStorage.getItem("selectedTheme") || "dark";

// export const ThemeProvider = ({ children }) => {
//   const [theme, setTheme] = useState(datas);
//   const toggleTheme = () => {
//     setTheme(theme === "dark" ? "light" : "dark");
//   };
//   useEffect(() => {
//     window.localStorage.setItem("selectedTheme", theme);
//   }, [theme]);

//   return (
//     <ThemeContext.Provider value={{ theme, toggleTheme }}>
//       <div className={theme}>{children}</div>
//     </ThemeContext.Provider>
//   );
// };
