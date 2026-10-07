import { steps } from "@/lib/content";

export default function Process() {
  return (
    <section id="process" className="process">
      <div className="container process-inner">
        <div className="process-head">
          <h2 className="h2">A testing engine, not a redesign.</h2>
          <p>Redesigns are guesses. We run a repeatable loop that ships proven changes every month.</p>
        </div>
        <div className="steps">
          {steps.map((st) => (
            <div key={st.n} className="step">
              <span className="step-n">{st.n}</span>
              <h3>{st.title}</h3>
              <p>{st.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
