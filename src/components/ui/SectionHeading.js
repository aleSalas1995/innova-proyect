export default function SectionHeading({ kicker, title, description, align = "left", inverse = false }) {
  return (
    <div className={`section-heading ${align === "center" ? "section-heading--center" : ""} ${inverse ? "section-heading--inverse" : ""}`}>
      <p className="eyebrow"><span aria-hidden="true" className="eyebrow-line" />{kicker}</p>
      <h2>{title}</h2>
      {description && <p className="section-description">{description}</p>}
    </div>
  );
}
