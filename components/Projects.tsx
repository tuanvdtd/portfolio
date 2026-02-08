"use client";

import { ExternalLink, Github } from "lucide-react";
import { ImageWithFallback } from "./ImageWithFallback";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { translations, Language } from "../utils/translations";

interface ProjectCardProps {
  project: {
    name: string;
    tagline: string;
    description: string;
    technologies: string[];
    features: string[];
    image: string;
    github: string;
    demo: string | null;
    color: string;
  };
  index: number;
  featured: string;
}

function ProjectCard({ project, index, featured }: ProjectCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  // Parallax effects
  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.8, 1, 1, 0.8]);

  return (
    <motion.div
      ref={ref}
      style={{ opacity, scale }}
      className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500"
    >
      {/* Project Image with parallax */}
      <div className="relative h-64 overflow-hidden">
        <motion.div 
          style={{ y: useTransform(scrollYProgress, [0, 1], [0, -50]) }}
          className="h-full"
        >
          <ImageWithFallback
            src={project.image}
            alt={project.name}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
        </motion.div>
        <div className={`absolute inset-0 bg-gradient-to-t ${project.color} opacity-20 group-hover:opacity-30 transition-opacity`}></div>
        
        {/* Floating badge */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="absolute top-4 right-4 px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-sm font-medium text-gray-900 shadow-lg"
        >
          {featured}
        </motion.div>
      </div>
      
      {/* Project Content */}
      <div className="p-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-4"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-1">
            {project.name}
          </h3>
          <p className="text-sm text-gray-500 font-medium">
            {project.tagline}
          </p>
        </motion.div>
        
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-gray-700 mb-4 leading-relaxed line-clamp-3"
        >
          {project.description}
        </motion.p>
        
        {/* Technologies */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mb-4"
        >
          <div className="flex flex-wrap gap-2">
            {project.technologies.slice(0, 4).map((tech, techIndex) => (
              <motion.span
                key={techIndex}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 + techIndex * 0.05 }}
                whileHover={{ scale: 1.1 }}
                className="px-3 py-1 bg-gray-100 text-gray-700 rounded-lg text-xs font-medium cursor-default"
              >
                {tech}
              </motion.span>
            ))}
            {project.technologies.length > 4 && (
              <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-lg text-xs font-medium">
                +{project.technologies.length - 4} more
              </span>
            )}
          </div>
        </motion.div>
        
        {/* Action buttons */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="flex gap-3 pt-4 border-t border-gray-100"
        >
          <motion.a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors text-sm font-medium"
          >
            <Github className="size-4" />
            Code
          </motion.a>
          {project.demo ? (
            <motion.a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-gradient-to-r ${project.color} text-white rounded-lg hover:shadow-lg transition-all text-sm font-medium`}
            >
              <ExternalLink className="size-4" />
              Live Demo
            </motion.a>
          ) : (
            <button
              disabled
              className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-gray-100 text-gray-400 rounded-lg cursor-not-allowed text-sm font-medium"
            >
              <ExternalLink className="size-4" />
              Coming Soon
            </button>
          )}
        </motion.div>
      </div>
    </motion.div>
  );
}

export function Projects({ language }: { language: Language }) {
  const t = translations[language].projects;
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  const projectsData = t.projects.map((p, index) => ({
    ...p,
    image: [
      "/projects/project1.png",
      "/projects/project2.png",
      "https://images.unsplash.com/photo-1557821552-17105176677c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlY29tbWVyY2UlMjBzaG9wcGluZyUyMG9ubGluZSUyMHN0b3JlfGVufDB8fHx8MTcwOTkwNDAwMHww&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1501504905252-473c47e087f8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvbmxpbmUlMjBsZWFybmluZyUyMGVkdWNhdGlvbiUyMHBsYXRmb3JtfGVufDB8fHx8MTcwOTkwNDAwMHww&ixlib=rb-4.1.0&q=80&w=1080"
    ][index],
    github: [
      "https://github.com/tuanvdtd/trello-web-fe",
      "https://github.com/tuanvdtd/CongNgheWeb20251-QuizzWeb",
      "https://github.com/tuanvdtd/nodejs-api",
      "https://github.com/tmtuan04/lms-project2-20242"
    ][index],
    demo: [
      "https://project3-taskflow.vercel.app/",
      "https://cong-nghe-web20251-quizz-web.vercel.app/teacher/dashboard",
      null,
      "https://lms-project2-20242.vercel.app/"
    ][index],
    color: ["from-purple-500 to-pink-500", "from-green-500 to-emerald-500", "from-blue-500 to-cyan-500", "from-orange-500 to-red-500"][index]
  }));

  return (
    <section ref={containerRef} id="projects" className="py-24 px-6 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      {/* Animated background */}
      <motion.div 
        style={{ y: backgroundY }}
        className="absolute inset-0 opacity-30"
      >
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl"></div>
      </motion.div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {t.title}
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-cyan-600 mx-auto mb-4"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {t.subtitle}
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {projectsData.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} featured={t.featured} />
          ))}
        </div>
        
        {/* View all projects link */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <motion.a
            href="https://github.com/tuanvdtd?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-full hover:shadow-xl hover:shadow-blue-500/50 transition-all duration-300 font-medium"
          >
            <Github className="size-5" />
            {t.viewOnGithub}
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}