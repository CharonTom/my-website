import React, { useContext } from "react";
import { LanguageContext } from "../contexts/LanguageContext";

export default function SwitchLanguage() {
  const { language, setLanguage } = useContext(LanguageContext);

  return (
    <select
      value={language}
      onChange={(e) => setLanguage(e.target.value)}
      className="bg-dark-switch dark:bg-bgLightMode text-sm dark:text-secondary rounded-2xl h-[26px] w-[50px] "
    >
      <option className="text-sm">FR</option>
      <option className="text-sm">EN</option>
    </select>
  );
}
