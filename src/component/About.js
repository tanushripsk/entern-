import React, { useState } from 'react';
import aboutgirls from "../asset/img/about_girl.png";
import { Facebook, Instagram, Linkedin } from 'lucide-react';
import diya from "../asset/img/diya.webp";
import prashantsir from "../asset/img/prashantsir.webp";

const About = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleReadMore = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="bg-white">
      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes scaleIn {
          from { transform: scale(1); }
          to { transform: scale(1.05); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out forwards;
        }
        .animate-scaleIn:hover {
          animation: scaleIn 0.3s ease-out forwards;
        }

        /* Text alignment media queries */
        @media (max-width: 768px) {
          .founder-content {
            flex-direction: column;
            align-items: center;
            text-align: center;
          }
          .founder-image {
            margin-left: auto;
            margin-right: auto;
          }
          h1, h3, p {
            text-align: center;
          }
          .text-lg, .text-base {
            text-align: center;
            padding: 0 1rem;
          }
          ul {
            text-align: left;
            padding-left: 1rem;
          }
          .list-disc {
            margin-left: 1rem;
          }
        }

        @media (max-width: 640px) {
          .container {
            padding: 0 1rem;
          }
          h1 {
            font-size: 1.75rem;
            line-height: 2.25rem;
            text-align: center;
          }
          .text-lg {
            font-size: 1rem;
            line-height: 1.5rem;
          }
          .founder-content p {
            padding: 0 0.5rem;
          }
          .list-disc {
            margin-left: 0.5rem;
          }
        }

        @media (min-width: 769px) {
          .text-left-desktop {
            text-align: left;
          }
          .founder-content {
            text-align: center;
          }
          ul {
            text-align: left;
          }
        }
      `}</style>

      {/* Rest of your component code remains exactly the same */}
      <div className="container mx-auto px-4 py-8 animate-fadeIn">
        <div className="flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0 md:space-x-8">
          <div className="w-full md:w-1/2">
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              <span className="text-yellow-500">Engtern</span>: English, Your Gateway to a Brighter Future!
            </h1>
            <p className="text-lg text-gray-600 mb-4">
              ENGTERN, a team of amazing teachers—along with the management team, have a vision of providing quality and catering to the needs of everyone irrespective of the issues they have.
            </p>
            <p className="text-base text-teal-500 italic">
              <b>"Prices won't make a hole in your pocket instead content will make you a whole person"</b>
            </p>
          </div>
          <div className="w-full md:w-1/2">
            <div className="relative h-[300px] sm:h-[400px] rounded-lg overflow-hidden animate-scaleIn">
              <img
                src={aboutgirls}
                alt="Engtern - English Learning"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>

      <section className="bg-gradient-to-b from-[#f5eeff] to-[white] py-12 animate-fadeIn">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold text-center mb-8">Meet Our <span className='text-yellow-400'>Founders</span></h1>
          <div className="flex flex-col md:flex-row items-start justify-between space-y-8 md:space-y-0 md:space-x-8">
            <div className="w-full md:w-1/2 flex flex-col items-center founder-content">
              <div className="relative h-[350px] w-full max-w-[320px] rounded-lg overflow-hidden mb-4 founder-image animate-scaleIn">
                <img
                  src={diya}
                  alt="Founder Image 1"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">Diya Pant</h3>
              <p className="text-gray-600 mb-4 text-center">
                Co-Founder, English Communication & Public Speaker
              </p>
              <div className="flex justify-center space-x-4 mb-4">
                <a href="https://www.facebook.com/profile.php?id=61570419377220" className="bg-blue-600 p-2 rounded-full text-white hover:bg-blue-700 transition duration-300">
                  <Facebook size={20} />
                </a>
                <a href="https://www.instagram.com/engtern2025/" className="bg-blue-600 p-2 rounded-full text-white hover:bg-blue-700 transition duration-300">
                  <Instagram size={20} />
                </a>
                <a href="https://www.linkedin.com/in/engtern-english-made-easy-749b7a343/" className="bg-blue-600 p-2 rounded-full text-white hover:bg-blue-700 transition duration-300">
                  <Linkedin size={20} />
                </a>
              </div>
              <button
                onClick={toggleReadMore}
                className="bg-yellow-500 text-black px-4 py-2 rounded hover:bg-teal-500 transition duration-300"
              >
                {isExpanded ? 'Read Less About Diya Pant' : 'Read More About Diya Pant '}
              </button>
              {isExpanded && (
                <div className="mt-8 text-gray-700 animate-fadeIn max-w-3xl mx-auto px-4">
                  <h3 className='text-xl font-semibold text-yellow-500 mb-4'>About Diya Pant</h3>
                  <h4 className="text-lg font-semibold mb-2 text-teal-500">Multifaceted Professional Experience:</h4>
                  <ul className="list-disc list-inside mb-4">
                    <li>Content Writing Head</li>
                    <li>Public Speaking Instructor</li>
                    <li>HR and Coordinator</li>
                    <li>Guest Faculty at Central University, Uttarakhand</li>
                  </ul>

                  <h4 className="text-lg font-semibold mb-2 text-yellow-500">Academic Excellence:</h4>
                  <p className="mb-2">Presented research papers at:</p>
                  <ul className="list-disc list-inside mb-4">
                    <li>National Conferences: IIT, Ministry of Culture, IGNCA</li>
                    <li>International Conferences</li>
                  </ul>

                  <h4 className="text-lg font-semibold mb-2 text-yellow-500">Published Author:</h4>
                  <ul className="list-disc list-inside mb-4">
                    <li>"Say Hi to Emotions"</li>
                    <li>"Love Yourself"</li>
                  </ul>

                  <h4 className="text-lg font-semibold mb-2 text-yellow-500">Founder of Engtern:</h4>
                  <p>
                    Dedicated to empowering individuals through English language skills and personal development, 
                    fostering growth and success.
                  </p>
                </div>
              )}
            </div>

            <div className="w-full md:w-1/2 flex flex-col items-center founder-content">
              <div className="relative h-[350px] w-full max-w-[320px] rounded-lg overflow-hidden mb-4 founder-image animate-scaleIn">
                <img
                  src={prashantsir}
                  alt="Founder Image 2"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>

              <h3 className="text-xl font-semibold mb-2">Prashant Kadhao</h3>
              <p className="text-gray-600 mb-4 text-center">
                Co-Founder Technical Partner Of Engtern
              </p>
              <div className="flex justify-center space-x-4 mb-4">
                <a href="#" className="bg-blue-600 p-2 rounded-full text-white hover:bg-blue-700 transition duration-300">
                  <Facebook size={20} />
                </a>
                <a href="#" className="bg-blue-600 p-2 rounded-full text-white hover:bg-blue-700 transition duration-300">
                  <Instagram size={20} />
                </a>
                <a href="#" className="bg-blue-600 p-2 rounded-full text-white hover:bg-blue-700 transition duration-300">
                  <Linkedin size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;