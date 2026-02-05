import { Github, Linkedin, Mail, ArrowRight, Download } from "lucide-react";
import { translations, Language } from "../utils/translations";

interface HeroProps {
  language: Language;
}

export function Hero({ language }: HeroProps) {
  const t = translations[language].hero;
  
  return (
    <section id="home" className="min-h-screen flex items-center px-6 py-20 relative overflow-hidden bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        {/* Grid */}
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}></div>
        
        {/* Gradient orbs */}
        <div className="absolute top-1/4 -left-48 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-1/4 -right-48 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Content */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 backdrop-blur-sm">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
              </span>
              <span className="text-sm font-medium text-blue-300">{t.badge}</span>
            </div>

            {/* Main heading */}
            <div className="space-y-4">
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight">
                <span className="text-white" dangerouslySetInnerHTML={{ __html: t.greeting }} />
                <br />
                <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 bg-clip-text text-transparent">
                  {t.name}
                </span>
              </h1>
              <div className="flex items-center gap-3">
                <div className="h-1 w-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full"></div>
                <p className="text-xl md:text-2xl text-gray-300 font-medium">
                  {t.role}
                </p>
              </div>
            </div>

            {/* Description */}
            <p className="text-lg text-gray-400 leading-relaxed max-w-xl">
              {t.description}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <a
                href="#projects"
                className="group flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-lg font-medium hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300"
              >
                {t.viewWork}
                <ArrowRight className="size-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#"
                className="flex items-center gap-2 px-6 py-3 bg-white/5 text-white border border-white/10 rounded-lg font-medium hover:bg-white/10 backdrop-blur-sm transition-all duration-300"
              >
                <Download className="size-5" />
                {t.downloadCV}
              </a>
            </div>

            {/* Social links */}
            <div className="flex items-center gap-4 pt-4">
              <span className="text-sm text-gray-500">{t.connectWith}</span>
              <div className="flex gap-3">
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center rounded-lg bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white border border-white/10 transition-all duration-300"
                  aria-label="GitHub"
                >
                  <Github className="size-5" />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center rounded-lg bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white border border-white/10 transition-all duration-300"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="size-5" />
                </a>
                <a
                  href="mailto:alex.morgan@example.com"
                  className="w-10 h-10 flex items-center justify-center rounded-lg bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white border border-white/10 transition-all duration-300"
                  aria-label="Email"
                >
                  <Mail className="size-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Right side - Visual */}
          <div className="relative lg:h-[600px] flex items-center justify-center">
            {/* Decorative elements */}
            <div className="relative w-full max-w-lg">
              {/* Main card */}
              <div className="relative z-10 bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-xl rounded-3xl p-8 border border-white/10 shadow-2xl">
                {/* Code editor mockup */}
                <div className="space-y-4">
                  {/* Window controls */}
                  <div className="flex items-center gap-2 mb-6">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>

                  {/* Code lines */}
                  <div className="space-y-3 font-mono text-sm">
                    <div className="flex gap-3">
                      <span className="text-gray-600">1</span>
                      <span className="text-purple-400">const</span>
                      <span className="text-blue-300">developer</span>
                      <span className="text-gray-400">=</span>
                      <span className="text-yellow-300">{"{"}</span>
                    </div>
                    <div className="flex gap-3 pl-8">
                      <span className="text-gray-600">2</span>
                      <span className="text-cyan-300">name:</span>
                      <span className="text-green-300" dangerouslySetInnerHTML={{ __html: t.codeComment.name }} />
                      <span className="text-gray-400">,</span>
                    </div>
                    <div className="flex gap-3 pl-8">
                      <span className="text-gray-600">3</span>
                      <span className="text-cyan-300">skills:</span>
                      <span className="text-yellow-300">{"["}</span>
                      <span className="text-green-300" dangerouslySetInnerHTML={{ __html: t.codeComment.skills[0] }} />
                      <span className="text-gray-400">,</span>
                      <span className="text-green-300" dangerouslySetInnerHTML={{ __html: t.codeComment.skills[1] }} />
                      <span className="text-yellow-300">{"]"}</span>
                      <span className="text-gray-400">,</span>
                    </div>
                    <div className="flex gap-3 pl-8">
                      <span className="text-gray-600">4</span>
                      <span className="text-cyan-300">passion:</span>
                      <span className="text-green-300" dangerouslySetInnerHTML={{ __html: t.codeComment.passion }} />
                      <span className="text-gray-400">,</span>
                    </div>
                    <div className="flex gap-3 pl-8">
                      <span className="text-gray-600">5</span>
                      <span className="text-cyan-300">hireable:</span>
                      <span className="text-orange-400">true</span>
                    </div>
                    <div className="flex gap-3">
                      <span className="text-gray-600">6</span>
                      <span className="text-yellow-300">{"}"}</span>
                    </div>
                  </div>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-4 mt-8 pt-6 border-t border-white/10">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-400">{t.stats.projects}</div>
                    <div className="text-xs text-gray-500 mt-1">{t.stats.projectsLabel}</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-cyan-400">{t.stats.technologies}</div>
                    <div className="text-xs text-gray-500 mt-1">{t.stats.technologiesLabel}</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-teal-400">{t.stats.years}</div>
                    <div className="text-xs text-gray-500 mt-1">{t.stats.yearsLabel}</div>
                  </div>
                </div>
              </div>

              {/* Floating badges */}
              <div className="absolute -top-6 -right-6 px-4 py-2 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg text-white font-medium text-sm shadow-lg animate-float">
                {t.badges.react}
              </div>
              <div className="absolute -bottom-6 -left-6 px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg text-white font-medium text-sm shadow-lg animate-float" style={{ animationDelay: '1s' }}>
                {t.badges.learner}
              </div>
              <div className="absolute top-1/2 -right-8 px-4 py-2 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg text-white font-medium text-sm shadow-lg animate-float" style={{ animationDelay: '2s' }}>
                {t.badges.fullstack}
              </div>

              {/* Decorative circles */}
              <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] border border-blue-500/20 rounded-full"></div>
              <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] border border-cyan-500/10 rounded-full"></div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <a href="#about" className="flex flex-col items-center gap-2 text-gray-500 hover:text-gray-300 transition-colors">
            <span className="text-xs font-medium">{t.scrollDown}</span>
            <svg className="size-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </a>
        </div>
      </div>

      {/* Custom animations */}
      <style>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0) rotate(-2deg);
          }
          50% {
            transform: translateY(-10px) rotate(2deg);
          }
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}
