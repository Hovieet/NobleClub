import { motion } from "motion/react";
import { svg } from "../assets/assets";
import Button2 from "../components/ui/Button2";

const Contact = () => {
  return (
    <section
      id="kontakt"
      className="relative overflow-hidden bg-black px-4 py-20 text-white sm:px-6 sm:py-24 lg:px-8"
    >
      {/* GLOW */}
      <div className="pointer-events-none absolute left-0 top-10 h-56 w-56 rounded-full bg-primary/10 blur-3xl sm:h-72 sm:w-72" />

      <div className="relative mx-auto grid max-w-7xl gap-14 lg:grid-cols-2 lg:items-center">
        {/* LEFT */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-xs font-bold uppercase tracking-[0.35em] text-primary sm:text-sm">
            Kontakt
          </p>

          <h1 className="mt-4 text-4xl font-bold uppercase leading-tight sm:text-5xl md:text-6xl">
            Rezervujte si svůj
            <span className="text-primary"> termín</span>
          </h1>

          <p className="mt-6 max-w-xl text-sm leading-relaxed text-zinc-400 sm:text-base md:text-lg">
            Přijďte zažít moderní barber experience do Noble Club v
            Litoměřicích. Precizní střihy, profesionální přístup a stylové
            prostředí.
          </p>

          {/* CONTACT INFO */}
          <div className="mt-10 space-y-5">
            <a
              href="https://maps.google.com/?q=Okružní+81/15+Litoměřice"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition duration-300 hover:border-primary/40 hover:bg-primary/[0.04]"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <svg.LocationIcon className="h-5 w-5 text-primary" />
              </div>

              <div>
                <p className="text-xs uppercase tracking-[0.25em] text-zinc-500">
                  Adresa
                </p>

                <h3 className="mt-1 text-lg font-bold">
                  Okružní 81/15, Litoměřice
                </h3>
              </div>
            </a>

            <a
              href="tel:+420777777777"
              className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition duration-300 hover:border-primary/40 hover:bg-primary/[0.04]"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <span className="text-xl text-primary">✆</span>
              </div>

              <div>
                <p className="text-xs uppercase tracking-[0.25em] text-zinc-500">
                  Telefon
                </p>

                <h3 className="mt-1 text-lg font-bold">+420 777 777 777</h3>
              </div>
            </a>

            <a
              href="mailto:info@nobleclub.cz"
              className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition duration-300 hover:border-primary/40 hover:bg-primary/[0.04]"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <span className="text-xl text-primary">✉</span>
              </div>

              <div>
                <p className="text-xs uppercase tracking-[0.25em] text-zinc-500">
                  Email
                </p>

                <h3 className="mt-1 text-lg font-bold">info@nobleclub.cz</h3>
              </div>
            </a>

            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition duration-300 hover:border-primary/40 hover:bg-primary/[0.04]"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <span className="text-xl text-primary">◎</span>
              </div>

              <div>
                <p className="text-xs uppercase tracking-[0.25em] text-zinc-500">
                  Instagram
                </p>

                <h3 className="mt-1 text-lg font-bold">@noble.club</h3>
              </div>
            </a>
          </div>

          {/* BUTTON */}
          <div className="mt-10">
            <Button2
              text="Rezervovat termín"
              href="https://noona.app/cs/noble"
            />
          </div>
        </motion.div>

        {/* RIGHT */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, x: 40 }}
          whileInView={{ opacity: 1, scale: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            duration: 0.9,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.03]"
        >
          <iframe
            src="https://www.google.com/maps?q=Litoměřice&output=embed"
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
            className="h-[320px] w-full grayscale sm:h-[450px] lg:h-[620px]"
          />

          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
