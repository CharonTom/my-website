import { useRef, useState } from "react";
import emailjs from "emailjs-com";
import translate from "../translate";
import { LanguageContext } from "../contexts/LanguageContext";
import { useContext } from "react";

function Contact() {
  const { language } = useContext(LanguageContext);

  const [isActive, SetIsActive] = useState(false);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    SetIsActive(!isActive);
    emailjs.sendForm(
      "service_zz9atbd",
      "template_1em0drt",
      form.current,
      "Btv5aHQm0kJBcOmXo"
    );
    e.target.reset();

    setTimeout(() => {
      SetIsActive(isActive);
    }, 1500);
  };
  return (
    <section className="section container mx-auto" id="contact">
      <div className="container">
        <h2 className="mb-12">{translate[language].contact}</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="w-[80%] lg:w-fit mx-auto flex flex-col gap-5 ">
            <a href="mailto:charon.s.tom@gmail.com">
              <article className="contact-btn">
                <h5>
                  Email <i className="fa-solid fa-envelope"></i>
                </h5>
                <h5>charon.s.tom@gmail.com</h5>
              </article>
            </a>
            <a href="tel:+33621042123">
              <article className="contact-btn">
                <h5>
                  {translate[language].phone}{" "}
                  <i className="fa-solid fa-phone"></i>
                </h5>
                <h5> +33 6 21 04 21 23</h5>
              </article>
            </a>
            <a
              href="https://goo.gl/maps/XjHhxR6dQaAVUMWu9"
              target="_blank"
              rel="noopener noreferrer"
            >
              <article className="contact-btn">
                <h5>
                  Location <i className="fa-solid fa-location-dot"></i>
                </h5>
                <h5> 69000 Lyon, France</h5>
              </article>
            </a>
          </div>
          <form
            className="flex flex-col gap-[10px] "
            ref={form}
            onSubmit={sendEmail}
          >
            <input
              className="p-2 rounded-lg resize-none bg-transparent border border-2 border-primaryVariant dark:border-primary dark:text-secondary"
              type="text"
              name="name"
              placeholder={translate[language].nameInput}
              required
            />
            <input
              className="p-2 rounded-lg resize-none bg-transparent border border-2 border-primaryVariant dark:border-primary dark:text-secondary"
              type="email"
              name="email"
              placeholder="Email"
              required
            />
            <textarea
              className="p-2 rounded-lg resize-none bg-transparent border border-2 border-primaryVariant dark:border-primary dark:text-secondary"
              name="message"
              rows="10"
              placeholder="Message"
              required
            ></textarea>
            <button type="submit" className="second-btn">
              {translate[language].sendButton}
            </button>
            <div
              className={` fixed  p-2 rounded-md border-2 border-light bg-primary text-secondary ${
                !isActive ? `-bottom-20` : `bottom-[20%]`
              } border w-fit left-[50%] z-20 transition-all duration-400 -ml-[81px]`}
            >
              {translate[language].messageSend}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
export default Contact;
