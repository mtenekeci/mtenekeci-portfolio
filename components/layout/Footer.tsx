import { profile } from "@/content/data";
import { ThemeToggle } from "./ThemeToggle";
import styles from "./Footer.module.css";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <p className={styles.copy}>
          © {year} {profile.name}
        </p>
        <div className={styles.links}>
          <a href={`mailto:${profile.email}`} className={styles.link}>
            Email
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
          >
            LinkedIn
          </a>
        </div>
        <ThemeToggle />
      </div>
    </footer>
  );
}
