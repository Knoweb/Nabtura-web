"use client";

import Link from "next/link";
import { Menu, X, ChevronDown, Sprout, Droplets, TreePine, Globe2, ArrowRight, Activity } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSolutionsHovered, setIsSolutionsHovered] = useState(false);
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
    { name: "HOME", href: "/" },
    { name: "SOLUTIONS", href: "/solutions" },
    { name: "WHO WE SERVE", href: "/who-we-serve" },
    { name: "WORK WITH NABTURA", href: "/work-with-nabtura" },
    { name: "POSSIBILITIES", href: "/possibilities" },
    { name: "NEWS / BLOGS", href: "/blog" },
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

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? "bg-black/90 backdrop-blur-xl shadow-lg shadow-black" : "bg-gradient-to-b from-black/80 to-transparent"
    }`}>
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24 w-full">
          {/* Logo (Left) */}
          <div className="flex-shrink-0 flex items-center z-50 lg:w-[200px]">
            <Link href="/" className="text-3xl font-bold tracking-[0.2em] text-white hover:text-nabtura-green transition-colors">
              NABTURA
            </Link>
          </div>

          {/* Desktop Navigation (Center) */}
          <div className="hidden xl:flex flex-1 justify-center">
            <nav className="flex items-center gap-5 2xl:gap-8">
              {navLinks.map((link) => {
                const isActive = checkIsActive(link.href);

                if (link.name === "SOLUTIONS") {
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
                          className={`inline-flex items-center relative text-[12px] 2xl:text-[13px] font-bold tracking-widest uppercase whitespace-nowrap transition-colors py-2 cursor-pointer ${
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
                            transition={{ duration: 0.2, ease: "easeOut" }}
                            className="absolute top-full left-1/2 -translate-x-1/2 pt-6 w-[260px] z-50"
                          >
                            <div className="bg-[#050a08]/95 backdrop-blur-2xl border border-white/10 rounded-3xl p-5 shadow-[0_20px_50px_rgba(0,0,0,0.5)] shadow-nabtura-green/5 flex flex-col gap-4">
                              {solutionsMegaMenu.map((section, idx) => {
                                const Icon = section.icon;
                                return (
                                  <div key={idx} className="flex flex-col">
                                    <div className={`flex items-center gap-2 mb-2 border-b border-white/5 pb-1`}>
                                      <Icon className={`w-4 h-4 ${section.color}`} />
                                      <span className="text-[10px] font-bold tracking-widest text-white uppercase">{section.category}</span>
                                    </div>
                                    <div className="flex flex-col gap-1">
                                      {section.links.map(sublink => (
                                        <Link 
                                          key={sublink.name} 
                                          href={sublink.href}
                                          onClick={() => setIsSolutionsHovered(false)}
                                          className={`text-sm text-gray-300 hover:${section.color} hover:translate-x-1 transition-all flex items-center group py-1`}
                                        >
                                          <span className="w-1.5 h-1.5 rounded-full bg-white/20 mr-2 group-hover:bg-current transition-colors shrink-0"></span>
                                          {sublink.name}
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
                      className={`inline-block relative text-[12px] 2xl:text-[13px] font-bold tracking-widest uppercase whitespace-nowrap transition-colors py-2 cursor-pointer ${
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

          {/* CTA (Right) */}
          <div className="hidden xl:flex justify-end lg:w-[250px]">
            <Link href="/contact">
              <motion.span
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-block bg-nabtura-green text-black px-6 py-3 rounded-full text-[12px] 2xl:text-[13px] font-extrabold tracking-widest hover:bg-nabtura-light-green transition-all uppercase shadow-lg shadow-nabtura-green/20 whitespace-nowrap cursor-pointer"
              >
                START A CONVERSATION
              </motion.span>
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
