import React from "react";
import LightMode from "./LightMode";

function Header() {
  return (
    <header className="bg-header w-full fixed z-20 shadow-lg ">
      <div className="container mx-auto flex justify-between items-center ">
        <div className="p-[8px]">
          <span className="font-semibold text-[20px]">Tom Charon</span>
          <br />
          Développeur Web
        </div>
        <div>
          <LightMode />
        </div>
      </div>
    </header>
  );
}

export default Header;
