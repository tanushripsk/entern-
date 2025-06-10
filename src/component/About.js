import React, { useState } from "react";
import Founder from "../asset/img/Team/Diya pant.jpg";
import SocialMediaMarketer from "../asset/img/Team/Yatharth sati.jpg";
import EnglishTutor from "../asset/img/Team/Soham.png";
import Instructor1 from "../asset/img/Team/Mansi Khugshal.jpg";
import Instructor2 from "../asset/img/Team/Sudiksha Semwal.jpg";
import aboutgirls from '../asset/img/about_girl.png';  // adjust the path & extension as per your project


const founder = {
  name: "Diya Pant",
  role: "Founder, English Communication & Public Speaker",
  image: Founder,
  description: (
    <div className="text-sm text-gray-700 space-y-4 leading-relaxed mt-4 text-justify">
      <div>
        <h4 className="text-yellow-600 font-bold text-base mb-1">About Diya Pant</h4>
        <h5 className="text-teal-600 font-semibold text-sm">Multifaceted Professional Experience:</h5>
        <ul className="list-disc ml-6">
          <li>Content Writing Head</li>
          <li>Public Speaking Instructor</li>
          <li>HR and Coordinator</li>
          <li>Public Speaking Instructor at HNBGU Central University, Srinagar, Uttarakhand</li>
        </ul>
      </div>
      <div>
        <h5 className="text-yellow-600 font-semibold text-sm">Academic Excellence:</h5>
        <p>Presented research papers at:</p>
        <ul className="list-disc ml-6">
          <li>National Conferences: IIT, Ministry of Culture, IGNCA</li>
          <li>International Conferences</li>
        </ul>
      </div>
      <div>
        <h5 className="text-yellow-600 font-semibold text-sm">Published Author:</h5>
        <ul className="list-disc ml-6">
          <li>"Say Hi to Emotions"</li>
          <li>"Love Yourself"</li>
        </ul>
      </div>
      <div>
        <h5 className="text-yellow-600 font-semibold text-sm">Founder of Engtern:</h5>
        <p>
          Dedicated to empowering individuals through English language skills and
          personal development, fostering growth and success.
        </p>
      </div>
    </div>
  ),
};

const teamMembers = [
  {
    name: "Yatharth Sati",
    role: "Social Media Marketer",
    image: SocialMediaMarketer,
    category: "Social Media Marketer",
    description:
      "A dedicated Social Media Marketer with a strong focus on crafting impactful digital strategies. He specializes in content planning, audience engagement, brand positioning, and data-driven campaign management across various platforms. His goal is to help businesses grow their online presence and achieve measurable results through effective social media marketing.",
  },
  {
    name: "Soham",
    role: "Expert English Tutor",
    image: EnglishTutor,
    category: "English Tutor",
    description:
      "Professional instructor with years of immersive experience living in both the UK and the US,I bring a global perspective to English language learning. Now based in India, I’m passionate about helping students achieve fluency and confidence in English through personalized, one-on-one sessions. Scoring a perfect 100 percentile in English in the All India CUET exam, I combine academic excellence with real-world communication skills to ensure engaging and effective lessons for learners of all levels.",
  },
  {
    name: "Mansi Khugshal",
    role: "Instructor",
    image: Instructor1,
    category: "Instructor",
    description:
      "A public speaking instructor and communication coach with a flair for expression, a passion for empowering voices, and a genuine drive to mentor. With years of experience leading clubs, debating, hosting events, and training students across disciplines, I empower individuals to speak with clarity, confidence, and conviction — whether they’re pitching ideas, handling interviews, or simply finding their voice in everyday conversations.",
  },
  {
    name: "Sudiksha Semwal",
    role: "Instructor",
    image: Instructor2,
    category: "Instructor",
    description:
      "Public Speaking InstructorI help individuals speak with confidence, clarity, and impact. With a background in English and a focus on practical communication skills, I train students and professionals to overcome stage fear, organize their thoughts, and deliver powerful speeches in any setting.",
  },
];

const categories = ["All", ...new Set(teamMembers.map((member) => member.category))];

const TeamSection = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [expanded, setExpanded] = useState({});
  const [founderExpanded, setFounderExpanded] = useState(false);

  const handleToggle = (key) => {
    setExpanded((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const filteredMembers =
    selectedCategory === "All"
      ? teamMembers
      : teamMembers.filter((member) => member.category === selectedCategory);

  return (
    <>
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

      <div className="bg-white py-12">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-12">
            Meet Our <span className="text-yellow-500">Team.</span>
          </h2>

          <div className="flex flex-col lg:flex-row gap-10">
            {/* Founder Card */}
            <div className="lg:w-1/3 w-full">
              <div className="flex flex-col items-center text-center bg-gray-50 p-6 rounded-lg shadow">
                <div className="w-50 h-40 rounded-full overflow-hidden border-4 border-yellow-400 shadow-xl">
                  <img
                    src={founder.image}
                    alt={founder.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h2 className="text-xl font-bold mt-4 text-gray-800">{founder.name}</h2>
                <p className="text-sm text-yellow-600">{founder.role}</p>
                <button
                  onClick={() => setFounderExpanded(!founderExpanded)}
                  className="text-yellow-600 text-xs mt-2 underline font-bold"
                >
                  {founderExpanded ? "Read Less" : "Read More"}
                </button>
                {founderExpanded && (
                  <div className="mt-4 w-full text-justify">{founder.description}</div>
                )}
              </div>
            </div>

            {/* Team Members */}
            <div className="flex-1">
              {/* Tabs */}
              <div className="flex flex-wrap justify-center lg:justify-start gap-3 mb-6">
                {categories.map((tag) => (
                  <button
                    key={tag}
                    onClick={() => setSelectedCategory(tag)}
                    className={`px-4 py-2 text-sm font-medium rounded-full border ${
                      selectedCategory === tag
                        ? "bg-yellow-400 text-white"
                        : "border-yellow-400 bg-yellow-100 text-yellow-700"
                    }`}
                  >
                    {tag}
                  </button>
                ))}
              </div>

              {/* Team Cards */}
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 items-start">
                {filteredMembers.map((member) => (
                  <div
                    key={member.name}
                    className="flex flex-col items-center text-center p-4 bg-gray-50 rounded-lg shadow self-start"
                  >
                    <div className="w-28 h-28 rounded-full overflow-hidden border-4 border-white shadow-md">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h4 className="text-sm font-bold mt-3 text-gray-800 uppercase">{member.name}</h4>
                    <p className="text-xs text-gray-500">{member.role}</p>
                    <button
                      onClick={() => handleToggle(member.name)}
                      className="text-yellow-600 text-xs mt-2 underline font-bold"
                    >
                      {expanded[member.name] ? "Read Less" : "Read More"}
                    </button>
                    {expanded[member.name] && (
                      <p className="text-xs text-gray-600 mt-2 text-justify">{member.description}</p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TeamSection;
