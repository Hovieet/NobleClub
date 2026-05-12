import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { svg } from "../assets/assets";
import Button2 from "./ui/Button2";

const navItems = [
  { label: "Služby", href: "#services" },
  { label: "O nás", href: "#onas" },
  { label: "Recenze", href: "#recenze" },
  { label: "Kontakty", href: "#kontakt" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const NavLink = ({ item }: { item: (typeof navItems)[number] }) => (
    <motion.a
      href={item.href}
      className="group relative pb-1 text-white transition"
      initial="rest"
      whileHover="hover"
      animate="rest"
      onClick={() => setOpen(false)}
    >
      <motion.span
        variants={{
          rest: { textShadow: "0 0 0px rgba(255,255,255,0)" },
          hover: {
            textShadow:
              "0 0 8px rgba(255,255,255,0.9), 0 0 20px rgba(255,255,255,0.5)",
          },
        }}
        transition={{ duration: 0.3 }}
        className="relative z-10"
      >
        {item.label}
      </motion.span>

      <motion.span
        className="absolute bottom-0 left-0 h-[2px] w-full bg-primary"
        variants={{
          rest: { scaleX: 0, opacity: 0.7 },
          hover: { scaleX: 1, opacity: 1 },
        }}
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        style={{ transformOrigin: "center" }}
      />

      <motion.span
        className="absolute bottom-0 left-0 h-[6px] w-full bg-primary blur-md"
        variants={{
          rest: { scaleX: 0, opacity: 0 },
          hover: { scaleX: 1, opacity: 1 },
        }}
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        style={{ transformOrigin: "center" }}
      />
    </motion.a>
  );

  return (
    <header className="fixed top-0 z-50 w-full border-b border-white/10 bg-black/70 px-5 py-5 backdrop-blur-md md:px-10 md:py-6">
      <div className="relative mx-auto flex max-w-7xl items-center justify-between">
        <div className="flex items-center gap-3">
          <motion.a
            href="#home"
            aria-label="Go to homepage"
            whileHover={{
              scale: 1.01,
              y: -1,
            }}
            whileTap={{
              scale: 0.97,
            }}
            transition={{
              type: "spring",
              stiffness: 200,
              damping: 18,
            }}
            className="inline-flex"
          >
            <svg.Logo className="h-6 w-auto sm:h-8 md:h-10" />
          </motion.a>

          <a
            href="https://maps.google.com/?q=Okružní+81/15+Litoměřice"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden items-center transition hover:opacity-80 sm:flex"
          >
            <motion.div
              animate={{
                y: [0, -5, 0],
              }}
              transition={{
                duration: 1.2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <svg.LocationIcon className="h-5 w-auto text-primary md:h-6" />
            </motion.div>

            <p className="font-body w-20 text-xs text-zinc-400">
              Okružní 81/15, Litoměřice
            </p>
          </a>
        </div>

        <nav className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-10 font-heading text-sm font-medium uppercase tracking-wide lg:flex">
          {navItems.map((item) => (
            <NavLink key={item.label} item={item} />
          ))}
        </nav>

        <div className="hidden lg:block">
          <Button2 text="Rezervovat" href="https://noona.app/cs/noble" />
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 lg:hidden"
          aria-label="Toggle menu"
        >
          <span className="h-[2px] w-6 bg-white" />
          <span className="h-[2px] w-6 bg-white" />
          <span className="h-[2px] w-6 bg-white" />
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-50 flex min-h-screen flex-col bg-black px-5 py-5 md:px-10 md:py-6 lg:hidden"
          >
            {/* TOP BAR */}

            <div className="mx-auto flex w-full max-w-7xl items-center justify-between">
              <a
                href="#home"
                aria-label="Go to homepage"
                onClick={() => setOpen(false)}
                className="inline-flex"
              >
                <svg.Logo className="h-6 w-auto" />
              </a>

              <button
                onClick={() => setOpen(false)}
                className="flex h-10 w-10 items-center justify-center"
              >
                <div className="relative h-6 w-6">
                  <span className="absolute left-0 top-1/2 h-[2px] w-6 rotate-45 bg-white" />

                  <span className="absolute left-0 top-1/2 h-[2px] w-6 -rotate-45 bg-white" />
                </div>
              </button>
            </div>

            {/* NAV */}

            <nav className="flex flex-1 flex-col items-center justify-center gap-10 font-heading text-2xl uppercase">
              {navItems.map((item, index) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: index * 0.08,
                    duration: 0.4,
                  }}
                  className="group relative"
                >
                  <span className="transition group-hover:text-primary">
                    {item.label}
                  </span>

                  <span className="absolute -bottom-2 left-1/2 h-[2px] w-full origin-center -translate-x-1/2 scale-x-0 bg-primary transition duration-300 group-hover:scale-x-100" />

                  <span className="absolute -bottom-2 left-1/2 h-[6px] w-full origin-center -translate-x-1/2 scale-x-0 bg-primary blur-md transition duration-300 group-hover:scale-x-100" />
                </motion.a>
              ))}
            </nav>

            {/* BOTTOM */}

            <div className="flex items-center justify-between border-t border-white/10 pt-6">
              <a
                href="https://maps.google.com/?q=Okružní+81/15+Litoměřice"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
                className="flex items-center gap-2 transition hover:opacity-80"
              >
                <motion.div
                  animate={{
                    y: [0, -5, 0],
                  }}
                  transition={{
                    duration: 1.2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <svg.LocationIcon className="h-5 w-5 text-primary" />
                </motion.div>

                <p className="font-body text-sm text-zinc-400">
                  Okružní 81/15, Litoměřice
                </p>
              </a>

              <Button2 text="Rezervovat" href="https://noona.app/cs/noble" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
