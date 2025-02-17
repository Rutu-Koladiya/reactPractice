export default function Button({ children, textOnly, className, ...props }) {
  let cssClasse = textOnly ? `text-button ${className}` : `button ${className}`;

  return (
    <button className={cssClasse} {...props}>
      {children}
    </button>
  );
}
