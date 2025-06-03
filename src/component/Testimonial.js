import React, { useState, useEffect } from 'react';
import logoss from "../asset/img/Engtern_logo.png";
import testimonialImage from "../asset/img/testimonial.png";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Manoj Mishra",
      role: "Software testing Engineer",
      text: "Teaching style is excellent! It took just 2 months of working with Diya Ma'am to see noticeable improvement, and my confidence level has definitely boosted. Amazing, Thank you for your guidance!",
      image: logoss
    },
    {
      name: "Muneet Singh",
      role: "Agency Owner",
      text: "I love her way of teaching. ... She is humble, polite and co operative",
      image: logoss
    },
    {
      name: "Sanjit",
      role: "Manager",
      text: "To be honest, the way you explained the topics was very clear. It really helped me understand and learn communication techniques and skills",
      image: logoss
    },
    {
      name: "Vinay",
      role: "DGM Finance", 
      text: "I wanted to take a moment to express my appreciation for the exceptional teaching I received from you. Your ability to break down complex concepts into understandable",
      image: logoss
    },
    {
      name: "Suraj sharma",
      role: "Manager Procurement",
      text: "It was great experience, lots of things learned and build my confidence.",
      image: logoss
    },
    {
      name: "Pranav Kumar",
      role: "Investment banker",
      text: "Diya mam is an exceptional teacher whose dedication and passion for teaching are evident in every class. Her clear explanations and engaging teaching style make learning enjoyable and effective. I highly recommend her for learning english communication skills and Personal development skills.",
      image: logoss
    },
    {
      name: "Priti shekhawat",
      role: "Student",
      text: "My experience of learning English from her is so so good.",
      image: logoss
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1200);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    if (typeof window !== 'undefined') {
      setWindowWidth(window.innerWidth);
      window.addEventListener('resize', handleResize);
    }

    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener('resize', handleResize);
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
    <div style={{ width: '100%' }}>
      <style>
        {`
          .hero-section {
            position: relative;
            overflow: hidden;
            height: 400px;
            margin-top: 20px;
          }

          .hero-image {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }

          .hero-content {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            text-align: center;
            color: white;
            z-index: 10;
          }

          .hero-content h1 {
            font-size: 3.75rem;
            font-weight: 800;
            margin-bottom: 1rem;
            animation: fadeInDown 1s ease-out;
          }

          .hero-content p {
            font-size: 1.25rem;
            max-width: 36rem;
            margin: 1rem auto;
            animation: fadeInUp 1s ease-out 0.5s both;
          }

          .testimonials-section {
            background-color: #f9fafb;
            padding: 4rem 1rem;
          }

          .testimonials-container {
            max-width: 1280px;
            margin: 0 auto;
            position: relative;
            overflow: hidden;
          }

          .carousel-container {
            position: relative;
            display: flex;
            align-items: center;
          }

          .testimonials-wrapper {
            display: flex;
            gap: 1rem;
            transition: transform 0.5s ease;
            width: 100%;
          }

          .testimonial-card {
            background: #ffffff;
            border-radius: 0.5rem;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            padding: 2rem;
            flex: 0 0 calc(33.333% - 1rem);
            margin-right: 1rem;
            transition: transform 0.3s ease, box-shadow 0.3s ease;
            animation: fadeIn 0.5s ease-out;
          }

          .testimonial-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
          }

          .testimonial-header {
            display: flex;
            align-items: center;
            margin-bottom: 1.5rem;
          }

          .testimonial-image {
            width: 4rem;
            height: 4rem;
            margin-right: 1rem;
            animation: rotateIn 1s ease-out;
          }

          .testimonial-image img {
            width: 100%;
            height: 100%;
            border-radius: 50%;
            object-fit: cover;
          }

          .quote-icon {
            width: 2rem;
            height: 2rem;
            fill: #9ca3af;
            animation: scaleIn 0.5s ease-out;
          }

          .testimonial-content {
            flex-grow: 1;
          }

          .testimonial-content h3 {
            font-size: 1.25rem;
            font-weight: 600;
            margin-bottom: 0.5rem;
            color: #1a1a1a;
            animation: fadeInRight 0.5s ease-out;
          }

          .testimonial-text {
            color: #4b5563;
            margin-bottom: 1rem;
            line-height: 1.5;
            animation: fadeInLeft 0.5s ease-out 0.2s both;
          }

          .testimonial-role {
            font-size: 0.875rem;
            color: #6b7280;
            font-weight: 500;
            animation: fadeInUp 0.5s ease-out 0.4s both;
          }

          .carousel-button {
            background: #ffffff;
            border: none;
            border-radius: 50%;
            width: 40px;
            height: 40px;
            display: flex;
            align-items: center;
            justify-content: center;
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            cursor: pointer;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
            z-index: 1;
            transition: background-color 0.3s ease, transform 0.3s ease;
          }

          .carousel-button:hover {
            background-color: #f3f4f6;
            transform: translateY(-50%) scale(1.1);
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
            margin-top: 2rem;
          }

          .dot {
            width: 8px;
            height: 8px;
            border-radius: 50%;
            background: #d1d5db;
            border: none;
            padding: 0;
            cursor: pointer;
            transition: background-color 0.3s ease, transform 0.3s ease;
          }

          .dot:hover {
            transform: scale(1.2);
          }

          .dot.active {
            background: #1a1a1a;
            animation: pulse 2s infinite;
          }

          @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
          }

          @keyframes fadeInDown {
            from { opacity: 0; transform: translateY(-20px); }
            to { opacity: 1; transform: translateY(0); }
          }

          @keyframes fadeInUp {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }

          @keyframes fadeInLeft {
            from { opacity: 0; transform: translateX(-20px); }
            to { opacity: 1; transform: translateX(0); }
          }

          @keyframes fadeInRight {
            from { opacity: 0; transform: translateX(20px); }
            to { opacity: 1; transform: translateX(0); }
          }

          @keyframes rotateIn {
            from { transform: rotate(-90deg); opacity: 0; }
            to { transform: rotate(0); opacity: 1; }
          }

          @keyframes scaleIn {
            from { transform: scale(0); opacity: 0; }
            to { transform: scale(1); opacity: 1; }
          }

          @keyframes pulse {
            0% { transform: scale(1); }
            50% { transform: scale(1.2); }
            100% { transform: scale(1); }
          }

          @media (max-width: 1280px) {
            .testimonials-container {
              max-width: 100%;
              padding: 0 2rem;
            }
            
            .testimonial-card {
              flex: 0 0 calc(50% - 1rem);
            }
          }

          @media (max-width: 1024px) {
            .hero-section {
              height: 350px;
            }

            .hero-content h1 {
              font-size: 3rem;
            }

            .testimonial-card {
              flex: 0 0 calc(50% - 1rem);
            }
          }

          @media (max-width: 768px) {
            .hero-section {
              height: 300px;
            }

            .hero-content h1 {
              font-size: 2.5rem;
            }
            
            .hero-content p {
              font-size: 1rem;
              max-width: 100%;
            }

            .testimonials-section {
              padding: 2rem 1rem;
            }

            .testimonial-card {
              flex: 0 0 100%;
            }

            .carousel-button {
              display: none;
            }
          }

          @media (max-width: 640px) {
            .hero-section {
              height: 250px;
            }

            .hero-content h1 {
              font-size: 2rem;
            }

            .testimonial-card {
              padding: 1.5rem;
            }

            .testimonial-image {
              width: 3rem;
              height: 3rem;
            }

            .testimonial-content h3 {
              font-size: 1.1rem;
            }

            .testimonial-text {
              font-size: 0.9rem;
            }

            .testimonial-role {
              font-size: 0.8rem;
            }
          }

          @media (max-width: 480px) {
            .hero-section {
              height: 200px;
            }

            .hero-content h1 {
              font-size: 1.75rem;
            }

            .testimonials-container {
              padding: 0 1rem;
            }

            .testimonial-card {
              padding: 1rem;
            }
          }
        `}
      </style>

      <div className="hero-section">
        <img
          src={testimonialImage}
          alt=""
          className="hero-image"
        />
        <div className="hero-content">
         
        </div>
      </div>

      <div className="testimonials-section">
      <h2 className="text-3xl font-bold text-center mb-6">What Our Students Say</h2>
        <div className="testimonials-container">
          <div 
            className="carousel-container"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <button className="carousel-button prev" onClick={handlePrevious}>❮</button>
            <div 
              className="testimonials-wrapper"
              style={{
                transform: `translateX(-${currentIndex * (100 / getItemsToShow())}%)`
              }}
            >
              {testimonials.map((testimonial, index) => (
                <div 
                  className="testimonial-card" 
                  key={index}
                >
                  <div className="testimonial-header w-full flex justify-center items-center">
                    <div className="testimonial-image flex justify-center items-center bg-gray-100 rounded-full" style={{ width: "150px", height: "150px" }}>
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.name} 
                        style={{ width: "150px", height: "150px", borderRadius: "50%", objectFit: "cover" }}
                      />
                    </div>
                  </div>
                  <div className="testimonial-content">
                    <h3>{testimonial.name}</h3>
                    <p className="testimonial-text">{testimonial.text}</p>
                    <p className="testimonial-role">{testimonial.role}</p>
                  </div>
                </div>
              ))}
            </div>
            <button className="carousel-button next" onClick={handleNext}>❯</button>
          </div>
          <div className="carousel-dots">
            {Array.from({ length: testimonials.length - getItemsToShow() + 1 }).map((_, idx) => (
              <button
                key={idx}
                className={`dot ${currentIndex === idx ? 'active' : ''}`}
                onClick={() => setCurrentIndex(idx)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;

