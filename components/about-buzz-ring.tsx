"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type Puff = {
  angle: number;
  radiusOffset: number;
  size: number;
  alpha: number;
  speed: number;
  wobble: number;
  wobbleSpeed: number;
  phase: number;
};

type Wave = {
  progress: number;
  seed: number;
};

const PURPLE = { r: 95, g: 49, b: 162 };

function createPuffs(count: number): Puff[] {
  return Array.from({ length: count }, (_, index) => ({
    angle: (index / count) * Math.PI * 2 + (Math.random() - 0.5) * 0.06,
    radiusOffset: (Math.random() - 0.5) * 18,
    size: 1.6 + Math.random() * 3.4,
    alpha: 0.06 + Math.random() * 0.16,
    speed: 0.00025 + Math.random() * 0.00055,
    wobble: 2 + Math.random() * 4,
    wobbleSpeed: 0.12 + Math.random() * 0.28,
    phase: Math.random() * Math.PI * 2
  }));
}

function drawPuff(
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  size: number,
  alpha: number
) {
  const gradient = ctx.createRadialGradient(x, y, 0, x, y, size);
  gradient.addColorStop(0, `rgba(${PURPLE.r}, ${PURPLE.g}, ${PURPLE.b}, ${alpha})`);
  gradient.addColorStop(
    0.45,
    `rgba(${PURPLE.r}, ${PURPLE.g}, ${PURPLE.b}, ${alpha * 0.4})`
  );
  gradient.addColorStop(1, `rgba(${PURPLE.r}, ${PURPLE.g}, ${PURPLE.b}, 0)`);
  ctx.fillStyle = gradient;
  ctx.beginPath();
  ctx.arc(x, y, size, 0, Math.PI * 2);
  ctx.fill();
}

export function AboutBuzzRing() {
  const ringRef = useRef<HTMLDivElement>(null);
  const visualRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const ring = ringRef.current;
    const visual = visualRef.current;
    const canvas = canvasRef.current;
    if (!ring || !visual || !canvas) return;

    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let raf = 0;
    let running = true;
    let time = 0;
    let waveTimer = 0;
    let last = 0;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    let width = 0;
    let height = 0;
    let baseRadius = 0;
      let puffs = createPuffs(900);
    const waves: Wave[] = [];

    const resize = () => {
      const rect = visual.getBoundingClientRect();
      width = Math.max(rect.width, 320);
      height = Math.max(rect.height, 320);
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = "100%";
      canvas.style.height = "100%";
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      // Keep smoke aligned to the text box center (ring), not outer visual edges
      const ringRect = ring.getBoundingClientRect();
      baseRadius = Math.min(ringRect.width, ringRect.height) * 0.36;
      puffs = createPuffs(900);
    };

    resize();
    window.addEventListener("resize", resize);

    const gsapCtx = gsap.context(() => {
      if (reduced) {
        ring.classList.add("is-visible");
        return;
      }

      gsap.fromTo(
        ring,
        { opacity: 0, scale: 0.96 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.9,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ring,
            start: "top 85%",
            once: true
          }
        }
      );

      gsap.fromTo(
        ring.querySelector(".mpr-about-ring__text"),
        { opacity: 0, y: 10 },
        {
          opacity: 1,
          y: 0,
          duration: 0.65,
          delay: 0.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ring,
            start: "top 85%",
            once: true
          }
        }
      );
    }, ring);

    const spawnWave = () => {
      waves.push({ progress: 0, seed: Math.random() * 100 });
    };

    spawnWave();

    const render = (now: number) => {
      if (!running) return;
      const dt = Math.min((now - (last || now)) / 1000, 0.033);
      last = now;
      time += dt;
      waveTimer += dt;

      if (!reduced && waveTimer > 2.4) {
        waveTimer = 0;
        spawnWave();
      }

      ctx.clearRect(0, 0, width, height);
      const cx = width / 2;
      const cy = height / 2;

      // Continuous dense smoke ribbon
      for (const puff of puffs) {
        if (!reduced) puff.angle += puff.speed;

        const breathe = Math.sin(time * puff.wobbleSpeed + puff.phase) * puff.wobble;
        const radial = baseRadius + puff.radiusOffset + breathe * 0.35;
        const x = cx + Math.cos(puff.angle) * radial;
        const y = cy + Math.sin(puff.angle) * radial;
        const size =
          puff.size * (0.92 + Math.sin(time * puff.wobbleSpeed + puff.phase) * 0.08);
        const alpha =
          puff.alpha * (0.88 + Math.sin(time * 0.35 + puff.phase) * 0.12);

        drawPuff(ctx, x, y, size, alpha);
      }

      // Soft expanding smoke waves from the same ring
      for (let i = waves.length - 1; i >= 0; i -= 1) {
        const wave = waves[i];
        if (!reduced) wave.progress += dt * 0.18;

        if (wave.progress >= 1) {
          waves.splice(i, 1);
          continue;
        }

        const radius = baseRadius + wave.progress * baseRadius * 0.95;
        const alpha = (1 - wave.progress) * 0.2;
        const band = 8 + wave.progress * 20;
        const count = 160;

        for (let n = 0; n < count; n += 1) {
          const angle =
            (n / count) * Math.PI * 2 +
            Math.sin(n * 0.55 + wave.seed) * 0.03 +
            time * 0.03;
          const jitter = Math.sin(n * 1.3 + time * 0.6 + wave.seed) * band * 0.4;
          const x = cx + Math.cos(angle) * (radius + jitter);
          const y = cy + Math.sin(angle) * (radius + jitter);
          drawPuff(ctx, x, y, 1.8 + band * 0.06, alpha * (0.45 + (n % 4) * 0.06));
        }
      }

      raf = requestAnimationFrame(render);
    };

    raf = requestAnimationFrame(render);

    return () => {
      running = false;
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      gsapCtx.revert();
    };
  }, []);

  return (
    <div ref={ringRef} className="mpr-about-ring">
      <div ref={visualRef} className="mpr-about-ring__visual" aria-hidden="true">
        <canvas ref={canvasRef} className="mpr-about-ring__canvas" />
      </div>
      <p className="mpr-about-ring__text">
        We Build The Buzz That
        <br />
        People Don’t Forget.
      </p>
    </div>
  );
}
