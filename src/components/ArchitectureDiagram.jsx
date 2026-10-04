import Reveal from './Reveal.jsx';

// Original InsightDesk architecture diagram, built from HTML so it reflows:
// two lanes of numbered cards (horizontal on desktop, vertical on mobile)
// plus the platform layer everything runs on.
export default function ArchitectureDiagram({ architecture }) {
  let counter = 0;
  return (
    <figure className="arch" aria-labelledby="arch-caption">
      <figcaption id="arch-caption" className="arch__caption">
        <span className="mono">fig. A</span> How a piece of feedback travels through InsightDesk
      </figcaption>

      {architecture.lanes.map((lane, laneIndex) => (
        <div className={`arch__lane arch__lane--${lane.id}`} key={lane.id}>
          <p className="arch__lane-label mono">
            <span className="arch__lane-name">{lane.label}</span>
            <span className="arch__lane-note">{lane.note}</span>
          </p>
          <ol className="arch__steps" start={counter + 1}>
            {lane.steps.map((step, i) => {
              counter += 1;
              return (
                <Reveal as="li" className={`arch__step arch__step--${step.tag}`} key={step.title + i} delay={i * 90}>
                  <span className="arch__num mono" aria-hidden="true">
                    {String(counter).padStart(2, '0')}
                  </span>
                  <span className="arch__tag mono">{step.tag}</span>
                  <strong className="arch__title">{step.title}</strong>
                  <span className="arch__note">{step.note}</span>
                </Reveal>
              );
            })}
          </ol>
          {laneIndex < architecture.lanes.length - 1 && (
            <p className="arch__handoff hand" aria-hidden="true">
              ↳ the worker picks it up from the queue
            </p>
          )}
        </div>
      ))}

      <div className="arch__platform">
        <p className="arch__platform-label mono">runs on</p>
        <ul>
          {architecture.platform.map((p) => (
            <li key={p.label}>
              <strong>{p.label}</strong>
              <span>{p.note}</span>
            </li>
          ))}
        </ul>
      </div>
    </figure>
  );
}
