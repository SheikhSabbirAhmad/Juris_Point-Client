"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import { Button } from "@heroui/react";

const Navbar = () => {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

//   const navLinks = [
//     {
//       name: "Home",
//       href: "/",
//     },
//     {
//       name: "About Us",
//       href: "/about",
//     },
//     {
//       name: "Services",
//       href: "/services",
//     },
//     {
//       name: "Blog",
//       href: "/blog",
//     },
//     {
//       name: "Contact Us",
//       href: "/contact",
//     },
//   ];

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About Us", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Contact Us", href: "#contact" },
];

  return (
    <header className="sticky top-0 z-50 bg-[#111827] shadow-lg">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-5 py-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/NavbarImg.webp"
            alt="Logo"
            width={65}
            height={65}
            priority
          />

          <div>
            <h2 className="text-white text-xl md:text-2xl font-bold leading-tight">
              Juris Point
            </h2>

            <p className="text-[#F59E0B] text-md font-bold">
               Advocate & Legal Consultant
            </p>
          </div>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`px-5 py-2 rounded-xl font-medium transition-all duration-300 ${
                  pathname === link.href
                    ? "bg-[#F59E0B] text-white"
                    : "text-gray-300 hover:text-[#F59E0B]"
                }`}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>


        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-white"
          onClick={() => setOpen(!open)}
        >
          {open ? <HiX size={28} /> : <HiMenu size={28} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {open && (
        <div className="lg:hidden bg-[#111827] border-t border-gray-700">
          <div className="flex flex-col gap-2 p-5">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={`px-4 py-3 rounded-lg transition ${
                  pathname === link.href
                    ? "bg-[#F59E0B] text-white"
                    : "text-gray-300 hover:bg-[#1F2937]"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;