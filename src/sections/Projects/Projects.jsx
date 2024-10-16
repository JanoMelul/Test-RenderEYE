import { useState, useEffect } from 'react';
import styles from './Projects.module.css';

const projectsData = [
  {
    id: 1,
    title: "Proyecto Residencial",
    description: "Un proyecto moderno de viviendas sostenibles con vistas panorámicas.",
    imageUrl: "https://via.placeholder.com/800x500",
    altText: "Vista del proyecto residencial moderno"
  },
  {
    id: 2,
    title: "Edificio Corporativo",
    description: "Diseño minimalista y funcional para un edificio corporativo innovador.",
    imageUrl: "https://via.placeholder.com/800x500",
    altText: "Diseño del edificio corporativo minimalista"
  },
  {
    id: 3,
    title: "Centro Comercial",
    description: "Un centro comercial espacioso y moderno con énfasis en la experiencia del usuario.",
    imageUrl: "https://via.placeholder.com/800x500",
    altText: "Interior del centro comercial moderno"
  },
  {
    id: 4,
    title: "Hotel Boutique",
    description: "Elegante diseño de un hotel boutique que combina lujo y confort.",
    imageUrl: "https://via.placeholder.com/800x500",
    altText: "Vista exterior del hotel boutique"
  },
  {
    id: 5,
    title: "Centro Cultural",
    description: "Innovador centro cultural que promueve la comunidad y el arte.",
    imageUrl: "https://via.placeholder.com/800x500",
    altText: "Diseño innovador del centro cultural"
  },
  {
    id: 6,
    title: "Museo de Arte",
    description: "Un museo innovador con espacios interactivos y diseño vanguardista.",
    imageUrl: "https://via.placeholder.com/800x500",
    altText: "Museo de arte con diseño moderno"
  }
];

const Projects = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [animationClass, setAnimationClass] = useState(''); // Clase de animación activa

  const projectsPerPage = () => {
    if (window.innerWidth >= 1024) {
      return 3;
    } else if (window.innerWidth >= 768) {
      return 2;
    } else {
      return 1;
    }
  };

  const handleNext = () => {
    setAnimationClass(styles.exitToLeft); // Animación de salida hacia la izquierda
    setTimeout(() => {
      setCurrentSlide((prevSlide) => (prevSlide + projectsPerPage()) % projectsData.length);
      setAnimationClass(styles.enterFromRight); // Animación de entrada desde la derecha
    }, 700); // Tiempo de la animación antes de cambiar de slide
  };

  const handlePrev = () => {
    setAnimationClass(styles.exitToRight);
    setTimeout(() => {
      setCurrentSlide((prevSlide) => (prevSlide - projectsPerPage() + projectsData.length) % projectsData.length);
      setAnimationClass(styles.enterFromLeft); 
    }, 700); 
  };

  useEffect(() => {
    const interval = setInterval(handleNext, 5000);
    return () => clearInterval(interval);
  }, [currentSlide]);

  const visibleProjects = projectsData.slice(currentSlide, currentSlide + projectsPerPage());

  return (
    <section id="projects" className={styles.projectsSection} aria-labelledby="projects-title">
      <h2 id="projects-title" className={styles.projectsTitle}>Nuestros Proyectos</h2>

      <div className={styles.slider}>
        <button className={styles.sliderButton} onClick={handlePrev}>‹</button>

        <div className={styles.sliderContentWrapper}>
          <div className={`${styles.sliderContent} ${animationClass}`}>
            {visibleProjects.map((project) => (
              <div key={project.id} className={styles.projectCard}>
                <img 
                  src={project.imageUrl} 
                  alt={project.altText} 
                  className={styles.projectImage}
                />
                <div className={styles.projectInfo}>
                  <h3 className={styles.projectTitle}>{project.title}</h3>
                  <p className={styles.projectDescription}>{project.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <button className={styles.sliderButton} onClick={handleNext}>›</button>
      </div>
    </section>
  );
};

export default Projects;
