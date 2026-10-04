// "Ransom-note" name: every letter is its own cut-out scrap with a different
// font, colour, tilt and torn edge. Screen readers get the plain name.

// Letter scraps — `look` maps to a style in hero.css (.ransom__l--<look>).
const LOOKS = {
  Aylin: [
    { ch: 'A', look: 'ink', tilt: -4, lift: -4 },
    { ch: 'y', look: 'paper', tilt: 3, lift: 6 },
    { ch: 'L', look: 'dirt', tilt: -2, lift: -2 },
    { ch: 'i', look: 'rose', tilt: 5, lift: 4 },
    { ch: 'n', look: 'ink', tilt: -3, lift: -6 },
  ],
  Minayi: [
    { ch: 'M', look: 'dirt', tilt: 3, lift: 2 },
    { ch: 'i', look: 'type', tilt: -5, lift: -5 },
    { ch: 'n', look: 'ink', tilt: 2, lift: 5 },
    { ch: 'A', look: 'mag', tilt: -3, lift: -3 },
    { ch: 'y', look: 'ink', tilt: 4, lift: 3 },
    { ch: 'i', look: 'blush', tilt: -2, lift: -4 },
  ],
};

// Fallback for any other word: cycle through the looks.
const CYCLE = ['ink', 'paper', 'dirt', 'rose', 'ink', 'type', 'mag', 'blush'];

function lettersFor(word) {
  if (LOOKS[word]) return LOOKS[word];
  return [...word].map((ch, i) => ({
    ch,
    look: CYCLE[i % CYCLE.length],
    tilt: i % 2 ? 3 : -3,
    lift: i % 2 ? 4 : -4,
  }));
}

export default function RansomName({ lines }) {
  let index = 0;
  return (
    <span className="ransom">
      <span className="sr-only">{lines.join(' ')}</span>
      {lines.map((word, row) => (
        <span className={`ransom__row ransom__row--${row + 1}`} aria-hidden="true" key={word}>
          {lettersFor(word).map((l, i) => {
            const n = index++;
            return (
              <span
                key={i}
                className={`ransom__l ransom__l--${l.look} ransom__l--edge${n % 3}`}
                style={{ '--tilt': `${l.tilt}deg`, '--lift': `${l.lift}px`, '--i': n }}
              >
                {l.ch}
              </span>
            );
          })}
        </span>
      ))}
    </span>
  );
}
