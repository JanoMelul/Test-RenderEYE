import { useState, useEffect } from 'react';
import styles from './Navbar.module.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleScroll = () => {
    const sections = document.querySelectorAll('section');
    const scrollPosition = window.scrollY;

    sections.forEach((section) => {
      const sectionId = section.getAttribute('id');
      const sectionTop = section.offsetTop - 80;
      const sectionHeight = section.offsetHeight;

      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        setActiveSection(sectionId);
      }
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={styles.navbar}>
      <div className={styles.navbarContainer}>
        <div className={styles.logo}>
          <img src="/logo.png" alt="Logo" className={styles.logoImage} />
          <a href="#home">Mi Proyecto</a>
        </div>
        <ul className={`${styles.navMenu} ${isOpen ? styles.active : ''}`}>
          <li className={styles.navItem}>
            <a
              href="#home"
              className={`${styles.navLink} ${activeSection === 'home' ? styles.active : ''}`}
            >
              Inicio
            </a>
          </li>
          <li className={styles.navItem}>
            <a
              href="#projects"
              className={`${styles.navLink} ${activeSection === 'projects' ? styles.active : ''}`}
            >
              Proyectos
            </a>
          </li>
          <li className={styles.navItem}>
            <a
              href="#about"
              className={`${styles.navLink} ${activeSection === 'about' ? styles.active : ''}`}
            >
              Quiénes Somos
            </a>
          </li>
          <li className={styles.navItem}>
            <a
              href="#contact"
              className={`${styles.navLink} ${activeSection === 'contact' ? styles.active : ''}`}
            >
              Contacto
            </a>
          </li>
        </ul>
        <div className={styles.hamburger} onClick={toggleMenu}>
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
