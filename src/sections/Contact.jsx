import { useRef, useState, useContext, useEffect } from "react";
import emailjs from "emailjs-com";
import translate from "../translate";
import { LanguageContext } from "../contexts/LanguageContext";

function Contact() {
  const { language } = useContext(LanguageContext);
  const form = useRef();

  const initialValues = {
    name: "",
    email: "",
    message: "",
  };

  const [formValues, setFormvalues] = useState(initialValues);
  const [isActive, SetIsActive] = useState(false);
  const [formError, setFormError] = useState({});

  console.log(formValues);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormvalues({ ...formValues, [name]: value });
    setFormError((prevErrors) => ({
      ...prevErrors,
      [name]: "",
    }));
  };

  const verifyInput = (formValues) => {
    const errorFields = {};

    const regexName = /^[a-zA-ZÀ-ÿ\s'-]{1,20}$/;
    if (!formValues.name) errorFields.name = translate[language].errorName2;
    else if (!regexName.test(formValues.name))
      errorFields.name = translate[language].errorName1;

    const regexEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!formValues.email) errorFields.email = translate[language].errorEmail2;
    else if (!regexEmail.test(formValues.email))
      errorFields.email = translate[language].errorEmail1;

    const regexMessage = /^.{1,400}$/;
    if (!formValues.message)
      errorFields.message = translate[language].errorForm2;
    else if (!regexMessage.test(formValues.message))
      errorFields.message = translate[language].errorForm1;

    return errorFields;
  };

  useEffect(() => {
    setFormError({});
  }, [language]);

  const handleEmailSending = (e) => {
    e.preventDefault();
    const errors = verifyInput(formValues);

    if (Object.keys(errors).length === 0) {
      setFormError({});
      setFormvalues(initialValues);
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
    } else {
      setFormError(errors);
    }
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
          {/* form */}
          <form
            className="flex flex-col gap-[10px] "
            ref={form}
            onSubmit={handleEmailSending}
          >
            <input
              className="p-2 rounded-lg resize-none bg-transparent border border-2 border-primaryVariant dark:border-primary dark:text-secondary"
              type="text"
              name="name"
              placeholder={translate[language].nameInput}
              value={formValues.name}
              onChange={handleChange}
            />
            {formError.name && (
              <p className="text-red-500 text-sm">{formError.name}</p>
            )}
            <input
              className="p-2 rounded-lg resize-none bg-transparent border border-2 border-primaryVariant dark:border-primary dark:text-secondary"
              type="email"
              name="email"
              placeholder="Email"
              value={formValues.email}
              onChange={handleChange}
            />
            {formError.email && (
              <p className="text-red-500 text-sm">{formError.email}</p>
            )}
            <textarea
              className="p-2 rounded-lg resize-none bg-transparent border border-2 border-primaryVariant dark:border-primary dark:text-secondary"
              name="message"
              rows="10"
              placeholder="Message"
              value={formValues.message}
              onChange={handleChange}
            ></textarea>
            {formError.message && (
              <p className="text-red-500 text-sm">{formError.message}</p>
            )}

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
