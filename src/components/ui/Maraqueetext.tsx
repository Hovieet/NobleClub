import { motion } from "motion/react";

const items = [
  "CLASSIC CUT",
  "TEXTURED CROP",
  "SKIN FADE",
  "BURST FADE",
  "TAPER",
  "BEARD TRIM",
  "PRECISION CUTS",
  "BEARD STYLING",
];

const row = [...items, ...items, ...items];

const MaraqueeText = () => {
  return (
    <section className="relative z-20 select-none overflow-hidden bg-black py-10 sm:py-14 md:py-20 hidden md:block">
      <div className="pointer-events-none absolute left-0 top-10 h-44 w-44 rounded-full bg-primary/20 blur-3xl sm:h-72 sm:w-72" />
      <div className="pointer-events-none absolute bottom-8 right-0 h-44 w-44 rounded-full bg-primary/20 blur-3xl sm:h-72 sm:w-72" />

      <motion.div
        animate={{ x: ["-50%", "0%"] }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "linear",
        }}
        className="flex rotate-6 whitespace-nowrap"
      >
        {row.map((item, index) => (
          <span
            key={index}
            className={`mx-4 text-3xl uppercase sm:mx-6 sm:text-5xl md:mx-8 md:text-7xl ${
              index % 2 === 0
                ? "font-heading font-black tracking-[0.16em] sm:tracking-[0.25em]"
                : "font-text normal-case tracking-normal"
            } text-white/5`}
          >
            {item}
            <span className="ml-4 font-heading sm:ml-8">•</span>
          </span>
        ))}
      </motion.div>

      <motion.div
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "linear",
        }}
        className="-mt-6 flex -rotate-6 whitespace-nowrap sm:-mt-10"
      >
        {row.map((item, index) => (
          <span
            key={index}
            className={`mx-4 text-3xl uppercase sm:mx-6 sm:text-5xl md:mx-8 md:text-7xl ${
              index % 2 === 0
                ? "font-heading font-black tracking-[0.16em] sm:tracking-[0.25em]"
                : "font-text normal-case tracking-normal"
            } text-primary/40`}
          >
            {item}
            <span className="ml-4 font-heading sm:ml-8">•</span>
          </span>
        ))}
      </motion.div>
    </section>
  );
};

export default MaraqueeText;
