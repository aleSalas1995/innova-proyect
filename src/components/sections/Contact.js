"use client";

import { useState } from "react";
import { ArrowUpRight, Mail, MessageCircle, Phone } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { useLanguage } from "@/context/LanguageContext";
import { site } from "@/lib/site";

export default function Contact() {
  const { t } = useLanguage();
  const [form, setForm] = useState({ name: "", email: "", company: "", service: "", message: "" });

  function changeField(event) {
    const { name, value } = event.target;
    setForm((previous) => ({ ...previous, [name]: value }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    const serviceName = form.service === "other" ? t("contact.serviceOther") : (t("services.items")[Number(form.service)]?.title ?? t("contact.serviceOther"));
    const lines = [
      t("contact.successIntro"),
      `${t("contact.nameField")}: ${form.name.trim()}`,
      `${t("contact.emailField")}: ${form.email.trim()}`,
      ...(form.company.trim() ? [`${t("contact.companyField")}: ${form.company.trim()}`] : []),
      `${t("contact.serviceField")}: ${serviceName}`,
      `${t("contact.detailsField")}: ${form.message.trim()}`,
    ];
    const url = `${site.whatsappBase}?text=${encodeURIComponent(lines.join("\n"))}`;
    // Apertura iniciada directamente por el submit; no se necesita un servidor.
    window.location.assign(url);
  }

  return (
    <section className="section contact-section" id="contact">
      <div className="container contact-grid">
        <div className="contact-intro">
          <SectionHeading kicker={t("contact.kicker")} title={t("contact.heading")} description={t("contact.intro")} />
          <div className="contact-methods">
            <div className="contact-method"><span><Phone size={22} aria-hidden="true" /></span><div><p>{t("contact.phoneLabel")}</p><a href="tel:+50683200287">{site.phonePrimary}</a><span className="phone-separator"> / </span><a href="tel:+50688290061">{site.phoneSecondary}</a></div></div>
            <div className="contact-method"><span><Mail size={22} aria-hidden="true" /></span><div><p>{t("contact.emailLabel")}</p><a href={`mailto:${site.email}`}>{site.email}</a></div></div>
            <div className="contact-method"><span><MessageCircle size={22} aria-hidden="true" /></span><div><p>{t("contact.whatsappLabel")}</p><a href={site.whatsappBase} target="_blank" rel="noopener noreferrer">{t("contact.whatsappAction")} <ArrowUpRight size={14} aria-hidden="true" /></a></div></div>
          </div>
        </div>
        <form className="contact-form" onSubmit={handleSubmit}>
          <h3>{t("contact.formHeading")}</h3>
          <div className="form-row">
            <label>{t("contact.name")}<input name="name" value={form.name} onChange={changeField} placeholder={t("contact.namePlaceholder")} autoComplete="name" required maxLength={100} /></label>
            <label>{t("contact.email")}<input name="email" type="email" value={form.email} onChange={changeField} placeholder={t("contact.emailPlaceholder")} autoComplete="email" required maxLength={120} /></label>
          </div>
          <label>{t("contact.company")}<input name="company" value={form.company} onChange={changeField} placeholder={t("contact.companyPlaceholder")} autoComplete="organization" maxLength={120} /></label>
          <label>{t("contact.service")}<select name="service" value={form.service} onChange={changeField} required><option value="" disabled>{t("contact.servicePlaceholder")}</option>{t("services.items").map((service, index) => <option value={String(index)} key={index}>{service.title}</option>)}<option value="other">{t("contact.serviceOther")}</option></select></label>
          <label>{t("contact.message")}<textarea name="message" rows="5" value={form.message} onChange={changeField} placeholder={t("contact.messagePlaceholder")} required maxLength={1500} /></label>
          <button className="button button--orange form-submit" type="submit">{t("contact.submit")}<ArrowUpRight size={19} aria-hidden="true" /></button>
          <p className="contact-form-privacy">{t("contact.privacy")}</p>
        </form>
      </div>
    </section>
  );
}
