import { useState } from "react";
import { FaEnvelope, FaUser, FaPhone, FaPaperPlane } from "react-icons/fa";
import { motion } from "framer-motion";
import styles from "./Contact.module.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form submitted successfully");
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className={styles.contactSection}
    >
      <h2 className={styles.contactTitle}>Contact Us</h2>
      <p className={styles.contactSubtitle}>
        {"We're here to help. Fill out the form below and we'll get in touch with you."}
      </p>

      <form className={styles.contactForm} onSubmit={handleSubmit}>
        <div className={styles.inputGroup}>
          <FaUser className={styles.icon} />
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
            aria-label="Your Name"
          />
        </div>

        <div className={styles.inputGroup}>
          <FaEnvelope className={styles.icon} />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
            aria-label="Your Email"
          />
        </div>

        <div className={styles.inputGroup}>
          <FaPhone className={styles.icon} />
          <input
            type="tel"
            name="phone"
            placeholder="Your Phone (optional)"
            value={formData.phone}
            onChange={handleChange}
            aria-label="Your Phone"
          />
        </div>

        <div className={styles.inputGroup}>
          <textarea
            name="message"
            placeholder="Write your message"
            value={formData.message}
            onChange={handleChange}
            required
            aria-label="Your Message"
          />
        </div>

        <motion.button
          type="submit"
          className={styles.submitButton}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          aria-label="Send message"
        >
          Send <FaPaperPlane className={styles.sendIcon} />
        </motion.button>
      </form>
    </motion.section>
  );
};

export default Contact;
