import React from "react";
import SkillCards from "../components/SkillCards";
import logoReact from "../assets/logos/react.png";
import logoNext from "../assets/logos/next.png";
import logoSass from "../assets/logos/sass.png";
import logoJS from "../assets/logos/js.png";
import logoTS from "../assets/logos/ts.png";
import logoTailwind from "../assets/logos/tailwindCSS.png";
import logoBootstrap from "../assets/logos/bootstrap.png";
import logoNodeJS from "../assets/logos/nodejs.png";
import logoMongo from "../assets/logos/mongoDB.png";
import logoMySQL from "../assets/logos/mySQL.png";
import logoPostman from "../assets/logos/postman.png";
import logoExpress from "../assets/logos/expressJS.png";
import logoGraphQL from "../assets/logos/graphql.png";
import translate from "../translate";
import { LanguageContext } from "../contexts/LanguageContext";
import { useContext } from "react";

const skillsData = [
  { name: "JavaScript", logo: logoJS },
  { name: "TypeScript", logo: logoTS },
  { name: "React", logo: logoReact },
  { name: "Next", logo: logoNext },
  { name: "Sass", logo: logoSass },
  { name: "Bootstrap", logo: logoBootstrap },
  { name: "TailwindCSS", logo: logoTailwind },
  { name: "Node.js", logo: logoNodeJS },
  { name: "Express.js", logo: logoExpress },
  { name: "GraphQL", logo: logoGraphQL },
  { name: "MySQL", logo: logoMySQL },
  { name: "MongoDB", logo: logoMongo },
  { name: "Postman", logo: logoPostman },
];

function Skills() {
  const { language } = useContext(LanguageContext);

  return (
    <section className="section" id="skills">
      <div className="mx-auto gradient-top w-full">
        <h2 className=""> {translate[language].skills}</h2>
        <div className="sm:bg-workBg gradient-bottom bg-cover p-6 overflow-hidden relative">
          <div className="blur-[100px] bg-tertiary rounded-full absolute top-[70%] left-[-10%] w-[20%] h-[20%]"></div>
          <div className=" grid grid-cols-1 lg:grid-cols-2 gap-4">
            <div className="flex flex-col bg-skill-stack p-4 gap-y-5 rounded-lg ">
              <h3 className="">Front-End</h3>
              <div className="flex flex-wrap justify-center items-start gap-2.5 lg:gap-5">
                {skillsData.slice(0, 7).map((skill, index) => (
                  <SkillCards
                    key={index}
                    name={skill.name}
                    logo={skill.logo}
                    index={index}
                  />
                ))}
              </div>
            </div>
            <div className="flex flex-col bg-skill-stack p-4 gap-y-5 rounded-lg ">
              <h3 className="">Back-End</h3>
              <div className="flex flex-wrap justify-center items-start gap-2.5 lg:gap-5">
                {skillsData.slice(7).map((skill, index) => (
                  <SkillCards
                    key={index}
                    name={skill.name}
                    logo={skill.logo}
                    index={index}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
