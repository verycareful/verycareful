"use client";

import { useRef, useEffect, RefObject } from "react";

const GATE_LABELS = ["H", "X", "RZ", "Y", "S", "T", "CX"];
const QUBIT_COUNT = 16;
const GATE_COUNT = 9;
const CONNECT_DIST = 240;
const REPULSE_RADIUS = 150;
const REPULSE_STRENGTH = 0.025;

function parseColor(cssColor: string): [number, number, number] {
  const probe = document.createElement("div");
  probe.style.color = cssColor;
  document.body.appendChild(probe);
  const c = getComputedStyle(probe).color;
  document.body.removeChild(probe);
  const m = c.match(/rgba?\(([^)]+)\)/);
  if (!m) return [45, 156, 219];
  const parts = m[1].split(",").map((s) => parseFloat(s));
  return [parts[0], parts[1], parts[2]];
}

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  kind: "qubit" | "gate";
  phase: number;
  phaseSpeed: number;
  radius: number;
  label?: string;
  measured?: boolean;
  measureTimer?: number;
  state?: string;
}

interface QuantumCanvasProps {
  tipRef: RefObject<HTMLDivElement | null>;
}

export default function QuantumCanvas({ tipRef }: QuantumCanvasProps) {
  const ref = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: -9999, y: -9999 });
  const partsRef = useRef<Particle[]>([]);
  const rafRef = useRef(0);
  const colorRef = useRef<[number, number, number]>([45, 156, 219]);
  const collapseRef = useRef<[number, number, number]>([242, 153, 74]);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const canvas = ref.current;
    if (!canvas) return;
    const container = canvas.parentElement!;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    const reread = () => {
      const style = getComputedStyle(document.documentElement);
      colorRef.current = parseColor(style.getPropertyValue("--accent").trim() || "#2D9CDB");
      collapseRef.current = parseColor(style.getPropertyValue("--collapse").trim() || "#F2994A");
    };
    reread();

    const setSize = () => {
      const w = container.clientWidth;
      const h = container.clientHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      canvas.style.width = w + "px";
      canvas.style.height = h + "px";
      const ctx = canvas.getContext("2d")!;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const spawn = () => {
      const W = canvas.clientWidth;
      const H = canvas.clientHeight;
      const ps: Particle[] = [];
      for (let i = 0; i < QUBIT_COUNT; i++) {
        ps.push({
          x: Math.random() * W,
          y: Math.random() * H,
          vx: (Math.random() - 0.5) * 0.28,
          vy: (Math.random() - 0.5) * 0.28,
          kind: "qubit",
          phase: Math.random() * Math.PI * 2,
          phaseSpeed: 0.6 + Math.random() * 1.0,
          radius: 5 + Math.random() * 4,
          measured: false,
          measureTimer: 0,
          state: i % 2 === 0 ? "0" : "1",
        });
      }
      for (let i = 0; i < GATE_COUNT; i++) {
        ps.push({
          x: Math.random() * W,
          y: Math.random() * H,
          vx: (Math.random() - 0.5) * 0.18,
          vy: (Math.random() - 0.5) * 0.18,
          kind: "gate",
          label: GATE_LABELS[i % GATE_LABELS.length],
          phase: Math.random() * Math.PI * 2,
          phaseSpeed: 0.3 + Math.random() * 0.5,
          radius: 11,
        });
      }
      partsRef.current = ps;
    };

    setSize();
    spawn();

    const onMouse = (e: MouseEvent) => {
      const r = canvas.getBoundingClientRect();
      const x = e.clientX - r.left;
      const y = e.clientY - r.top;
      if (x >= 0 && x <= r.width && y >= 0 && y <= r.height) {
        mouseRef.current = { x, y };
      } else {
        mouseRef.current = { x: -9999, y: -9999 };
      }
    };

    const onClick = (e: MouseEvent) => {
      const r = canvas.getBoundingClientRect();
      const mx = e.clientX - r.left;
      const my = e.clientY - r.top;
      if (mx < 0 || mx > r.width || my < 0 || my > r.height) return;
      for (const p of partsRef.current) {
        if (p.kind !== "qubit") continue;
        if (Math.hypot(p.x - mx, p.y - my) < p.radius! + 14) {
          p.measured = true;
          p.measureTimer = 1.6;
          p.state = Math.random() < 0.5 ? "0" : "1";
          if (tipRef.current) {
            const tip = tipRef.current;
            tip.textContent = `measured → |${p.state}⟩`;
            tip.style.left = e.clientX + "px";
            tip.style.top = e.clientY + "px";
            tip.classList.add("show");
            clearTimeout((tip as HTMLDivElement & { __t?: ReturnType<typeof setTimeout> }).__t);
            (tip as HTMLDivElement & { __t?: ReturnType<typeof setTimeout> }).__t = setTimeout(
              () => tip.classList.remove("show"),
              900
            );
          }
          break;
        }
      }
    };

    window.addEventListener("mousemove", onMouse);
    window.addEventListener("click", onClick);

    const themeObserver = new MutationObserver(reread);
    themeObserver.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["data-theme"],
    });

    const ctx = canvas.getContext("2d")!;
    let last = performance.now();

    const animate = () => {
      rafRef.current = requestAnimationFrame(animate);
      const now = performance.now();
      const dt = Math.min((now - last) * 0.001, 0.05);
      last = now;
      const t = now * 0.001;
      const W = canvas.clientWidth;
      const H = canvas.clientHeight;
      const mx = mouseRef.current.x;
      const my = mouseRef.current.y;
      const [r, g, b] = colorRef.current;
      const [cr, cg, cb] = collapseRef.current;

      ctx.clearRect(0, 0, W, H);

      const ps = partsRef.current;
      for (const p of ps) {
        p.phase += p.phaseSpeed * dt;
        const dx = p.x - mx;
        const dy = p.y - my;
        const d = Math.hypot(dx, dy);
        if (d < REPULSE_RADIUS && d > 0.1) {
          const f = REPULSE_STRENGTH * (1 - d / REPULSE_RADIUS);
          p.vx += (dx / d) * f;
          p.vy += (dy / d) * f;
        }
        p.x += p.vx;
        p.y += p.vy;
        p.vx *= 0.998;
        p.vy *= 0.998;
        if (p.x < -20) p.x = W + 20;
        if (p.x > W + 20) p.x = -20;
        if (p.y < -20) p.y = H + 20;
        if (p.y > H + 20) p.y = -20;
        if (p.measured && p.measureTimer !== undefined) {
          p.measureTimer -= dt;
          if (p.measureTimer <= 0) p.measured = false;
        }
      }

      // Entanglement lines
      for (let i = 0; i < ps.length; i++) {
        if (ps[i].kind !== "qubit") continue;
        for (let j = i + 1; j < ps.length; j++) {
          if (ps[j].kind !== "qubit") continue;
          const dx = ps[i].x - ps[j].x;
          const dy = ps[i].y - ps[j].y;
          const dist = Math.hypot(dx, dy);
          if (dist < CONNECT_DIST) {
            const a = (1 - dist / CONNECT_DIST) * 0.22;
            ctx.beginPath();
            ctx.moveTo(ps[i].x, ps[i].y);
            ctx.lineTo(ps[j].x, ps[j].y);
            ctx.strokeStyle = `rgba(${r},${g},${b},${a})`;
            ctx.lineWidth = 0.7;
            ctx.stroke();
          }
        }
      }

      // Gates
      for (const p of ps) {
        if (p.kind !== "gate") continue;
        const pulse = 0.4 + 0.2 * Math.sin(t * 1.2 + p.phase);
        const s = 20;
        const a = pulse * 0.55;
        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.strokeStyle = `rgba(${r},${g},${b},${a})`;
        ctx.lineWidth = 0.8;
        ctx.strokeRect(-s / 2, -s / 2, s, s);
        ctx.font = `600 9px "IBM Plex Mono", monospace`;
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillStyle = `rgba(${r},${g},${b},${a * 1.5})`;
        ctx.fillText(p.label!, 0, 0);
        ctx.restore();
      }

      // Qubits
      for (const p of ps) {
        if (p.kind !== "qubit") continue;
        const pulse = 0.5 + 0.3 * Math.sin(t * 1.8 + p.phase);
        const rad = p.radius;
        ctx.save();
        ctx.translate(p.x, p.y);
        if (p.measured && p.measureTimer !== undefined) {
          const a = Math.min(1, p.measureTimer / 0.4) * 0.85;
          ctx.beginPath();
          ctx.arc(0, 0, rad, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(${cr},${cg},${cb},${a})`;
          ctx.fill();
          ctx.font = `600 8px "IBM Plex Mono", monospace`;
          ctx.fillStyle = `rgba(${cr},${cg},${cb},${a})`;
          ctx.textAlign = "center";
          ctx.fillText(`|${p.state}⟩`, 0, -rad - 6);
        } else {
          const a = 0.28 + pulse * 0.25;
          ctx.beginPath();
          ctx.arc(0, 0, rad, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(${r},${g},${b},${a})`;
          ctx.fill();
          ctx.save();
          ctx.rotate(p.phase);
          ctx.beginPath();
          ctx.arc(0, 0, rad * 1.9, 0, Math.PI * 1.6);
          ctx.strokeStyle = `rgba(${r},${g},${b},${a * 0.55})`;
          ctx.lineWidth = 0.8;
          ctx.stroke();
          ctx.restore();
        }
        ctx.restore();
      }
    };

    animate();

    const onResize = () => {
      setSize();
      spawn();
    };
    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("mousemove", onMouse);
      window.removeEventListener("click", onClick);
      window.removeEventListener("resize", onResize);
      themeObserver.disconnect();
      cancelAnimationFrame(rafRef.current);
    };
  }, [tipRef]);

  return (
    <canvas
      ref={ref}
      style={{ position: "absolute", inset: 0, zIndex: 0 }}
      aria-hidden="true"
    />
  );
}
