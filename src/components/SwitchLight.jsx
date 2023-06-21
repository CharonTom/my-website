import { ReactComponent as Sun } from "../assets/logos/Sun.svg";
import { ReactComponent as Moon } from "../assets/logos/Moon.svg";
import { useContext } from "react";
import { ThemeContext } from "../contexts/LightContext";

const LightMode = () => {
  const { toggleTheme, theme } = useContext(ThemeContext);

  let checked = theme === "dark" ? true : false;

  return (
    <div className="dark_mode">
      <input
        className="dark_mode_input"
        type="checkbox"
        id="darkmode-toggle"
        onChange={toggleTheme}
        checked={checked}
      />
      <label className="dark_mode_label" htmlFor="darkmode-toggle">
        <Moon />
        <Sun />
      </label>
    </div>
  );
};

export default LightMode;
