import { education } from "@/content/data";
import { SectionHeader } from "@/components/ui/SectionHeader";
import styles from "./Education.module.css";

export function Education() {
  return (
    <section className="section" id="education">
      <div className="container">
        <SectionHeader title="Education & Certifications" />
        <div className={styles.grid}>
          <div className={styles.card}>
            <h3 className={styles.cardTitle}>Education</h3>
            <div className={styles.entries}>
              {education.degrees.map((d) => (
                <div key={d.institution} className={styles.entry}>
                  <p className={styles.entryTitle}>{d.institution}</p>
                  <p className={styles.entrySubtitle}>
                    {d.degree} · {d.field}
                  </p>
                  <p className={styles.entryYears}>{d.years}</p>
                </div>
              ))}
            </div>
          </div>

          <div className={styles.card}>
            <h3 className={styles.cardTitle}>Certifications</h3>
            <div className={styles.entries}>
              {education.certifications.map((c) => (
                <div key={c.name} className={styles.entry}>
                  <p className={styles.entryTitle}>{c.name}</p>
                  <p className={styles.entrySubtitle}>{c.issuer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
