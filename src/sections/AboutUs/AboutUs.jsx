import styles from "./AboutUs.module.css";

const AboutUs = () => {
  return (
    <section id="about" className={styles.aboutUsSection} aria-labelledby="about-us-title">
      <h2 id="about-us-title" className="app__section_title">About Us</h2>
      <div className={styles.cardsContainer}>
        {/* Card 1 */}
        <div className={styles.card}>
          <div className={styles.cardImageWrapper}>
            <img
              src="https://randomuser.me/api/portraits/men/32.jpg"
              alt="Juan Pérez, Lead Architect"
              className={styles.cardImage}
              loading="lazy"
            />
          </div>
          <div className={styles.cardContent}>
            <h3 className={styles.cardTitle}>Juan Pérez</h3>
            <h4 className={styles.cardRole}>Lead Architect</h4>
            <p className={styles.cardDescription}>
              Juan is the lead architect with over 10 years of experience in designing and developing innovative projects. His vision brings every idea to life.
            </p>
          </div>
        </div>

        {/* Card 2 */}
        <div className={styles.card}>
          <div className={styles.cardImageWrapper}>
            <img
              src="https://randomuser.me/api/portraits/women/44.jpg"
              alt="Ana García, 3D Render Specialist"
              className={styles.cardImage}
              loading="lazy"
            />
          </div>
          <div className={styles.cardContent}>
            <h3 className={styles.cardTitle}>Ana García</h3>
            <h4 className={styles.cardRole}>3D Render Specialist</h4>
            <p className={styles.cardDescription}>
              Ana is the 3D render specialist, focused on creating realistic and detailed visualizations of every project. Her passion for detail elevates each creation.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
