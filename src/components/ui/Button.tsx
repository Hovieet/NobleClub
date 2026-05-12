import { motion } from "motion/react";
import type { ComponentType, SVGProps } from "react";

type ButtonProps = {
  text: string;
  icon?: ComponentType<SVGProps<SVGSVGElement>>;
  href?: string;
  target?: string;
  rel?: string;
  bgColor?: string;
  textColor?: string;
  borderColor?: string;
  iconColor?: string;
};

const Button = ({
  text,
  icon: Icon,
  href = "#",
  bgColor = "bg-primary",
  textColor = "text-white",
  borderColor,
  iconColor = "text-white",
  target,
  rel,
}: ButtonProps) => {
  return (
    <motion.a
      href={href}
      target={target}
      rel={rel}
      whileHover={{
        scale: 1.05,
        y: -2,
      }}
      whileTap={{
        scale: 0.97,
      }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 18,
      }}
      className={`group relative overflow-hidden isolate rounded-lg px-8 py-4 font-body text-sm font-bold uppercase ${bgColor} ${textColor} ${
        borderColor ? `border ${borderColor}` : ""
      } flex items-center gap-3`}
    >
      {/* Glow */}
      <span className="absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100">
        <span className="absolute inset-0 bg-primary/10 blur-xl" />
      </span>

      {/* Icon */}
      {Icon && (
        <motion.div
          whileHover={{
            rotate: 8,
            scale: 1.15,
          }}
          transition={{
            type: "spring",
            stiffness: 400,
          }}
          className="relative z-10"
        >
          <Icon className={`h-6 w-6 ${iconColor}`} />
        </motion.div>
      )}

      {/* Text */}
      <span className="relative z-10 tracking-wide">{text}</span>

      {/* Shine */}
      <span className="pointer-events-none absolute -left-20 top-0 h-full w-10 rotate-12 bg-white/10 transition-all duration-700 group-hover:left-[120%]" />
    </motion.a>
  );
};

export default Button;
