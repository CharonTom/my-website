import React, { useContext } from "react";
import { LanguageContext } from "../contexts/LanguageContext";

export default function SwitchLanguage() {
  const { language, setLanguage } = useContext(LanguageContext);

  const switchen = () => {
    setLanguage("en");
  };
  const switchfr = () => {
    setLanguage("fr");
  };

  return (
    <div className="flex">
      <button onClick={switchen} className="btn">
        EN
      </button>
      <button onClick={switchfr} className="btn">
        FR
      </button>
    </div>
  );
}
