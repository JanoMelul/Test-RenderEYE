import { FaFacebookF, FaInstagram } from "react-icons/fa";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerTop}>
        <div className={styles.footerLogo}>
          <img
            src="https://via.placeholder.com/80x80.png?text=Logo"
            alt="RenderEYE Logo"
            className={styles.logoImage}
            loading="lazy"
          />
          <h1 className={styles.companyName}>RenderEYE - 3D Rendering Services</h1> 
        </div>

        <nav aria-label="Main links" className={styles.footerSections}>
          <div className={styles.footerSection}>
            <h2 className={styles.footerTitle}>Quick Links</h2>
            <ul className={styles.footerLinks}>
              <li>
                <a href="#home" aria-label="Home">
                  Home
                </a>
              </li>
              <li>
                <a href="#projects" aria-label="Projects">
                  Projects
                </a>
              </li>
              <li>
                <a href="#about" aria-label="About Us">
                  About Us
                </a>
              </li>
              <li>
                <a href="#contact" aria-label="Contact">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div className={styles.footerSection}>
            <h2 className={styles.footerTitle}>Contact</h2>
            <address>
              <p>
                Email: <a href="mailto:info@company.com">info@company.com</a>
              </p>
              <p>
                Phone: <a href="tel:+1234567890">+123 456 7890</a>
              </p>
            </address>
          </div>

          <div className={styles.footerSection}>
            <h2 className={styles.footerTitle}>Follow Us</h2>
            <div className={styles.socialIcons}>
              <a
                href="https://www.instagram.com/yourcompany"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram of Company Name"
                className={styles.socialLink}
              >
                <FaInstagram />
              </a>
              <a
                href="https://www.facebook.com/yourcompany"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook of Company Name"
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
          &copy; {new Date().getFullYear()} All rights reserved - Company Name.
        </p>
        <p>
          Developed by{" "}
          <a
            href="https://your-link.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Developer's website"
            className={styles.authorLink}
          >
            {"Totti's Corporation"}
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
