"use client";

import Image from "next/image";
import { useState } from "react";
import { Menu, MessageCircle, X } from "lucide-react";
import LanguageSwitcher from "@/components/ui/LanguageSwitcher";
import { useLanguage } from "@/context/LanguageContext";
import { navItems, site } from "@/lib/site";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { t } = useLanguage();

  return (
    <header className="site-header" id="top">
      <div className="container header-inner">
        <a className="brand" href="#home" aria-label={t("a11y.home")} onClick={() => setMobileOpen(false)}>
          <Image src="/images/innova-logo.png" alt="" width={80} height={73} className="brand-image" priority />
          <span className="brand-name"><span>CONSTRUCTORA</span><strong>INNOVA</strong></span>
        </a>

        <nav className={`site-nav ${mobileOpen ? "site-nav--open" : ""}`} aria-label={t("a11y.mainNav")} id="primary-navigation">
          {navItems.map((item) => (
            <a href={`#${item}`} key={item} onClick={() => setMobileOpen(false)}>
              {t(`nav.${item}`)}
            </a>
          ))}
          <div className="site-nav-mobile-actions"><LanguageSwitcher /></div>
        </nav>

        <div className="header-actions">
          <LanguageSwitcher />
          <a className="header-whatsapp" href={site.whatsappBase} target="_blank" rel="noopener noreferrer" aria-label={t("a11y.whatsapp")}>
            <MessageCircle size={26} strokeWidth={2.2} aria-hidden="true" />
            <span><small>{t("header.whatsapp")}</small><strong>{site.phonePrimary}</strong></span>
          </a>
          <button className="menu-toggle" type="button" aria-expanded={mobileOpen} aria-controls="primary-navigation" aria-label={mobileOpen ? t("a11y.closeMenu") : t("a11y.openMenu")} onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? <X size={25} /> : <Menu size={25} />}
          </button>
        </div>
      </div>
    </header>
  );
}
