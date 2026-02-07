import { Github, Linkedin, Mail } from "lucide-react";
import { Contact } from "./Contact";
import { translations } from "../utils/translations";

export function Footer({ language }) {
  const t = translations[language].footer;

  return (
    <footer className="bg-gray-900 text-white py-12 px-6">
       <Contact language={language} />
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold mb-2" dangerouslySetInnerHTML={{ __html: t.title }} />
            <p className="text-gray-400">
              {t.subtitle}
            </p>
          </div>
          
          <div className="flex gap-4">
            <a
              href="https://github.com/tuanvdtd"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors"
              aria-label="GitHub"
            >
              <Github className="size-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/tu%E1%BA%A5n-%C4%91%E1%BB%97-7a8004387"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="size-5" />
            </a>
            <a
              href="mailto:tuan.do7204@gmail.com"
              className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors"
              aria-label="Email"
            >
              <Mail className="size-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
