// Small mono "sticker" tag used for tech stacks and labels.
export default function Tag({ children, tone = 'default', className = '' }) {
  return <span className={`tag tag--${tone} ${className}`}>{children}</span>;
}
