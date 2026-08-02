"use client";

import { useEffect, useRef } from "react";
import ParticleEngine from "./ParticleEngine";

export default function CanvasCursor() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const mouse = useRef({
    x: 0,
    y: 0,
  });

  const engine = useRef(new ParticleEngine());

  useEffect(() => {
    // فقط داخل مرورگر
    mouse.current = {
      x: window.innerWidth / 2,
      y: window.innerHeight / 2,
    };

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resize();

    window.addEventListener("resize", resize);

    const move = (e: MouseEvent) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;

      engine.current.spawn(e.clientX, e.clientY);
    };

    window.addEventListener("mousemove", move);

    let animationId: number;

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      engine.current.update();
      engine.current.draw(ctx);

      animationId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", move);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 z-[9999]"
    />
  );
}