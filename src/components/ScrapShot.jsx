import { useLightbox } from './Lightbox.jsx';
import { Tape } from './Decor.jsx';
import Icon from './Icon.jsx';

// A taped, slightly rotated screenshot card that opens in the lightbox.
export default function ScrapShot({ image, label, className = '', tilt = 0, loading = 'lazy' }) {
  const openLightbox = useLightbox();

  return (
    <figure className={`scrap ${className}`} style={{ '--tilt': `${tilt}deg` }}>
      <Tape />
      <button
        type="button"
        className="scrap__button"
        onClick={() => openLightbox({ src: image.src, alt: image.alt, caption: image.caption, label })}
        aria-label={`Enlarge screenshot: ${image.caption}`}
      >
        <img
          src={image.src}
          alt={image.alt}
          width={image.width}
          height={image.height}
          loading={loading}
          decoding="async"
        />
        <span className="scrap__zoom" aria-hidden="true">
          <Icon name="expand" size={14} />
        </span>
      </button>
      <figcaption className="scrap__caption">
        {label && <span className="scrap__label mono">{label}</span>}
        <span className="scrap__text">{image.caption}</span>
      </figcaption>
    </figure>
  );
}
