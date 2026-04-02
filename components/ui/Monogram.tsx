import styles from "./Monogram.module.css";

interface MonogramProps {
  initials: string;
  size?: "sm" | "md" | "lg";
}

export function Monogram({ initials, size = "md" }: MonogramProps) {
  return (
    <div className={`${styles.monogram} ${styles[size]}`}>
      <span className={styles.initials}>{initials}</span>
    </div>
  );
}
