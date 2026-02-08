"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "../app/theme/ThemeProvider";
import Image from "next/image";

export default function Header() {
  const pathname = usePathname();
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="fixed top-6 left-0 right-0 text-center w-full z-50 font-source-code flex items-center justify-center">
      <div className="w-fit mx-auto px-6 py-2.5 flex justify-center items-center gap-4 bg-gradient-to-t to-dark-charcoal-95 from-dark-gray-95 border border-theme-text rounded-xl">
        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-6 items-center text-base text-theme-text">
          <Link
            href="/"
            className={`hover:opacity-80 ${pathname === "/" ? "font-bold" : ""}`}
          >
            Home
          </Link>
          <Link
            href="/work"
            className={`hover:opacity-80 ${pathname === "/work" ? "font-bold" : ""}`}
          >
            Work
          </Link>
          <Link
            href="/about"
            className={`hover:opacity-80 ${pathname === "/about" ? "font-bold" : ""}`}
          >
            About
          </Link>
          <Link
            href="/playground"
            className={`hover:opacity-80 ${pathname === "/playground" ? "font-bold" : ""}`}
          >
            Playground
          </Link>
          <Link
            href="/contact"
            className={`hover:opacity-80 ${pathname === "/contact" ? "font-bold" : ""}`}
          >
            Contact
          </Link>
        </nav>
        {/* Mobile Menu Button */}
        {/* <button
          className="md:hidden text-gray-700 focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button> */}
      </div>
      <div className="absolute right-7">
        <button
          type="button"
          onClick={toggleTheme}
          aria-label={
            theme === "dark" ? "Switch to light mode" : "Switch to dark mode"
          }
          className="relative w-11 h-6 rounded-full transition-colors duration-300 bg-dark-charcoal border border-theme-text focus:outline-none focus:ring-2 focus:ring-theme-text/50"
        >
          <span
            className={`absolute top-1 inline-flex items-center justify-center w-4 h-4 rounded-full bg-white text-gray-800 shadow-md transition-all duration-300 ease-in-out ${
              theme === "dark" ? "left-6" : "left-1"
            }`}
          >
            {theme === "dark" ? (
              <Image unoptimized={true} src="/home/sun.gif" alt="Sun" width={12} height={12} />
            ) : (
              <Image unoptimized={true} src="/home/moon.gif" alt="Moon" width={12} height={12} />
            )}
          </span>
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
