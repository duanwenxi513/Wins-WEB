import { motion } from "framer-motion";
import { FiMail, FiMapPin, FiDownload } from "react-icons/fi";

const stats = [
  { value: "50+", label: "作品项目" },
  { value: "30+", label: "合作客户" },
  { value: "8+", label: "年经验" },
];

export default function AboutSection() {
  return (
    <section id="about" className="relative py-32 lg:py-40">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-20">

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mb-24"
        >
          <p className="section-label">About</p>
          <h2 className="section-heading">关于我</h2>
        </motion.div>

        <div className="grid lg:grid-cols-[1fr_1fr] gap-16 lg:gap-32 items-center">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col items-center lg:items-start text-center lg:text-left"
          >
            {/* Avatar */}
            <div className="relative mb-12">
              <div className="w-48 h-48 lg:w-56 lg:h-56 rounded-full border border-[rgba(255,255,255,0.06)] flex items-center justify-center bg-[rgba(255,255,255,0.015)]">
                <span className="text-[#ededee] text-7xl font-light tracking-tighter">
                  W
                </span>
              </div>
            </div>

            <h2 className="text-[36px] font-semibold text-[#ededee] mb-4 tracking-[-0.02em]">
              Wins Duan
            </h2>
            <p className="text-[#5c5c63] text-sm tracking-[0.14em] uppercase mb-12 font-medium">
              Visual Designer / AI Designer
              <br />
              Brand Strategist
            </p>

            <a href="#" className="btn-primary mb-12">
              <FiDownload size={14} />
              下载简历 PDF
            </a>

            <div className="flex flex-col gap-4 text-sm text-[#8b8b90] font-light">
              <span className="flex items-center gap-3 justify-center lg:justify-start">
                <FiMapPin size={13} className="text-[#5c5c63]" />
                Shanghai, China
              </span>
              <span className="flex items-center gap-3 justify-center lg:justify-start">
                <FiMail size={13} className="text-[#5c5c63]" />
                hello@winsduan.com
              </span>
            </div>
          </motion.div>

          {/* Right */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="text-base leading-relaxed text-[#8b8b90] mb-8 font-light">
              我是一名跨领域设计师，深耕视觉品牌设计、AI 驱动创意工具与用户体验设计。
              擅长在美学与技术的交汇处创造具有持久印象的品牌体验。
            </p>
            <p className="text-sm leading-relaxed text-[#5c5c63] mb-16 font-light">
              过去八年，我先后与多家创业公司、设计机构和全球品牌合作，覆盖数字产品设计、
              品牌策略与创意指导。我注重用设计解决问题，用视觉传递价值，用技术拓展创意的边界。
            </p>

            <div className="grid grid-cols-3 gap-10">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <div className="stat-number mb-2">{stat.value}</div>
                  <div className="text-[11px] tracking-[0.16em] text-[#5c5c63] uppercase font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
