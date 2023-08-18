import React from "react";
import { useTranslateForData } from "../project-datas";
import ProjetCard from "../components/PortfolioCards";
import PortfolioButtonsCard from "../components/PortfolioButtonsCard";
import translate from "../translate";
import { LanguageContext } from "../contexts/LanguageContext";
import { useContext, useState } from "react";

function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const { language } = useContext(LanguageContext);
  const projects = useTranslateForData();

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };

  // Filtrer les projets en fonction de la catégorie sélectionnée
  const filteredProjects =
    selectedCategory === "all"
      ? projects
      : projects.filter((project) =>
          project.categories.includes(selectedCategory)
        );

  return (
    <section
      id="portfolio"
      className="section container overflow-hidden mx-auto"
    >
      <div className="container">
        <h2 className="">{translate[language].portfolio}</h2>
        {/* Boutons de filtrage */}
        <div className="flex flex-wrap justify-center space-x-4 mb-8">
          <button
            className={`btn ${selectedCategory === "all" ? "active" : ""}`}
            onClick={() => handleCategorySelect("all")}
          >
            Tous
          </button>

          <button
            className={`btn ${
              selectedCategory === "intégration web" ? "active" : ""
            }`}
            onClick={() => handleCategorySelect("intégration web")}
          >
            Intégration Web
          </button>
          <button
            className={`btn ${
              selectedCategory === "front-end" ? "active" : ""
            }`}
            onClick={() => handleCategorySelect("front-end")}
          >
            Front-End
          </button>
          <button
            className={`btn ${selectedCategory === "SEO" ? "active" : ""}`}
            onClick={() => handleCategorySelect("SEO")}
          >
            SEO
          </button>
          <button
            className={`btn ${selectedCategory === "back-end" ? "active" : ""}`}
            onClick={() => handleCategorySelect("back-end")}
          >
            Back-End
          </button>
          <button
            className={`btn ${
              selectedCategory === "full-stack" ? "active" : ""
            }`}
            onClick={() => handleCategorySelect("full-stack")}
          >
            Full-Stack
          </button>
        </div>
        {/* Affichage des projets*/}
        <div className="grid lg:grid-cols-3 md:grid-cols-2 sm-grid-cols-1 gap-10">
          {filteredProjects.map((project) => (
            <ProjetCard
              key={project.id}
              titre={project.titre}
              img={project.img}
              description={project.description}
              technos={project.technos}
              button={project.buttons.map((btn, index) => (
                <PortfolioButtonsCard
                  key={index}
                  text={btn.text}
                  link={btn.link}
                />
              ))}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
