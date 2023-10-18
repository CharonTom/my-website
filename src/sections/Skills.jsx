import React from "react";
import SkillCards from "../components/SkillCards";
import logoReact from "../assets/logos/react.png";
import logoHTML from "../assets/logos/html.png";
import logoJS from "../assets/logos/js.png";
import logoSass from "../assets/logos/sass.png";
import logoTailwind from "../assets/logos/tailwindCSS.png";
import logoBootstrap from "../assets/logos/bootstrap.png";
import logoNodeJS from "../assets/logos/nodejs.png";
import logoMongo from "../assets/logos/mongoDB.png";
import logoMySQL from "../assets/logos/mySQL.png";
import logoPostman from "../assets/logos/postman.png";
import logoExpress from "../assets/logos/expressJS.png";
import translate from "../translate";
import { LanguageContext } from "../contexts/LanguageContext";
import { useContext } from "react";

function Skills() {
  const { language } = useContext(LanguageContext);

  return (
    <section className="section relative" id="skills">
      <div class="blur-[100px] bg-tertiary rounded-full absolute top-[70%] left-[-10%] w-[20%] h-[20%]"></div>
      <div className="mx-auto">
        <h2 className=""> {translate[language].skills}</h2>
        <div className="sm:bg-workBg bg-cover p-6">
          <div className=" grid grid-cols-1 lg:grid-cols-2 gap-4">
            <div className="flex flex-col bg-skill-stack p-4 gap-y-5 rounded-lg ">
              <h3 className="">Front-End</h3>
              <div
                className="flex flex-wrap justify-center items-start gap-2.5 lg:gap-5"
                data-aos="fade-up"
              >
                <SkillCards name="HMTL" logo={logoHTML} />
                <SkillCards name="JavaScript" logo={logoJS} />
                <SkillCards name="React" logo={logoReact} />
                <SkillCards name="Sass" logo={logoSass} />
                <SkillCards name="Bootstrap" logo={logoBootstrap} />
                <SkillCards name="TailwindCSS" logo={logoTailwind} />
              </div>
            </div>
            <div className="flex flex-col bg-skill-stack p-4 gap-y-5 rounded-lg ">
              <h3 className="">Back-End</h3>
              <div
                className="flex flex-wrap justify-center items-start gap-2.5 lg:gap-5"
                data-aos="fade-up"
              >
                <SkillCards name={"Node.js"} logo={logoNodeJS} />
                <SkillCards name={"Express.js"} logo={logoExpress} />
                <SkillCards name={"MySQL"} logo={logoMongo} />
                <SkillCards name={"MongoDB"} logo={logoMySQL} />
                <SkillCards name={"Postman"} logo={logoPostman} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
