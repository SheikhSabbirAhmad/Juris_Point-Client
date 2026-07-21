"use client";

import { useState } from "react";
import {
  FaBalanceScale,
  FaBriefcase,
  FaFileContract,
  FaUsers,
  FaShieldAlt,
  FaAward,
} from "react-icons/fa";

const practiceAreas = [
  {
    id: 1,
    icon: <FaBriefcase />,
    title: "Civil Litigation",
    shortDesc:
      "Property disputes, contractual matters, and civil suits.",
    description:
      "Comprehensive representation in civil matters including property disputes, contractual conflicts, recovery suits, injunction applications, and partition suits before competent courts.",
    services: [
      "Property Disputes",
      "Contractual Matters",
      "Recovery Suits",
      "Injunction Applications",
      "Partition Suits",
    ],
  },

  {
    id: 2,
    icon: <FaBalanceScale />,
    title: "Criminal Defense",
    shortDesc:
      "Expert representation in criminal cases at all levels.",
    description:
      "Experienced criminal defense counsel providing representation in bail matters, criminal appeals, trial proceedings, anticipatory bail, and quashing petitions.",
    services: [
      "Bail Applications",
      "Criminal Appeals",
      "Trial Defense",
      "Anticipatory Bail",
      "Quashing Petitions",
    ],
  },

  {
    id: 3,
    icon: <FaFileContract />,
    title: "Corporate & Commercial Law",
    shortDesc:
      "Business formation, contracts, and compliance matters.",
    description:
      "Complete legal support for businesses including company formation, compliance, contracts, commercial disputes, and mergers.",
    services: [
      "Business Formation",
      "Contract Drafting",
      "Corporate Compliance",
      "Commercial Disputes",
      "Mergers & Acquisitions",
    ],
  },

  {
    id: 4,
    icon: <FaUsers />,
    title: "Family Law",
    shortDesc:
      "Divorce, custody, maintenance, and inheritance matters.",
    description:
      "Sensitive handling of family disputes with a focus on amicable resolution while protecting your legal rights and interests.",
    services: [
      "Divorce Proceedings",
      "Child Custody",
      "Maintenance Matters",
      "Succession & Inheritance",
      "Matrimonial Disputes",
    ],
  },

  {
    id: 5,
    icon: <FaShieldAlt />,
    title: "Constitutional Law",
    shortDesc:
      "Protection of constitutional and fundamental rights.",
    description:
      "Professional assistance in writ petitions, constitutional remedies, judicial review, and public interest litigation.",
    services: [
      "Writ Petitions",
      "PIL",
      "Fundamental Rights",
      "Judicial Review",
      "Constitutional Remedies",
    ],
  },

  {
    id: 6,
    icon: <FaAward />,
    title: "Consumer Protection",
    shortDesc:
      "Consumer disputes and compensation claims.",
    description:
      "Representation before consumer forums for defective products, service deficiencies, and compensation claims.",
    services: [
      "Consumer Complaints",
      "Product Liability",
      "Service Deficiency",
      "Compensation Claims",
      "Consumer Forums",
    ],
  },
];

