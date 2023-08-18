import logoReact from "./assets/logos/react.png";
import logoHTML from "./assets/logos/html.png";
import logoCSS from "./assets/logos/css.png";
import logoBootstrap from "./assets/logos/bootstrap.png";
import logoJS from "./assets/logos/js.png";
import logoSass from "./assets/logos/sass.png";
import logoTailwind from "./assets/logos/tailwindCSS.png";
import logoNodeJS from "./assets/logos/nodejs.png";
import logoMongo from "./assets/logos/mongoDB.png";
import logoPostman from "./assets/logos/postman.png";
import logoExpress from "./assets/logos/expressJS.png";
import logoMySQL from "./assets/logos/mySQL.png";
import imageKanap from "./assets/img/kanap.png";
import imageOMF from "./assets/img/omf.png";
import imagePiiquante from "./assets/img/piiquante.png";
import imageKasa from "./assets/img/kasa.png";
import imagePanthere from "./assets/img/panthere.png";
import imageMyWebsite from "./assets/img/my-website.png";
import imageAuth from "./assets/img/auth.png";
import imageBooki from "./assets/img/booki.png";
import { LanguageContext } from "./contexts/LanguageContext";
import { useContext } from "react";
import translate from "./translate";

export function useTranslateForData() {
  const { language } = useContext(LanguageContext);

  const projects = [
    {
      id: 1,
      categories: ["intégration web", "front-end"],
      img: imageOMF,
      titre: "OhMyFood!",
      description: translate[language].proj1,
      technos: [
        { logo: logoHTML, alt: "HTML" },
        { logo: logoCSS, alt: "CSS" },
        { logo: logoSass, alt: "Sass" },
      ],
      buttons: [
        {
          text: translate[language].seeCodeButton,
          link: "https://github.com/CharonTom/OhMyFood",
        },
        {
          text: translate[language].presentationButton,
          link: "https://github.com/CharonTom/OhMyFood/blob/main/README.md",
        },
        {
          text: translate[language].visitWebsiteButton,
          link: "https://charontom.github.io/OhMyFood/",
        },
      ],
    },
    {
      id: 2,
      categories: ["front-end"],
      img: imageKanap,
      titre: "Kanap",
      description: translate[language].proj2,
      technos: [
        { logo: logoHTML, alt: "HTML" },
        { logo: logoCSS, alt: "CSS" },
        { logo: logoJS, alt: "JavaScript" },
      ],
      buttons: [
        {
          text: translate[language].seeCodeButton,
          link: "https://github.com/CharonTom/Kanap_P5",
        },
        {
          text: translate[language].presentationButton,
          link: "https://github.com/CharonTom/Kanap_P5/blob/main/README.md",
        },
      ],
    },
    {
      id: 3,
      categories: ["front-end", "intégration web"],
      img: imageKasa,
      titre: "Kasa",
      description: translate[language].proj3,
      technos: [
        { logo: logoHTML, alt: "HTML" },
        { logo: logoCSS, alt: "CSS" },
        { logo: logoJS, alt: "JavaScript" },
        { logo: logoReact, alt: "React" },
        { logo: logoSass, alt: "Sass" },
      ],
      buttons: [
        {
          text: translate[language].seeCodeButton,
          link: "https://github.com/CharonTom/Kasa",
        },
        {
          text: translate[language].presentationButton,
          link: "https://github.com/CharonTom/Kasa/blob/main/README.md",
        },
        {
          text: translate[language].visitWebsiteButton,
          link: "https://charontom.github.io/Kasa/",
        },
      ],
    },
    {
      id: 4,
      categories: ["back-end"],
      img: imagePiiquante,
      titre: "Hot Takes",
      description: translate[language].proj4,
      technos: [
        { logo: logoNodeJS, alt: "NodeJS" },
        { logo: logoExpress, alt: "Express" },
        { logo: logoMongo, alt: "MongoDB" },
        { logo: logoPostman, alt: "Postman" },
      ],
      buttons: [
        {
          text: translate[language].seeCodeButton,
          link: "https://github.com/CharonTom/Piiquante",
        },
        {
          text: translate[language].presentationButton,
          link: "https://github.com/CharonTom/Piiquante/blob/main/README.md",
        },
      ],
    },
    {
      id: 5,
      categories: ["SEO", "front-end"],
      img: imagePanthere,
      titre: "La Panthere",
      description: translate[language].proj5,
      technos: [
        { logo: logoHTML, alt: "HTML" },
        { logo: logoBootstrap, alt: "Bootstrap" },
      ],
      buttons: [
        {
          text: translate[language].seeCodeButton,
          link: "https://github.com/CharonTom/ProjetSEO",
        },
        {
          text: translate[language].presentationButton,
          link: "https://github.com/CharonTom/ProjetSEO/blob/main/README.md",
        },
        {
          text: translate[language].visitWebsiteButton,
          link: "https://charontom.github.io/ProjetSEO/",
        },
      ],
    },
    {
      id: 6,
      categories: ["front-end"],
      img: imageMyWebsite,
      titre: "My Website",
      description: translate[language].proj6,
      technos: [
        { logo: logoHTML, alt: "HTML" },
        { logo: logoCSS, alt: "CSS" },
        { logo: logoJS, alt: "JavaScript" },
        { logo: logoTailwind, alt: "Tailwind CSS" },
        { logo: logoReact, alt: "React" },
      ],
      buttons: [
        {
          text: translate[language].seeCodeButton,
          link: "https://github.com/CharonTom/my-website",
        },
      ],
    },
    {
      id: 7,
      categories: ["front-end", "intégration web"],
      img: imageBooki,
      titre: "Booki",
      description: translate[language].proj7,
      technos: [
        { logo: logoHTML, alt: "HTML" },
        { logo: logoCSS, alt: "CSS" },
      ],
      buttons: [
        {
          text: translate[language].seeCodeButton,
          link: "https://github.com/CharonTom/Booki",
        },
        {
          text: translate[language].visitWebsiteButton,
          link: "https://charontom.github.io/Booki/",
        },
      ],
    },
    {
      id: 8,
      categories: ["front-end", "full-stack", "back-end"],
      img: imageAuth,
      titre: "Login Portal (MongoDB)",
      description: translate[language].proj8,
      technos: [
        { logo: logoReact, alt: "React" },
        { logo: logoSass, alt: "Sass" },
        { logo: logoNodeJS, alt: "Node" },
        { logo: logoExpress, alt: "Express" },
        { logo: logoMongo, alt: "MongoDB" },
      ],
      buttons: [
        {
          text: translate[language].seeCodeButton,
          link: "https://github.com/CharonTom/Login-System-React-Node-Express-MongoDB",
        },
      ],
    },
    {
      id: 9,
      categories: ["front-end", "full-stack", "back-end"],
      img: imageAuth,
      titre: "Login Portal (MySQL)",
      description: translate[language].proj9,
      technos: [
        { logo: logoReact, alt: "React" },
        { logo: logoSass, alt: "Sass" },
        { logo: logoNodeJS, alt: "Node" },
        { logo: logoExpress, alt: "Express" },
        { logo: logoMySQL, alt: "MySQL" },
      ],
      buttons: [
        {
          text: translate[language].seeCodeButton,
          link: "https://github.com/CharonTom/Login-System-React-Node-Express-MySQL",
        },
      ],
    },
  ];

  return projects;
}
