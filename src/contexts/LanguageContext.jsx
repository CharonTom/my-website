import { createContext, useState, useEffect } from "react";

export const LanguageContext = createContext();

let langData = localStorage.getItem("selectedLang") || "FR";

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(langData);

  useEffect(() => {
    window.localStorage.setItem("selectedLang", language);
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      <div className={language}>{children}</div>
    </LanguageContext.Provider>
  );
};
