import React from "react";
import SkillCards from "../components/SkillCards";
import ReactLogo from "../assets/logos/react.png";

function Skills() {
  return (
    <section className="section" id="skills">
      <div className="container mx-auto">
        <h2 className="text-xl m-6 text-center">Mes Compétences</h2>
        <div className="bg-red-200 p-6">
          <div className=" grid grid-cols-1 lg:grid-cols-2 gap-4">
            <div className="flex flex-col bg-skill-stack p-4 gap-y-5 rounded-lg ">
              <h3 className="bg-secondaryVariant text-center text-lg rounded-lg py-1">
                Front-End
              </h3>
              <div className="flex flex-wrap justify-center items-start gap-2.5 lg:gap-5">
                <SkillCards name={"React"} logo={ReactLogo} score={4} />
                <SkillCards name={"React"} logo={ReactLogo} score={4} />
                <SkillCards name={"React"} logo={ReactLogo} score={4} />
                <SkillCards name={"React"} logo={ReactLogo} score={4} />
                <SkillCards name={"React"} logo={ReactLogo} score={4} />
                <SkillCards name={"React"} logo={ReactLogo} score={4} />
              </div>
            </div>
            <div className="flex flex-col bg-skill-stack p-4 gap-y-5 rounded-lg ">
              <h3 className="bg-secondaryVariant text-center text-lg rounded-lg py-1">
                Back-End
              </h3>
              <div className="flex flex-wrap justify-center items-start gap-2.5 lg:gap-5">
                <SkillCards name={"React"} logo={ReactLogo} score={4} />
                <SkillCards name={"React"} logo={ReactLogo} score={4} />
                <SkillCards name={"React"} logo={ReactLogo} score={4} />
                <SkillCards name={"React"} logo={ReactLogo} score={4} />
                <SkillCards name={"React"} logo={ReactLogo} score={4} />
                <SkillCards name={"React"} logo={ReactLogo} score={4} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
