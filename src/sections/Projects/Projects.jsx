import { useState, useEffect } from "react";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi"; // Usamos estos íconos pequeños
import { motion } from "framer-motion";
import styles from "./Projects.module.css";
import HeroImg from "../../assets/images/morsa.jpg";

const projectsData = [
  {
    id: 1,
    title: "Residential Project",
    description: "A modern sustainable housing project with panoramic views.",
    imageUrl: HeroImg,
    altText: "View of modern residential project",
  },
  {
    id: 2,
    title: "Corporate Building",
    description:
      "Minimalist and functional design for an innovative corporate building.",
    imageUrl: HeroImg,
    altText: "Minimalist corporate building design",
  },
  {
    id: 3,
    title: "Shopping Center",
    description:
      "A spacious and modern shopping center focused on user experience.",
    imageUrl: HeroImg,
    altText: "Interior of modern shopping center",
  },
  {
    id: 4,
    title: "Boutique Hotel",
    description:
      "Elegant design of a boutique hotel combining luxury and comfort.",
    imageUrl: HeroImg,
    altText: "Exterior view of boutique hotel",
  },
  {
    id: 5,
    title: "Cultural Center",
    description: "Innovative cultural center promoting community and the arts.",
    imageUrl: HeroImg,
    altText: "Innovative cultural center design",
  },
  {
    id: 6,
    title: "Art Museum",
    description:
      "An innovative museum with interactive spaces and avant-garde design.",
    imageUrl: HeroImg,
    altText: "Modern art museum design",
  },
];

const Projects = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [projectsToShow, setProjectsToShow] = useState(3); // 3 by default for large screens

  // Function to determine the number of projects to display based on screen width
  const updateProjectsToShow = () => {
    if (window.innerWidth >= 1024) {
      setProjectsToShow(3);
    } else if (window.innerWidth >= 768) {
      setProjectsToShow(2);
    } else {
      setProjectsToShow(1);
    }
  };

  // UseEffect to update number of projects to show when the window is resized
  useEffect(() => {
    updateProjectsToShow(); // Initial check
    window.addEventListener("resize", updateProjectsToShow);
    return () => window.removeEventListener("resize", updateProjectsToShow);
  }, []);

  const totalSlides = Math.ceil(projectsData.length / projectsToShow);

  const handleNext = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % totalSlides);
  };

  const handlePrev = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? totalSlides - 1 : prevSlide - 1
    );
  };

  const handleDotClick = (index) => {
    setCurrentSlide(index); // Cambiar a la slide correspondiente
  };

  const visibleProjects = projectsData.slice(
    currentSlide * projectsToShow,
    currentSlide * projectsToShow + projectsToShow
  );

  return (
    <section
      id="projects"
      className={styles.projectsSection}
      aria-labelledby="projects-title"
    >
      <h2 id="projects-title" className="app__section_title">
        Our Projects
      </h2>

      {/* Wrapper for slider and projects */}
      <div className={styles.sliderOuter}>
        <motion.div
          className={styles.sliderContent}
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.5 }}
        >
          {visibleProjects.map((project) => (
            <motion.div
              key={project.id}
              className={styles.projectCard}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <img
                src={project.imageUrl}
                alt={project.altText}
                className={styles.projectImage}
              />
              <div className={styles.projectInfo}>
                <h3 className={styles.projectTitle}>{project.title}</h3>
                <p className={styles.projectDescription}>
                  {project.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Navigation buttons with indicators in the middle */}
      <div className={styles.sliderButtonWrapper}>
        <button className={styles.sliderButton} onClick={handlePrev}>
          <HiChevronLeft />
        </button>

        {/* Indicators centered between the buttons */}
        <div className={styles.indicatorWrapper}>
          {Array.from({ length: totalSlides }).map((_, index) => (
            <span
              key={index}
              className={`${styles.indicator} ${
                currentSlide === index ? styles.active : ""
              }`}
              onClick={() => handleDotClick(index)} /* Dot is now clickable */
            />
          ))}
        </div>

        <button className={styles.sliderButton} onClick={handleNext}>
          <HiChevronRight />
        </button>
      </div>
    </section>
  );
};

export default Projects;
