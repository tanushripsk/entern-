import React from "react";
import CurriculumImage from "../asset/img/Curriculum.png";

const TeacherPage = () => {
  return (
    <div className="student-wrapper">
      {/* Hero Section */}
      <div className="hero-section">
        <img
          src={CurriculumImage}
          alt="Curriculum Banner"
          className="hero-image"
        />
        <div className="hero-overlay">
          <h1 className="hero-title">Join Us as a Teacher</h1>
        </div>
      </div>

      {/* Wave Divider */}
      <svg
        className="wave"
        viewBox="0 0 1440 150"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill="#ffffff"
          d="M0,96L60,90.7C120,85,240,75,360,74.7C480,75,600,85,720,96C840,107,960,117,1080,106.7C1200,96,1320,64,1380,48L1440,32L1440,160L0,160Z"
        ></path>
      </svg>

      {/* Main Content */}
      <div className="content">
        <p>
          Are you a passionate and experienced English public speaking coach? Do
          you thrive on empowering others to find their voice? We're looking for
          dedicated educators to join our growing team in Srinagar, Uttarakhand.
          Share your expertise, shape confident communicators, and make a real
          impact. If you're committed to personalized learning and flexible
          teaching, we want to hear from you.{" "}
          <strong>Apply to teach with us today!</strong>
        </p>

        <div className="contact-wrapper">
          <div className="contact-card">
            <h3>Contact Us</h3>
            <p>
              📞 <strong>+91 6398542386</strong>
            </p>
            <p>
              📧 <strong>engtern2025@gmail.com</strong>
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <svg
        className="wave-bottom"
        viewBox="0 0 1440 150"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill="#facc15"
          d="M0,32L60,37.3C120,43,240,53,360,80C480,107,600,149,720,160C840,171,960,149,1080,117.3C1200,85,1320,43,1380,21.3L1440,0L1440,160L0,160Z"
        ></path>
      </svg>

      <style jsx>{`
        .student-wrapper {
          width: 100%;
          overflow-x: hidden;
        }

        .hero-section {
          position: relative;
          height: 300px;
          width: 100%;
        }

        .hero-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          position: absolute;
          top: 0;
          left: 0;
        }

        .hero-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            to bottom,
            rgba(0, 0, 0, 0.5),
            rgba(0, 0, 0, 0.7)
          );
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .hero-title {
          color: white;
          font-size: 2.5rem;
          font-weight: 700;
          text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.7);
          text-align: center;
        }

        .wave {
          margin-top: -1px;
          width: 100%;
        }

        .content {
          background: white;
          padding: 1.5rem 1rem 2rem;
          max-width: 1000px;
          margin: -40px auto 0;
          text-align: justify;
          font-size: 1.125rem;
          color: #444;
        }

        .contact-wrapper {
          display: flex;
          justify-content: center;
          margin-top: 2rem;
        }

        .contact-card {
          background: linear-gradient(to right, #fef9c3, #fcd34d);
          border-radius: 12px;
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
          padding: 1.5rem;
          text-align: center;
          width: 250px;
        }

        .contact-card h3 {
          font-size: 1.5rem;
          margin-bottom: 0.75rem;
          color: #333;
        }

        .contact-card p {
          margin: 0.25rem 0;
          font-size: 1rem;
        }

        .wave-bottom {
          width: 100%;
          margin-top: -1px;
        }

        @media (min-width: 768px) {
          .hero-title {
            font-size: 3.5rem;
          }

          .content {
            padding: 2.5rem 3rem;
            margin-top: -60px;
          }

          .contact-card {
            padding: 2rem;
          }
        }
      `}</style>
    </div>
  );
};

export default TeacherPage;
