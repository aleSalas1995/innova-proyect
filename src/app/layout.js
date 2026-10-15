import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";

export const metadata = {
  title: "Constructora Innova | Ingeniería con visión, calidad y seguridad",
  description: "Constructora Innova: más de 10 años de experiencia en proyectos de construcción, obras civiles, MEP, HVAC e industria médica.",
  icons: { icon: "/images/innova-logo.png" },
  openGraph: {
    title: "Constructora Innova",
    description: "Ingeniería con visión, calidad y seguridad.",
    type: "website",
    locale: "es_CR",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>
        <a className="skip-link" href="#main-content">Saltar al contenido / Skip to content</a>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
