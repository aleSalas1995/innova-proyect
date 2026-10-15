"use client";

import Image from "next/image";
import { ArrowUpRight, ImageIcon } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { useLanguage } from "@/context/LanguageContext";

const projects = [
  { image: "/images/project-industrial.webp" },
  { image: "/images/project-systems.webp" },
  { image: "/images/project-specialized.webp" },
];

export default function Projects() {
  const { t } = useLanguage();
  return (
    <section className="section projects-section" id="projects">
      <div className="container">
        <div className="projects-heading-row">
          <SectionHeading kicker={t("projects.kicker")} title={t("projects.heading")} description={t("projects.intro")} />
          <a href="#contact" className="button button--navy projects-cta">{t("projects.cta")}<ArrowUpRight size={18} aria-hidden="true" /></a>
        </div>
        <div className="projects-grid">
          {projects.map((project, index) => {
            const copy = t("projects.items")[index];
            return (
              <article className="project-card" key={project.image}>
                <div className="project-image-wrap">
                  <Image src={project.image} alt="" fill sizes="(max-width: 700px) 100vw, (max-width: 1100px) 50vw, 33vw" className="project-image" />
                  <div className="project-image-shade" aria-hidden="true" />
                  <span className="project-image-note"><ImageIcon size={13} aria-hidden="true" />{t("projects.referenceNote")}</span>
                </div>
                <div className="project-details"><p className="project-type">{copy.type}</p><h3>{copy.title}</h3><p>{copy.description}</p></div>
              </article>
            );
          })}
        </div>
        <p className="project-disclaimer">{t("projects.footnote")}</p>
      </div>
    </section>
  );
}
