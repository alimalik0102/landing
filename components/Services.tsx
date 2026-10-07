import { services } from "@/lib/content";

export default function Services() {
  return (
    <section id="services" className="container services">
      <div className="grid grid-4">
        {services.map((s) => (
          <article key={s.n} className="card">
            <span className="num">{s.n}</span>
            <h3>{s.title}</h3>
            <p>{s.body}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
