"use client";

import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import { translations } from "@/lib/translations";

const LanguageContext = createContext(null);
const STORAGE_KEY = "innova-language";

export function LanguageProvider({ children }) {
  // Español en servidor y en el primer render del navegador evita diferencias de hidratación.
  const [language, setLanguage] = useState("es");

  useEffect(() => {
    try {
      const saved = window.localStorage.getItem(STORAGE_KEY);
      if (saved === "es" || saved === "en") setLanguage(saved);
    } catch {
      // Los navegadores con almacenamiento restringido siguen funcionando.
    }
  }, []);

  useEffect(() => {
    document.documentElement.lang = language;
    try {
      window.localStorage.setItem(STORAGE_KEY, language);
    } catch {
      // La selección actual se mantiene aunque el almacenamiento esté bloqueado.
    }
  }, [language]);

  const changeLanguage = useCallback((nextLanguage) => {
    if (nextLanguage === "es" || nextLanguage === "en") setLanguage(nextLanguage);
  }, []);

  const t = useCallback((path) => {
    const value = path.split(".").reduce((acc, key) => acc?.[key], translations[language]);
    return value ?? path;
  }, [language]);

  const value = useMemo(() => ({ language, changeLanguage, t }), [language, changeLanguage, t]);
  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useLanguage debe usarse dentro de LanguageProvider");
  return context;
}
