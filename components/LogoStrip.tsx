import { clientLogos } from "@/lib/content";

export default function LogoStrip() {
  return (
    <section className="logos">
      <div className="container logos-inner">
        <span className="logos-label">Trusted by growth teams at</span>
        <div className="logos-list">
          {clientLogos.map((name, i) => (
            <span key={i}>{name}</span>
          ))}
        </div>
      </div>
    </section>
  );
}
