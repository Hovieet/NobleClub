import { motion } from "motion/react";

const reviews = [
  {
    name: "Jakub Novák",
    review:
      "Nejlepší barber v okolí. Perfektní fade, skvělá atmosféra a maximální profesionalita.",
  },
  {
    name: "David Černý",
    review:
      "Luxusní prostředí a precizní práce. Přesně vědí, co dělají. Doporučuji všem.",
  },
  {
    name: "Martin Svoboda",
    review: "Top servis od začátku do konce. Vousy i střih vždy perfektní.",
  },
  {
    name: "Tomáš Urban",
    review:
      "Konečně barber, kde si dávají záležet na detailech. 10/10 experience.",
  },
];

const Review = () => {
  return (
    <section
      id="recenze"
      className="relative overflow-hidden bg-black px-4 py-20 text-white sm:px-6 sm:py-24 lg:px-8"
    >
      {/* GLOW */}
      <div className="pointer-events-none absolute left-0 top-20 h-56 w-56 rounded-full bg-primary/10 blur-3xl sm:h-72 sm:w-72" />

      <div className="relative mx-auto max-w-7xl">
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <p className="text-xs font-bold uppercase tracking-[0.35em] text-primary sm:text-sm">
            Recenze
          </p>

          <h1 className="mt-4 text-4xl font-bold uppercase leading-tight sm:text-5xl md:text-6xl">
            Co říkají naši
            <span className="text-primary"> klienti</span>
          </h1>

          <p className="mt-6 text-sm leading-relaxed text-zinc-400 sm:text-base md:text-lg">
            Každý detail je pro nás důležitý. Spokojenost klientů je to, co nás
            posouvá dál.
          </p>
        </motion.div>

        {/* REVIEWS */}
        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {reviews.map((review, index) => (
            <motion.div
              key={review.name}
              initial={{ opacity: 0, y: 40, scale: 0.96 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.7,
                delay: index * 0.12,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-6 transition duration-500 hover:-translate-y-1 hover:border-primary/40 hover:bg-primary/[0.04]"
            >
              {/* HOVER GLOW */}
              <div className="pointer-events-none absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100">
                <div className="absolute inset-0 bg-primary/5 blur-2xl" />
              </div>

              {/* STARS */}
              <div className="relative z-10 flex gap-1 text-primary">
                {"★★★★★"}
              </div>

              {/* REVIEW */}
              <p className="relative z-10 mt-5 text-sm leading-relaxed text-zinc-300 sm:text-base">
                “{review.review}”
              </p>

              {/* USER */}
              <div className="relative z-10 mt-8 border-t border-white/10 pt-5">
                <h3 className="text-lg font-bold uppercase">{review.name}</h3>

                <p className="mt-1 text-xs uppercase tracking-[0.25em] text-zinc-500">
                  Noble Club Client
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Review;
