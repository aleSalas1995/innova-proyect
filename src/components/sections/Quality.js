"use client";

import { ClipboardCheck, HardHat, ShieldCheck } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { useLanguage } from "@/context/LanguageContext";

const icons = [ClipboardCheck, HardHat, ShieldCheck];
export default function Quality() {
  const { t } = useLanguage();

  return (
    <section className="section quality-section" id="quality">
      <div className="container quality-layout">
        <div className="quality-left"><SectionHeading kicker={t("quality.kicker")} title={t("quality.heading")} description={t("quality.description")} inverse /><div className="quality-quote">{t("quality.statement")}</div></div>
        <div className="quality-cards">
          {t("quality.items").map((item, index) => {
            const Icon = icons[index];
            return <div className="quality-card" key={index}><span><Icon size={27} aria-hidden="true" /></span><div><h3>{item.title}</h3><p>{item.description}</p></div></div>;
          })}
        </div>
      </div>
    </section>
  );
}
