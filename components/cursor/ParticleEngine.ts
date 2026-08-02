import { Particle } from "./types";
import { createParticle } from "./Particle";

export default class ParticleEngine {
  particles: Particle[] = [];

  spawn(x: number, y: number) {
    for (let i = 0; i < 3; i++) {
      this.particles.push(createParticle(x, y));
    }
  }

  update() {
    this.particles.forEach((p) => {
      p.x += p.vx;
      p.y += p.vy;

      p.vx *= 0.97;
      p.vy *= 0.97;

      p.life++;
      p.opacity = 1 - p.life / p.maxLife;
    });

    this.particles = this.particles.filter(
      (p) => p.life < p.maxLife
    );
  }

  draw(ctx: CanvasRenderingContext2D) {
    this.particles.forEach((p) => {
      ctx.beginPath();

      ctx.globalAlpha = p.opacity;

      ctx.fillStyle = p.color;

      ctx.shadowBlur = 25;

      ctx.shadowColor = p.color;

      ctx.arc(
        p.x,
        p.y,
        p.size,
        0,
        Math.PI * 2
      );

      ctx.fill();

      ctx.globalAlpha = 1;
    });
  }
}