import { motion } from "motion/react";
import { svg } from "../assets/assets";

const navItems = [
  { label: "Domů", href: "#" },
  { label: "Služby", href: "#services" },
  { label: "O nás", href: "#onas" },
  { label: "Galerie", href: "#gallery" },
  { label: "Recenze", href: "#recenze" },
  { label: "Kontakt", href: "#kontakt" },
];

const Footer = () => {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-black px-4 py-14 text-white sm:px-6 lg:px-8">
      {/* GLOW */}
      <div className="pointer-events-none absolute bottom-0 right-0 h-56 w-56 rounded-full bg-primary/10 blur-3xl sm:h-72 sm:w-72" />

      <div className="relative mx-auto max-w-7xl">
        {/* TOP */}
        <div className="flex flex-col gap-12 lg:flex-row lg:items-start lg:justify-between">
          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="max-w-md"
          >
            <svg.Logo className="h-10 w-auto" />

            <p className="mt-6 text-sm leading-relaxed text-zinc-400 sm:text-base">
              Moderní barber experience v Litoměřicích. Precizní střihy,
              profesionální přístup a prvotřídní péče o váš styl.
            </p>

            <div className="mt-8 flex items-center gap-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] transition duration-300 hover:border-primary/40 hover:bg-primary/10"
              >
                <span className="text-lg text-primary">◎</span>
              </a>

              <a
                href="mailto:info@nobleclub.cz"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] transition duration-300 hover:border-primary/40 hover:bg-primary/10"
              >
                <span className="text-lg text-primary">✉</span>
              </a>

              <a
                href="tel:+420777777777"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] transition duration-300 hover:border-primary/40 hover:bg-primary/10"
              >
                <span className="text-lg text-primary">✆</span>
              </a>
            </div>
          </motion.div>

          {/* CENTER */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-primary">
              Navigace
            </p>

            <nav className="mt-6 flex flex-col gap-4">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="w-fit text-sm uppercase tracking-wide text-zinc-400 transition duration-300 hover:text-primary"
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </motion.div>

          {/* RIGHT */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="max-w-sm"
          >
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-primary">
              Kontakt
            </p>

            <div className="mt-6 space-y-5">
              <a
                href="https://maps.google.com/?q=Okružní+81/15+Litoměřice"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3"
              >
                <svg.LocationIcon className="mt-1 h-5 w-5 text-primary" />

                <div>
                  <p className="text-xs uppercase tracking-[0.25em] text-zinc-500">
                    Adresa
                  </p>

                  <p className="mt-1 text-sm text-zinc-300">
                    Okružní 81/15,
                    <br />
                    Litoměřice
                  </p>
                </div>
              </a>

              <div>
                <p className="text-xs uppercase tracking-[0.25em] text-zinc-500">
                  Email
                </p>

                <a
                  href="mailto:info@nobleclub.cz"
                  className="mt-1 block text-sm text-zinc-300 transition hover:text-primary"
                >
                  info@nobleclub.cz
                </a>
              </div>

              <div>
                <p className="text-xs uppercase tracking-[0.25em] text-zinc-500">
                  Telefon
                </p>

                <a
                  href="tel:+420777777777"
                  className="mt-1 block text-sm text-zinc-300 transition hover:text-primary"
                >
                  +420 777 777 777
                </a>
              </div>
            </div>
          </motion.div>
        </div>

        {/* BOTTOM */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-14 flex flex-col gap-4 border-t border-white/10 pt-6 text-center sm:flex-row sm:items-center sm:justify-between sm:text-left"
        >
          <p className="text-xs uppercase tracking-[0.2em] text-zinc-500">
            © {new Date().getFullYear()} Noble Club. All rights reserved.
          </p>

          <p className="text-xs uppercase tracking-[0.2em] text-zinc-600">
            Designed & Developed by Noble Club
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
