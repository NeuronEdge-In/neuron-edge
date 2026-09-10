import { Link } from "react-router-dom";
import NeuralCanvas from "../components/NeuralCanvas";

export default function NotFound() {
  return (
    <section className="hero" style={{ minHeight: "80vh", textAlign: "center" }}>
      <NeuralCanvas density={40} />
      <div className="container" style={{ position: "relative", zIndex: 1 }}>
        <div className="eyebrow" style={{ justifyContent: "center" }}>Error 404</div>
        <h1 className="h-xl">Signal <span className="grad-text">lost.</span></h1>
        <p className="lead" style={{ marginInline: "auto", marginTop: "1rem" }}>The page you're looking for doesn't exist or has moved.</p>
        <Link to="/" className="btn btn-primary" style={{ marginTop: "2rem" }}>Back to home</Link>
      </div>
    </section>
  );
}
