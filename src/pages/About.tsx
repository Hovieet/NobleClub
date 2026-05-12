import { motion } from "motion/react";
import { images } from "../assets/assets";

function About() {
  return (
    <section
      id="onas"
      className="relative overflow-hidden bg-black px-4 py-16 text-white sm:px-6 sm:py-24 lg:px-8"
    >
      <div className="pointer-events-none absolute left-0 top-20 h-56 w-56 rounded-full bg-primary/10 blur-3xl sm:h-72 sm:w-72" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.6 }}
            className="text-xs font-bold uppercase tracking-[0.3em] text-primary sm:text-sm sm:tracking-[0.35em]"
          >
            O nás
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-4 max-w-2xl text-3xl font-bold uppercase leading-tight sm:text-5xl md:text-6xl"
          >
            Moderní barber
            <br />
            experience v Litoměřicích.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-6 max-w-xl text-sm leading-relaxed text-zinc-400 sm:mt-8 sm:text-base md:text-lg"
          >
            Noble Club je místo, kde se spojuje moderní styl, precizní práce a
            prvotřídní péče. Každý detail je navržen tak, aby váš zážitek nebyl
            jen obyčejné stříhání, ale skutečný premium barber experience.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-5 max-w-xl text-sm leading-relaxed text-zinc-500 sm:mt-6 sm:text-base md:text-lg"
          >
            Specializujeme se na moderní střihy, skin fade, úpravu vousů a
            individuální přístup ke každému klientovi. Věříme, že barber není
            jen služba — je to styl a sebevědomí.
          </motion.p>

          <div className="mt-8 grid grid-cols-1 gap-5 xs:grid-cols-2 sm:mt-10 sm:grid-cols-3 sm:gap-6">
            {[
              ["2+", "Let zkušeností"],
              ["1000+", "Spokojených klientů"],
              ["Premium", "Péče a servis"],
            ].map(([number, label], index) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 30, scale: 0.96 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{
                  duration: 0.6,
                  delay: 0.4 + index * 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <h2 className="font-text text-3xl text-primary sm:text-4xl">
                  {number}
                </h2>
                <p className="mt-2 text-xs uppercase tracking-wide text-zinc-500 sm:text-sm">
                  {label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 60, scale: 0.96 }}
          whileInView={{ opacity: 1, x: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="relative flex justify-center lg:justify-end"
        >
          <div className="relative w-full max-w-[500px] overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.03] p-2 sm:p-3">
            <img
              src={images.Barber}
              alt="Barber"
              className="h-[320px] w-full object-cover grayscale transition duration-700 hover:grayscale-0 sm:h-[420px] lg:h-[500px]"
            />

            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="absolute -bottom-6 left-4 right-4 rounded-2xl border border-primary/20 bg-black/80 px-5 py-4 backdrop-blur-xl sm:left-0 sm:right-auto sm:px-6 sm:py-5"
          >
            <p className="text-xs uppercase tracking-[0.25em] text-zinc-500 sm:text-sm sm:tracking-[0.3em]">
              Noble Club
            </p>

            <h3 className="mt-1 text-xl font-bold uppercase text-primary sm:mt-2 sm:text-2xl">
              Premium Barber
            </h3>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default About;
