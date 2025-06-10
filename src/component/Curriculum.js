import React from "react";
import CurriculumImage from "../asset/img/Curriculum.png";
import ConceptMapImage from "../asset/img/New-concept-map.jpg";

const Curriculum = () => {
  return (
    <div className="w-full overflow-x-hidden">
      {/* Banner */}
      <img
        src={CurriculumImage}
        alt="Curriculum Banner"
        className="w-full h-auto object-cover md:h-[450px]"
      />

      {/* Content */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
        <h1 className="text-3xl md:text-4xl font-extrabold text-gray-800 mb-6">
          Our Dynamic Curriculum
        </h1>
        <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-10">
          At Engtern, our curriculum is meticulously designed to transform you
          into a confident and articulate English public speaker. We don't
          believe in rigid, generic plans. Instead, our dynamic approach focuses
          on practical application and real-world scenarios, ensuring you gain
          skills you can use immediately.
        </p>

        <h3 className="text-2xl font-bold text-gray-800 mb-4">
          Tailored to Your Goals
        </h3>
        <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-10">
          Every student's journey begins with an assessment to understand their
          current English proficiency and public speaking goals. This allows us
          to <strong>personalize your learning path</strong>, whether you're
          starting from scratch, refining your accent, or perfecting your
          presentation skills. Our modules are flexible, adapting to your unique
          needs and pace.
        </p>

        {/* Second Image */}
        <img
          src={ConceptMapImage}
          alt="Curriculum Details"
          className="w-full rounded-xl shadow-lg mx-auto"
        />
      </div>
    </div>
  );
};

export default Curriculum;
