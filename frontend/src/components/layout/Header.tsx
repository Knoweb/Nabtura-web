"use client";

import Link from "next/link";
import { Menu, X, ChevronDown, Sprout, Droplets, TreePine, Globe2, ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const [activeHash, setActiveHash] = useState("");

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // Update active hash based on scrolling
    const handleHash = () => setActiveHash(window.location.hash);
    handleHash();
    window.addEventListener("hashchange", handleHash);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveHash(`#${entry.target.id}`);
          }
        });
      },
      { rootMargin: "-100px 0px -80% 0px" } // Triggers when section passes top 100px
    );

    // Delay slightly to ensure DOM is ready
    setTimeout(() => {
      const sections = document.querySelectorAll("section[id]");
      sections.forEach((section) => observer.observe(section));
    }, 500);

    return () => {
      window.removeEventListener("hashchange", handleHash);
      observer.disconnect();
    };
  }, [pathname]);

  const navLinks = [
    { name: "HOME", href: "/" },
    { name: "SOLUTIONS", href: "/solutions" },
    { name: "WHO WE SERVE", href: "/#who-we-serve" },
    { name: "WORK WITH NABTURA", href: "/#how-we-work" },
    { name: "POSSIBILITIES", href: "/possibilities" },
    { name: "ABOUT", href: "/about" },
    { name: "CONTACT", href: "/contact" },
  ];

  const checkIsActive = (href: string) => {
    if (href.startsWith("/#")) {
      const hash = href.substring(1);
      return pathname === "/" && activeHash === hash;
    }
    if (href === "/") {
      return pathname === "/" && (!activeHash || activeHash === "#hero" || activeHash === "");
    }
    return pathname.startsWith(href);
  };

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
              {navLinks.map((link) => {
                const isActive = checkIsActive(link.href);
                return (
                  <Link href={link.href} key={link.name} passHref legacyBehavior>
                    <motion.a
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`relative text-xs font-bold tracking-wider uppercase whitespace-nowrap transition-colors py-2 cursor-pointer ${
                        isActive ? "text-nabtura-green" : "text-gray-300 hover:text-white"
                      }`}
                    >
                      {link.name}
                      {/* Active Indicator Underline Animation */}
                      {isActive && (
                        <motion.div
                          layoutId="activeNavTab"
                          className="absolute -bottom-1 left-0 right-0 h-0.5 bg-nabtura-green"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        />
                      )}
                    </motion.a>
                  </Link>
                );
              })}
            </nav>

            <Link href="/contact" passHref legacyBehavior>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-nabtura-green text-black px-6 py-3 rounded-full text-xs font-bold tracking-widest hover:bg-nabtura-light-green transition-all uppercase shadow-lg shadow-nabtura-green/20 whitespace-nowrap ml-2 cursor-pointer"
              >
                START A CONVERSATION
              </motion.a>
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
              {navLinks.map((link) => {
                const isActive = checkIsActive(link.href);
                return (
                  <Link 
                    key={link.name} 
                    href={link.href} 
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`text-xl font-bold tracking-widest transition-colors ${
                      isActive ? "text-nabtura-green" : "text-white"
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
              
              <Link
                href="/contact"
                onClick={() => setIsMobileMenuOpen(false)}
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
