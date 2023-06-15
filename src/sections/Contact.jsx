import { useRef, useState } from "react";
import emailjs from "emailjs-com";

function Contact() {
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
    <section className="container mx-auto" id="contact">
      <div className="mx-auto">
        <h2>Contactez-moi</h2>
        <div className="grid md:grid-cols-2 grid-cols-1 gap-[12%]">
          <div className="w-fit flex flex-col gap-5 md:mx-auto">
            <a href="mailto:charon.s.tom@gmail.com">
              <article className="bg-secondaryVariant p-5 rounded-lg text-center border border-transparent transition-all duration-300 hover:bg-transparent hover:border-primaryVariant">
                <h4>
                  Email <i className="fa-solid fa-envelope"></i>
                </h4>
                <h5>charon.s.tom@gmail.com</h5>
              </article>
            </a>
            <a href="tel:+33621042123">
              <article className="bg-secondaryVariant p-5 rounded-lg text-center border border-transparent transition-all duration-300 hover:bg-transparent hover:border-primaryVariant">
                <h4>
                  Téléphone <i className="fa-solid fa-phone"></i>
                </h4>
                <h5> +33 6 21 04 21 23</h5>
              </article>
            </a>
            <a
              href="https://goo.gl/maps/XjHhxR6dQaAVUMWu9"
              target="_blank"
              rel="noopener noreferrer"
            >
              <article className="bg-secondaryVariant p-5 rounded-lg text-center border border-transparent transition-all duration-300 hover:bg-transparent hover:border-primaryVariant">
                <h4>
                  Location <i className="fa-solid fa-location-dot"></i>
                </h4>
                <h5> 69000 Lyon, France</h5>
              </article>
            </a>
          </div>
          <form
            className="flex flex-col gap-5 mb-20"
            ref={form}
            onSubmit={sendEmail}
          >
            <input
              className="p-4 rounded-lg resize-none bg-transparent border border-2 border-primaryVariant"
              type="text"
              name="name"
              placeholder="Nom"
              required
            />
            <input
              className="p-4 rounded-lg resize-none bg-transparent border border-2 border-primaryVariant"
              type="email"
              name="email"
              placeholder="Email"
              required
            />
            <textarea
              className="p-4 rounded-lg resize-none bg-transparent border border-2 border-primaryVariant"
              name="message"
              rows="10"
              placeholder="Message"
              required
            ></textarea>
            <button type="submit" className="second-btn">
              Envoyer
            </button>
            <div className={!isActive ? `confirmation` : `confirmation show`}>
              Message envoyé !
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
export default Contact;
