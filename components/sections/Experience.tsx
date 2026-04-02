"use client";

import { useState } from "react";
import { experience } from "@/content/data";
import { SectionHeader } from "@/components/ui/SectionHeader";
import styles from "./Experience.module.css";

export function Experience() {
  const [showAll, setShowAll] = useState(false);

  const visible = experience.filter((e) => !e.collapsed || showAll);
  const hiddenCount = experience.filter((e) => e.collapsed).length;

  return (
    <section className="section" id="experience">
      <div className="container">
        <SectionHeader title="Experience" />
        <div className={styles.timeline}>
          {visible.map((item, i) => (
            <div key={`${item.company}-${item.role}`} className={styles.item}>
              <div className={styles.line}>
                <div className={styles.dot} />
                {i < visible.length - 1 && <div className={styles.connector} />}
              </div>
              <div className={styles.content}>
                <div className={styles.meta}>
                  <span className={styles.period}>
                    {item.start} – {item.end}
                  </span>
                  <span className={styles.location}>{item.location}</span>
                </div>
                <h3 className={styles.role}>{item.role}</h3>
                <p className={styles.company}>{item.company}</p>
                <ul className={styles.bullets}>
                  {item.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {!showAll && hiddenCount > 0 && (
          <button className={styles.expander} onClick={() => setShowAll(true)}>
            Show {hiddenCount} earlier positions ↓
          </button>
        )}
      </div>
    </section>
  );
}
