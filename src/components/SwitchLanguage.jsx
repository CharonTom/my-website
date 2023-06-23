import React, { useContext } from "react";
import { LanguageContext } from "../contexts/LanguageContext";

export default function SwitchLanguage() {
  const { language, setLanguage } = useContext(LanguageContext);

  const switchAndRefresh = (e) => {
    setLanguage(e.target.value);
    window.location.reload(false);
  };

  return (
    <select
      value={language}
      onChange={switchAndRefresh}
      className="bg-dark-switch dark:bg-bgLightMode font-primary text-sm dark:text-secondary rounded-2xl h-[26px] w-[50px] input {
        focus:outline-none pl-1
      } "
    >
      <option className="text-sm">FR</option>
      <option className="text-sm">EN</option>
    </select>
  );
}
