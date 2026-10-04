import Reveal from './Reveal.jsx';

// Editorial section heading: "02 / experience.log" label, serif title, optional handwritten note.
export default function SectionHeader({ index, file, title, accent, note, id }) {
  return (
    <Reveal as="header" className="section-header">
      <p className="section-header__label mono">
        <span className="section-header__index">{index}</span>
        <span aria-hidden="true">/</span>
        <span>{file}</span>
      </p>
      <h2 className="section-header__title" id={id}>
        {title} {accent && <em>{accent}</em>}
      </h2>
      {note && (
        <p className="section-header__note hand" aria-hidden="true">
          {note}
        </p>
      )}
    </Reveal>
  );
}
