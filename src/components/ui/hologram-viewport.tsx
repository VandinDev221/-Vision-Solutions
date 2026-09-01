"use client";

import React, { useEffect, useRef } from "react";

export const HologramViewport = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);

    const mouse = {
      x: width / 2,
      y: height / 2,
      targetX: width / 2,
      targetY: height / 2,
      active: false,
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouse.targetX = e.clientX;
      mouse.targetY = e.clientY;
      mouse.active = true;
    };

    const handleMouseLeave = () => {
      mouse.active = false;
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    document.addEventListener("mouseleave", handleMouseLeave);

    // 3D Space Holographic Stars & Energy Nodes
    const count = Math.min(Math.floor(width / 22), 70);
    const nodes: Array<{
      x: number;
      y: number;
      z: number;
      vz: number;
      size: number;
      hue: number;
      alpha: number;
    }> = [];

    for (let i = 0; i < count; i++) {
      nodes.push({
        x: (Math.random() - 0.5) * width * 1.5,
        y: (Math.random() - 0.5) * height * 1.5,
        z: Math.random() * 1000 + 1,
        vz: Math.random() * 1.5 + 0.5,
        size: Math.random() * 2.5 + 1,
        hue: Math.random() > 0.6 ? 185 : Math.random() > 0.3 ? 260 : 160,
        alpha: Math.random() * 0.7 + 0.3,
      });
    }

    let time = 0;

    const render = () => {
      time += 0.015;
      ctx.clearRect(0, 0, width, height);

      // Smooth mouse interpolation
      mouse.x += (mouse.targetX - mouse.x) * 0.08;
      mouse.y += (mouse.targetY - mouse.y) * 0.08;

      const fov = 400;
      const cx = width / 2 + (mouse.x - width / 2) * 0.08;
      const cy = height / 2 + (mouse.y - height / 2) * 0.08;

      // Holographic Deep Space Nebula Radial Aura
      const nebula = ctx.createRadialGradient(cx, cy, 0, cx, cy, width * 0.8);
      nebula.addColorStop(0, "rgba(0, 240, 255, 0.04)");
      nebula.addColorStop(0.3, "rgba(121, 40, 202, 0.03)");
      nebula.addColorStop(0.7, "rgba(0, 112, 243, 0.015)");
      nebula.addColorStop(1, "transparent");
      ctx.fillStyle = nebula;
      ctx.fillRect(0, 0, width, height);

      // Render 3D Floating Quantum Nodes
      for (let i = 0; i < nodes.length; i++) {
        const node = nodes[i];
        node.z -= node.vz;

        if (node.z <= 0) {
          node.z = 1000;
          node.x = (Math.random() - 0.5) * width * 1.5;
          node.y = (Math.random() - 0.5) * height * 1.5;
        }

        const scale = fov / (fov + node.z);
        const px = cx + node.x * scale;
        const py = cy + node.y * scale;
        const radius = node.size * scale * 2;

        if (px < 0 || px > width || py < 0 || py > height) continue;

        // Draw quantum particle with glowing aura
        ctx.beginPath();
        ctx.arc(px, py, radius, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(${node.hue}, 100%, 70%, ${node.alpha * scale})`;
        ctx.shadowColor = `hsl(${node.hue}, 100%, 60%)`;
        ctx.shadowBlur = 10 * scale;
        ctx.fill();
        ctx.shadowBlur = 0;

        // Draw connecting cyber-circuit lines
        for (let j = i + 1; j < nodes.length; j++) {
          const node2 = nodes[j];
          const scale2 = fov / (fov + node2.z);
          const px2 = cx + node2.x * scale2;
          const py2 = cy + node2.y * scale2;

          const dist = Math.hypot(px - px2, py - py2);
          if (dist < 130 && Math.abs(node.z - node2.z) < 250) {
            ctx.beginPath();
            ctx.moveTo(px, py);
            ctx.lineTo(px2, py2);
            ctx.strokeStyle = `rgba(0, 240, 255, ${0.15 * (1 - dist / 130) * scale})`;
            ctx.lineWidth = 0.75;
            ctx.stroke();
          }
        }
      }

      // Draw Cursor Quantum Energy Reticle
      if (mouse.active) {
        ctx.save();
        ctx.translate(mouse.x, mouse.y);
        ctx.rotate(time * 0.5);

        // Outer Hex / Ring
        ctx.beginPath();
        ctx.arc(0, 0, 45, 0, Math.PI * 2);
        ctx.strokeStyle = "rgba(0, 240, 255, 0.25)";
        ctx.setLineDash([6, 12]);
        ctx.lineWidth = 1;
        ctx.stroke();

        // Inner Core Ring
        ctx.beginPath();
        ctx.arc(0, 0, 20, 0, Math.PI * 2);
        ctx.strokeStyle = "rgba(121, 40, 202, 0.4)";
        ctx.setLineDash([4, 6]);
        ctx.stroke();

        ctx.restore();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0 holo-scanline"
      style={{ opacity: 0.95 }}
    />
  );
};
