// This is a new component to ensure consistent icon alignment
export function IconWrapper({ children, className }) {
  return <span className={`inline-flex shrink-0 items-center justify-center ${className || ""}`}>{children}</span>
}
