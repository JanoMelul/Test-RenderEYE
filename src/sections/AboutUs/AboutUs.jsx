import styles from "./AboutUs.module.css";

const AboutUs = () => {
  return (
    <section id="about" className={styles.aboutUsSection}>
      <h2 className={styles.aboutUsTitle}>Quiénes Somos</h2>
      <div className={styles.cardsContainer}>
        {/* Tarjeta 1 */}
        <div className={styles.card}>
          <div className={styles.cardImageWrapper}>
            <img
              src="https://randomuser.me/api/portraits/men/32.jpg"
              alt="Juan Pérez"
              className={styles.cardImage}
            />
          </div>
          <div className={styles.cardContent}>
            <h3 className={styles.cardTitle}>Juan Pérez</h3>
            <h4 className={styles.cardRole}>Arquitecto Principal</h4>
            <p className={styles.cardDescription}>
              Juan es el arquitecto principal, con más de 10 años de experiencia
              en el diseño y desarrollo de proyectos innovadores. Su visión
              lleva cada idea a la realidad.
            </p>
          </div>
        </div>

        {/* Tarjeta 2 */}
        <div className={styles.card}>
          <div className={styles.cardImageWrapper}>
            <img
              src="https://randomuser.me/api/portraits/women/44.jpg"
              alt="Ana García"
              className={styles.cardImage}
            />
          </div>
          <div className={styles.cardContent}>
            <h3 className={styles.cardTitle}>Ana García</h3>
            <h4 className={styles.cardRole}>Especialista en Renders 3D</h4>
            <p className={styles.cardDescription}>
              Ana es la especialista en renders 3D, enfocada en crear
              representaciones realistas y detalladas de cada proyecto. Su
              pasión por el detalle eleva cada creación.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
