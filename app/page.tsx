'use client';
import { useState } from "react";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { TechStack } from "@/components/Skills";
import { Projects } from "@/components/Projects";
import { Footer } from "@/components/Footer";
import { LanguageToggle } from "@/components/LanguageToggle";
import { Language } from "@/utils/translations";
import { Sheet, SheetContent, SheetTrigger, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { Menu, X } from "lucide-react";

export default function App() {
  const [language, setLanguage] = useState<Language>('en');
  const [open, setOpen] = useState(false);

  const navLinks = [
    { href: "#about", label: "About" },
    { href: "#tech-stack", label: "Tech Stack" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
  ];

  const handleNavClick = () => {
    setOpen(false);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-slate-950 via-blue-950 to-slate-950 backdrop-blur-md border-b border-blue-500/20 shadow-lg shadow-blue-500/5">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <a href="#home" className="text-xl font-bold bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 bg-clip-text text-transparent hover:scale-105 transition-transform">
              Portfolio
            </a>
            
            {/* Desktop Menu */}
            <div className="hidden sm:flex gap-8 items-center">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-gray-300 hover:text-cyan-400 transition-colors font-medium"
                >
                  {link.label}
                </a>
              ))}
              <LanguageToggle language={language} setLanguage={setLanguage} />
            </div>

            {/* Mobile Menu */}
            <div className="flex sm:hidden items-center gap-4">
              <LanguageToggle language={language} setLanguage={setLanguage} />
              <Sheet open={open} onOpenChange={setOpen}>
                <SheetTrigger asChild>
                  <button className="text-gray-300 hover:text-cyan-400 transition-colors p-2">
                    <Menu className="h-6 w-6" />
                    <span className="sr-only">Open menu</span>
                  </button>
                </SheetTrigger>
                <SheetContent 
                  side="right" 
                  className="w-[300px] sm:w-[400px] bg-gradient-to-b from-slate-950 via-blue-950 to-slate-950 border-l border-blue-500/20 text-white"
                >
                  <SheetHeader className="mb-8">
                    <SheetTitle className="text-left text-2xl font-bold bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 bg-clip-text text-transparent">
                      Menu
                    </SheetTitle>
                  </SheetHeader>
                  <div className="flex flex-col gap-6">
                    {navLinks.map((link) => (
                      <a
                        key={link.href}
                        href={link.href}
                        onClick={handleNavClick}
                        className="text-gray-300 hover:text-cyan-400 transition-all font-medium text-lg py-2 px-4 rounded-lg hover:bg-blue-500/10 border border-transparent hover:border-blue-500/20"
                      >
                        {link.label}
                      </a>
                    ))}
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="pt-16">
        <Hero language={language} />
        <About language={language} />
        <TechStack language={language} />
        <Projects language={language} />
      </main>

      {/* Footer */}
      <Footer language={language} />
      
      {/* Add smooth scroll behavior */}
      <style>{`
        html {
          scroll-behavior: smooth;
        }
      `}</style>
    </div>
  );
}
