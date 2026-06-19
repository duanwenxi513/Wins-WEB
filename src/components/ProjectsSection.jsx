import { useState } from "react";
import { motion } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";

const projects = [
  {
    id: 1,
    title: "Aurora Brand Identity",
    role: "品牌设计师 & 视觉主理",
    description:
      "为一家 AI 初创公司打造完整的品牌识别系统，涵盖 Logo 设计、动态标识、色彩体系与品牌手册。",
    tags: ["Branding", "Visual Design", "Motion"],
  },
  {
    id: 2,
    title: "Nexus Design System",
    role: "设计系统负责人",
    description:
      "为大型 SaaS 平台建设可扩展的设计系统，统一团队输出规范，设计到开发交接效率提升 40%。",
    tags: ["Design System", "UI", "Figma"],
  },
  {
    id: 3,
    title: "Sense AI Platform",
    role: "UX 设计主导",
    description:
      "端到端 UX 设计，覆盖用户研究、信息架构、交互原型和高保真交付，上线后用户留存提升 25%。",
    tags: ["UX Design", "AI Product", "Prototyping"],
  },
];

export default function ProjectsSection() {
  const [hoveredId, setHoveredId] = useState(null);

  return (
    <section id="projects" className="relative py-32 lg:py-40">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-20">

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mb-24"
        >
          <p className="section-label">Work</p>
          <h2 className="section-heading">精选项目</h2>
        </motion.div>

        <div className="flex flex-col gap-10 lg:gap-12">
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => setHoveredId(null)}
              className="group card overflow-hidden cursor-pointer grid lg:grid-cols-[1fr_1fr]"
            >
              {/* Left — image area */}
              <div className="relative h-72 lg:h-auto min-h-[300px] overflow-hidden">
                {/* Abstract geometry placeholder */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-24 h-24 rounded-2xl bg-[rgba(255,255,255,0.02)] rotate-45" />
                  <div className="absolute w-32 h-32 rounded-full border border-[rgba(255,255,255,0.03)]" />
                  <div className="absolute w-48 h-48 rounded-full border border-[rgba(255,255,255,0.015)]" />
                </div>

                {/* Project number */}
                <span className="absolute top-7 left-7 text-[#5c5c63]/25 text-[10px] font-mono tracking-[0.2em]">
                  {String(project.id).padStart(2, "0")}
                </span>

                {/* Hover overlay */}
                <div
                  className={`absolute inset-0 bg-[#08080a]/80 flex items-center justify-center transition-all duration-500 ${
                    hoveredId === project.id ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <span className="flex items-center gap-2 text-[#ededee] text-sm font-medium tracking-[0.06em]">
                    查看项目 <FiArrowUpRight size={14} />
                  </span>
                </div>
              </div>

              {/* Right — info */}
              <div className="p-10 lg:p-14 flex flex-col justify-center">
                <span className="text-[11px] tracking-[0.16em] text-[#5c5c63] uppercase mb-4 font-medium">
                  {project.role}
                </span>
                <h3 className="text-[26px] lg:text-[28px] font-semibold text-[#ededee] mb-4 tracking-[-0.02em] group-hover:opacity-80 transition-opacity duration-500">
                  {project.title}
                </h3>
                <p className="text-sm leading-relaxed text-[#8b8b90] mb-7 font-light">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
