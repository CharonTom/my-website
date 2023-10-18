import React from "react";
import profilLogo from "../assets/logos/profil.png";
import skillLogo from "../assets/logos/skill.png";
import portfolioLogo from "../assets/logos/portfolio.png";
import contactLogo from "../assets/logos/contact.png";
import linkedinLogo from "../assets/logos/linkedin.png";
import githubLogo from "../assets/logos/github.png";
import externeLogo from "../assets/logos/external-link.png";
import { Link } from "react-scroll";

function Nav() {
  return (
    <nav className="fixed bottom-4 lg:bottom-5 z-10 mx-auto left-1/2 transform -translate-x-1/2">
      <ul
        className="border-2 border-light dark:border-primary rounded-full bg-nav dark:bg-light-nav
        flex justify-around items-center h-[70px] w-full max-w-[430px] mx-auto"
      >
        <Link
          className="transition duration-500 ease-in-out cursor-pointer hover:scale-125 "
          to="hero"
          spy={true}
          smooth={true}
          activeClass="active"
          duration={500}
        >
          <div
            className=" w-[40px] mx-2 lg:mx-4 border-2 border-light rounded-full 
            transition duration-500 ease-in-out  "
          >
            <img
              src={profilLogo}
              alt="link's logo"
              className="h-full rounded-full"
            />
          </div>
        </Link>
        <Link
          className="transition duration-500 ease-in-out cursor-pointer hover:scale-125"
          activeClass="active"
          smooth={true}
          spy={true}
          offset={20}
          to="skills"
          duration={500}
        >
          <div
            className=" w-[40px] mx-2 lg:mx-4 border-2 border-light rounded-full 
            transition duration-500 ease-in-out "
          >
            <img
              src={skillLogo}
              alt="link's logo"
              className="h-full rounded-full"
            />
          </div>
        </Link>
        <Link
          className="transition duration-500 ease-in-out cursor-pointer hover:scale-125"
          activeClass="active"
          smooth={true}
          spy={true}
          duration={500}
          offset={10}
          to="portfolio"
        >
          <div
            className=" w-[40px] mx-2 lg:mx-4 border-2 border-light rounded-full 
            transition duration-500 ease-in-out "
          >
            <img
              src={portfolioLogo}
              alt="link's logo"
              className="h-full rounded-full"
            />
          </div>
        </Link>
        <Link
          className="transition duration-500 ease-in-out cursor-pointer hover:scale-125"
          activeClass="active"
          smooth={true}
          spy={true}
          offset={40}
          to="contact"
          duration={500}
        >
          <div
            className=" w-[40px]  mx-2 lg:mx-4 border-2 border-light rounded-full
            transition duration-500 ease-in-out "
          >
            <img
              src={contactLogo}
              alt="link's logo"
              className="h-full rounded-full"
            />
          </div>
        </Link>
        <a
          href="https://github.com/CharonTom"
          target="_blank" // test
          rel="noopener noreferrer"
          className="relative w-[40px] mx-2 lg:mx-4 border-2 border-light rounded-full hover:scale-125 transition
            duration-500 ease-in-out relative cursor-pointer"
        >
          <img
            className="h-full rounded-full"
            src={githubLogo}
            alt="external link pictogram"
          />
          <img
            className="absolute -bottom-[5px] -right-[5px] w-[18px]"
            src={externeLogo}
            alt=""
          />
        </a>
        <a
          href="https://www.linkedin.com/in/tom-charon/"
          target="_blank"
          rel="noopener noreferrer"
          className="relative w-[40px] mx-2 lg:mx-4 border-2 border-light rounded-full hover:scale-125 transition
            duration-500 ease-in-out  cursor-pointer relative"
        >
          <img
            className="h-full rounded-full"
            src={linkedinLogo}
            alt="external link pictogram"
          />
          <img
            className="absolute -bottom-[5px] -right-[5px] w-[18px]"
            src={externeLogo}
            alt=""
          />
        </a>
      </ul>
    </nav>
  );
}

export default Nav;
