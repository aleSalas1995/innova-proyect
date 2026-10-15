"use client";

import { DraftingCompass, Factory, HardHat, Settings, Wind } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const icons = [HardHat, Settings, Wind, Factory, DraftingCompass];

/** Franja visual de cinco especialidades que aparece justo debajo de la portada. */
export default function ServiceHighlights() {
  const { t } = useLanguage();
  return (
    <section className="service-highlights" aria-label={t("nav.services")}>
      <div className="container service-highlights-grid">
        {t("services.items").map((service, index) => {
          const Icon = icons[index];
          return (
            <a className="service-highlight" key={index} href="#services">
              <Icon size={43} strokeWidth={1.5} aria-hidden="true" />
              <h2>{service.title}</h2>
              <p>{service.description}</p>
            </a>
          );
        })}
      </div>
    </section>
  );
}
