import { 
  Code2, 
  Database, 
  Server, 
  Cloud, 
  Container, 
  GitBranch,
  Terminal,
  Layers,
  Box,
  Workflow,
  Cpu,
  FileJson,
  Globe,
  Palette,
  Layout,
  Zap,
  Shield,
  Package
} from "lucide-react";
import { translations, Language } from "../utils/translations";

interface Technology {
  name: string;
  icon: React.ReactNode;
  color: string;
  bgColor: string;
}

interface TechStackProps {
  language: Language;
}

export function TechStack({ language }: TechStackProps) {
  const t = translations[language].skills;
  const technologies: Technology[] = [
    {
      name: "JavaScript",
      icon: <Code2 className="size-8" />,
      color: "text-yellow-400",
      bgColor: "bg-yellow-400/10 hover:bg-yellow-400/20"
    },
    {
      name: "React",
      icon: (
        <svg className="size-8" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 10.11c1.03 0 1.87.84 1.87 1.89 0 1-.84 1.85-1.87 1.85S10.13 13 10.13 12c0-1.05.84-1.89 1.87-1.89M7.37 20c.63.38 2.01-.2 3.6-1.7-.52-.59-1.03-1.23-1.51-1.9a22.7 22.7 0 0 1-2.4-.36c-.51 2.14-.32 3.61.31 3.96m.71-5.74l-.29-.51c-.11.29-.22.58-.29.86.27.06.57.11.88.16l-.3-.51m6.54-.76l.81-1.5-.81-1.5c-.3-.53-.62-1-.91-1.47C13.17 9 12.6 9 12 9c-.6 0-1.17 0-1.71.03-.29.47-.61.94-.91 1.47L8.57 12l.81 1.5c.3.53.62 1 .91 1.47.54.03 1.11.03 1.71.03.6 0 1.17 0 1.71-.03.29-.47.61-.94.91-1.47M12 6.78c-.19.22-.39.45-.59.72h1.18c-.2-.27-.4-.5-.59-.72m0 10.44c.19-.22.39-.45.59-.72h-1.18c.2.27.4.5.59.72M16.62 4c-.62-.38-2 .2-3.59 1.7.52.59 1.03 1.23 1.51 1.9.82.08 1.63.2 2.4.36.51-2.14.32-3.61-.32-3.96m-.7 5.74l.29.51c.11-.29.22-.58.29-.86-.27-.06-.57-.11-.88-.16l.3.51m1.45-7.05c1.47.84 1.63 3.05 1.01 5.63 2.54.75 4.37 1.99 4.37 3.68 0 1.69-1.83 2.93-4.37 3.68.62 2.58.46 4.79-1.01 5.63-1.46.84-3.45-.12-5.37-1.95-1.92 1.83-3.91 2.79-5.38 1.95-1.46-.84-1.62-3.05-1-5.63-2.54-.75-4.37-1.99-4.37-3.68 0-1.69 1.83-2.93 4.37-3.68-.62-2.58-.46-4.79 1-5.63 1.47-.84 3.46.12 5.38 1.95 1.92-1.83 3.91-2.79 5.37-1.95M17.08 12c.34.75.64 1.5.89 2.26 2.1-.63 3.28-1.53 3.28-2.26 0-.73-1.18-1.63-3.28-2.26-.25.76-.55 1.51-.89 2.26M6.92 12c-.34-.75-.64-1.5-.89-2.26-2.1.63-3.28 1.53-3.28 2.26 0 .73 1.18 1.63 3.28 2.26.25-.76.55-1.51.89-2.26m9 2.26l-.3.51c.31-.05.61-.1.88-.16-.07-.28-.18-.57-.29-.86l-.29.51m-2.89 4.04c1.59 1.5 2.97 2.08 3.59 1.7.64-.35.83-1.82.32-3.96-.77.16-1.58.28-2.4.36-.48.67-.99 1.31-1.51 1.9M8.08 9.74l.3-.51c-.31.05-.61.1-.88.16.07.28.18.57.29.86l.29-.51m2.89-4.04C9.38 4.2 8 3.62 7.37 4c-.63.35-.82 1.82-.31 3.96a22.7 22.7 0 0 1 2.4-.36c.48-.67.99-1.31 1.51-1.9Z"/>
        </svg>
      ),
      color: "text-cyan-400",
      bgColor: "bg-cyan-400/10 hover:bg-cyan-400/20"
    },
    {
      name: "Node.js",
      icon: <Server className="size-8" />,
      color: "text-green-500",
      bgColor: "bg-green-500/10 hover:bg-green-500/20"
    },
    {
      name: "Python",
      icon: <Terminal className="size-8" />,
      color: "text-blue-400",
      bgColor: "bg-blue-400/10 hover:bg-blue-400/20"
    },
    {
      name: "TypeScript",
      icon: (
        <svg className="size-8" viewBox="0 0 24 24" fill="currentColor">
          <path d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z"/>
        </svg>
      ),
      color: "text-blue-500",
      bgColor: "bg-blue-500/10 hover:bg-blue-500/20"
    },
    {
      name: "Docker",
      icon: <Container className="size-8" />,
      color: "text-sky-400",
      bgColor: "bg-sky-400/10 hover:bg-sky-400/20"
    },
    {
      name: "AWS",
      icon: <Cloud className="size-8" />,
      color: "text-orange-400",
      bgColor: "bg-orange-400/10 hover:bg-orange-400/20"
    },
    {
      name: "Git",
      icon: <GitBranch className="size-8" />,
      color: "text-red-500",
      bgColor: "bg-red-500/10 hover:bg-red-500/20"
    },
    {
      name: "Next.js",
      icon: <Layers className="size-8" />,
      color: "text-white",
      bgColor: "bg-white/10 hover:bg-white/20"
    },
    {
      name: "MongoDB",
      icon: <Database className="size-8" />,
      color: "text-green-400",
      bgColor: "bg-green-400/10 hover:bg-green-400/20"
    },
    {
      name: "PostgreSQL",
      icon: <Database className="size-8" />,
      color: "text-blue-300",
      bgColor: "bg-blue-300/10 hover:bg-blue-300/20"
    },
    {
      name: "GraphQL",
      icon: <FileJson className="size-8" />,
      color: "text-pink-400",
      bgColor: "bg-pink-400/10 hover:bg-pink-400/20"
    },
    {
      name: "Tailwind CSS",
      icon: <Palette className="size-8" />,
      color: "text-teal-400",
      bgColor: "bg-teal-400/10 hover:bg-teal-400/20"
    },
    {
      name: "Redux",
      icon: <Box className="size-8" />,
      color: "text-purple-400",
      bgColor: "bg-purple-400/10 hover:bg-purple-400/20"
    },
    {
      name: "Express.js",
      icon: <Workflow className="size-8" />,
      color: "text-gray-300",
      bgColor: "bg-gray-300/10 hover:bg-gray-300/20"
    },
    {
      name: "Vue.js",
      icon: <Globe className="size-8" />,
      color: "text-emerald-400",
      bgColor: "bg-emerald-400/10 hover:bg-emerald-400/20"
    },
    {
      name: "Kubernetes",
      icon: <Cpu className="size-8" />,
      color: "text-blue-500",
      bgColor: "bg-blue-500/10 hover:bg-blue-500/20"
    },
    {
      name: "Django",
      icon: <Shield className="size-8" />,
      color: "text-green-600",
      bgColor: "bg-green-600/10 hover:bg-green-600/20"
    },
    {
      name: "Webpack",
      icon: <Package className="size-8" />,
      color: "text-sky-300",
      bgColor: "bg-sky-300/10 hover:bg-sky-300/20"
    },
    {
      name: "Vite",
      icon: <Zap className="size-8" />,
      color: "text-purple-300",
      bgColor: "bg-purple-300/10 hover:bg-purple-300/20"
    }
  ];

  return (
    <section id="tech-stack" className="py-24 px-6 bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {t.title}
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mb-4"></div>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            {t.subtitle}
          </p>
        </div>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {technologies.map((tech, index) => (
            <div
              key={index}
              className={`group relative p-6 rounded-2xl border border-gray-800 ${tech.bgColor} transition-all duration-300 hover:scale-105 hover:border-gray-700 cursor-pointer`}
            >
              <div className="flex flex-col items-center justify-center gap-4">
                <div className={`${tech.color} transition-transform duration-300 group-hover:scale-110`}>
                  {tech.icon}
                </div>
                <p className="text-white font-medium text-sm text-center">
                  {tech.name}
                </p>
              </div>
              
              {/* Glow effect on hover */}
              <div className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl ${tech.bgColor} -z-10`}></div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-gray-500 italic">
            {t.footer}
          </p>
        </div>
      </div>
    </section>
  );
}
