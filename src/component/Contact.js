import React, { useState } from 'react';
import { motion } from 'framer-motion';
import contactBgImage from '../asset/img/contact.png';
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt } from 'react-icons/fa';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    number: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
    
    // Prepare WhatsApp message
    const whatsappNumber = '+916398542286'; // Replace with your WhatsApp number
    const message = `Name: ${formData.name}%0AEmail: ${formData.email}%0ANumber: ${formData.number}%0AMessage: ${formData.message}`;
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`;
    
    // Open WhatsApp in a new tab
    window.open(whatsappUrl, '_blank');
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <motion.div 
      className="teacher-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="hero-section">
        <div className="hero-overlay"></div>
        <motion.div 
          className="hero-content"
          initial={{ y: -20 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
       
          
        </motion.div>
      </div>

      {/* Contact Info Section */}
      <motion.div 
        className="container"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <div className="contact-info">
          {/* Address */}
          <motion.div 
            className="info-item"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="icon-wrapper">
              <FaMapMarkerAlt className="icon" />
            </div>
            <h3>ADDRESS</h3>
            <p>Kamteshwar, Sonegaon Garhwal, Pauri ,<br />Uttarakhand, 246174</p>
          </motion.div>

          {/* Mail */}
          <motion.div 
            className="info-item"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="icon-wrapper">
              <FaEnvelope className="icon" />
            </div>
            <h3>MAIL</h3>
            <p>diyapart142@gmail.com</p>
          </motion.div>

          {/* Phone */}
          <motion.div 
            className="info-item"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="icon-wrapper">
              <FaPhoneAlt className="icon" />
            </div>
            <h3>PHONE</h3>
            <p>+91 6398542286</p>
          </motion.div>
        </div>

        {/* Contact Form and Map Section */}
        <div className="form-map-container">
          {/* Contact Form */}
          <motion.div 
            className="contact-form"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                placeholder="Your name"
                value={formData.name}
                onChange={handleChange}
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Your email"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <input
                type="tel"
                name="number"
                placeholder="Your Number"
                value={formData.number}
                onChange={handleChange}
                required
              />
              <textarea
                name="message"
                placeholder="Your message (optional)"
                value={formData.message}
                onChange={handleChange}
                rows={4}
              ></textarea>
              <motion.button
                type="submit"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Submit via WhatsApp
              </motion.button>
            </form>
          </motion.div>

          {/* Map */}
          <motion.div 
            className="map-container"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d44223.56452436935!2d78.75088253412049!3d30.141362951205636!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3909a476b13ca115%3A0xa30049354e9659ca!2sPauri%2C%20Uttarakhand%20246001!5e0!3m2!1sen!2sin!4v1735969863091!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </motion.div>
        </div>
      </motion.div>

      <style jsx>{`
        .teacher-page {
          width: 100%;
        }
        .hero-section {
          position: relative;
          height: 400px;
          margin-top: 20px;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          background-image: url(${contactBgImage});
          background-size: cover;
          background-position: center;
        }
        .hero-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
        }
        .hero-content {
          position: relative;
          z-index: 1;
        }
        .hero-content h1 {
          font-size: 3.75rem;
          font-weight: 800;
          color: white;
          margin-bottom: 1rem;
        }
        .breadcrumb {
          font-size: 0.875rem;
          color: white;
        }
        .hover-underline:hover {
          text-decoration: underline;
        }
        .separator {
          margin: 0 0.25rem;
        }
        a {
          color: white;
          text-decoration: none;
        }
        .container {
          max-width: 1280px;
          margin: 0 auto;
          padding: 2rem 1rem;
        }
        .contact-info {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 2rem;
          margin-bottom: 2rem;
        }
        .info-item {
          text-align: center;
        }
        .icon-wrapper {
          width: 3rem;
          height: 3rem;
          background-color: #00A6A9;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 1rem;
        }
        .icon {
          color: white;
          font-size: 1.5rem;
        }
        .info-item h3 {
          font-size: 1.25rem;
          font-weight: bold;
          margin-bottom: 0.5rem;
        }
        .info-item p {
          color: #4a5568;
          font-weight: bold;
        }
        .form-map-container {
          display: grid;
          grid-template-columns: 1fr;
          gap: 2rem;
        }
        .contact-form {
          background-color: #f3e8ff;
          padding: 2rem;
          border-radius: 0.5rem;
        }
        .contact-form form {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }
        .contact-form input,
        .contact-form textarea {
          width: 100%;
          padding: 0.75rem 1rem;
          border: 1px solid #cbd5e0;
          border-radius: 0.375rem;
          font-size: 1rem;
        }
        .contact-form input:focus,
        .contact-form textarea:focus {
          outline: none;
          border-color: #6C5CE7;
          box-shadow: 0 0 0 3px rgba(108, 92, 231, 0.1);
        }
        .contact-form button {
          background-color: #6C5CE7;
          color: white;
          padding: 0.75rem 1.5rem;
          border: none;
          border-radius: 0.375rem;
          font-size: 1rem;
          cursor: pointer;
          transition: background-color 0.3s;
        }
        .contact-form button:hover {
          background-color: #5A4ED1;
        }
        .map-container {
          height: 400px;
          border-radius: 0.5rem;
          overflow: hidden;
        }
        @media (min-width: 768px) {
          .form-map-container {
            grid-template-columns: 1fr 1fr;
          }
        }
        @media (max-width: 768px) {
          .hero-content h1 {
            font-size: 2.5rem;
          }
        }

        /* New media queries for responsiveness */
        @media (max-width: 1024px) {
          .container {
            padding: 1rem;
          }
          .contact-info {
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          }
          .form-map-container {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 768px) {
          .hero-section {
            height: 300px;
          }
          .hero-content h1 {
            font-size: 2.5rem;
          }
          .contact-info {
            grid-template-columns: 1fr;
          }
          .info-item {
            padding: 1rem;
          }
          .contact-form {
            padding: 1.5rem;
          }
        }

        @media (max-width: 480px) {
          .hero-section {
            height: 200px;
          }
          .hero-content h1 {
            font-size: 2rem;
          }
          .container {
            padding: 0.5rem;
          }
          .contact-form input,
          .contact-form textarea {
            padding: 0.5rem 0.75rem;
          }
          .map-container {
            height: 300px;
          }
        }
      `}</style>
    </motion.div>
  );
}

export default Contact;

