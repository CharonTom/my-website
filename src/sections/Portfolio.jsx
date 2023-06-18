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
import imageOMF from "../assets/img/kanap.png";
import imagePiiquante from "../assets/img/kanap.png";
import imageKasa from "../assets/img/kanap.png";
import imagePanthere from "../assets/img/kanap.png";
import imageMyWebsite from "../assets/img/kanap.png";
import ButtonProject from "../assets/img/kanap.png";
import ProjetCard from "../components/PortfolioCards";

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
            img={imageKanap}
            titre={"Kanap"}
            description={
              "Unifier le Back-End et le Front-End d'un site web e-commerce en intégrant les éléments de l'API dans les différentes pages web en JavaScript. L'utilisateur doit pouvoir visualiser l'ensemble des produits, ajouter un ou plusieurs article dans un panier, modifier ou supprimer son panier et passer commande."
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
                  src={logoJS}
                  alt="logo's techno"
                />
              </div>
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
                  src={logoHTML}
                  alt="logo's techno"
                />
                <img
                  className="w-14 bg-white rounded-full border-2 border-primary"
                  src={logoHTML}
                  alt="logo's techno"
                />
              </div>
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
                  src={logoHTML}
                  alt="logo's techno"
                />
                <img
                  className="w-14 bg-white rounded-full border-2 border-primary"
                  src={logoHTML}
                  alt="logo's techno"
                />
              </div>
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
                  src={logoHTML}
                  alt="logo's techno"
                />
                <img
                  className="w-14 bg-white rounded-full border-2 border-primary"
                  src={logoHTML}
                  alt="logo's techno"
                />
              </div>
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
                  src={logoHTML}
                  alt="logo's techno"
                />
                <img
                  className="w-14 bg-white rounded-full border-2 border-primary"
                  src={logoHTML}
                  alt="logo's techno"
                />
              </div>
            }
          />
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
