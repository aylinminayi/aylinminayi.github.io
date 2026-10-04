import { createContext, useCallback, useContext, useEffect, useRef, useState } from 'react';
import Icon from './Icon.jsx';

// A single accessible image viewer for the whole site, built on the native <dialog>
// element (focus trapping + Esc to close come for free).
const LightboxContext = createContext(() => {});

export function useLightbox() {
  return useContext(LightboxContext);
}

export function LightboxProvider({ children }) {
  const [item, setItem] = useState(null);
  const dialogRef = useRef(null);
  const returnFocusRef = useRef(null);

  const open = useCallback((next) => {
    returnFocusRef.current = document.activeElement;
    setItem(next);
  }, []);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (item && dialog && !dialog.open) {
      dialog.showModal();
      document.documentElement.classList.add('has-modal');
    }
  }, [item]);

  const close = () => dialogRef.current?.close();

  const handleClose = () => {
    document.documentElement.classList.remove('has-modal');
    setItem(null);
    returnFocusRef.current?.focus?.();
  };

  // Clicking the dimmed backdrop (the dialog element itself) closes it.
  const handleClick = (event) => {
    if (event.target === dialogRef.current) close();
  };

  return (
    <LightboxContext.Provider value={open}>
      {children}
      <dialog
        ref={dialogRef}
        className="lightbox"
        aria-label={item ? item.caption : 'Image preview'}
        onClose={handleClose}
        onClick={handleClick}
      >
        {item && (
          <figure className="lightbox__figure">
            <button type="button" className="lightbox__close" onClick={close} aria-label="Close preview">
              <Icon name="close" size={20} />
            </button>
            <img src={item.src} alt={item.alt} className="lightbox__img" />
            <figcaption className="lightbox__caption">
              {item.label && <span className="mono">{item.label}</span>}
              <span>{item.caption}</span>
            </figcaption>
          </figure>
        )}
      </dialog>
    </LightboxContext.Provider>
  );
}
