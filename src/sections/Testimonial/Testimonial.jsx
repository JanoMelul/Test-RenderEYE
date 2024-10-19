import { useState } from "react";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./Testimonial.module.css";
import morsaImg from "../../assets/images/morsa.jpg"; // Import the image

const testimonials = [
  {
    name: "John Doe",
    company: "Amazing Company",
    feedback: "This is an amazing service, I highly recommend it!",
    imgurl: morsaImg,
  },
  {
    name: "Jane Smith",
    company: "Awesome Inc",
    feedback:
      "The support was excellent, and the product exceeded expectations.",
    imgurl: morsaImg,
  },
  {
    name: "Sam Johnson",
    company: "Tech Solutions",
    feedback: "Great experience and highly professional team.",
    imgurl: morsaImg,
  },
];

const Testimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const totalSlides = testimonials.length;

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? totalSlides - 1 : prevIndex - 1
    );
  };

  const handleDotClick = (index) => {
    setCurrentIndex(index); // Cambiar al testimonial correspondiente
  };

  const testimonialVariants = {
    initial: { opacity: 0 }, // Start invisible
    animate: { opacity: 1 }, // Fade in
    exit: { opacity: 0 }, // Fade out
  };

  return (
    <section
      id="testimonials"
      className={styles.appTestimonial}
      aria-labelledby="testimonials-title"
    >
      <h2 id="testimonials-title" className="app__section_title">
        Testimonials
      </h2>

      <AnimatePresence mode="wait">
        {testimonials.length > 0 && (
          <motion.article
            key={currentIndex} // Key ensures motion div recognizes change
            className={`${styles.appTestimonialItem} app__flex`}
            variants={testimonialVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.5 }} // Smooth fade transition
            aria-label={`Testimonial from ${testimonials[currentIndex].name}`}
          >
            <img
              src={testimonials[currentIndex].imgurl}
              alt={`Photo of ${testimonials[currentIndex].name}`}
              className={styles.testimonialImage}
            />
            <div className={styles.appTestimonialContent}>
              <p className="p-text" style={{ color: "var(--contrast-color)" }}>
                {testimonials[currentIndex].feedback}
              </p>
              <div>
                <h4
                  className="bold-text"
                  style={{ color: "var(--highlight-color)" }}
                >
                  {testimonials[currentIndex].name}
                </h4>
                <h5
                  className="p-text"
                  style={{ color: "var(--contrast-color)" }}
                >
                  {testimonials[currentIndex].company}
                </h5>
              </div>
            </div>
          </motion.article>
        )}
      </AnimatePresence>

      {/* Navigation Buttons and Indicators */}
      <div className={styles.sliderButtonWrapper}>
        {/* Previous Button */}
        <div className={styles.sliderButton} onClick={handlePrev}>
          <HiChevronLeft />
        </div>

        {/* Indicators */}
        <div className={styles.indicatorWrapper}>
          {Array.from({ length: totalSlides }).map((_, index) => (
            <span
              key={index}
              className={`${styles.indicator} ${
                currentIndex === index ? styles.active : ""
              }`}
              onClick={() => handleDotClick(index)} // Clickable dot
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>

        {/* Next Button */}
        <div className={styles.sliderButton} onClick={handleNext}>
          <HiChevronRight />
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
