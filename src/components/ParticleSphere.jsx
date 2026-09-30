'use client';

import React, { useEffect, useRef } from 'react';

const POINTS = 150;
const BREATH_MS = 8000; // one slow breath: 4s in, 4s out
const BREATH_DEPTH = 0.04; // radius grows and shrinks by 4%
const LINK_DISTANCE = 0.42;

// Evenly spread points on a unit sphere (Fibonacci lattice).
function spherePoints(count) {
  const pts = [];
  const golden = Math.PI * (3 - Math.sqrt(5));
  for (let i = 0; i < count; i++) {
    const y = 1 - (i / (count - 1)) * 2;
    const r = Math.sqrt(1 - y * y);
    const theta = golden * i;
    pts.push([Math.cos(theta) * r, y, Math.sin(theta) * r]);
  }
  return pts;
}

/**
 * Decorative 3D "mind-body network": a slowly turning sphere of connected
 * points that gently breathes in and out and leans toward the pointer. Pauses off-screen; draws a single
 * still frame when the visitor prefers reduced motion.
 */
export default function ParticleSphere({ className = '', color = '255, 255, 255' }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return undefined;
    const ctx = canvas.getContext('2d');
    const pts = spherePoints(POINTS);
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let width = 0;
    let height = 0;
    let frame = 0;
    let visible = true;
    let angleY = 0;
    let tiltX = 0.35;
    let targetX = 0.35;
    let targetSpin = 0;

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = canvas.clientWidth;
      height = canvas.clientHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const draw = () => {
      ctx.clearRect(0, 0, width, height);
      const breath = reduce ? 1 : 1 + BREATH_DEPTH * Math.sin((performance.now() / BREATH_MS) * Math.PI * 2);
      const radius = Math.min(width, height) * 0.42 * breath;
      const cx = width / 2;
      const cy = height / 2;
      const cosY = Math.cos(angleY);
      const sinY = Math.sin(angleY);
      const cosX = Math.cos(tiltX);
      const sinX = Math.sin(tiltX);

      const projected = pts.map(([x, y, z]) => {
        const x1 = x * cosY - z * sinY;
        const z1 = x * sinY + z * cosY;
        const y1 = y * cosX - z1 * sinX;
        const z2 = y * sinX + z1 * cosX;
        const scale = 2.4 / (2.4 + z2);
        return { x: cx + x1 * radius * scale, y: cy + y1 * radius * scale, z: z2, rx: x1, ry: y1 };
      });

      ctx.lineWidth = 0.6;
      for (let i = 0; i < projected.length; i++) {
        const a = projected[i];
        for (let j = i + 1; j < projected.length; j++) {
          const b = projected[j];
          const dx = a.rx - b.rx;
          const dy = a.ry - b.ry;
          const dz = a.z - b.z;
          const d = Math.sqrt(dx * dx + dy * dy + dz * dz);
          if (d < LINK_DISTANCE) {
            const depth = (2 - (a.z + b.z) / 2) / 3;
            ctx.strokeStyle = `rgba(${color}, ${(1 - d / LINK_DISTANCE) * 0.28 * depth})`;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }

      projected.forEach((p) => {
        const depth = (1 - p.z) / 2;
        ctx.fillStyle = `rgba(${color}, ${0.25 + depth * 0.65})`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, 0.8 + depth * 1.8, 0, Math.PI * 2);
        ctx.fill();
      });
    };

    const loop = () => {
      if (visible) {
        angleY += 0.0022 + targetSpin;
        targetSpin *= 0.95;
        tiltX += (targetX - tiltX) * 0.04;
        draw();
      }
      frame = requestAnimationFrame(loop);
    };

    const onPointer = (e) => {
      const rect = canvas.getBoundingClientRect();
      const nx = (e.clientX - rect.left) / rect.width - 0.5;
      const ny = (e.clientY - rect.top) / rect.height - 0.5;
      targetX = 0.35 + ny * 0.6;
      targetSpin = nx * 0.004;
    };

    resize();
    draw();
    const ro = new ResizeObserver(() => { resize(); draw(); });
    ro.observe(canvas);
    const io = new IntersectionObserver(([entry]) => { visible = entry.isIntersecting; });
    io.observe(canvas);

    if (!reduce) {
      frame = requestAnimationFrame(loop);
      window.addEventListener('pointermove', onPointer, { passive: true });
    }

    return () => {
      cancelAnimationFrame(frame);
      ro.disconnect();
      io.disconnect();
      window.removeEventListener('pointermove', onPointer);
    };
  }, [color]);

  return <canvas ref={canvasRef} className={`particle-sphere ${className}`} aria-hidden="true" />;
}
