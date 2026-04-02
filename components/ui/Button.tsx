import styles from "./Button.module.css";

interface ButtonProps {
  variant?: "primary" | "ghost";
  href?: string;
  onClick?: () => void;
  children: React.ReactNode;
  type?: "button" | "submit";
  disabled?: boolean;
}

export function Button({
  variant = "primary",
  href,
  onClick,
  children,
  type = "button",
  disabled,
}: ButtonProps) {
  const className = `${styles.button} ${styles[variant]}`;

  if (href) {
    const isExternal = !href.startsWith("#");
    return (
      <a
        href={href}
        className={className}
        {...(isExternal && { target: "_blank", rel: "noopener noreferrer" })}
      >
        {children}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} className={className} disabled={disabled}>
      {children}
    </button>
  );
}
