"use client";

import Link from "next/link";
import { Menu, X, ChevronDown, Sprout, Droplets, TreePine, Globe2, ArrowRight, Activity } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import { useLanguage } from "@/context/LanguageContext";
import { languages } from "@/translations";
import type { Language } from "@/translations";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSolutionsHovered, setIsSolutionsHovered] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);
  const langRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();
  const [activeHash, setActiveHash] = useState("");
  const { language, setLanguage, t } = useLanguage();
  const currentLang = languages.find((l) => l.code === language) || languages[0];

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close language dropdown on outside click
  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      if (langRef.current && !langRef.current.contains(e.target as Node)) {
        setIsLangOpen(false);
      }
    };
    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
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

  const solutionsMegaMenu = [
    {
      category: "GROW FOOD",
      icon: Sprout,
      color: "text-nabtura-light-green",
      links: [
        { name: "Smart Greenhouses", href: "/solutions/smart-greenhouses" },
        { name: "Smart Microgreens", href: "/solutions/smart-microgreens" }
      ]
    },
    {
      category: "MANAGE WATER",
      icon: Droplets,
      color: "text-nabtura-blue",
      links: [
        { name: "Smart Irrigation", href: "/solutions/smart-irrigation" }
      ]
    },
    {
      category: "CREATE GREEN",
      icon: TreePine,
      color: "text-nabtura-green",
      links: [
        { name: "Landscapes", href: "/solutions/landscapes" },
        { name: "Urban Forests", href: "/solutions/urban-forests" },
        { name: "Desert Greening", href: "/solutions/desert-greening" }
      ]
    },
    {
      category: "TRANSFORM",
      icon: Globe2,
      color: "text-nabtura-sand",
      links: [
        { name: "Environmental Projects", href: "/solutions/environmental-projects" }
      ]
    },
    {
      category: "SUPPORTING CAPABILITIES",
      icon: Activity,
      color: "text-yellow-500",
      links: [
        { name: "NABTURA SmartCare", href: "/capabilities/smartcare" },
        { name: "NABTURA Nursery Solutions", href: "/capabilities/nursery-solutions" }
      ]
    }
  ];

  const navLinks = [
    { name: t.nav.home, href: "/" },
    { name: t.nav.solutions, href: "/solutions" },
    { name: t.nav.whoWeServe, href: "/who-we-serve" },
    { name: t.nav.workWithNabtura, href: "/work-with-nabtura" },
    { name: t.nav.possibilities, href: "/possibilities" },
    { name: t.nav.newsBlogs, href: "/blog" },
    { name: t.nav.about, href: "/about" },
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

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, href: string) => {
    if (pathname === "/" && href.startsWith("/#")) {
      e.preventDefault();
      const targetId = href.substring(2);
      const element = document.getElementById(targetId);
      if (element) {
        const headerOffset = 100;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
        
        const startPosition = window.pageYOffset;
        const distance = offsetPosition - startPosition;
        let startTime: number | null = null;
        const duration = 1200; // 1.2s smooth cinematic scroll

        const easeInOutQuart = (t: number, b: number, c: number, d: number) => {
          t /= d / 2;
          if (t < 1) return c / 2 * t * t * t * t + b;
          t -= 2;
          return -c / 2 * (t * t * t * t - 2) + b;
        };

        const animation = (currentTime: number) => {
          if (startTime === null) startTime = currentTime;
          const timeElapsed = currentTime - startTime;
          const run = easeInOutQuart(timeElapsed, startPosition, distance, duration);
          window.scrollTo(0, run);
          if (timeElapsed < duration) {
            requestAnimationFrame(animation);
          } else {
            window.history.pushState(null, "", `#${targetId}`);
          }
        };
        
        requestAnimationFrame(animation);
      }
    }
  };

  const NabturaLogo = () => (
    <svg viewBox="0 0 100 100" className="w-9 h-9 shrink-0 transition-transform group-hover:scale-105 duration-300" xmlns="http://www.w3.org/2000/svg">
      <path d="M50 95 C 20 85, 10 50, 20 30 C 40 30, 55 60, 50 95 Z" fill="#2E7D32"/>
      <path d="M50 95 C 75 80, 95 40, 85 15 C 60 15, 40 50, 50 95 Z" fill="#4CAF50"/>
      <path d="M20 30 Q 35 60 50 95" fill="none" stroke="#05150C" strokeWidth="1.5"/>
      <path d="M85 15 Q 60 50 50 95" fill="none" stroke="#05150C" strokeWidth="2"/>
    </svg>
  );

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? "bg-black/90 backdrop-blur-xl shadow-lg shadow-black" : "bg-gradient-to-b from-black/80 to-transparent"
    }`}>
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24 w-full">
          {/* Logo & Tagline (Left) */}
          <div className="flex-shrink-0 flex items-center z-50 lg:w-[300px]">
            <Link href="/" className="flex items-center gap-3 group">
              <NabturaLogo />
              <div className="flex flex-col">
                <span className="text-2xl font-black tracking-[0.15em] text-white group-hover:text-nabtura-green transition-colors leading-none pb-1">
                  NABTURA
                </span>
                <span className="text-[7.5px] font-bold tracking-[0.2em] text-gray-400 uppercase leading-none">
                  GREEN POSSIBILITIES. REAL SOLUTIONS.
                </span>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation (Center) */}
          <div className="hidden xl:flex flex-1 justify-center">
            <nav className="flex items-center gap-4 2xl:gap-6">
              {navLinks.map((link) => {
                const isActive = checkIsActive(link.href);

                if (link.name === "Solutions") {
                  return (
                    <div 
                      key={link.name} 
                      className="relative"
                      onMouseEnter={() => setIsSolutionsHovered(true)}
                      onMouseLeave={() => setIsSolutionsHovered(false)}
                    >
                      <Link 
                        href={link.href} 
                        onClick={(e) => handleNavClick(e, link.href)}
                      >
                        <motion.span
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className={`inline-flex items-center relative text-[15.5px] font-semibold tracking-wide whitespace-nowrap transition-colors py-2 cursor-pointer ${
                            isActive ? "text-nabtura-green" : "text-gray-300 hover:text-white"
                          }`}
                        >
                          {link.name}
                          <ChevronDown className={`w-3.5 h-3.5 ml-1 transition-transform duration-300 ${isSolutionsHovered ? 'rotate-180 text-nabtura-green' : ''}`} />
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
                        </motion.span>
                      </Link>
                      
                      <AnimatePresence>
                        {isSolutionsHovered && (
                          <motion.div
                            initial={{ opacity: 0, y: 15, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 10, scale: 0.95 }}
                            transition={{ duration: 0.2, type: "spring", stiffness: 100, damping: 20 }}
                            className="absolute top-full left-1/2 -translate-x-1/2 pt-6 w-[340px] z-50"
                          >
                            <div className="bg-[#0a1811]/60 backdrop-blur-3xl border border-white/10 rounded-3xl p-7 shadow-[0_20px_60px_rgba(0,0,0,0.6)] shadow-nabtura-green/10 flex flex-col gap-6" style={{ boxShadow: 'inset 0 1px 1px rgba(255,255,255,0.05)' }}>
                              {solutionsMegaMenu.map((section, idx) => {
                                const Icon = section.icon;
                                return (
                                  <div key={idx} className="flex flex-col">
                                    <div className={`flex items-center gap-2 mb-3 border-b border-white/5 pb-2`}>
                                      <Icon className={`w-4 h-4 ${section.color}`} />
                                      <span className="text-[11px] font-bold tracking-widest text-white uppercase drop-shadow-sm">{section.category}</span>
                                    </div>
                                    <div className="flex flex-col gap-1">
                                      {section.links.map(sublink => (
                                        <Link 
                                          key={sublink.name} 
                                          href={sublink.href}
                                          onClick={() => setIsSolutionsHovered(false)}
                                          className={`text-sm text-gray-300 hover:${section.color} hover:bg-white/[0.03] px-2 py-1.5 rounded-lg transition-all flex items-center group -ml-2`}
                                        >
                                          <span className={`w-1.5 h-1.5 rounded-full bg-white/10 mr-3 group-hover:bg-current transition-colors shrink-0 group-hover:scale-125`}></span>
                                          <span className="group-hover:translate-x-1 transition-transform">{sublink.name}</span>
                                        </Link>
                                      ))}
                                    </div>
                                  </div>
                                )
                              })}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                }

                return (
                  <Link 
                    href={link.href} 
                    key={link.name}
                    onClick={(e) => handleNavClick(e, link.href)}
                  >
                    <motion.span
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`inline-block relative text-[15.5px] font-semibold tracking-wide whitespace-nowrap transition-colors py-2 cursor-pointer ${
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
                    </motion.span>
                  </Link>
                );
              })}
            </nav>
          </div>

          {/* Right Side Icons & CTA */}
          <div className="hidden xl:flex justify-end items-center gap-6 lg:w-[300px]">
            <div className="flex items-center gap-4 text-white">
              {/* Language Dropdown */}
              <div className="relative" ref={langRef}>
                <button
                  onClick={() => setIsLangOpen(!isLangOpen)}
                  className="flex items-center gap-1.5 hover:text-nabtura-green transition-colors text-[13px] font-semibold px-3 py-2 rounded-full hover:bg-white/5 border border-transparent hover:border-white/10"
                >
                  <Globe2 className="w-4 h-4" />
                  <span>{currentLang.flag}</span>
                  <span>{currentLang.code.toUpperCase()}</span>
                  <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${isLangOpen ? 'rotate-180 text-nabtura-green' : ''}`} />
                </button>

                <AnimatePresence>
                  {isLangOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 8, scale: 0.95 }}
                      transition={{ duration: 0.15, type: "spring", stiffness: 200, damping: 20 }}
                      className="absolute top-full right-0 mt-2 w-44 z-50"
                    >
                      <div className="bg-[#0a1811]/90 backdrop-blur-3xl border border-white/10 rounded-2xl p-2 shadow-[0_20px_60px_rgba(0,0,0,0.6)]" style={{ boxShadow: 'inset 0 1px 1px rgba(255,255,255,0.05)' }}>
                        {languages.map((lang) => (
                          <button
                            key={lang.code}
                            onClick={() => { setLanguage(lang.code as Language); setIsLangOpen(false); }}
                            className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all ${
                              language === lang.code
                                ? 'bg-nabtura-green/20 text-nabtura-green border border-nabtura-green/30'
                                : 'text-gray-300 hover:bg-white/[0.05] hover:text-white border border-transparent'
                            }`}
                          >
                            <span className="text-lg">{lang.flag}</span>
                            <span className="flex-1 text-left">{lang.label}</span>
                            {language === lang.code && (
                              <span className="w-1.5 h-1.5 rounded-full bg-nabtura-green shadow-[0_0_6px_rgba(21,184,118,0.8)]"></span>
                            )}
                          </button>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
            <Link href="/contact">
              <motion.span
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="relative inline-flex items-center justify-center bg-gradient-to-r from-nabtura-green to-emerald-400 text-black px-6 py-2.5 rounded-full text-[14px] font-bold tracking-widest uppercase hover:from-emerald-400 hover:to-nabtura-green transition-all shadow-[0_0_20px_rgba(0,255,163,0.4)] hover:shadow-[0_0_30px_rgba(0,255,163,0.7)] whitespace-nowrap cursor-pointer group overflow-hidden"
              >
                <div className="absolute inset-0 bg-white/40 w-1/2 h-full -skew-x-12 -translate-x-[150%] group-hover:translate-x-[250%] transition-transform duration-700 ease-in-out" />
                <span className="relative z-10 flex items-center">
                  {t.nav.contactUs}
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </span>
              </motion.span>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="xl:hidden flex items-center z-50">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white focus:outline-none"
              aria-label={isMobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
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
                className="relative overflow-hidden bg-gradient-to-r from-nabtura-green to-emerald-400 text-black text-center px-8 py-4 rounded-full text-sm font-bold tracking-widest uppercase hover:from-emerald-400 hover:to-nabtura-green transition-all mt-8 shadow-[0_0_20px_rgba(0,255,163,0.4)] flex items-center justify-center group"
              >
                <div className="absolute inset-0 bg-white/40 w-1/2 h-full -skew-x-12 -translate-x-[150%] group-hover:translate-x-[250%] transition-transform duration-700 ease-in-out" />
                <span className="relative z-10 flex items-center">
                  {t.nav.contactUs}
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>

              {/* Mobile Language Picker */}
              <div className="mt-6 border-t border-white/10 pt-6">
                <p className="text-xs tracking-widest text-gray-500 uppercase mb-4">Language</p>
                <div className="flex flex-wrap gap-2">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => { setLanguage(lang.code as Language); setIsMobileMenuOpen(false); }}
                      className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium border transition-all ${
                        language === lang.code
                          ? 'bg-nabtura-green/20 text-nabtura-green border-nabtura-green/40'
                          : 'text-gray-400 border-white/10 hover:text-white hover:bg-white/5'
                      }`}
                    >
                      <span>{lang.flag}</span>
                      <span>{lang.label}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