export default function OurPracticeArea() {
  const [showAll, setShowAll] = useState(false);

  const previewCards = practiceAreas.slice(0, 6);

  return (
    <section className="py-24 bg-white">

      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

        <div className="text-center max-w-3xl mx-auto">

          <span className="inline-block bg-orange-100 text-[#EA7A00] px-5 py-2 rounded-full text-sm font-semibold mb-5">
            Practice Areas
          </span>

          <h2 className="text-4xl md:text-5xl font-bold text-[#0F172A]">
            Our Practice Areas
          </h2>

          <p className="mt-6 text-lg text-gray-600 leading-8">
            Comprehensive legal services designed to protect your rights,
            resolve disputes, and provide trusted legal guidance for
            individuals, families, and businesses.
          </p>

        </div>

        {/* Preview Cards */}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">

          {previewCards.map((item) => (
            <div
              key={item.id}
              className="group bg-white border border-gray-200 rounded-3xl p-8 hover:shadow-2xl hover:-translate-y-2 transition duration-300"
            >

              <div className="w-20 h-20 rounded-2xl bg-orange-100 flex items-center justify-center text-4xl text-[#EA7A00] group-hover:bg-[#EA7A00] group-hover:text-white transition">

                {item.icon}

              </div>

              <h3 className="text-3xl font-bold text-[#0F172A] mt-8">
                {item.title}
              </h3>

              <p className="text-gray-600 leading-8 mt-5">
                {item.shortDesc}
              </p>

            </div>
          ))}

        </div>
                {/* View All Button */}

        <div className="flex justify-center mt-14">

          <button
            onClick={() => setShowAll(!showAll)}
            className="bg-[#111827] hover:bg-[#EA7A00] text-white px-10 py-4 rounded-xl font-semibold text-lg transition duration-300"
          >
            {showAll ? "Show Less" : "View All Services"}
          </button>

        </div>

        {/* Detailed Services */}

        {showAll && (

          <div className="grid md:grid-cols-2 gap-8 mt-16">

            {[
              ...practiceAreas,
              {
                id: 7,
                icon: <FaBriefcase />,
                title: "Real Estate Law",
                description:
                  "Complete legal solutions for real estate transactions, property documentation, title verification, and real estate litigation.",
                services: [
                  "Property Transactions",
                  "Title Verification",
                  "Real Estate Disputes",
                  "Tenancy Matters",
                  "Land Acquisition",
                ],
              },

              {
                id: 8,
                icon: <FaUsers />,
                title: "Employment & Labour Law",
                description:
                  "Representation in employment disputes, wrongful termination, labour compliance, and industrial disputes before relevant authorities.",
                services: [
                  "Service Matters",
                  "Wrongful Termination",
                  "Industrial Disputes",
                  "Labour Compliance",
                  "Employment Contracts",
                ],
              },

              {
                id: 9,
                icon: <FaShieldAlt />,
                title: "Taxation Law",
                description:
                  "Professional assistance in income tax, VAT, tax planning, assessment proceedings, and tax litigation matters.",
                services: [
                  "Income Tax Appeals",
                  "VAT Matters",
                  "Tax Planning",
                  "Tax Litigation",
                  "Assessment Proceedings",
                ],
              },

              {
                id: 10,
                icon: <FaFileContract />,
                title: "Drafting & Documentation",
                description:
                  "Preparation of contracts, agreements, affidavits, legal notices, petitions, and professional legal documentation.",
                services: [
                  "Contract Drafting",
                  "Legal Notices",
                  "Affidavits",
                  "Agreements",
                  "Legal Opinions",
                ],
              },
            ].map((service) => (

              <div
                key={service.id}
                className="bg-white border border-gray-200 rounded-3xl p-8 shadow-sm hover:shadow-xl transition duration-300"
              >

                <div className="w-16 h-16 rounded-2xl bg-orange-100 flex items-center justify-center text-3xl text-[#EA7A00]">

                  {service.icon}

                </div>

                <h3 className="text-3xl font-bold text-[#0F172A] mt-6">

                  {service.title}

                </h3>

                <p className="text-gray-600 leading-8 mt-5">

                  {service.description}

                </p>

                <h4 className="font-semibold text-[#0F172A] mt-8 mb-4">

                  Services Include:

                </h4>

                <ul className="space-y-3">

                  {service.services.map((item, index) => (

                    <li
                      key={index}
                      className="flex items-center gap-3 text-gray-700"
                    >
                      <span className="text-[#EA7A00] font-bold">
                        ✓
                      </span>

                      {item}

                    </li>

                  ))}

                </ul>

              </div>

            ))}

          </div>

          

        )}
              </div>

    </section>
  );
}