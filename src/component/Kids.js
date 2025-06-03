import React, { useRef } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import kid from '../asset/img/kids.webp';
import kids from "../asset/video/kids.mp4";

const staggerChildren = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  show: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6 }
  }
};

function Kids() {
  const headerRef = useRef(null);
  const publicSpeakingRef = useRef(null);
  const videoRef = useRef(null);
  const contactRef = useRef(null);

  const headerInView = useInView(headerRef, { once: true, amount: 0.5 });
  const publicSpeakingInView = useInView(publicSpeakingRef, { once: true, amount: 0.3 });
  const videoInView = useInView(videoRef, { once: true, amount: 0.3 });
  const contactInView = useInView(contactRef, { once: true, amount: 0.5 });

  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);

  const whatsappNumber = '+916398542286';
  const whatsappMessage = encodeURIComponent('Hi, I want to know more about Engtern!');
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  const handleWhatsAppClick = () => {
    window.open(whatsappLink, '_blank', 'noopener,noreferrer');
  };

  return (
    <motion.div 
      className="bg-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <style jsx>{`
        @media (min-width: 1024px) {
          .container {
            max-width: 1200px;
          }
          .text-content {
            text-align: left;
          }
        }

        @media (max-width: 1023px) {
          .container {
            padding-left: 1rem;
            padding-right: 1rem;
          }
          .text-content {
            text-align: center;
          }
          h1, h2, p {
            text-align: center;
          }
        }

        @media (max-width: 768px) {
          h1 {
            font-size: 2rem;
            text-align: center;
          }
          .video-container {
            width: 100%;
          }
          .video-wrapper {
            width: 100%;
            height: auto;
          }
          .text-content {
            text-align: center;
            padding: 0 1rem;
          }
          .header-content {
            text-align: center;
          }
          p {
            text-align: center;
            margin-left: auto;
            margin-right: auto;
          }
        }

        @media (max-width: 640px) {
          h1 {
            font-size: 1.75rem;
            text-align: center;
            line-height: 1.3;
          }
          .header-content {
            text-align: center;
          }
          p {
            text-align: center;
            font-size: 1rem;
            line-height: 1.5;
            padding: 0 0.5rem;
          }
          .text-content {
            padding: 0 0.5rem;
          }
        }
      `}</style>

      {/* Header Section */}
      <motion.main 
        ref={headerRef}
        className="container mx-auto px-4 py-12"
        variants={staggerChildren}
        initial="hidden"
        animate={headerInView ? "show" : "hidden"}
      >
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-16">
          {/* Left Column - Text Content */}
          <motion.div 
            className="flex-1 max-w-2xl header-content"
            variants={fadeInUp}
          >
            <motion.h1 
              className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6"
              variants={fadeInUp}
            >
              <motion.span 
                className="text-[#FFD700]"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Engtern
              </motion.span>
              <motion.span 
                className="text-black"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                : English, Your Gateway to a Brighter Future!
              </motion.span>
            </motion.h1>
            <motion.p 
              className="text-lg sm:text-xl lg:text-2xl text-gray-700 mb-8"
              variants={fadeInUp}
            >
              Want to see your kid speak with confidence? Empower young minds with Engtern.
            </motion.p>
          </motion.div>

          {/* Right Column - Image */}
          <motion.div 
            className="flex-1 relative w-full max-w-lg lg:max-w-xl"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
              <motion.img
                src={kid}
                alt="Child gaining confidence through Engtern's public speaking program"
                className="w-full h-full object-cover"
                initial={{ scale: 1.2 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.6 }}
              />
            </div>
            {/* Decorative Elements */}
            <motion.div 
              className="absolute -z-10 top-8 right-8 w-full h-full bg-[#FFD700]/10 rounded-2xl"
              initial={{ opacity: 0, x: 20, y: 20 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            ></motion.div>
            <motion.div 
              className="absolute -z-20 top-16 right-16 w-full h-full bg-[#FFD700]/5 rounded-2xl"
              initial={{ opacity: 0, x: 40, y: 40 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            ></motion.div>
          </motion.div>
        </div>
      </motion.main>

      {/* Public Speaking Section */}
      <motion.div 
        ref={publicSpeakingRef}
        className="bg-gradient-to-b from-white to-gray-50 py-16"
        initial={{ opacity: 0 }}
        animate={publicSpeakingInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <div className="container mx-auto px-4">
          <motion.div 
            className="max-w-4xl mx-auto mb-16"
            variants={fadeInUp}
            initial="hidden"
            animate={publicSpeakingInView ? "show" : "hidden"}
          >
            <motion.p
              className="text-lg sm:text-xl text-gray-700 leading-relaxed text-center"
              variants={fadeInUp}
            >
              <motion.span 
                className="text-[#FFD700] font-semibold"
                initial={{ color: "#000" }}
                animate={{ color: "#FFD700" }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                Public speaking
              </motion.span>
              {' '}is a necessary skill to which one should get acquainted with in their childhood itself.
              As this is the right time to mould young minds, introducing them to the right techniques
              through animated content and a friendly teaching approach is key.
            </motion.p>
          </motion.div>

          {/* Title */}
          <motion.h2
            className="text-3xl sm:text-4xl font-bold text-center text-[#00BCD4] mb-12"
            variants={fadeInUp}
            initial="hidden"
            animate={publicSpeakingInView ? "show" : "hidden"}
          >
            Our Course Structure
          </motion.h2>

          {/* Video Section */}
          <motion.div 
            ref={videoRef}
            className="w-full max-w-5xl mx-auto mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={videoInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="aspect-w-16 aspect-h-9 rounded-lg shadow-lg overflow-hidden">
              <video
                className="w-full h-full object-cover"
                autoPlay
                loop
                muted
                src={kids}
              >
                Your browser does not support the video tag.
              </video>
            </div>
          </motion.div>

          {/* Contact Button */}
          <motion.div 
            ref={contactRef}
            className="text-center mt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={contactInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <motion.a 
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleWhatsAppClick}
              className="inline-block bg-[#FFCB45] hover:bg-[#f0bd3d] text-white font-bold text-lg px-8 py-4 rounded-full transition-colors duration-200 shadow-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="w-6 h-6 mr-3 fill-current">
                  <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/>
                </svg>
                Contact Us To Know More
              </span>
            </motion.a>
          </motion.div>
        </div>
      </motion.div>

      {/* Parallax background effect */}
      <motion.div
        className="fixed inset-0 z-[-1] bg-gradient-to-b from-blue-100 to-blue-200 opacity-50"
        style={{ y }}
      />
    </motion.div>
  );
}

export default Kids;