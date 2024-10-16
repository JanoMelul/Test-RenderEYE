import { useState, useEffect } from 'react';
import styles from './Projects.module.css';
import HeroImg from "../../assets/images/morsa.jpg"


const projectsData = [
  {
    id: 1,
    title: "Residential Project",
    description: "A modern sustainable housing project with panoramic views.",
    imageUrl: HeroImg,
    altText: "View of modern residential project"
  },
  {
    id: 2,
    title: "Corporate Building",
    description: "Minimalist and functional design for an innovative corporate building.",
    imageUrl: HeroImg,
    altText: "Minimalist corporate building design"
  },
  {
    id: 3,
    title: "Shopping Center",
    description: "A spacious and modern shopping center focused on user experience.",
    imageUrl: HeroImg,
    altText: "Interior of modern shopping center"
  },
  {
    id: 4,
    title: "Boutique Hotel",
    description: "Elegant design of a boutique hotel combining luxury and comfort.",
    imageUrl: HeroImg,
    altText: "Exterior view of boutique hotel"
  },
  {
    id: 5,
    title: "Cultural Center",
    description: "Innovative cultural center promoting community and the arts.",
    imageUrl: HeroImg,
    altText: "Innovative cultural center design"
  },
  {
    id: 6,
    title: "Art Museum",
    description: "An innovative museum with interactive spaces and avant-garde design.",
    imageUrl: HeroImg,
    altText: "Modern art museum design"
  }
];

const Projects = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [animationClass, setAnimationClass] = useState(''); 

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
    setAnimationClass(styles.exitToLeft); 
    setTimeout(() => {
      setCurrentSlide((prevSlide) => (prevSlide + projectsPerPage()) % projectsData.length);
      setAnimationClass(styles.enterFromRight); 
    }, 700); 
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
      <h2 id="projects-title" className={styles.projectsTitle}>Our Projects</h2>

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
