"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import heroImg from "../asset/video/Untitled design.gif";
import englishImg from "../asset/img/englishhhh.png";
import img1 from "../asset/img/slider1.jpg";
import img2 from "../asset/img/slider2.jpg";
import img3 from "../asset/img/slider3.jpg";
import img4 from "../asset/img/slider4.jpg";
import img5 from "../asset/img/slider5.jpg";
import logoss from "../asset/img/Engtern_logo.png";
import studentsImage from "../asset/img/post.png"; // Added new import

const HomePage = () => {
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    number: "",
    message: "",
  });
  const [showChatBox, setShowChatBox] = useState(false);
  const [showMessageBox, setShowMessageBox] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowModal(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowMessageBox(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    console.log("showModal state changed:", showModal);
  }, [showModal]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const encodedName = encodeURIComponent(formData.name);
    const encodedEmail = encodeURIComponent(formData.email);
    const encodedNumber = encodeURIComponent(formData.number);
    const encodedMessage = encodeURIComponent(
      formData.message || "No message provided"
    );

    const whatsappMessage = `Name: ${encodedName}%0AEmail: ${encodedEmail}%0APhone: ${encodedNumber}%0AMessage: ${encodedMessage}`;

    window.open(
      `https://wa.me/+916398542286?text=${whatsappMessage}`,
      "_blank"
    );

    setShowModal(false);
    setShowChatBox(false);
    setFormData({
      name: "",
      email: "",
      number: "",
      message: "",
    });
  };

  const CourseCard = ({ level, description }) => {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
        className="bg-gray-100 p-6 rounded-3xl border-2 border-blue-800 flex flex-col items-center text-center"
      >
        <svg
          className="w-12 h-12 text-teal-500 mb-4"
          fill="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
        </svg>
        <h3 className="text-teal-400 text-xl font-semibold mb-4">{level}</h3>
        <p className="text-gray-600 mb-6 leading-relaxed">{description}</p>
        <button
          onClick={() => {
            console.log("Demo button clicked");
            setShowModal(true);
          }}
          className="bg-teal-500 text-white px-8 py-2 rounded-md hover:bg-teal-600 transition-colors"
        >
          Demo
        </button>
      </motion.div>
    );
  };

  const ImageCarousel = () => {
    const images = [img1, img2, img3, img4, img5];
    const [currentIndex, setCurrentIndex] = useState(0);
    const [windowWidth, setWindowWidth] = useState(
      typeof window !== "undefined" ? window.innerWidth : 1024
    );
    const [isHovered, setIsHovered] = useState(false);

    useEffect(() => {
      const handleResize = () => {
        setWindowWidth(window.innerWidth);
      };

      window.addEventListener("resize", handleResize);

      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }, []);

    useEffect(() => {
      if (!isHovered) {
        const timer = setInterval(() => {
          setCurrentIndex((prevIndex) => {
            const maxIndex = images.length - getItemsToShow();
            return prevIndex >= maxIndex ? 0 : prevIndex + 1;
          });
        }, 3000);

        return () => clearInterval(timer);
      }
    }, [isHovered]);

    const getItemsToShow = () => {
      if (windowWidth >= 1024) return 3;
      if (windowWidth >= 768) return 2;
      return 1;
    };

    const handlePrevious = () => {
      setCurrentIndex((prevIndex) => {
        const maxIndex = images.length - getItemsToShow();
        return prevIndex === 0 ? maxIndex : prevIndex - 1;
      });
    };

    const handleNext = () => {
      setCurrentIndex((prevIndex) => {
        const maxIndex = images.length - getItemsToShow();
        return prevIndex >= maxIndex ? 0 : prevIndex + 1;
      });
    };

    // return (
      // <motion.div
      //   initial={{ opacity: 0 }}
      //   animate={{ opacity: 1 }}
      //   transition={{ duration: 0.5 }}
      //   className="image-carousel-section py-4 sm:py-2 w-full"
      // >
      //   <div className="carousel-container w-full">
      //     <div
      //       className="carousel-wrapper relative flex items-center overflow-hidden w-[1200px] sm:w-[1200px] md:w-[1200px] lg:w-[1200px] h-auto"
      //       onMouseEnter={() => setIsHovered(true)}
      //       onMouseLeave={() => setIsHovered(false)}
      //     >
      //       <button
      //         className="carousel-button prev absolute left-2 sm:left-4 text-sm sm:text-lg p-1 sm:p-2  z-10"
      //         onClick={handlePrevious}
      //       >
      //         ❮
      //       </button>
      //       <motion.div
      //         className="images-wrapper flex transition-transform duration-300 ease-in-out w-full  "
      //         animate={{ x: -currentIndex * 100 + "%" }}
      //         transition={{ type: "spring", stiffness: 300, damping: 30 }}
      //       >
      //         {images.map((image, index) => (
      //           <motion.div
      //             className="image-card flex-shrink-0 w-full"
      //             key={index}
      //             whileHover={{ scale: 1.05 }}
      //             transition={{ duration: 0.2 }}
      //           >
      //             <div className="relative w-[400px] sm:w-[340px] md:w-[400px] lg:w-[500px] h-48 sm:h-64 md:h-80 lg:h-96 bg-gray-100 overflow-hidden">
      //               <img
      //                 src={image}
      //                 alt={`Gallery image ${index + 1}`}
      //                 className="object-contain w-[380px] sm:w-[220px] md:w-[300px] lg:w-[400px] h-auto"
      //               />
      //             </div>
      //           </motion.div>
      //         ))}
      //       </motion.div>
      //       <button
      //         className="carousel-button next absolute right-2 sm:right-4 text-sm sm:text-lg p-1 sm:p-2 bg-gray-200 rounded-full z-10"
      //         onClick={handleNext}
      //       >
      //         ❯
      //       </button>
      //     </div>
      //     <div className="carousel-dots flex justify-center mt-2 sm:mt-4">
      //       {Array.from({ length: images.length }).map((_, idx) => (
      //         <button
      //           key={idx}
      //           className={`dot w-2 h-2 sm:w-3 sm:h-3 mx-1 rounded-full ${
      //             currentIndex === idx ? "bg-black" : "bg-gray-400"
      //           }`}
      //           onClick={() => setCurrentIndex(idx)}
      //         />
      //       ))}
      //     </div>
      //   </div>
      // </motion.div>
    // );
  };

  const Testimonials = () => {
    const testimonials = [
      {
        name: "Manoj Mishra",
        role: "Software testing Engineer",
        text: "Teaching style is excellent! It took just 2 months of working with Diya Ma'am to see noticeable improvement, and my confidence level has definitely boosted. Amazing, Thank you for your guidance!",
        image: logoss,
      },
      {
        name: "Muneet Singh",
        role: "Agency Owner",
        text: "I love her way of teaching. ... She is humble, polite and co operative",
        image: logoss,
      },
      {
        name: "Sanjit",
        role: "Manager",
        text: "To be honest, the way you explained the topics was very clear. It really helped me understand and learn communication techniques and skills",
        image: logoss,
      },
      {
        name: "Vinay",
        role: "DGM Finance",
        text: "I wanted to take a moment to express my appreciation for the exceptional teaching I received from you. Your ability to break down complex concepts into understandable",
        image: logoss,
      },
      {
        name: "Suraj sharma",
        role: "Manager Procurement",
        text: "It was great experience, lots of things learned and build my confidence.",
        image: logoss,
      },
      {
        name: "Pranav Kumar",
        role: "Investment banker",
        text: "Diya mam is an exceptional teacher whose dedication and passion for teaching are evident in every class. Her clear explanations and engaging teaching style make learning enjoyable and effective. I highly recommend her for learning english communication skills and Personal development skills.",
        image: logoss,
      },
      {
        name: "Priti shekhawat",
        role: "Student",
        text: "My experience of learning English from her is so so good.",
        image: logoss,
      },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const [windowWidth, setWindowWidth] = useState(
      typeof window !== "undefined" ? window.innerWidth : 1200
    );
    const [isHovered, setIsHovered] = useState(false);

    useEffect(() => {
      const handleResize = () => {
        setWindowWidth(window.innerWidth);
      };

      if (typeof window !== "undefined") {
        setWindowWidth(window.innerWidth);
        window.addEventListener("resize", handleResize);
      }

      return () => {
        if (typeof window !== "undefined") {
          window.removeEventListener("resize", handleResize);
        }
      };
    }, []);

    useEffect(() => {
      if (!isHovered) {
        const timer = setInterval(() => {
          setCurrentIndex((prevIndex) => {
            const maxIndex = testimonials.length - getItemsToShow();
            return prevIndex >= maxIndex ? 0 : prevIndex + 1;
          });
        }, 3000);

        return () => clearInterval(timer);
      }
    }, [isHovered]);

    const getItemsToShow = () => {
      if (windowWidth >= 1024) return 3;
      if (windowWidth >= 768) return 2;
      return 1;
    };

    const handlePrevious = () => {
      setCurrentIndex((prevIndex) => {
        const maxIndex = testimonials.length - getItemsToShow();
        return prevIndex === 0 ? maxIndex : prevIndex - 1;
      });
    };

    const handleNext = () => {
      setCurrentIndex((prevIndex) => {
        const maxIndex = testimonials.length - getItemsToShow();
        return prevIndex >= maxIndex ? 0 : prevIndex + 1;
      });
    };

    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="testimonials-section bg-gray-100 py-8"
      >
        <div className="testimonials-container mx-auto px-4 w-full">
          {/* Added new image section */}
          <div className="mb-8">
            <img
              src={studentsImage}
              alt="Our Happy Students"
              className="w-full max-h-[550px] object-cover"
            />
          </div>
        </div>

        <h2 className="text-3xl font-bold text-center mb-6">
          What Our Students Say
        </h2>
        <div
          className="carousel-container relative"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <button
            className="carousel-button prev absolute left-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md"
            onClick={handlePrevious}
          >
            ❮
          </button>
          <motion.div
            className="testimonials-wrapper flex transition-transform duration-500 ease-in-out"
            animate={{ x: -currentIndex * (100 / getItemsToShow()) + "%" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            {testimonials.map((testimonial, index) => (
              <motion.div
                className="testimonial-card bg-white rounded-lg shadow-md p-6 mx-2 flex-shrink-0"
                style={{ width: `calc(${100 / getItemsToShow()}% - 1rem) ` }}
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <div className="testimonial-header flex justify-center items-center mb-4">
                  <div className="testimonial-image w-24 h-24 bg-gray-200 rounded-full overflow-hidden">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="testimonial-content text-center">
                  <h3 className="text-xl font-semibold mb-2">
                    {testimonial.name}
                  </h3>
                  <p className="text-gray-600 mb-4">{testimonial.text}</p>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
          <button
            className="carousel-button next absolute right-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md"
            onClick={handleNext}
          >
            ❯
          </button>
        </div>
        <div className="carousel-dots flex justify-center mt-6">
          {Array.from({
            length: testimonials.length - getItemsToShow() + 1,
          }).map((_, idx) => (
            <button
              key={idx}
              className={`dot w-3 h-3 rounded-full mx-1 ${
                currentIndex === idx ? "bg-gray-800" : "bg-gray-300"
              }`}
              onClick={() => setCurrentIndex(idx)}
            />
          ))}
        </div>
      </motion.div>
    );
  };

  const courses = [
    {
      level: "Beginner",
      description:
        "Our beginner-friendly lessons break down English into simple, manageable steps, making it easy for you to start speaking confidently.",
    },
    {
      level: "Intermediate",
      description:
        "Our intermediate lessons help you build confidence with simple steps, expanding vocabulary, improving grammar, and making conversations easier.",
    },
    {
      level: "Advanced",
      description:
        "Our advanced lessons refine your skills, focusing on complex grammar, vocabulary, and fluent, natural conversations for confident communication.",
    },
  ];

  return (
    <div className="bg-cover overflow-hidden">
      {showModal && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-[99999] flex items-center justify-center bg-black bg-opacity-50"
        >
          <div className="bg-white rounded-lg shadow-xl max-w-md w-full mx-4">
            <div className="bg-[#31A7D4] p-6 text-white rounded-t-lg relative">
              <button
                onClick={() => setShowModal(false)}
                className="absolute top-4 right-4 text-white hover:text-gray-200"
              >
                ✕
              </button>
              <h2 className="text-sm mb-2">Englern: English Made Easy</h2>
              <h3 className="text-2xl font-bold">Book A Demo Now</h3>
              <p className="text-lg">@ ₹49</p>
            </div>
            <div className="p-6">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <input
                    type="text"
                    placeholder="Your name"
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-[#31A7D4]"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData((prev) => ({ ...prev, name: e.target.value }))
                    }
                    required
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Your email"
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-[#31A7D4]"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        email: e.target.value,
                      }))
                    }
                    required
                  />
                </div>
                <div>
                  <input
                    type="tel"
                    placeholder="Your Number"
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-[#31A7D4]"
                    value={formData.number}
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        number: e.target.value,
                      }))
                    }
                    required
                  />
                </div>
                <div>
                  <textarea
                    placeholder="Your message (optional)"
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-[#31A7D4] h-24 resize-none"
                    value={formData.message}
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        message: e.target.value,
                      }))
                    }
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-3 bg-[#208a91] text-white rounded-md hover:bg-[#47bcc5] transition-colors text-bold"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </motion.div>
      )}

      <motion.div
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{
          duration: 0.8,
          ease: "easeOut",
        }}
        className="w-full h-full"
      >
        <img
          src={heroImg}
          alt="Hero showcasing English courses"
          className="w-full h-full object-cover"
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto p-4 transition-all duration-500 ease-out"
      >
        <div className="flex flex-col sm:flex-row items-center sm:items-start justify-center sm:justify-between bg-white rounded-lg shadow-sm p-4 sm:p-6 ml-0 sm:ml-[250px]">
          <div className="flex flex-col sm:flex-row items-center mb-4 sm:mb-0">
            <div className="relative w-16 h-16 sm:w-24 sm:h-24 md:w-32 md:h-16 mr-0 sm:mr-4">
              <div className="absolute inset-0 bg-purple-100"></div>
              <img
                src={englishImg}
                alt="English course logo"
                className="absolute inset-0 w-full h-full object-cover border-2 border-purple-200 rounded-full"
              />
            </div>
            <div className="text-center sm:text-left">
              <h2 className="text-lg sm:text-xl font-semibold text-teal-500">
                Book Your Demo Now
              </h2>
              <p className="text-xs sm:text-sm text-gray-600">
                Try for 25-30 minutes
              </p>
            </div>
          </div>
          <button
            onClick={() => {
              console.log("Contact Now button clicked");
              setShowModal(true);
            }}
            className="w-full sm:w-auto px-4 sm:px-6 py-2 bg-yellow-400 hover:bg-yellow-500 text-white font-medium rounded-md transition-colors duration-500 "
          >
            Contact Now
          </button>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-[#f8f0ff] py-12"
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why learn with our Courses?
            </h2>
            <p className="max-w-3xl mx-auto text-gray-600 text-lg">
              Interactive & Engaging Lessons: Our courses are designed to keep
              you motivated and actively involved with dynamic exercises,
              quizzes, and real-world conversations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {courses.map((course, index) => (
              <CourseCard
                key={index}
                level={course.level}
                description={course.description}
              />
            ))}
          </div>
        </div>
      </motion.div>

      <ImageCarousel />

      <Testimonials />

      {/* Message Box */}
      <div className="fixed bottom-4 right-4 z-50">
        {/* Initial Message Box */}
        {showMessageBox && !showChatBox && (
          <div className="bg-[#1e3a8a] rounded-lg shadow-lg w-[300px]">
            <button
              onClick={() => setShowMessageBox(false)}
              className="absolute top-2 right-2 text-white/80 hover:text-white"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
            <div className="p-6 text-white">
              <h3 className="text-lg font-medium mb-2">
                👋 Hi! Have any queries?
              </h3>
              <p className="text-sm text-white/80">
                Feel free to ask your queries here. We are always ready to
                assist you anytime.
              </p>
              <button
                onClick={() => {
                  setShowChatBox(true);
                  setShowMessageBox(false);
                }}
                className="mt-4 w-full bg-white text-[#1e3a8a] py-2 px-4 rounded-md hover:bg-white/90 transition-colors font-medium"
              >
                Contact us
              </button>
            </div>
          </div>
        )}

        {/* WhatsApp Chat Box */}
        {showChatBox && (
          <div className="bg-white rounded-lg shadow-lg w-[350px]">
            <div className="p-4 bg-[#075E54] text-white rounded-t-lg">
              <div className="flex justify-between items-center">
                <h3 className="font-semibold">Contact via WhatsApp</h3>
                <button
                  onClick={() => setShowChatBox(false)}
                  className="text-white hover:text-gray-200"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </div>
            </div>
            <div className="p-4">
              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#075E54]"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData((prev) => ({ ...prev, name: e.target.value }))
                  }
                  required
                />
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#075E54]"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData((prev) => ({ ...prev, email: e.target.value }))
                  }
                  required
                />
                <input
                  type="tel"
                  placeholder="Enter your phone"
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#075E54]"
                  value={formData.number}
                  onChange={(e) =>
                    setFormData((prev) => ({ ...prev, number: e.target.value }))
                  }
                  required
                />
                <textarea
                  placeholder="Enter your message"
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#075E54] resize-none h-24"
                  value={formData.message}
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      message: e.target.value,
                    }))
                  }
                />
                <button
                  type="submit"
                  className="w-full py-3 bg-[#075E54] text-white rounded-md hover:bg-[#128C7E] transition-colors flex items-center justify-center gap-2"
                >
                  <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                  </svg>
                  Send on WhatsApp
                </button>
              </form>
            </div>
          </div>
        )}

        {/* Contact Button */}
        {!showChatBox && !showMessageBox && (
          <div className="flex flex-col items-end gap-2">
            <button
              onClick={() => setShowMessageBox(true)}
              className="bg-white text-gray-700 px-4 py-2 rounded-full shadow-lg hover:bg-gray-50 transition-colors flex items-center gap-2"
            >
              Contact us
              <svg
                viewBox="0 0 24 24"
                className="w-6 h-6 text-[#075E54] fill-current"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
              </svg>
            </button>
          </div>
        )}
      </div>
      <style jsx>{`
        .hero-section {
          background-color: #706fe5;
          padding: 3rem 1rem;
          text-align: center;
        }

        .hero-content {
          max-width: 1280px;
          margin: 0 auto;
        }

        .hero-content h1 {
          font-size: 3rem;
          font-weight: 800;
          color: white;
          margin-bottom: 1rem;
        }

        .hero-content p {
          font-size: 1.125rem;
          color: white;
          max-width: 36rem;
          margin: 1rem auto;
        }

        .image-carousel-section {
          background-color: #f9fafb;
          padding: 3rem 1rem;
        }

        .carousel-container {
          max-width: 1280px;
          margin: 0 auto;
          position: relative;
          overflow: hidden;
        }

        .carousel-wrapper {
          position: relative;
          display: flex;
          align-items: center;
        }

        .images-wrapper {
          display: flex;
          gap: 0.75rem;
          transition: transform 0.5s ease;
          width: 100%;
        }

        .image-card {
          flex: 0 0 calc(33.333% - 0.75rem);
          margin-right: 0.75rem;
          border-radius: 0.5rem;
          overflow: hidden;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          height: 250px;
        }

        .carousel-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.3s ease;
        }

        .image-card:hover .carousel-image {
          transform: scale(1.05);
        }

        .carousel-button {
          background: #ffffff;
          border: none;
          border-radius: 50%;
          width: 36px;
          height: 36px;
          display: flex;
          align-items: center;
          justify-content: center;
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          cursor: pointer;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
          z-index: 1;
          transition: background-color 0.3s ease;
        }

        .carousel-button:hover {
          background-color: #f3f4f6;
        }

        .carousel-button.prev {
          left: 0;
        }

        .carousel-button.next {
          right: 0;
        }

        .carousel-dots {
          display: flex;
          justify-content: center;
          gap: 0.5rem;
          margin-top: 1.5rem;
        }

        .dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #d1d5db;
          border: none;
          padding: 0;
          cursor: pointer;
          transition: background-color 0.3s ease;
        }

        .dot.active {
          background: #1a1a1a;
        }

        /* Enhanced Responsive Styles */

        /* Extra Small Devices (phones, 360px and up) */
        @media (min-width: 360px) {
          .hero-content h1 {
            font-size: 1.5rem;
          }

          .hero-content p {
            font-size: 0.875rem;
            padding: 0 1rem;
          }

          .image-card {
            flex: 0 0 100%;
            height: 200px;
          }

          .carousel-button {
            width: 32px;
            height: 32px;
          }

          .fixed.inset-0 {
            padding: 0.5rem;
          }

          .grid-cols-1 {
            gap: 1rem;
            padding: 0 1rem;
          }
        }

        /* Small Devices (larger phones, 480px and up) */
        @media (min-width: 480px) {
          .hero-content h1 {
            font-size: 1.75rem;
          }

          .hero-content p {
            font-size: 1rem;
          }

          .image-card {
            height: 225px;
          }

          .fixed.inset-0 {
            padding: 1rem;
          }
        }

        /* Medium Devices (tablets, 768px and up) */
        @media (min-width: 768px) {
          .hero-content h1 {
            font-size: 2.25rem;
          }

          .hero-content p {
            font-size: 1.125rem;
          }

          .image-card {
            flex: 0 0 calc(50% - 0.75rem);
            height: 250px;
          }

          .carousel-button {
            width: 36px;
            height: 36px;
          }

          .flex-col.sm\\:flex-row {
            gap: 1.5rem;
          }

          .grid-cols-1.md\\:grid-cols-3 {
            gap: 1.5rem;
          }
        }

        /* Large Devices (desktops, 1024px and up) */
        @media (min-width: 1024px) {
          .hero-content h1 {
            font-size: 3rem;
          }

          .hero-content p {
            font-size: 1.25rem;
          }

          .image-card {
            flex: 0 0 calc(33.333% - 0.75rem);
            height: 300px;
          }

          .carousel-button {
            width: 40px;
            height: 40px;
          }

          .grid-cols-1.md\\:grid-cols-3 {
            gap: 2rem;
          }
        }

        /* Extra Large Devices (large desktops, 1280px and up) */
        @media (min-width: 1280px) {
          .hero-content {
            max-width: 1200px;
          }

          .carousel-container {
            max-width: 1200px;
          }

          .max-w-4xl {
            max-width: 1200px;
          }
        }

        /* 2XL Devices (larger desktops, 1536px and up) */
        @media (min-width: 1536px) {
          .hero-content {
            max-width: 1400px;
          }

          .carousel-container {
            max-width: 1400px;
          }

          .image-card {
            height: 350px;
          }
        }

        /* Dark Mode Support */
        @media (prefers-color-scheme: dark) {
          .carousel-button {
            background: #374151;
          }

          .carousel-button:hover {
            background-color: #4b5563;
          }

          .dot {
            background: #4b5563;
          }

          .dot.active {
            background: #e5e7eb;
          }
        }

        /* Print Media Query */
        @media print {
          .carousel-button,
          .carousel-dots {
            display: none;
          }

          .image-card {
            break-inside: avoid;
            page-break-inside: avoid;
          }
        }

        /* Reduced Motion Preference */
        @media (prefers-reduced-motion: reduce) {
          .carousel-image,
          .images-wrapper {
            transition: none;
          }
        }

        /* Landscape Mode */
        @media (orientation: landscape) and (max-height: 600px) {
          .hero-section {
            padding: 2rem 1rem;
          }

          .image-card {
            height: 200px;
          }

          .fixed.inset-0 {
            align-items: flex-start;
            padding-top: 1rem;
          }
        }

        /* High Contrast Mode */
        @media (forced-colors: active) {
          .carousel-button {
            border: 1px solid ButtonText;
          }

          .dot {
            border: 1px solid ButtonText;
          }
        }

        /* Mobile Navigation */
        @media (max-width: 768px) {
          .nav-menu {
            position: fixed;
            top: 0;
            right: -100%;
            width: 80%;
            height: 100vh;
            padding: 2rem;
            background-color: white;
            transition: 0.5s;
            z-index: 100;
          }

          .nav-menu.active {
            right: 0;
          }

          .nav-item {
            margin: 2rem 0;
          }
        }

        /* Form Responsiveness */
        @media (max-width: 640px) {
          .form-container {
            padding: 1rem;
          }
          .form-input {
            font-size: 16px; /* Prevents zoom on iOS */
          }

          .form-submit {
            width: 100%;
          }
        }

        /* Course Cards Responsiveness */
        @media (max-width: 768px) {
          .course-card {
            margin-bottom: 1.5rem;
          }

          .course-card:last-child {
            margin-bottom: 0;
          }
        }

        /* Hero Image Responsiveness */
        @media (max-width: 768px) {
          .hero-image {
            height: 300px;
          }
        }

        /* Modal Responsiveness */
        @media (max-width: 640px) {
          .modal-content {
            width: 95%;
            margin: 0 auto;
          }

          .modal-header {
            padding: 1rem;
          }

          .modal-body {
            padding: 1rem;
          }
        }

        /* Button Responsiveness */
        @media (max-width: 640px) {
          .btn {
            width: 100%;
            margin-bottom: 0.5rem;
          }

          .btn:last-child {
            margin-bottom: 0;
          }
        }

        /* Testimonials Section Styles */
        .testimonials-section {
          background-color: #f9fafb;
          padding: 3rem 1rem;
        }

        .testimonials-container {
          max-width: 1280px;
          margin: 0 auto;
          position: relative;
          overflow: hidden;
        }

        .testimonials-wrapper {
          display: flex;
          gap: 0.75rem;
          transition: transform 0.5s ease;
          width: 100%;
        }

        .testimonial-card {
          background: #ffffff;
          border-radius: 0.5rem;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          padding: 1.5rem;
          flex: 0 0 calc(33.333% - 0.75rem);
          margin-right: 0.75rem;
          margin-left: -25px;
        }

        @media (max-width: 1024px) {
          .testimonial-card {
            flex: 0 0 calc(50% - 0.75rem);
          }
        }

        @media (max-width: 768px) {
          .testimonial-card {
            flex: 0 0 100%;
          }

          @media (max-width: 1024px) {
            .image-card {
              width: 50%;
            }
          }

          @media (max-width: 768px) {
            .image-card {
              width: 66.6667%;
            }
          }

          @media (max-width: 480px) {
            .image-card {
              width: 100%;
            }
            .carousel-button {
              font-size: 1rem;
            }
          }
        }
      `}</style>
    </div>
  );
};

export default HomePage;
