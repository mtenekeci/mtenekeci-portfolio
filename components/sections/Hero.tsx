import { profile } from "@/content/data";
import { Button } from "@/components/ui/Button";
import { Monogram } from "@/components/ui/Monogram";
import { Tag } from "@/components/ui/Tag";
import styles from "./Hero.module.css";

const HERO_TAGS = ["Engineering Leadership", "Machine Learning", "Cloud Architecture"];

export function Hero() {
  return (
    <section className={styles.hero} id="hero">
      <div className={`container ${styles.inner}`}>
        <div className={styles.monogramWrap}>
          <Monogram initials={profile.initials} size="lg" />
        </div>

        <h1 className={styles.name}>{profile.name}</h1>

        <p className={styles.role}>
          {profile.role} · {profile.company} · {profile.location}
        </p>

        <div className={styles.tags}>
          {HERO_TAGS.map((tag) => (
            <Tag key={tag}>{tag}</Tag>
          ))}
        </div>

        <div className={styles.ctas}>
          <Button href="#experience" variant="primary">
            View Experience
          </Button>
          <Button href="#contact" variant="ghost">
            Get in Touch
          </Button>
        </div>
      </div>
    </section>
  );
}
