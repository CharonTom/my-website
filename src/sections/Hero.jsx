import React from "react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import CV from "../assets/CV2023.pdf";
import Me from "../assets/img/photo-de-profil.png";
import { useState, useRef, useContext } from "react";
import translate from "../tradtuction";
import { LanguageContext } from "../contexts/LanguageContext";

function Hero() {
  const [isOpen, setIsOpen] = useState(false);
  const refContent = useRef();
  const { language } = useContext(LanguageContext);

  return (
    <section className="section dark:text-secondary" id="hero">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-center gap-x-20 gap-y-5">
          <div data-aos="fade-right">
            {/* text hi */}
            <div className="text-center lg:text-left mb-5">
              <p className="font-semibold">Bonjour !</p>
              <h1>
                Je m'appelle <span className="text-primary">Tom</span> <br></br>
                {translate[language].title}
              </h1>

              <div className="font-semibold">
                <span className="mr-2">Je suis</span>
                <TypeAnimation
                  sequence={[
                    "Développeur Web",
                    2000,
                    "Intégrateur Web",
                    2000,
                    "Développeur React",
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
                A Propos de moi
              </button>
              <a
                className="second-btn"
                href={CV}
                target="_blank"
                rel="noopener noreferrer"
              >
                Télécharger mon CV
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
                Passionné par le développement web et fraichement diplômé dans
                le secteur. Je mets mes compétences au service d’une entreprise
                recherchant un développeur Front-End. Grâce à un parcours de
                formation approfondi sur le Framework React, je me suis
                spécialisé dans la conception et l’adaptation de sites et
                d’applications web.
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
