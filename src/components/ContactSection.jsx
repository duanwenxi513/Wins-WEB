import { motion } from "framer-motion";

const testimonials = [
  {
    quote:
      "Wins 是我们合作过的最有设计嗅觉的品牌设计师，从策略到执行一气呵成。他对细节的把控令人印象深刻。",
    author: "张明",
    role: "CEO, Aurora Tech",
  },
  {
    quote:
      "在 Nexus Design System 项目中，他的系统化思维极大地提升了我们团队的产出质量和一致性。",
    author: "李思远",
    role: "产品总监, Nexus SaaS",
  },
  {
    quote:
      "Wins 不仅仅是一个设计师，更是一位能理解业务目标的创意伙伴，他总能给出超出预期的方案。",
    author: "Catherine Liu",
    role: "创始人, Lumière Studio",
  },
];

export default function ContactSection() {
  return (
    <section id="contact" className="relative">

      {/* ── Testimonials ── */}
      <div className="py-32 lg:py-40">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-20">

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="mb-24"
          >
            <p className="section-label">Testimonials</p>
            <h2 className="section-heading">合作评价</h2>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-6 lg:gap-8">
            {testimonials.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
                className="card card-lift p-9 lg:p-10 relative"
              >
                <span className="absolute top-5 right-7 text-5xl text-[rgba(255,255,255,0.02)] font-serif leading-none select-none">
                  &ldquo;
                </span>
                <p className="text-sm leading-relaxed text-[#8b8b90] mb-8 relative z-10 font-light">
                  {item.quote}
                </p>
                <div>
                  <div className="text-sm font-medium text-[#ededee] tracking-[-0.01em]">
                    {item.author}
                  </div>
                  <div className="text-[12px] text-[#5c5c63] mt-1.5 font-light">
                    {item.role}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>

      {/* ── Contact CTA ── */}
      <div className="relative py-32 lg:py-40 text-center">
        {/* Ambient glow */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] rounded-full opacity-[0.025] pointer-events-none"
          style={{
            background: "radial-gradient(ellipse, rgba(200,200,200,0.5) 0%, transparent 70%)",
            filter: "blur(100px)",
          }}
        />
        <div className="max-w-[1200px] mx-auto px-6 lg:px-20 relative z-10">

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="section-label"
          >
            Contact
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.06, ease: [0.22, 1, 0.36, 1] }}
            className="section-heading mb-10"
          >
            Let&rsquo;s Build
            <br />
            Something Great
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="text-sm text-[#8b8b90] max-w-md mx-auto mb-16 leading-relaxed font-light"
          >
            如果你有项目想要合作，或者只是想打个招呼，欢迎随时联系我。
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.14, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-20"
          >
            <a href="mailto:hello@winsduan.com" className="btn-primary">
              hello@winsduan.com
            </a>
            <a href="#" className="btn-ghost">
              开始合作
            </a>
          </motion.div>

          {/* Social */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="flex items-center justify-center gap-8 text-sm text-[#5c5c63]"
          >
            <a href="#" className="hover-underline">Behance</a>
            <span className="text-[rgba(255,255,255,0.06)]">/</span>
            <a href="#" className="hover-underline">Dribbble</a>
            <span className="text-[rgba(255,255,255,0.06)]">/</span>
            <a href="#" className="hover-underline">LinkedIn</a>
            <span className="text-[rgba(255,255,255,0.06)]">/</span>
            <a href="#" className="hover-underline">GitHub</a>
          </motion.div>

        </div>

        {/* Footer */}
        <div className="max-w-[1200px] mx-auto px-6 lg:px-20 mt-24">
          <div className="border-t border-[rgba(255,255,255,0.04)] pt-8 flex flex-col sm:flex-row items-center justify-between gap-3">
            <span className="text-[12px] text-[#5c5c63] tracking-[0.08em] font-light">
              &copy; {new Date().getFullYear()} Wins Duan — All rights reserved.
            </span>
            <span className="text-[12px] text-[#5c5c63] tracking-[0.08em] font-light">
              Designed &amp; Built by Wins Duan
            </span>
          </div>
        </div>
      </div>

    </section>
  );
}
