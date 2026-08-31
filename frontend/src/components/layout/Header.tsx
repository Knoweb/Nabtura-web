"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { name: "HOME", href: "/" },
    { name: "SOLUTIONS", href: "#" },
    { name: "WHO WE SERVE", href: "#" },
    { name: "WORK WITH NABTURA", href: "#" },
    { name: "POSSIBILITIES", href: "#" },
    { name: "ABOUT", href: "#" },
    { name: "CONTACT", href: "#" },
  ];

  return (
    <header className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="text-2xl font-bold tracking-widest text-white">
              NABTURA
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm text-gray-300 hover:text-white transition-colors tracking-wide font-medium"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center">
            <Link
              href="#contact"
              className="bg-nabtura-green text-black px-6 py-2 rounded-full font-semibold hover:bg-nabtura-light-green transition-colors"
            >
              START A CONVERSATION
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-300 hover:text-white focus:outline-none"
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-black/95 backdrop-blur-xl border-t border-white/10">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block px-3 py-4 text-base font-medium text-gray-300 hover:text-white hover:bg-white/5 rounded-md"
              >
                {item.name}
              </Link>
            ))}
            <Link
              href="#contact"
              className="block w-full text-center mt-4 bg-nabtura-green text-black px-6 py-3 rounded-md font-semibold hover:bg-nabtura-light-green transition-colors"
            >
              START A CONVERSATION
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
