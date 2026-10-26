"use client";

import Image from "next/image";
import { ArrowUpRight, MessageCircle, Play } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { site } from "@/lib/site";

export default function Hero() {
  const { t } = useLanguage();
  const message = encodeURIComponent(t("contact.successIntro"));

  return (
    <section id="home" className="hero" aria-labelledby="hero-title">
      <div className="hero-photo">
        <Image src="/images/hero4.jpeg" alt={t("hero.imageAlt")} fill sizes="(max-width: 768px) 100vw, 70vw" priority className="hero-photo-image" />
      </div>
      <div className="hero-overlay" aria-hidden="true" />
      <div className="container hero-content">
        <div className="hero-main">
          <p className="hero-eyebrow"><span aria-hidden="true" />{t("hero.eyebrow")}</p>
          <h1 id="hero-title">{t("hero.lineOne")} <em>{t("hero.lineTwo")}</em></h1>
          <p className="hero-summary">{t("hero.description")}</p>
          <div className="hero-buttons">
            <a className="button button--orange" href={`${site.whatsappBase}?text=${message}`} target="_blank" rel="noopener noreferrer">
              <MessageCircle size={20} aria-hidden="true" />{t("hero.primaryCta")}<ArrowUpRight size={18} aria-hidden="true" />
            </a>
            <a className="button button--outline-white" href="#services"><Play size={16} fill="currentColor" aria-hidden="true" />{t("hero.secondaryCta")}</a>
          </div>
        </div>
        <div className="hero-experience" aria-label={`${t("hero.experienceNumber")} ${t("hero.experienceLabel")}`}>
          <span className="experience-number">{t("hero.experienceNumber")}</span>
          <span className="experience-copy"><strong>{t("hero.experienceLabel")}</strong><small>{t("hero.experienceDetail")}</small></span>
        </div>
      </div>
      <div className="hero-bottom-accent" aria-hidden="true" />
    </section>
  );
}
