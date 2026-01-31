"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="fixed top-6 left-0 right-0 text-center w-full z-50 font-source-code">
      <div className="w-fit mx-auto px-6 py-2.5 flex justify-center items-center bg-gradient-to-t to-dark-charcoal from-[#18191B] border border-white rounded-xl">
        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-6 items-center text-base">
          <Link
            href="/"
            className={`hover:text-gray-400 ${pathname === "/" ? "font-bold" : ""}`}
          >
            Home
          </Link>
          <Link
            href="/work"
            className={`hover:text-gray-400 ${pathname === "/work" ? "font-bold" : ""}`}
          >
            Work
          </Link>
          <Link
            href="/about"
            className={`hover:text-gray-400 ${pathname === "/about" ? "font-bold" : ""}`}
          >
            About
          </Link>
          <Link
            href="/playground"
            className={`hover:text-gray-400 ${pathname === "/playground" ? "font-bold" : ""}`}
          >
            Playground
          </Link>
          <Link
            href="/contact"
            className={`hover:text-gray-400 ${pathname === "/contact" ? "font-bold" : ""}`}
          >
            Contact
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700 focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {/* {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 shadow-md">
          <nav className="flex flex-col space-y-4 p-5 text-gray-700 font-medium">
            <Link href="/" onClick={toggleMenu} className="hover:text-blue-600 transition">
              Home
            </Link>
            <Link href="/about" onClick={toggleMenu} className="hover:text-blue-600 transition">
              About
            </Link>
            <Link href="/services" onClick={toggleMenu} className="hover:text-blue-600 transition">
              Services
            </Link>
            <Link href="/book-meeting" onClick={toggleMenu} className="hover:text-blue-600 transition">
              Book a Meeting
            </Link>
            <Link href="/projects" onClick={toggleMenu} className="hover:text-blue-600 transition">
              Projects
            </Link>
            <Link href="/case-studies" onClick={toggleMenu} className="hover:text-blue-600 transition">
              Case Studies
            </Link>
            <Link href="/contact" onClick={toggleMenu} className="hover:text-blue-600 transition">
              Contact
            </Link>
          </nav>
        </div>
      )} */}
    </header>
  );
}
