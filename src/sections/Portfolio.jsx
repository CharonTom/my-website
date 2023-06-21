import React from "react";
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
import imageKanap from "../assets/img/kanap.png";
import imageOMF from "../assets/img/omf.png";
import imagePiiquante from "../assets/img/piiquante.png";
import imageKasa from "../assets/img/kasa.png";
import imagePanthere from "../assets/img/panthere.png";
import imageMyWebsite from "../assets/img/my-website.png";
import ProjetCard from "../components/PortfolioCards";
import PortfolioButtonsCard from "../components/PortfolioButtonsCard";
import translate from "../translate";
import { LanguageContext } from "../contexts/LanguageContext";
import { useContext } from "react";

function Portfolio() {
  const { language } = useContext(LanguageContext);

  return (
    <section
      id="portfolio"
      className="section container overflow-hidden mx-auto"
    >
      <div className="container">
        <h2 className="">{translate[language].portfolio}</h2>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 sm-grid-cols-1 gap-10">
          <ProjetCard
            img={imageOMF}
            titre={"OhMyFood!"}
            description={translate[language].proj1}
            techno={
              <div className="flex justify-around">
                <img
                  className="w-14 bg-white rounded-full border-[3px] border-primary"
                  src={logoHTML}
                  alt="logo's techno"
                />
                <img
                  className="w-14 bg-white rounded-full border-[3px] border-primary"
                  src={logoCSS}
                  alt="logo's techno"
                />
                <img
                  className="w-14 bg-white rounded-full border-[3px] border-primary"
                  src={logoSass}
                  alt="logo's techno"
                />
              </div>
            }
            button={
              <>
                <PortfolioButtonsCard
                  text={"Voir le code sur Github"}
                  link={"https://github.com/CharonTom/OhMyFood"}
                />
                <PortfolioButtonsCard
                  text={"Présentation du projet"}
                  link={
                    "https://github.com/CharonTom/OhMyFood/blob/main/README.md"
                  }
                />
                <PortfolioButtonsCard
                  text={"Visiter le site web !"}
                  link={"https://charontom.github.io/OhMyFood/"}
                />
              </>
            }
          />
          <ProjetCard
            img={imageKanap}
            titre={"Kanap"}
            description={translate[language].proj2}
            techno={
              <div className="flex justify-around">
                <img
                  className="w-14 bg-white rounded-full border-2 border-primary"
                  src={logoHTML}
                  alt="logo's techno"
                />
                <img
                  className="w-14 bg-white rounded-full border-2 border-primary"
                  src={logoCSS}
                  alt="logo's techno"
                />
                <img
                  className="w-14 bg-white rounded-full border-2 border-primary"
                  src={logoJS}
                  alt="logo's techno"
                />
              </div>
            }
            button={
              <>
                <PortfolioButtonsCard
                  text={"Voir le code sur Github"}
                  link={"https://github.com/CharonTom/Kanap_P5"}
                />
                <PortfolioButtonsCard
                  text={"Présentation du projet"}
                  link={
                    "https://github.com/CharonTom/Kanap_P5/blob/main/README.md"
                  }
                />
              </>
            }
          />
          <ProjetCard
            img={imageKasa}
            titre={"Kasa"}
            description={translate[language].proj3}
            techno={
              <div className="flex justify-around">
                <img
                  className="w-14 bg-white rounded-full border-2 border-primary"
                  src={logoHTML}
                  alt="logo's techno"
                />
                <img
                  className="w-14 bg-white rounded-full border-2 border-primary"
                  src={logoCSS}
                  alt="logo's techno"
                />
                <img
                  className="w-14 bg-white rounded-full border-2 border-primary"
                  src={logoJS}
                  alt="logo's techno"
                />
                <img
                  className="w-14 bg-white rounded-full border-2 border-primary"
                  src={logoReact}
                  alt="logo's techno"
                />
                <img
                  className="w-14 bg-white rounded-full border-2 border-primary"
                  src={logoSass}
                  alt="logo's techno"
                />
              </div>
            }
            button={
              <>
                <PortfolioButtonsCard
                  text={"Voir le code sur Github"}
                  link={"https://github.com/CharonTom/Kasa"}
                />
                <PortfolioButtonsCard
                  text={"Présentation du projet"}
                  link={"https://github.com/CharonTom/Kasa/blob/main/README.md"}
                />
                <PortfolioButtonsCard
                  text={"Visiter le site web !"}
                  link={"https://charontom.github.io/Kasa/"}
                />
              </>
            }
          />
          <ProjetCard
            img={imagePiiquante}
            titre={"Hot Takes"}
            description={translate[language].proj4}
            techno={
              <div className="flex justify-around">
                <img
                  className="w-14 bg-white rounded-full border-2 border-primary"
                  src={logoNodeJS}
                  alt="logo's techno"
                />
                <img
                  className="w-14 bg-white rounded-full border-2 border-primary"
                  src={logoExpress}
                  alt="logo's techno"
                />
                <img
                  className="w-14 bg-white rounded-full border-2 border-primary"
                  src={logoMongo}
                  alt="logo's techno"
                />
                <img
                  className="w-14 bg-white rounded-full border-2 border-primary"
                  src={logoPostman}
                  alt="logo's techno"
                />
              </div>
            }
            button={
              <>
                <PortfolioButtonsCard
                  text={"Voir le code sur Github"}
                  link={"https://github.com/CharonTom/Piiquante"}
                />
                <PortfolioButtonsCard
                  text={"Présentation du projet"}
                  link={
                    "https://github.com/CharonTom/Piiquante/blob/main/README.md"
                  }
                />
              </>
            }
          />
          <ProjetCard
            img={imagePanthere}
            titre={"La Panthere"}
            description={translate[language].proj5}
            techno={
              <div className="flex justify-around">
                <img
                  className="w-14 bg-white rounded-full border-2 border-primary"
                  src={logoHTML}
                  alt="logo's techno"
                />
                <img
                  className="w-14 bg-white rounded-full border-2 border-primary"
                  src={logoCSS}
                  alt="logo's techno"
                />
              </div>
            }
            button={
              <>
                <PortfolioButtonsCard
                  text={"Voir le code sur Github"}
                  link={"https://github.com/CharonTom/ProjetSEO"}
                />
                <PortfolioButtonsCard
                  text={"Présentation du projet"}
                  link={
                    "https://github.com/CharonTom/ProjetSEO/blob/main/README.md"
                  }
                />
                <PortfolioButtonsCard
                  text={"Visiter le site web !"}
                  link={"https://charontom.github.io/ProjetSEO/"}
                />
              </>
            }
          />
          <ProjetCard
            img={imageMyWebsite}
            titre={"My Website"}
            description={translate[language].proj6}
            techno={
              <div className="flex justify-around">
                <img
                  className="w-14 bg-white rounded-full border-2 border-primary"
                  src={logoHTML}
                  alt="logo's techno"
                />
                <img
                  className="w-14 bg-white rounded-full border-2 border-primary"
                  src={logoCSS}
                  alt="logo's techno"
                />
                <img
                  className="w-14 bg-white rounded-full border-2 border-primary"
                  src={logoJS}
                  alt="logo's techno"
                />
                <img
                  className="w-14 bg-white rounded-full border-2 border-primary"
                  src={logoTailwind}
                  alt="logo's techno"
                />
                <img
                  className="w-14 bg-white rounded-full border-2 border-primary"
                  src={logoReact}
                  alt="logo's techno"
                />
              </div>
            }
            button={
              <>
                <PortfolioButtonsCard
                  text={"Voir le code sur Github"}
                  link={"https://github.com/CharonTom/my-website"}
                />
              </>
            }
          />
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
