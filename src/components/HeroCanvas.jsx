import React, { useEffect, useRef } from 'react';

export default function HeroCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Check prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    // Mouse tracking for subtle parallax
    let mouseX = width / 2;
    let mouseY = height / 2;
    let targetMouseX = width / 2;
    let targetMouseY = height / 2;

    const handleMouseMove = (e) => {
      targetMouseX = e.clientX;
      targetMouseY = e.clientY;
    };
    window.addEventListener('mousemove', handleMouseMove);

    // Stars generation
    const starCount = Math.floor(Math.min(width, 1400) / 7);
    const stars = Array.from({ length: starCount }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      size: Math.random() * 1.5 + 0.3,
      alpha: Math.random() * 0.8 + 0.2,
      baseAlpha: Math.random() * 0.7 + 0.2,
      twinkleSpeed: (Math.random() * 0.02 + 0.005) * (Math.random() > 0.5 ? 1 : -1),
      depth: Math.random() * 0.8 + 0.2,
    }));

    // Orbit rings params
    let rotationAngle = 0;

    const render = () => {
      // Smooth mouse interpolation
      mouseX += (targetMouseX - mouseX) * 0.05;
      mouseY += (targetMouseY - mouseY) * 0.05;

      const parallaxX = (mouseX - width / 2) * 0.02;
      const parallaxY = (mouseY - height / 2) * 0.02;

      ctx.clearRect(0, 0, width, height);

      // Deep space gradient background
      const bgGrad = ctx.createRadialGradient(
        width / 2 + parallaxX * 2,
        height * 0.4 + parallaxY * 2,
        50,
        width / 2,
        height / 2,
        Math.max(width, height) * 0.75
      );
      bgGrad.addColorStop(0, '#0a1532');
      bgGrad.addColorStop(0.35, '#050914');
      bgGrad.addColorStop(1, '#020409');

      ctx.fillStyle = bgGrad;
      ctx.fillRect(0, 0, width, height);

      // Draw faint cybernetic grid
      ctx.strokeStyle = 'rgba(56, 189, 248, 0.03)';
      ctx.lineWidth = 1;
      const gridSize = 80;
      const gridOffsetX = (parallaxX * 0.5) % gridSize;
      const gridOffsetY = (parallaxY * 0.5) % gridSize;

      ctx.beginPath();
      for (let x = gridOffsetX; x < width; x += gridSize) {
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
      }
      for (let y = gridOffsetY; y < height; y += gridSize) {
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
      }
      ctx.stroke();

      // Render stars
      stars.forEach((star) => {
        if (!prefersReducedMotion) {
          star.alpha += star.twinkleSpeed;
          if (star.alpha > 0.9 || star.alpha < 0.15) {
            star.twinkleSpeed = -star.twinkleSpeed;
          }
        }

        const sx = star.x + parallaxX * star.depth;
        const sy = star.y + parallaxY * star.depth;

        ctx.fillStyle = `rgba(224, 242, 254, ${Math.max(0.1, Math.min(1, star.alpha))})`;
        ctx.beginPath();
        ctx.arc(sx, sy, star.size, 0, Math.PI * 2);
        ctx.fill();

        // Cyan glow on larger stars
        if (star.size > 1.2) {
          ctx.fillStyle = `rgba(6, 182, 212, ${star.alpha * 0.3})`;
          ctx.beginPath();
          ctx.arc(sx, sy, star.size * 2.5, 0, Math.PI * 2);
          ctx.fill();
        }
      });

      // Render central realistic orbital ring visual
      const centerX = width / 2 + parallaxX * 1.5;
      const centerY = height * 0.42 + parallaxY * 1.5;
      const radius = Math.min(width, height) * 0.28;

      if (!prefersReducedMotion) {
        rotationAngle += 0.0015;
      }

      // Orbital ellipse 1
      ctx.save();
      ctx.translate(centerX, centerY);
      ctx.rotate(rotationAngle);
      ctx.beginPath();
      ctx.ellipse(0, 0, radius, radius * 0.4, Math.PI / 6, 0, Math.PI * 2);
      ctx.strokeStyle = 'rgba(6, 182, 212, 0.18)';
      ctx.lineWidth = 1.5;
      ctx.setLineDash([8, 12]);
      ctx.stroke();
      ctx.restore();

      // Orbital ellipse 2 (Counter-rotating)
      ctx.save();
      ctx.translate(centerX, centerY);
      ctx.rotate(-rotationAngle * 0.7);
      ctx.beginPath();
      ctx.ellipse(0, 0, radius * 1.2, radius * 0.48, -Math.PI / 4, 0, Math.PI * 2);
      ctx.strokeStyle = 'rgba(99, 102, 241, 0.12)';
      ctx.lineWidth = 1;
      ctx.setLineDash([4, 16]);
      ctx.stroke();
      ctx.restore();

      // Central atmospheric Earth-glow sphere
      const earthGrad = ctx.createRadialGradient(0, 0, 10, 0, 0, radius * 0.65);
      earthGrad.addColorStop(0, 'rgba(6, 182, 212, 0.12)');
      earthGrad.addColorStop(0.6, 'rgba(15, 23, 42, 0.3)');
      earthGrad.addColorStop(1, 'rgba(2, 4, 9, 0)');

      ctx.save();
      ctx.translate(centerX, centerY);
      ctx.fillStyle = earthGrad;
      ctx.beginPath();
      ctx.arc(0, 0, radius * 0.65, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none z-0"
    />
  );
}
