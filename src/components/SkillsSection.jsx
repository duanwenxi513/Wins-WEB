import { motion } from "framer-motion";

const skillGroups = [
  {
    category: "UI 设计",
    tags: ["界面设计", "交互原型", "Figma", "设计系统", "高保真", "用户旅程图"],
  },
  {
    category: "品牌视觉",
    tags: ["品牌策略", "Logo 设计", "视觉系统", "字体排印", "色彩体系", "VI 规范"],
  },
  {
    category: "动效交互",
    tags: ["微交互动画", "转场设计", "Lottie", "Rive", "Principle"],
  },
  {
    category: "AI 设计",
    tags: ["AI 工作流", "提示工程", "图像生成", "ComfyUI", "Stable Diffusion"],
  },
];

export default function SkillsSection() {
  return (
    <section className="relative py-32 lg:py-40">
      {/* Ambient light */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full opacity-[0.03] pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(200,200,200,0.5) 0%, transparent 70%)",
          filter: "blur(100px)",
        }}
      />
      <div className="max-w-[1200px] mx-auto px-6 lg:px-20 relative z-10">

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mb-24"
        >
          <p className="section-label">Skills</p>
          <h2 className="section-heading">核心优势</h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-6 lg:gap-8">
          {skillGroups.map((group, i) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
              className="card card-lift p-10 lg:p-12"
            >
              <h3 className="text-base font-semibold text-[#ededee] mb-6 tracking-[-0.01em]">
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.tags.map((tag) => (
                  <span key={tag} className="tag">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
