import React from "react";
import Stars from "./Stars";

function SkillCards({ logo, score, name }) {
  return (
    <article
      className=" h-[105px] w-[140px]   lg:h-[150px] lg:w-[200px] bg-skill-cards rounded-lg flex 
    justify-center items-center flex-col border-2 border-gray-300 hover:scale-[1.02] transition duration-300 shadow hover:shadow-primary "
    >
      <div className="bg-white rounded-full flex items-center">
        <img
          src={logo}
          alt="logo's technos"
          className="h-[50px] w-[50px]  lg:h-[80px] lg:w-[80px] rounded-full"
        />
      </div>
      <div className="text-[12px] lg:text-base">{name}</div>
      <Stars score={score} />
    </article>
  );
}

export default SkillCards;
