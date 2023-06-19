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

function Portfolio() {
  return (
    <section
      id="portfolio"
      className="section container overflow-hidden mx-auto"
    >
      <div className="container">
        <h2 className="">Mon Portfolio</h2>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 sm-grid-cols-1 gap-10">
          <ProjetCard
            img={imageOMF}
            titre={"OhMyFood!"}
            description={
              "Créer un prototype de site en intégrant les maquettes conçue par un designer UI. Le projet a été développé en HTML/CSS avec le préprocesseur SASS tout en gardant une approche mobile-first. Les contraintes graphiques et d'animations ont été faites sans JavaScript"
            }
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
            description={
              "Unifier le Back-End et le Front-End d'un site web e-commerce en intégrant les éléments de l'API dans les différentes pages web en JavaScript. L'utilisateur doit pouvoir visualiser l'ensemble des produits, ajouter un ou plusieurs article dans un panier, modifier ou supprimer son panier et passer commande."
            }
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
            description={
              "Kasa est une application web de location immobilière. Ce projet est entièrement développer sur React est la gestion des évenements est faite sans librairie. Les maquettes à intégrer ont été réalisées par un designer UI depuis l'outil de design Figma."
            }
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
            description={
              "Hot Takes est une application web d'avis critiques spécialisé dans les sauces. Le but était de construire une API REST sécurisée qui respecte les règles de l'OWASP. L'application permet aux utilisateurs de poster et modifier des sauces avec également une fonction like et dislike."
            }
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
            description={
              "Ce site web avait des problèmes de référencement. Le site a été analysé et amélioré pour réduire le temps de chargement et appliquer les bonnes pratiques du SEO et d'accessibilité. Un rapport d'optimisation a été réalisé pour indiquer les résultats pré et post optimisation."
            }
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
            description={
              "Il s'agit bien sûr de mon Portfolio, le site sur lequel vous vous trouvez. Il a été entièrement conçu avec React et ses librairies. J'ai également utilisé le préprocesseur SASS pour le style et EmailJS pour la redirection des messages sur ma boite mail."
            }
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
