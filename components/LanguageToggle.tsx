import { motion } from "motion/react";
import { Globe } from "lucide-react";

interface LanguageToggleProps {
  language: "en" | "vi";
  setLanguage: (lang: "en" | "vi") => void;
}

export function LanguageToggle({ language, setLanguage }: LanguageToggleProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="flex items-center gap-2 bg-gray-800/50 rounded-full p-1"
    >
      <Globe size={16} className="ml-2 text-gray-400" />
      <button
        onClick={() => setLanguage("en")}
        className={`px-3 py-1 rounded-full text-sm transition-all ${
          language === "en"
            ? "bg-cyan-500 text-black"
            : "text-gray-400 hover:text-white"
        }`}
      >
        EN
      </button>
      <button
        onClick={() => setLanguage("vi")}
        className={`px-3 py-1 rounded-full text-sm transition-all ${
          language === "vi"
            ? "bg-cyan-500 text-black"
            : "text-gray-400 hover:text-white"
        }`}
      >
        VI
      </button>
    </motion.div>
  );
}