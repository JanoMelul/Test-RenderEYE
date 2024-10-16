import { FaFacebookF, FaInstagram } from "react-icons/fa";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerTop}>
        <div className={styles.footerLogo}>
          <img
            src="https://via.placeholder.com/80x80.png?text=Logo"
            alt="Logo de RenderEYE"
            className={styles.logoImage}
            loading="lazy"
          />
          <h1 className={styles.companyName}>RenderEYE - 3D Rendering Services</h1>
        </div>

        <nav aria-label="Enlaces principales" className={styles.footerSections}>
          <div className={styles.footerSection}>
            <h2 className={styles.footerTitle}>Enlaces Rápidos</h2>
            <ul className={styles.footerLinks}>
              <li>
                <a href="#home" aria-label="Inicio">
                  Inicio
                </a>
              </li>
              <li>
                <a href="#projects" aria-label="Proyectos">
                  Proyectos
                </a>
              </li>
              <li>
                <a href="#about" aria-label="Quiénes Somos">
                  Quiénes Somos
                </a>
              </li>
              <li>
                <a href="#contact" aria-label="Contacto">
                  Contacto
                </a>
              </li>
            </ul>
          </div>

          <div className={styles.footerSection}>
            <h2 className={styles.footerTitle}>Contacto</h2>
            <address>
              <p>
                Email: <a href="mailto:info@empresa.com">info@empresa.com</a>
              </p>
              <p>
                Teléfono: <a href="tel:+1234567890">+123 456 7890</a>
              </p>
            </address>
          </div>

          <div className={styles.footerSection}>
            <h2 className={styles.footerTitle}>Síguenos</h2>
            <div className={styles.socialIcons}>
              <a
                href="https://www.instagram.com/tuempresa"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram de Nombre de la Empresa"
                className={styles.socialLink}
              >
                <FaInstagram />
              </a>
              <a
                href="https://www.facebook.com/tuempresa"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook de Nombre de la Empresa"
                className={styles.socialLink}
              >
                <FaFacebookF />
              </a>
            </div>
          </div>
        </nav>
      </div>

      <div className={styles.footerBottom}>
        <p>
          &copy; {new Date().getFullYear()} Todos los derechos reservados -
          Nombre de la Empresa.
        </p>
        <p>
          Desarrollado por{" "}
          <a
            href="https://tu-link.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Sitio del desarrollador"
            className={styles.authorLink}
          >
            Tu Nombre
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
