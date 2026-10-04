import { useEffect, useState } from 'react';
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion.js';
import { PixelHeart } from './Decor.jsx';

const PROMPT = 'aylin@ozu:~$';

// A tiny terminal that "types" its script once. Screen readers get the plain text instead.
export default function Terminal({ script }) {
  const reduced = usePrefersReducedMotion();
  const [step, setStep] = useState(0);
  const [chars, setChars] = useState(0);
  const done = reduced || step >= script.length;

  useEffect(() => {
    if (done) return;
    const line = script[step];
    let timer;
    if (line.type === 'cmd' && chars < line.text.length) {
      timer = setTimeout(() => setChars((c) => c + 1), 45 + Math.random() * 45);
    } else {
      timer = setTimeout(
        () => {
          setStep((s) => s + 1);
          setChars(0);
        },
        line.type === 'cmd' ? 380 : 200,
      );
    }
    return () => clearTimeout(timer);
  }, [step, chars, done, script]);

  const visible = done ? script : script.slice(0, step + 1);

  return (
    <div className="terminal">
      <div className="terminal__bar" aria-hidden="true">
        <span className="terminal__dot" />
        <span className="terminal__dot" />
        <span className="terminal__dot" />
        <span className="terminal__title">~/aylin — zsh</span>
      </div>

      <p className="sr-only">
        {script.map((l) => (l.type === 'cmd' ? `$ ${l.text}. ` : `${l.text}${l.status ? ` ${l.status}` : ''}. `))}
      </p>

      <div className="terminal__body" aria-hidden="true">
        {visible.map((line, i) => {
          const isCurrent = !done && i === step;
          if (line.type === 'cmd') {
            const text = isCurrent ? line.text.slice(0, chars) : line.text;
            return (
              <div className="terminal__line" key={i}>
                <span className="terminal__prompt">{PROMPT}</span> {text}
                {isCurrent && <span className="terminal__cursor" />}
              </div>
            );
          }
          if (line.type === 'pod') {
            return (
              <div className="terminal__line terminal__line--out" key={i}>
                <span className="terminal__pod">{line.text}</span>
                <span className="terminal__status">
                  <span className="status-dot" /> {line.status}
                </span>
              </div>
            );
          }
          return (
            <div className="terminal__line terminal__line--out" key={i}>
              <span className="terminal__arrow">→</span> {line.text}
            </div>
          );
        })}
        {done && (
          <div className="terminal__line">
            <span className="terminal__prompt">{PROMPT}</span> <span className="terminal__cursor" />
            <PixelHeart size={13} className="terminal__heart" />
          </div>
        )}
      </div>
    </div>
  );
}
