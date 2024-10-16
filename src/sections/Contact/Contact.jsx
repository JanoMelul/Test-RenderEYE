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
    alert("Formulario enviado correctamente");
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className={styles.contactSection}
    >
      <h2 className={styles.contactTitle}>Contáctanos</h2>
      <p className={styles.contactSubtitle}>
        Estamos aquí para ayudarte. Completa el siguiente formulario y nos
        pondremos en contacto contigo.
      </p>

      <form className={styles.contactForm} onSubmit={handleSubmit}>
        <div className={styles.inputGroup}>
          <FaUser className={styles.icon} />
          <input
            type="text"
            name="name"
            placeholder="Tu nombre"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className={styles.inputGroup}>
          <FaEnvelope className={styles.icon} />
          <input
            type="email"
            name="email"
            placeholder="Tu correo electrónico"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className={styles.inputGroup}>
          <FaPhone className={styles.icon} />
          <input
            type="tel"
            name="phone"
            placeholder="Tu teléfono (opcional)"
            value={formData.phone}
            onChange={handleChange}
          />
        </div>

        <div className={styles.inputGroup}>
          <textarea
            name="message"
            placeholder="Escribe tu mensaje"
            value={formData.message}
            onChange={handleChange}
            required
          />
        </div>

        <motion.button
          type="submit"
          className={styles.submitButton}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Enviar <FaPaperPlane className={styles.sendIcon} />
        </motion.button>
      </form>
    </motion.section>
  );
};

export default Contact;
