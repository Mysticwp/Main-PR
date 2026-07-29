"use client";

import { useEffect, useRef } from "react";
import type { ReactNode } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type RevealProps = {
  children: ReactNode;
  delay?: number;
};

export function Reveal({ children, delay = 0 }: RevealProps) {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      ref.current?.classList.add("is-visible");
      return;
    }

    const node = ref.current;

    if (!node) {
      return;
    }

    const tween = gsap.to(node, {
      opacity: 1,
      y: 0,
      delay,
      duration: 0.8,
      ease: "power3.out",
      paused: true
    });

    const trigger = ScrollTrigger.create({
      trigger: node,
      start: "top 82%",
      once: true,
      onEnter: () => {
        node.classList.add("is-visible");
        tween.play();
      }
    });

    return () => {
      tween.kill();
      trigger.kill();
    };
  }, [delay]);

  return (
    <div ref={ref} className="reveal">
      {children}
    </div>
  );
}
