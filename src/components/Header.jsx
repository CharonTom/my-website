import React from "react";
import SwitchLight from "./SwitchLight";
import SwitchLanguage from "./SwitchLanguage";

function Header() {
  return (
    <header className="bg-header dark:bg-light-header w-full fixed z-20 shadow-lg ">
      <div className="container mx-auto flex justify-between items-center ">
        <div className="p-[8px] dark:text-secondary">
          <span className="font-semibold text-[20px]">Tom Charon</span>
          <br />
          Développeur Web
        </div>
        <div className="flex">
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
