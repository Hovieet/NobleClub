import { motion } from "motion/react";

const services = [
  {
    title: "Classic Cut",
    price: "od 450 Kč",
    description:
      "Klasický střih s důrazem na detail, čisté linie a moderní styling.",
  },
  {
    title: "Skin Fade",
    price: "od 550 Kč",
    description: "Precizní fade přechod pro moderní a ostrý vzhled.",
  },
  {
    title: "Beard Trim",
    price: "od 350 Kč",
    description: "Úprava vousů, kontury a profesionální péče o váš styl.",
  },
  {
    title: "Hair + Beard",
    price: "od 750 Kč",
    description: "Kompletní barber experience — střih i vousy v jednom.",
  },
];

function Services() {
  return (
    <section
      id="services"
      className="relative overflow-hidden bg-black px-4 py-20 text-white sm:px-6 sm:py-24 lg:px-8"
    >
      <div className="pointer-events-none absolute left-0 top-20 h-56 w-56 rounded-full bg-primary/10 blur-3xl sm:h-72 sm:w-72" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-56 w-56 rounded-full bg-primary/10 blur-3xl sm:h-72 sm:w-72" />

      <div className="relative mx-auto max-w-7xl">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.6 }}
          className="text-xs font-bold uppercase tracking-[0.3em] text-primary sm:text-sm sm:tracking-[0.4em]"
        >
          Naše služby
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mt-4 max-w-4xl text-3xl font-bold uppercase leading-tight tracking-tight sm:text-5xl md:text-6xl"
        >
          Precizní střihy <br />
          Styl bez <span className="text-primary">kompromisů</span>
        </motion.h1>

        <div className="mt-10 grid gap-5 sm:mt-14 md:grid-cols-2 lg:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40, scale: 0.96 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{
                duration: 0.6,
                delay: index * 0.12,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition duration-500 hover:-translate-y-1 hover:border-primary/50 hover:bg-primary/[0.06] sm:rounded-3xl sm:p-8"
            >
              <div className="pointer-events-none absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100">
                <div className="absolute inset-0 bg-primary/5 blur-2xl" />
              </div>

              <div className="relative z-10 flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <h3 className="text-2xl font-black uppercase tracking-wide sm:text-3xl">
                    {service.title}
                  </h3>

                  <p className="mt-3 max-w-md text-sm leading-relaxed text-zinc-400 sm:mt-4 sm:text-base">
                    {service.description}
                  </p>
                </div>

                <span className="w-fit shrink-0 rounded-full border border-primary/30 bg-primary/10 px-4 py-2 text-sm font-bold text-primary">
                  {service.price}
                </span>
              </div>

              <div className="mt-6 h-px w-full bg-gradient-to-r from-primary/40 via-white/10 to-transparent sm:mt-8" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
