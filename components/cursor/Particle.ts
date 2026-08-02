import { Particle } from "./types";

export function createParticle(
  x: number,
  y: number
): Particle {
  return {
    x,
    y,

    vx: (Math.random() - 0.5) * 4,
    vy: (Math.random() - 0.5) * 4,

    size: Math.random() * 4 + 2,

    life: 0,
    maxLife: 45,

    opacity: 1,

    color: "#22d3ee",
  };
}