import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { FiArrowDown } from "react-icons/fi";
import heroBg from "/hero-bg.png";

export default function HeroSection() {
  const parallaxRef = useRef(null);

  useEffect(() => {
    const onScroll = () => {
      if (parallaxRef.current) {
        parallaxRef.current.style.transform = `translateY(${window.scrollY * 0.35}px)`;
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Parallax photo background */}
      <div className="absolute inset-0 z-0" style={{ transform: "translateY(0)" }}>
        <div ref={parallaxRef} className="absolute inset-[-20%]">
          <img
            src={heroBg}
            alt=""
            className="w-full h-full object-cover"
          />
        </div>

        {/* Dark overlays */}
        <div className="absolute inset-0 bg-[#08080a]/55" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#08080a]/30 via-transparent to-[#08080a]" />
        {/* Ambient light blob — matches sunset photo */}
        <div
          className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[400px] rounded-full opacity-[0.06]"
          style={{
            background: "radial-gradient(ellipse, rgba(200,160,100,0.6) 0%, transparent 70%)",
            filter: "blur(80px)",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-[1200px] mx-auto px-6 lg:px-20 w-full flex flex-col items-center text-center">
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
          className="text-[#5c5c63] text-xs lg:text-sm tracking-[0.28em] uppercase mb-8 font-medium"
        >
          Visual Designer &amp; Brand Strategist
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 36 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
          className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-semibold tracking-[-0.03em] leading-[1.04] text-[#ededee] mb-10"
        >
          Crafting Digital
          <br />
          <span className="text-gradient">Experiences</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="text-[#8b8b90] text-base lg:text-lg max-w-lg mb-16 font-light leading-relaxed"
        >
          Brand identity, digital products, and AI-driven visual experiences —
          crafted with clarity and purpose.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.85, ease: [0.22, 1, 0.36, 1] }}
          className="flex gap-4"
        >
          <a href="#projects" className="btn-primary">
            View My Work
          </a>
          <a href="#contact" className="btn-ghost">
            Get in Touch
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
      >
        <span className="text-[11px] tracking-[0.26em] text-[#5c5c63] uppercase font-medium">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <FiArrowDown className="text-[#5c5c63]" size={16} />
        </motion.div>
      </motion.div>
    </section>
  );
}
