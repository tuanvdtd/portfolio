import { Code2, Sparkles, Target } from "lucide-react";
import { translations, Language } from "../utils/translations";

interface AboutProps {
  language: Language;
}

export function About({ language }: AboutProps) {
  const t = translations[language].about;
  
  return (
    <section id="about" className="py-24 px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {t.title}
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </div>
        
        <div className="mb-12">
          <p className="text-lg text-gray-700 leading-relaxed mb-6" dangerouslySetInnerHTML={{ __html: t.description1 }} />
          <p className="text-lg text-gray-700 leading-relaxed" dangerouslySetInnerHTML={{ __html: t.description2 }} />
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-6 bg-gray-50 rounded-xl">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
              <Target className="size-6 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">{t.items[0].title}</h3>
            <p className="text-gray-600">
              {t.items[0].description}
            </p>
          </div>
          
          <div className="p-6 bg-gray-50 rounded-xl">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
              <Code2 className="size-6 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">{t.items[1].title}</h3>
            <p className="text-gray-600">
              {t.items[1].description}
            </p>
          </div>
          
          <div className="p-6 bg-gray-50 rounded-xl">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
              <Sparkles className="size-6 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">{t.items[2].title}</h3>
            <p className="text-gray-600">
              {t.items[2].description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
