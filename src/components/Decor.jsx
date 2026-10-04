// Decorative shapes (all aria-hidden): sparkles, pixel heart and tape.

export function Sparkle({ className = '', size = 22 }) {
  return (
    <svg className={`sparkle ${className}`} width={size} height={size} viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path
        fill="currentColor"
        d="M12 0c.7 6.3 4.4 10.4 12 12-7.6 1.6-11.3 5.7-12 12-.7-6.3-4.4-10.4-12-12C7.6 10.4 11.3 6.3 12 0Z"
      />
    </svg>
  );
}

export function PixelHeart({ className = '', size = 16 }) {
  return (
    <svg
      className={`pixel-heart ${className}`}
      width={size}
      height={size}
      viewBox="0 0 16 16"
      shapeRendering="crispEdges"
      aria-hidden="true"
      focusable="false"
    >
      <path
        fill="currentColor"
        d="M3 3h4v1H3zM9 3h4v1H9zM2 4h6v1H2zM8 4h6v1H8zM1 5h14v4H1zM2 9h12v1H2zM3 10h10v1H3zM4 11h8v1H4zM5 12h6v1H5zM6 13h4v1H6zM7 14h2v1H7z"
      />
      <path fill="#fff" opacity=".85" d="M3 5h1v1H3zM4 4h1v1H4z" />
    </svg>
  );
}

export function Tape({ className = '' }) {
  return <span className={`tape ${className}`} aria-hidden="true" />;
}
