import { about } from "@/content/data";
import { SectionHeader } from "@/components/ui/SectionHeader";
import styles from "./About.module.css";

export function About() {
  return (
    <section className={`section section--subtle ${styles.about}`} id="about">
      <div className="container">
        <SectionHeader title="About" />
        <div className={styles.grid}>
          <div className={styles.statement}>
            <p>{about.statement}</p>
          </div>
          <div className={styles.stats}>
            {about.stats.map(({ label, value }) => (
              <div key={label} className={styles.stat}>
                <span className={styles.statValue}>{value}</span>
                <span className={styles.statLabel}>{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
