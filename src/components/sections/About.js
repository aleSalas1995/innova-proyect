"use client";

import Image from "next/image";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { useLanguage } from "@/context/LanguageContext";

export default function About() {
  const { t } = useLanguage();

  return (
    <section id="about" className="section about-section">
      <div className="container about-grid">
        <div className="about-media">
          <Image src="/images/project-specialized.webp" alt="" fill sizes="(max-width: 850px) 100vw, 45vw" className="about-image" />
          <div className="about-media-chip"><span>{t("hero.experienceNumber")}</span><strong>{t("hero.experienceLabel")}</strong></div>
        </div>
        <div className="about-body">
          <SectionHeading kicker={t("about.kicker")} title={t("about.heading")} />
          <p>{t("about.paragraphOne")}</p>
          <p>{t("about.paragraphTwo")}</p>
          <div className="about-callout"><CheckCircle2 size={23} aria-hidden="true" /><strong>{t("about.highlight")}</strong></div>
          <a className="text-link" href="#contact">{t("about.cta")}<ArrowUpRight size={18} aria-hidden="true" /></a>
        </div>
      </div>
    </section>
  );
}
