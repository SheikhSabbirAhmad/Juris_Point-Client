"use client";

import {
  FaAward,
  FaUsers,
  FaShieldAlt,
} from "react-icons/fa";

const features = [
  {
    id: 1,
    icon: <FaAward />,
    title: "Expert Advocacy",
    description:
      "Years of courtroom experience with in-depth knowledge of legal procedures, litigation strategies, and effective client representation.",
  },
  {
    id: 2,
    icon: <FaUsers />,
    title: "Client-Centric Approach",
    description:
      "We listen carefully, understand your concerns, and provide personalized legal solutions focused on achieving the best possible outcome.",
  },
  {
    id: 3,
    icon: <FaShieldAlt />,
    title: "Proven Track Record",
    description:
      "Successfully handling civil, criminal, family, property, and corporate law matters with professionalism and integrity.",
  },
];

const AboutUs = () => {
  return (
    <section className="py-24 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

        <div className="text-center max-w-3xl mx-auto">

          <span className="inline-block bg-orange-100 text-[#EA7A00] px-5 py-2 rounded-full text-sm font-semibold mb-5">
            About Us
          </span>

          <h2 className="text-4xl md:text-5xl font-bold text-[#0F172A]">
            Committed to Justice & Integrity
          </h2>

          <p className="mt-6 text-lg text-gray-600 leading-8">
            We are committed to providing trusted legal representation
            with professionalism, integrity, and a client-focused
            approach tailored to your unique legal needs.
          </p>

        </div>

        {/* Cards */}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-20">

          {features.map((feature) => (
            <div
              key={feature.id}
              className="group bg-white rounded-3xl p-10 shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
            >

              {/* Icon */}

              <div className="w-20 h-20 rounded-full bg-orange-100 flex items-center justify-center text-[#EA7A00] text-4xl group-hover:bg-[#EA7A00] group-hover:text-white transition-all duration-300">
                {feature.icon}
              </div>

              {/* Title */}

              <h3 className="mt-8 text-3xl font-bold text-[#0F172A] leading-tight">
                {feature.title}
              </h3>

              {/* Description */}

              <p className="mt-6 text-gray-600 leading-8 text-lg">
                {feature.description}
              </p>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default AboutUs;