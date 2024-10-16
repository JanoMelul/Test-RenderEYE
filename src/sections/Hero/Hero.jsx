import styles from "./Hero.module.css";
const Hero = () => {
  return (
    <section id="home" className={styles.hero} aria-labelledby="hero-title">
      <div className={styles.heroContent}>
        <h1 id="hero-title" className={styles.heroTitle}>
          Arquitectura Moderna,{" "}
          <span className={styles.highlight}>Renders de Calidad</span>
        </h1>
        <p className={styles.heroDescription}>
          Llevamos tus ideas a la realidad con representaciones arquitectónicas
          de alta precisión y realismo.
        </p>
        <a
          href="#contacto"
          className={styles.heroButton}
          title="Ir a la sección de contacto"
        >
          Contáctanos
        </a>
      </div>
      <div className={styles.heroImageWrapper}>
        <img
          src="https://via.placeholder.com/800x500"
          alt="Render arquitectónico moderno"
          className={styles.heroImage}
        />
      </div>
    </section>
  );
};

export default Hero;
