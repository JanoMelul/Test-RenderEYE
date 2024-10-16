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
    <nav className={styles.navbar} aria-label="Main navigation">
      <div className={styles.navbarContainer}>
        <div className={styles.logo}>
          <img src="/logo.png" alt="Project logo" className={styles.logoImage} loading="lazy" />
          <a href="#home" aria-label="Go to home section">My Project</a>
        </div>
        <ul className={`${styles.navMenu} ${isOpen ? styles.active : ''}`}>
          <li className={styles.navItem}>
            <a
              href="#home"
              className={`${styles.navLink} ${activeSection === 'home' ? styles.active : ''}`}
              aria-label="Home"
            >
              Home
            </a>
          </li>
          <li className={styles.navItem}>
            <a
              href="#projects"
              className={`${styles.navLink} ${activeSection === 'projects' ? styles.active : ''}`}
              aria-label="Projects"
            >
              Projects
            </a>
          </li>
          <li className={styles.navItem}>
            <a
              href="#about"
              className={`${styles.navLink} ${activeSection === 'about' ? styles.active : ''}`}
              aria-label="About us"
            >
              About Us
            </a>
          </li>
          <li className={styles.navItem}>
            <a
              href="#contact"
              className={`${styles.navLink} ${activeSection === 'contact' ? styles.active : ''}`}
              aria-label="Contact"
            >
              Contact
            </a>
          </li>
        </ul>
        <div className={styles.hamburger} onClick={toggleMenu} aria-label="Toggle menu">
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
