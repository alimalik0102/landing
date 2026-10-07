import { faqs } from "@/lib/content";

export default function Faq() {
  return (
    <section id="faq" className="container faq">
      <h2>Questions</h2>
      <div className="faq-list">
        {faqs.map((f) => (
          <details key={f.q}>
            <summary>{f.q}</summary>
            <p>{f.a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
