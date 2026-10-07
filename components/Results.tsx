import { cases, testimonial } from "@/lib/content";

export default function Results() {
  return (
    <section id="results" className="container results">
      <h2 className="h2">Results we can show you.</h2>
      <div className="grid grid-3">
        {cases.map((c, i) => (
          <article key={i} className="card case">
            <span className="case-tag">{c.tag}</span>
            <span className="case-stat">{c.stat}</span>
            <strong>{c.metric}</strong>
            <p>{c.body}</p>
            <a href={c.href}>Read case study →</a>
          </article>
        ))}
      </div>

      <figure className="testimonial">
        <blockquote>“{testimonial.quote}”</blockquote>
        <figcaption>
          <span className="avatar" aria-hidden="true" />
          <span>
            <strong>{testimonial.name}</strong>
            <br />
            <span className="role">{testimonial.role}</span>
          </span>
        </figcaption>
      </figure>
    </section>
  );
}
