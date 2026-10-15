import Link from "next/link";

export default function NotFound() {
  return (
    <main style={{ minHeight: "70vh", display: "grid", placeContent: "center", textAlign: "center", padding: "2rem" }}>
      <h1>404</h1>
      <p>Página no encontrada / Page not found</p>
      <Link href="/" style={{ color: "#e56815", fontWeight: 700 }}>Volver al inicio / Back home</Link>
    </main>
  );
}
