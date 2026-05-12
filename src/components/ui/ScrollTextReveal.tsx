import { motion, useScroll, useSpring, useTransform } from "motion/react";
import { useRef } from "react";

const words = [
  "CLASSIC CUT",
  "SKIN FADE",
  "BEARD TRIM",
  "HOT TOWEL",
  "PRECISION CUTS",
  "NOBLE.CLUB",
  "LITOMĚŘICE",
  "PREMIUM BARBER",
  "BEARD STYLING",
  "TEXTURED CROP",
];

const ScrollTextReveal = () => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  const smoothScroll = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 28,
    mass: 0.5,
  });

  const y = useTransform(smoothScroll, [0, 1], [500, -850]);

  const opacity = useTransform(smoothScroll, [0, 0.08, 0.92, 1], [0, 1, 1, 0]);

  return (
    <section ref={ref} className="relative h-[320vh] bg-black text-white">
      <div className="sticky top-0 flex h-screen items-center justify-center overflow-hidden">
        {/* CENTER GLOW */}
        <div className="pointer-events-none absolute h-80 w-80 rounded-full bg-primary/10 blur-3xl" />

        {/* TOP BLUR */}
        <div className="pointer-events-none absolute -top-40 left-[45%] z-30 h-[500px] w-[160%] -translate-x-1/2 rotate-[-4deg] rounded-[100%] bg-black blur-3xl" />

        {/* BOTTOM BLUR */}
        <div className="pointer-events-none absolute -bottom-40 left-[55%] z-30 h-[500px] w-[160%] -translate-x-1/2 rotate-[6deg] rounded-[100%] bg-black blur-3xl" />

        <motion.div
          style={{ y, opacity }}
          className="flex flex-col items-center gap-8"
        >
          {words.map((word, index) => (
            <motion.div
              key={`${word}-${index}`}
              className={`
                text-center text-4xl uppercase sm:text-6xl md:text-8xl
                ${
                  index % 2 === 0
                    ? "font-primary text-primary/90  rotate-[-3deg] tracking-[0.12em]"
                    : "font-text italic text-white  rotate-[2deg] tracking-[0.22em]"
                }
              `}
            >
              {word}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ScrollTextReveal;
