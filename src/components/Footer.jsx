"use client";

import Image from "next/image";
import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer
      id="contact"
      className="bg-[#111827] text-gray-300"
    >
      <div className="max-w-7xl mx-auto px-6 py-12">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">

          {/* Logo */}

          <div>

            <Link
              href="#home"
              className="flex items-center gap-3"
            >
              <Image
                src="/NavbarImg.webp"
                alt="Logo"
                width={55}
                height={55}
              />

              <div>
                <h2 className="text-2xl font-bold text-white">
                  Juris Point
                </h2>

                <p className="text-[#F59E0B] text-sm">
                  Advocate & Legal Consultant
                </p>
              </div>
            </Link>

            <p className="mt-5 text-sm leading-7 text-gray-400">
              We provide trusted legal consultation and professional
              representation with integrity, dedication, and excellence.
              Our goal is to protect your rights and deliver practical
              legal solutions tailored to your needs.
            </p>

          </div>

          {/* Quick Links */}

          <div>

            <h3 className="text-white text-lg font-semibold mb-5">
              Quick Links
            </h3>

            <ul className="space-y-3 text-sm">

              <li>
                <Link
                  href="#home"
                  className="hover:text-[#F59E0B] transition"
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  href="#about"
                  className="hover:text-[#F59E0B] transition"
                >
                  About Us
                </Link>
              </li>

              <li>
                <Link
                  href="#services"
                  className="hover:text-[#F59E0B] transition"
                >
                  Services
                </Link>
              </li>

              <li>
                <Link
                  href="#blog"
                  className="hover:text-[#F59E0B] transition"
                >
                  Blog
                </Link>
              </li>

              <li>
                <Link
                  href="#contact"
                  className="hover:text-[#F59E0B] transition"
                >
                  Contact Us
                </Link>
              </li>

            </ul>

          </div>

          {/* Contact */}

          <div>

            <h3 className="text-white text-lg font-semibold mb-5">
              Contact Information
            </h3>

            <div className="space-y-4 text-sm">

              <div className="flex items-start gap-3">

                <FaPhoneAlt className="text-[#F59E0B] mt-1 flex-shrink-0" />

                <span>+880 1712-345678</span>

              </div>

              <div className="flex items-start gap-3">

                <FaEnvelope className="text-[#F59E0B] mt-1 flex-shrink-0" />

                <span>info@jurispoint.com</span>

              </div>

              <div className="flex items-start gap-3">

                <FaMapMarkerAlt className="text-[#F59E0B] mt-1 flex-shrink-0" />

                <span>
                  Supreme Court Bar Association,
                  Shahbagh, Dhaka-1000,
                  Bangladesh
                </span>

              </div>

            </div>

            {/* Social */}

            <div className="flex gap-3 mt-6">

              <Link
                href="#"
                className="w-9 h-9 rounded-full bg-[#1F2937] hover:bg-[#F59E0B] hover:text-white flex items-center justify-center transition-all duration-300"
              >
                <FaFacebookF />
              </Link>

              <Link
                href="#"
                className="w-9 h-9 rounded-full bg-[#1F2937] hover:bg-[#F59E0B] hover:text-white flex items-center justify-center transition-all duration-300"
              >
                <FaInstagram />
              </Link>

              <Link
                href="#"
                className="w-9 h-9 rounded-full bg-[#1F2937] hover:bg-[#F59E0B] hover:text-white flex items-center justify-center transition-all duration-300"
              >
                <FaTwitter />
              </Link>

              <Link
                href="#"
                className="w-9 h-9 rounded-full bg-[#1F2937] hover:bg-[#F59E0B] hover:text-white flex items-center justify-center transition-all duration-300"
              >
                <FaLinkedinIn />
              </Link>

            </div>

          </div>

        </div>

        {/* Bottom */}

        <div className="border-t border-gray-700 mt-10 pt-5 flex flex-col md:flex-row justify-between items-center gap-4 text-sm">

          <p className="text-gray-400 text-center md:text-left">
            © {new Date().getFullYear()} Juris Point. All Rights Reserved.
          </p>

          <div className="flex items-center gap-6">

            <Link
              href="/privacy-policy"
              className="hover:text-[#F59E0B] transition"
            >
              Privacy Policy
            </Link>

            <Link
              href="/terms"
              className="hover:text-[#F59E0B] transition"
            >
              Terms & Conditions
            </Link>

          </div>

        </div>

      </div>
    </footer>
  );
};

export default Footer;