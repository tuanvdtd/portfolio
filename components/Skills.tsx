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
      name: "HTML",
      icon: (
        <svg className="size-8" viewBox="0 0 24 24" fill="currentColor">
          <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.23-2.622L5.412 4.41l.698 8.01h9.126l-.326 3.426-2.91.804-2.955-.81-.188-2.11H6.248l.33 4.171L12 19.351l5.379-1.443.744-8.157H8.531z"/>
        </svg>
      ),
      color: "text-orange-500",
      bgColor: "bg-orange-500/10 hover:bg-orange-500/20"
    },
    {
      name: "CSS",
      icon: (
        <svg className="size-8" viewBox="0 0 24 24" fill="currentColor">
          <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.565-2.438L1.5 0zm17.09 4.413L5.41 4.41l.213 2.622 10.125.002-.255 2.716h-6.64l.24 2.573h6.182l-.366 3.523-2.91.804-2.956-.81-.188-2.11h-2.61l.29 3.855L12 19.288l5.373-1.53L18.59 4.414z"/>
        </svg>
      ),
      color: "text-blue-600",
      bgColor: "bg-blue-600/10 hover:bg-blue-600/20"
    },
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
      name: "Redis",
      icon: <Database className="size-8" />,
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
    // {
    //   name: "AWS",
    //   icon: <Cloud className="size-8" />,
    //   color: "text-orange-400",
    //   bgColor: "bg-orange-400/10 hover:bg-orange-400/20"
    // },
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
    // {
    //   name: "GraphQL",
    //   icon: <FileJson className="size-8" />,
    //   color: "text-pink-400",
    //   bgColor: "bg-pink-400/10 hover:bg-pink-400/20"
    // },
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
      name: "NestJS",
      icon: (
        <svg className="size-8" viewBox="0 0 24 24" fill="currentColor">
          <path d="M14.131.047c-.173 0-.334.037-.483.087.348.247.56.655.556 1.073v.004c0 .069-.002.138-.013.207a1.073 1.073 0 0 1-.04.21c-.028.174-.087.347-.173.508l-.01.018c-.028.051-.059.1-.094.146l-.018.026-.035.04c-.054.063-.113.122-.178.175l-.018.015a1.778 1.778 0 0 1-.21.15 1.77 1.77 0 0 1-.24.12c-.088.035-.178.063-.27.082-.098.022-.197.037-.297.044a2.24 2.24 0 0 1-.31 0 2.206 2.206 0 0 1-.306-.039 2.18 2.18 0 0 1-.298-.077 2.146 2.146 0 0 1-.288-.118 2.04 2.04 0 0 1-.273-.156 2.018 2.018 0 0 1-.253-.193c-.077-.07-.149-.144-.214-.223a1.926 1.926 0 0 1-.174-.249 1.911 1.911 0 0 1-.13-.269 1.841 1.841 0 0 1-.08-.288 1.821 1.821 0 0 1-.03-.3v-.007a1.774 1.774 0 0 1 .033-.308c.024-.102.062-.2.11-.293.05-.092.11-.18.18-.26a1.679 1.679 0 0 1 .248-.224c.09-.067.188-.124.291-.17.105-.046.215-.08.327-.104.115-.024.23-.037.346-.04l.011-.001h.015a2.2 2.2 0 0 1 .316.023c.107.016.212.042.316.076.102.034.202.077.298.128.096.051.187.109.273.174.085.064.165.135.239.211.074.077.142.16.204.247.061.088.116.18.163.276.047.096.086.196.117.298.03.102.052.206.065.31.013.106.018.213.014.32zM23.32 8.5l-.05-.12a2.2 2.2 0 0 0-.105-.2 2.19 2.19 0 0 0-.14-.195 2.14 2.14 0 0 0-.174-.187c-.064-.062-.132-.12-.204-.173a2.095 2.095 0 0 0-.233-.15 2.08 2.08 0 0 0-.258-.117 2.05 2.05 0 0 0-.278-.077 2.01 2.01 0 0 0-.297-.038h-.01a2.015 2.015 0 0 0-.3.022c-.101.015-.2.042-.296.077a2.04 2.04 0 0 0-.278.117c-.09.048-.175.103-.255.166l-.005.003a2.04 2.04 0 0 0-.228.19c-.07.067-.135.14-.193.218-.059.078-.111.161-.158.248-.046.087-.085.178-.116.271-.031.093-.055.19-.07.288a2.011 2.011 0 0 0-.015.298v5.516l-.001 1.632v.062c0 .138-.017.274-.05.408a1.638 1.638 0 0 1-.142.377 1.6 1.6 0 0 1-.233.336c-.09.098-.194.184-.307.255a1.558 1.558 0 0 1-.363.167c-.13.042-.266.064-.403.064a1.6 1.6 0 0 1-.41-.054 1.574 1.574 0 0 1-.373-.156 1.542 1.542 0 0 1-.316-.249 1.553 1.553 0 0 1-.233-.325 1.6 1.6 0 0 1-.14-.385 1.638 1.638 0 0 1-.048-.397V8.736a2.01 2.01 0 0 0-.017-.3 2.009 2.009 0 0 0-.07-.29c-.03-.093-.07-.183-.116-.27a2.047 2.047 0 0 0-.158-.247 2.054 2.054 0 0 0-.193-.219 2.067 2.067 0 0 0-.228-.19 2.04 2.04 0 0 0-.255-.166 2.04 2.04 0 0 0-.278-.117 2.014 2.014 0 0 0-.296-.077 2.015 2.015 0 0 0-.3-.022h-.01a2.01 2.01 0 0 0-.297.038c-.098.018-.193.045-.285.08a2.08 2.08 0 0 0-.258.117 2.094 2.094 0 0 0-.233.15c-.072.053-.14.111-.204.173a2.14 2.14 0 0 0-.174.187 2.19 2.19 0 0 0-.14.195c-.04.066-.075.134-.105.203l-.05.118v.001l-.001.002v7.533a4.554 4.554 0 0 0 .09.912c.062.303.16.597.29.877.13.28.29.543.478.784.187.24.403.457.642.644.24.188.504.346.785.472.281.127.577.223.882.286.304.063.616.095.93.095.312 0 .625-.032.93-.095.304-.063.6-.159.881-.286.281-.126.545-.284.786-.472.24-.187.455-.404.642-.644.188-.24.348-.504.478-.784.13-.28.228-.574.29-.877a4.554 4.554 0 0 0 .09-.912l.001-.027V8.5z"/>
        </svg>
      ),
      color: "text-red-500",
      bgColor: "bg-red-500/10 hover:bg-red-500/20"
    },
    // {
    //   name: "Vue.js",
    //   icon: <Globe className="size-8" />,
    //   color: "text-emerald-400",
    //   bgColor: "bg-emerald-400/10 hover:bg-emerald-400/20"
    // },
    // {
    //   name: "Kubernetes",
    //   icon: <Cpu className="size-8" />,
    //   color: "text-blue-500",
    //   bgColor: "bg-blue-500/10 hover:bg-blue-500/20"
    // },
    // {
    //   name: "Django",
    //   icon: <Shield className="size-8" />,
    //   color: "text-green-600",
    //   bgColor: "bg-green-600/10 hover:bg-green-600/20"
    // },
    {
      name: "React Query",
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
