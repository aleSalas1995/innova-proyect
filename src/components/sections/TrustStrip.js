"use client";

import { Award, Factory, ShieldCheck } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const icons = [Award, Factory, ShieldCheck];

export default function TrustStrip() {
  const { t } = useLanguage();

  return (
    <section className="trust-strip" aria-label={t("trust.label")}>
      <div className="container trust-inner">
        {t("trust.items").map((item, index) => {
          const Icon = icons[index];
          return (
            <div className="trust-item" key={index}>
              <span className="trust-icon"><Icon size={26} strokeWidth={1.8} aria-hidden="true" /></span>
              <div><h3>{item.title}</h3><p>{item.description}</p></div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
