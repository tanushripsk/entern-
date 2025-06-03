import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import girl from "../asset/img/about_girl.png";
import adult from "../asset/video/adult.mp4";

const ScrollAnimationWrapper = ({ children }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6 }}
    >
      {children}
    </motion.div>
  );
};

function Adult() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  // Animation Configurations
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  const fadeIn = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { duration: 0.6 },
  };

  const scaleIn = {
    initial: { opacity: 0, scale: 0.9 },
    animate: { opacity: 1, scale: 1 },
    transition: { duration: 0.6 },
  };

  // WhatsApp number - replace with your actual WhatsApp number
  const whatsappNumber = '+916398542286';
  const whatsappMessage = encodeURIComponent('Hi, I want to know more about Engtern!');
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  const handleWhatsAppClick = () => {
    window.open(whatsappLink, '_blank', 'noopener,noreferrer');
  };

  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8]);

  return (
    <motion.div 
      className="bg-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      ref={ref}
    >
      {/* Header Section */}
      <ScrollAnimationWrapper>
        <motion.main 
          className="container mx-auto px-4 py-8 md:py-10 lg:py-12"
          variants={fadeIn}
          initial="initial"
          animate="animate"
        >
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-12">
            {/* Left Column - Text Content */}
            <motion.div 
              className="flex-1 max-w-2xl header-content"
              variants={fadeInUp}
            >
              <motion.h1 
                className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 md:mb-6"
                variants={fadeInUp}
              >
                <motion.span 
                  className="text-[#FFD700]"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  Engtern For Adults
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
                className="text-base sm:text-lg lg:text-xl text-gray-700 mb-6 md:mb-8"
                variants={fadeInUp}
              >
                In this fast-moving world, none of us would want to have slow speaking or less engagement. 
                Networking has become the need of the hour, which requires professional communication skills.
              </motion.p>
            </motion.div>

            {/* Right Column - Image */}
            <motion.div 
              className="flex-1 relative w-full max-w-lg lg:max-w-xl"
              variants={scaleIn}
            >
              <motion.div 
                className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <motion.img
                  src={girl}
                  alt="Adult gaining confidence through Engtern's public speaking program"
                  className="w-full h-full object-cover"
                  initial={{ scale: 1.2 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.6 }}
                />
              </motion.div>
              {/* Decorative Elements */}
              <motion.div 
                className="absolute -z-10 top-6 md:top-8 right-6 md:right-8 w-full h-full bg-[#FFD700]/10 rounded-2xl"
                initial={{ opacity: 0, x: 20, y: 20 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              ></motion.div>
              <motion.div 
                className="absolute -z-20 top-12 md:top-16 right-12 md:right-16 w-full h-full bg-[#FFD700]/5 rounded-2xl"
                initial={{ opacity: 0, x: 40, y: 40 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              ></motion.div>
            </motion.div>
          </div>
        </motion.main>
      </ScrollAnimationWrapper>

      {/* Public Speaking Section */}
      <ScrollAnimationWrapper>
        <motion.div 
          className="bg-gradient-to-b from-white to-gray-50 py-12 md:py-14 lg:py-16"
          variants={fadeIn}
          initial="initial"
          animate="animate"
        >
          <div className="container mx-auto px-4">
            <motion.div 
              className="max-w-4xl mx-auto mb-12 md:mb-14 lg:mb-16"
              variants={fadeInUp}
            >
              <motion.p
                className="text-base sm:text-lg text-gray-700 leading-relaxed text-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                And for all this, we are here to give you the best of all the world in your live sessions, 
                valuing your time and efforts. <motion.span 
                  className="text-teal-600 font-medium"
                  initial={{ color: "#000" }}
                  animate={{ color: "#0D9488" }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >Create your personalized plan now.</motion.span>
              </motion.p>
            </motion.div>

            {/* Title */}
            <motion.h2
              className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center text-[#00BCD4] mb-8 md:mb-10 lg:mb-12"
              {...fadeInUp}
            >
              Our Course Structure
            </motion.h2>

            {/* Video Section */}
            <motion.div 
              className="w-full max-w-5xl mx-auto mb-8 md:mb-10 lg:mb-12"
              variants={scaleIn}
            >
              <motion.div 
                className="aspect-w-16 aspect-h-9 rounded-lg shadow-lg overflow-hidden"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <video
                  className="w-full h-full object-cover"
                  autoPlay
                  loop
                  muted
                  src={adult}
                >
                  Your browser does not support the video tag.
                </video>
              </motion.div>
            </motion.div>

            {/* Contact Button */}
            <motion.div 
              className="text-center mt-6 md:mt-8"
              variants={fadeInUp}
            >
              <motion.p 
                className="text-teal-600 font-medium text-lg md:text-xl mb-3 md:mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                See you in the session!
              </motion.p>
              <motion.button 
                onClick={handleWhatsAppClick}
                className="inline-block bg-[#FFCB45] hover:bg-[#f0bd3d] text-white font-bold text-base md:text-lg px-6 md:px-8 py-3 md:py-4 rounded-full transition-colors duration-200 shadow-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="w-5 h-5 md:w-6 md:h-6 mr-2 md:mr-3 fill-current">
                    <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/>
                  </svg>
                  Contact Us To Know More
                </span>
              </motion.button>
            </motion.div>
          </div>
        </motion.div>
      </ScrollAnimationWrapper>

      {/* Scroll-triggered floating element */}
      <motion.div
        style={{ opacity, scale }}
      >
      </motion.div>
    </motion.div>
  );
}

export default Adult;

