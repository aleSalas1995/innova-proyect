"use client";

import Image from "next/image";
import { ArrowUp, Mail, MessageCircle, Phone } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { navItems, site } from "@/lib/site";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div className="footer-brand-column">
          <a href="#home" className="footer-brand" aria-label={t("a11y.home")}><Image src="/images/innova-logo.png" alt="" width={66} height={60} /><strong><small>CONSTRUCTORA</small><span>INNOVA</span></strong></a>
          <p>{t("footer.description")}</p>
        </div>
        <div className="footer-column"><h3>{t("footer.navigation")}</h3>{navItems.map((item) => <a key={item} href={`#${item}`}>{t(`nav.${item}`)}</a>)}</div>
        <div className="footer-column"><h3>{t("footer.services")}</h3>{t("services.items").map((item, index) => <a href="#services" key={index}>{item.title}</a>)}</div>
        <div className="footer-column"><h3>{t("footer.contact")}</h3><a href="tel:+50683200287"><Phone size={15} aria-hidden="true" />{site.phonePrimary}</a><a href="tel:+50688290061"><Phone size={15} aria-hidden="true" />{site.phoneSecondary}</a><a href={`mailto:${site.email}`}><Mail size={15} aria-hidden="true" />{site.email}</a><a href={site.whatsappBase} target="_blank" rel="noopener noreferrer"><MessageCircle size={15} aria-hidden="true" />WhatsApp</a></div>
      </div>
      <div className="container footer-bottom"><span>© {new Date().getFullYear()} {site.name}. {t("footer.rights")}</span><a href="#top">{t("footer.backToTop")}<ArrowUp size={16} aria-hidden="true" /></a></div>
    </footer>
  );
}
