import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { type ReactNode } from "react";

interface Props {
  children: ReactNode;
  speed?: number; /* negative = slower (parallax), positive = faster */
  className?: string;
}

export default function Parallax({ children, speed = -0.15, className = "" }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [speed * 100, speed * -100]);

  return (
    <div ref={ref} className={`overflow-hidden ${className}`}>
      <motion.div style={{ y }}>
        {children}
      </motion.div>
    </div>
  );
}
