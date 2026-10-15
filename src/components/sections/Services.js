"use client";

import { ArrowUpRight, DraftingCompass, Factory, HardHat, Settings, Wind } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { useLanguage } from "@/context/LanguageContext";
import { site } from "@/lib/site";

const icons = [HardHat, Settings, Wind, Factory, DraftingCompass];

export default function Services() {
  const { t } = useLanguage();

  return (
    <section className="section services-section" id="services">
      <div className="container">
        <SectionHeading kicker={t("services.kicker")} title={t("services.heading")} description={t("services.intro")} align="center" />
        <div className="services-grid">
          {t("services.items").map((service, index) => {
            const Icon = icons[index];
            const message = encodeURIComponent(`${t("contact.successIntro")} ${t("contact.serviceField")}: ${service.title}.`);
            return (
              <article className="service-card" key={index}>
                <span className="service-number">{String(index + 1).padStart(2, "0")}</span>
                <div className="service-icon"><Icon size={37} strokeWidth={1.65} aria-hidden="true" /></div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <a className="service-link" href={`${site.whatsappBase}?text=${message}`} target="_blank" rel="noopener noreferrer" aria-label={`${t("services.link")}: ${service.title}`}>
                  <span>{t("services.link")}</span><ArrowUpRight size={19} aria-hidden="true" />
                </a>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
