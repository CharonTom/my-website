import React from "react";
import Stars from "./Stars";

function SkillCards({ logo, score, name }) {
  return (
    <article
      className=" h-[105px] w-[140px]   lg:h-[150px] lg:w-[200px] bg-skill-cards rounded-lg flex 
    justify-center items-center flex-col border-2 border-light hover:scale-105 transition duration-200 shadow hover:shadow-primary "
    >
      <div className="bg-white rounded-full flex items-center">
        <img
          src={logo}
          alt=""
          className="h-[50px] h-[50px]  lg:h-[80px] lg:h-[80px]"
        />
      </div>
      <div className="text-sm lg:text-base">{name}</div>
      <Stars score={score} />
    </article>
  );
}

export default SkillCards;
