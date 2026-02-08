import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { Menu, X } from "lucide-react";
import { LanguageToggle } from "./LanguageToggle";
import { translations, Language } from "../utils/translations";

interface NavigationProps {
  language: Language;
  setLanguage: (lang: Language) => void;
}

export function Navigation({ language, setLanguage }: NavigationProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const t = translations[language].nav;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: t.home, href: "#home" },
    { name: t.about, href: "#about" },
    { name: t.skills, href: "#skills" },
    { name: t.projects, href: "#projects" },
    { name: t.contact, href: "#contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-slate-900/95 backdrop-blur-md shadow-lg shadow-blue-500/10 border-b border-blue-500/10" 
          : "bg-gradient-to-b from-slate-950/80 via-slate-950/40 to-transparent backdrop-blur-sm"
      }`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <motion.a
            href="#home"
            className="text-2xl font-bold bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 bg-clip-text text-transparent"
            whileHover={{ scale: 1.05 }}
          >
            Portfolio
          </motion.a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item, index) => (
              <motion.a
                key={item.name}
                href={item.href}
                className="text-gray-300 hover:text-cyan-400 transition-colors font-medium"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.1 }}
              >
                {item.name}
              </motion.a>
            ))}
            <LanguageToggle language={language} setLanguage={setLanguage} />
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-4">
            <LanguageToggle language={language} setLanguage={setLanguage} />
            <button
              className="text-gray-300 hover:text-cyan-400 transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden mt-4 pb-4 border-t border-blue-500/20 pt-4"
          >
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block py-2 text-gray-300 hover:text-cyan-400 transition-colors font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
}