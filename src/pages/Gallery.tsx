import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

const row1 = [
  "https://images.unsplash.com/photo-1621605815971-fbc98d665033?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1517832606299-7ae9b720a186?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?q=80&w=1200&auto=format&fit=crop",
];

const row2 = [
  "https://images.unsplash.com/photo-1622286342621-4bd786c2447c?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1512690459411-b0fd1c86b8c8?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?q=80&w=1200&auto=format&fit=crop",
];

const row3 = [
  "https://images.unsplash.com/photo-1493256338651-d82f7acb2b38?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=1200&auto=format&fit=crop",
];

function Gallery() {
  const [activeImage, setActiveImage] = useState<string | null>(null);

  return (
    <section
      id="gallery"
      className="relative overflow-hidden bg-black py-16 text-white sm:py-24"
    >
      <div className="pointer-events-none absolute left-0 top-20 h-56 w-56 rounded-full bg-primary/10 blur-3xl sm:h-72 sm:w-72" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-56 w-56 rounded-full bg-primary/10 blur-3xl sm:h-72 sm:w-72" />

      <div className="mx-auto mb-10 max-w-7xl px-4 sm:mb-14 sm:px-6 lg:px-8">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.6 }}
          className="text-xs font-bold uppercase tracking-[0.35em] text-primary"
        >
          Galerie
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 40, filter: "blur(8px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mt-4 text-4xl font-bold uppercase sm:text-5xl md:text-6xl"
        >
          Naše práce
        </motion.h1>
      </div>

      <div className="space-y-4 sm:space-y-6">
        <GalleryRow images={row1} direction="left" onOpen={setActiveImage} />
        <GalleryRow images={row2} direction="right" onOpen={setActiveImage} />
        <GalleryRow images={row3} direction="left" onOpen={setActiveImage} />
      </div>

      <AnimatePresence>
        {activeImage && (
          <motion.div
            className="fixed inset-0 z-[999] flex items-center justify-center bg-black/90 p-4 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveImage(null)}
          >
            <button
              onClick={() => setActiveImage(null)}
              className="absolute right-5 top-5 rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm uppercase"
            >
              Zavřít
            </button>

            <motion.img
              src={activeImage}
              alt="Gallery fullscreen"
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              transition={{ duration: 0.35 }}
              onClick={(e) => e.stopPropagation()}
              className="max-h-[90vh] max-w-[95vw] rounded-2xl object-contain"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

function GalleryRow({
  images,
  direction = "left",
  onOpen,
}: {
  images: string[];
  direction?: "left" | "right";
  onOpen: (image: string) => void;
}) {
  const [paused, setPaused] = useState(false);
  const row = [...images, ...images, ...images];

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onTouchStart={() => setPaused(true)}
      className="overflow-hidden"
    >
      <motion.div
        animate={
          paused
            ? undefined
            : {
                x: direction === "left" ? ["0%", "-50%"] : ["-50%", "0%"],
              }
        }
        transition={{
          duration: 28,
          repeat: Infinity,
          ease: "linear",
        }}
        className="flex w-max gap-4 sm:gap-6"
      >
        {row.map((image, index) => (
          <button
            key={`${image}-${index}`}
            onClick={() => onOpen(image)}
            className="group relative h-[180px] w-[280px] shrink-0 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] sm:h-[260px] sm:w-[420px] md:h-[320px] md:w-[520px]"
          >
            <img
              src={image}
              alt="Barber gallery"
              className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

            <div className="absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100">
              <div className="absolute inset-0 bg-primary/10 blur-2xl" />
            </div>
          </button>
        ))}
      </motion.div>
    </motion.div>
  );
}

export default Gallery;
