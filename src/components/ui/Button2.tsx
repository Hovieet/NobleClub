import { motion } from "motion/react";

type Button2Props = {
  text: string;
  href?: string;
  className?: string;
};

const Button2 = ({ text, href = "#", className = "" }: Button2Props) => {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      whileTap={{
        scale: 0.96,
      }}
      transition={{
        type: "spring",
        stiffness: 320,
        damping: 18,
      }}
      className={`inline-flex items-center justify-center rounded-full bg-primary px-5 py-3 text-xs font-bold uppercase tracking-wide text-white sm:px-6 sm:text-sm ${className}`}
    >
      <span className="whitespace-nowrap">{text}</span>
    </motion.a>
  );
};

export default Button2;
