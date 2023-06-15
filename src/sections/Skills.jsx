import React from "react";
import SkillCards from "../components/SkillCards";
import logoReact from "../assets/logos/react.png";
import logoHTML from "../assets/logos/html.png";
import logoCSS from "../assets/logos/css.png";
import logoJS from "../assets/logos/js.png";
import logoSass from "../assets/logos/sass.png";
import logoTailwind from "../assets/logos/tailwindCSS.png";
import logoNodeJS from "../assets/logos/nodejs.png";
import logoMongo from "../assets/logos/mongoDB.png";
import logoPostman from "../assets/logos/postman.png";
import logoExpress from "../assets/logos/expressJS.png";

function Skills() {
  return (
    <section className="section" id="skills">
      <div className="mx-auto">
        <h2 className="">Mes Compétences</h2>
        <div className="sm:bg-workBg bg-cover p-6">
          <div className=" grid grid-cols-1 lg:grid-cols-2 gap-4">
            <div className="flex flex-col bg-skill-stack p-4 gap-y-5 rounded-lg ">
              <h3 className="">Front-End</h3>
              <div className="flex flex-wrap justify-center items-start gap-2.5 lg:gap-5">
                <SkillCards name={"React"} logo={logoReact} score={4} />
                <SkillCards name={"HMTL"} logo={logoHTML} score={5} />
                <SkillCards name={"CSS"} logo={logoCSS} score={5} />
                <SkillCards name={"JavaScript"} logo={logoJS} score={4} />
                <SkillCards name={"Sass"} logo={logoSass} score={5} />
                <SkillCards
                  name={"TailwindCSS"}
                  logo={logoTailwind}
                  score={4}
                />
              </div>
            </div>
            <div className="flex flex-col bg-skill-stack p-4 gap-y-5 rounded-lg ">
              <h3 className="">Back-End</h3>
              <div className="flex flex-wrap justify-center items-start gap-2.5 lg:gap-5">
                <SkillCards name={"Node.js"} logo={logoNodeJS} score={3} />
                <SkillCards name={"Express.js"} logo={logoExpress} score={3} />
                <SkillCards name={"MongoDB"} logo={logoMongo} score={3} />
                <SkillCards name={"Postman"} logo={logoPostman} score={3} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
