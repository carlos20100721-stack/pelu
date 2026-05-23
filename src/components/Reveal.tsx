import { useEffect, useRef, type ReactNode } from "react";

type Props = {
  children: ReactNode;
  delay?: 0 | 1 | 2 | 3 | 4;
  as?: keyof React.JSX.IntrinsicElements;
  className?: string;
};

export function Reveal({ children, delay = 0, as: Tag = "div", className = "" }: Props) {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("is-visible");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -60px 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const delayClass = delay ? ` reveal-delay-${delay}` : "";
  const Comp = Tag as React.ElementType;
  return (
    <Comp ref={ref as never} className={`reveal${delayClass} ${className}`}>
      {children}
    </Comp>
  );
}
