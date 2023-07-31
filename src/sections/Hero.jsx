import React from "react";
import { TypeAnimation } from "react-type-animation";
import CV from "../assets/CV2023.pdf";
import Me from "../assets/img/photo-de-profil.png";
import { useState, useRef, useContext, useEffect } from "react";
import translate from "../translate";
import { LanguageContext } from "../contexts/LanguageContext";

function Hero() {
  const [isOpen, setIsOpen] = useState(false);
  const refContent = useRef();
  const { language } = useContext(LanguageContext);
  const [animationKey, setAnimationKey] = useState(0);

  useEffect(() => {
    // Changer la clé animationKey pour forcer le composant de la librairie à se mettre à jour
    setAnimationKey((prevKey) => prevKey + 1);
  }, [language]);

  return (
    <section className="section dark:text-secondary" id="hero">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-center gap-x-20 gap-y-5">
          <div data-aos="fade-right">
            {/* text hi */}
            <div className="text-center lg:text-left mb-5">
              <p className="font-semibold"> {translate[language].Hi}</p>
              <h1>
                {translate[language].MyName}
                <span className="text-primary">Tom</span>
              </h1>

              <div className="font-semibold">
                <span className="mr-2"> {translate[language].Iam}</span>
                <TypeAnimation
                  key={animationKey}
                  sequence={[
                    translate[language].dev1,
                    2000,
                    translate[language].dev2,
                    2000,
                    translate[language].dev3,
                    2000,
                  ]}
                  speed={20}
                  className="text-primary"
                  wrapper="span"
                  repeat={Infinity}
                />
              </div>
            </div>
            {/* buttons part */}
            <div className="flex mx-auto lg:mx-0 max-w-max ">
              <button
                onClick={() => {
                  setIsOpen(!isOpen);
                }}
                className="btn"
              >
                {translate[language].aboutButton}
              </button>
              <a
                className="second-btn"
                href={CV}
                target="_blank"
                rel="noopener noreferrer"
              >
                {translate[language].cvButton}
              </a>
            </div>
            {/* speech */}
            <div
              ref={refContent}
              style={
                isOpen
                  ? {
                      height: refContent.current.scrollHeight + "px",
                    }
                  : {
                      height: "0px",
                      opacity: "0",
                    }
              }
              className="transition-all duration-1000 ease-in-out overflow-hidden"
            >
              <p
                className="text-[14px] text-center p-3 w-[340px] border-2
              border-primaryVariant rounded-xl mx-auto lg:mx-0 m-4"
              >
                {translate[language].speech}
              </p>
            </div>
          </div>
          <div
            className="box overflow-hidden  h-[300px] lg:h-[400px] w-[300px]  lg:w-[400px] flex justify-center items-end mx-auto lg:mx-0"
            data-aos="fade-left"
          >
            <img className="w-full" src={Me} alt="tom charon" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
