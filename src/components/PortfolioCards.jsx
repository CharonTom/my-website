import translate from "../translate";
import { LanguageContext } from "../contexts/LanguageContext";
import { useContext } from "react";

function ProjetCard({ titre, img, description, technos, button }) {
  const { language } = useContext(LanguageContext);

  return (
    <div
      className="min-w-[220px] rounded-xl  relative overflow-hidden
       bg-portfolio-cards transition-all p-4
        flex flex-col gap-y-4 group "
      data-aos="fade-left"
    >
      <h3 className="">{titre}</h3>
      <div className="mx-auto transition-all duration-500 group-hover:scale-105">
        <img className="w-full h-64 object-cover" src={img} alt="projet" />
      </div>
      <div className="relative flex flex-col gap-y-4 ">
        <p className="p-2 rounded-xl text-[14px] text-center border border-primary bg-portfolio-text  ">
          {description}
        </p>
        <div className="">
          <h4 className="">{translate[language].usedTechnos}</h4>
          <div className="flex justify-around">
            {technos.map((techno, index) => (
              <img
                key={index}
                className="w-14 bg-white rounded-full border-2 border-primary"
                src={techno.logo}
                alt={techno.alt}
              />
            ))}
          </div>
        </div>
        <div className="absolute bg-limpidBlue w-full h-full left-0 border border-2 border-gray-200 rounded-lg flex flex-col justify-center items-center -bottom-[calc(100%+100px)] group-hover:bottom-0 transition-all duration-700">
          {button}
        </div>
      </div>
    </div>
  );
}

export default ProjetCard;
