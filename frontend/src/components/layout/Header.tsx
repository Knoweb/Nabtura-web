"use client";

import Link from "next/link";
import { Menu, X, ChevronDown, Sprout, Droplets, TreePine, Globe2, ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const solutionsMenu = [
    {
      title: "GROW FOOD",
      icon: Sprout,
      color: "text-nabtura-light-green",
      links: [
        { name: "Nabtura Smart Greenhouses", href: "/solutions/smart-greenhouses" },
        { name: "Nabtura Smart Microgreens", href: "/solutions/smart-microgreens" }
      ]
    },
    {
      title: "MANAGE WATER",
      icon: Droplets,
      color: "text-nabtura-blue",
      links: [
        { name: "Nabtura Smart Irrigation", href: "/solutions/smart-irrigation" }
      ]
    },
    {
      title: "CREATE GREEN",
      icon: TreePine,
      color: "text-nabtura-green",
      links: [
        { name: "Nabtura Landscapes", href: "/solutions/landscapes" },
        { name: "Nabtura Urban Forests", href: "/solutions/urban-forests" },
        { name: "Nabtura Desert Greening", href: "/solutions/desert-greening" }
      ]
    },
    {
      title: "TRANSFORM ENVIRONMENTS",
      icon: Globe2,
      color: "text-nabtura-sand",
      links: [
        { name: "Nabtura Environmental Projects", href: "/solutions/environmental-projects" }
      ]
    }
  ];

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? "bg-black/90 backdrop-blur-xl border-b border-white/10 shadow-lg shadow-black" : "bg-gradient-to-b from-black/80 to-transparent"
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center z-50">
            <Link href="/" className="text-3xl font-bold tracking-[0.2em] text-white hover:text-nabtura-green transition-colors">
              NABTURA
            </Link>
          </div>

          {/* Desktop Navigation & CTA */}
          <div className="hidden xl:flex items-center gap-6">
            <nav className="flex items-center gap-6">
              <Link href="/" className="text-xs font-bold tracking-wider text-gray-300 hover:text-white transition-colors uppercase whitespace-nowrap">
                HOME
              </Link>

              <Link href="/solutions" className="text-xs font-bold tracking-wider text-gray-300 hover:text-white transition-colors uppercase whitespace-nowrap">
                SOLUTIONS
              </Link>

              <Link href="/#who-we-serve" className="text-xs font-bold tracking-wider text-gray-300 hover:text-white transition-colors uppercase whitespace-nowrap">
                WHO WE SERVE
              </Link>
              <Link href="/#how-we-work" className="text-xs font-bold tracking-wider text-gray-300 hover:text-white transition-colors uppercase whitespace-nowrap">
                WORK WITH NABTURA
              </Link>
              <Link href="/possibilities" className="text-xs font-bold tracking-wider text-gray-300 hover:text-white transition-colors uppercase whitespace-nowrap">
                POSSIBILITIES
              </Link>
              <Link href="/about" className="text-xs font-bold tracking-wider text-gray-300 hover:text-white transition-colors uppercase whitespace-nowrap">
                ABOUT
              </Link>
              <Link href="/contact" className="text-xs font-bold tracking-wider text-gray-300 hover:text-white transition-colors uppercase whitespace-nowrap">
                CONTACT
              </Link>
            </nav>

            <Link
              href="/contact"
              className="bg-nabtura-green text-black px-6 py-3 rounded-full text-xs font-bold tracking-widest hover:bg-nabtura-light-green hover:scale-105 transition-all uppercase shadow-lg shadow-nabtura-green/20 whitespace-nowrap ml-2"
            >
              START A CONVERSATION
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="xl:hidden flex items-center z-50">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white focus:outline-none"
            >
              {isMobileMenuOpen ? <X size={32} /> : <Menu size={32} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "100vh" }}
            exit={{ opacity: 0, height: 0 }}
            className="xl:hidden bg-black/95 backdrop-blur-3xl absolute top-0 left-0 w-full pt-24 px-6 overflow-y-auto"
          >
            <div className="flex flex-col gap-6 pb-20">
              <Link href="/" className="text-xl font-bold text-white tracking-widest">HOME</Link>
              
              <div className="space-y-4">
                <Link href="/solutions" className="text-xl font-bold text-white tracking-widest inline-block">SOLUTIONS</Link>
              </div>

              <Link href="/#who-we-serve" className="text-xl font-bold text-white tracking-widest">WHO WE SERVE</Link>
              <Link href="/#how-we-work" className="text-xl font-bold text-white tracking-widest">WORK WITH NABTURA</Link>
              <Link href="/possibilities" className="text-xl font-bold text-white tracking-widest">POSSIBILITIES</Link>
              <Link href="/about" className="text-xl font-bold text-white tracking-widest">ABOUT</Link>
              <Link href="/contact" className="text-xl font-bold text-white tracking-widest">CONTACT</Link>
              
              <Link
                href="/contact"
                className="bg-nabtura-green text-black text-center px-8 py-4 rounded-full text-sm font-bold tracking-widest hover:bg-nabtura-light-green transition-all uppercase mt-8"
              >
                START A CONVERSATION
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
