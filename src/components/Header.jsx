import React from "react";
import SwitchLight from "./SwitchLight";
import SwitchLanguage from "./SwitchLanguage";
import translate from "../translate";
import { LanguageContext } from "../contexts/LanguageContext";
import { useContext } from "react";

function Header() {
  const { language } = useContext(LanguageContext);

  return (
    <header className="backdrop-blur-sm w-full fixed z-20 shadow-lg">
      <div className="mx-14 flex justify-between items-center py-4 lg:px-10">
        <div className="p-[8px] dark:text-secondary">
          <span className="font-semibold text-[18px]">Tom Charon</span>
          {/* <br />
          {translate[language].headerText} */}
        </div>
        <div className="flex items-center gap-x-5">
          <div>
            <SwitchLanguage />
          </div>
          <div>
            <SwitchLight />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
