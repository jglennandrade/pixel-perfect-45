import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

interface Props {
  to: number;
  duration?: number;
  decimals?: number;
  separator?: boolean;
  prefix?: string;
  suffix?: string;
}

export default function AnimatedCounter({
  to,
  duration = 1.8,
  decimals = 0,
  separator = false,
  prefix = "",
  suffix = "",
}: Props) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const [display, setDisplay] = useState(decimals > 0 ? "0." + "0".repeat(decimals) : "0");

  useEffect(() => {
    if (!isInView) return;

    const start = performance.now();
    let raf: number;

    const step = (now: number) => {
      const elapsed = Math.min((now - start) / (duration * 1000), 1);
      const eased = 1 - Math.pow(1 - elapsed, 3);
      const current = eased * to;

      let formatted = current.toFixed(decimals);
      if (separator) {
        const [whole, dec] = formatted.split(".");
        formatted = whole.replace(/\B(?=(\d{3})+(?!\d))/g, ",") + (dec ? "." + dec : "");
      }

      setDisplay(formatted);
      if (elapsed < 1) raf = requestAnimationFrame(step);
    };

    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [isInView, to, duration, decimals, separator]);

  return (
    <span ref={ref}>
      {prefix}{display}{suffix}
    </span>
  );
}
