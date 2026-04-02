import { skills } from "@/content/data";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Tag } from "@/components/ui/Tag";
import styles from "./Skills.module.css";

const COLUMNS = [
  { label: "Leadership", items: skills.leadership },
  { label: "Engineering", items: skills.engineering },
  { label: "Domain", items: skills.domain },
];

export function Skills() {
  return (
    <section className="section section--subtle" id="skills">
      <div className="container">
        <SectionHeader title="Skills" />
        <div className={styles.grid}>
          {COLUMNS.map(({ label, items }) => (
            <div key={label} className={styles.column}>
              <h3 className={styles.columnTitle}>{label}</h3>
              <div className={styles.tags}>
                {items.map((skill) => (
                  <Tag key={skill}>{skill}</Tag>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
