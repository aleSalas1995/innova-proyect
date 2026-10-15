"use client";

import { Globe2 } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function LanguageSwitcher() {
  const { language, changeLanguage, t } = useLanguage();

  return (
    <div className="language-switcher" role="group" aria-label={t("a11y.changeLanguage")}>
      <Globe2 aria-hidden="true" size={17} />
      <button type="button" lang="es" aria-pressed={language === "es"} className={language === "es" ? "is-active" : ""} onClick={() => changeLanguage("es")}>ES</button>
      <span className="language-divider" aria-hidden="true">/</span>
      <button type="button" lang="en" aria-pressed={language === "en"} className={language === "en" ? "is-active" : ""} onClick={() => changeLanguage("en")}>EN</button>
    </div>
  );
}
