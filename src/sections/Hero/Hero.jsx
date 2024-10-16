import styles from "./Hero.module.css";
import HeroImg from "../../assets/images/morsa.jpg"

const Hero = () => {
  return (
    <section id="home" className={styles.hero} aria-labelledby="hero-title">
      <div className={styles.heroContent}>
        <h1 id="hero-title" className={styles.heroTitle}>
          Modern Architecture,{" "}
          <span className={styles.highlight}>High-Quality Renders</span>
        </h1>
        <p className={styles.heroDescription}>
          We bring your ideas to life with highly precise and realistic architectural visualizations.
        </p>
        <a
          href="#contact"
          className={styles.heroButton}
          title="Go to the contact section"
        >
          Contact Us
        </a>
      </div>
      <div className={styles.heroImageWrapper}>
        <img
          src={HeroImg}
          alt="Modern architectural render"
          className={styles.heroImage}
        />
      </div>
    </section>
  );
};

export default Hero;
