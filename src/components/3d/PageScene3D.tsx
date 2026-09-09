"use client";

import React, { useEffect, useRef } from "react";
import * as THREE from "three";

type PageScene3DVariant = "default" | "produtos" | "servicos" | "sobre" | "tecnologia" | "contato";

interface PageScene3DProps {
  variant?: PageScene3DVariant;
  height?: string;
  className?: string;
}

// Paleta de acento por variante
const variantAccents: Record<PageScene3DVariant, { primary: number; secondary: number; tertiary: number }> = {
  default:    { primary: 0x2563eb, secondary: 0x38bdf8, tertiary: 0x6366f1 },
  produtos:   { primary: 0x2563eb, secondary: 0x00c2ff, tertiary: 0x7c3aed },
  servicos:   { primary: 0x0ea5e9, secondary: 0x6366f1, tertiary: 0x10b981 },
  sobre:      { primary: 0x3b82f6, secondary: 0x8b5cf6, tertiary: 0x06b6d4 },
  tecnologia: { primary: 0x06b6d4, secondary: 0x3b82f6, tertiary: 0x10b981 },
  contato:    { primary: 0x2563eb, secondary: 0x38bdf8, tertiary: 0xa855f7 },
};

export const PageScene3D: React.FC<PageScene3DProps> = ({
  variant = "default",
  height = "320px",
  className = "",
}) => {
  const mountRef = useRef<HTMLDivElement>(null);
  const accent = variantAccents[variant];

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    const w = mount.clientWidth || window.innerWidth;
    const h = mount.clientHeight || 320;

    // ── Scene ──
    const scene = new THREE.Scene();

    // ── Camera — posição ligeiramente off-center para assimetria ──
    const camera = new THREE.PerspectiveCamera(38, w / h, 0.1, 80);
    camera.position.set(1.5, 0.6, 11);
    camera.lookAt(0, 0, 0);

    // ── Renderer ──
    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: "high-performance",
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
    renderer.setSize(w, h);
    renderer.setClearColor(0x000000, 0);
    mount.appendChild(renderer.domElement);

    // ── Lighting ──
    scene.add(new THREE.AmbientLight(0xffffff, 0.5));
    const key = new THREE.DirectionalLight(accent.primary, 2.5);
    key.position.set(4, 5, 6);
    scene.add(key);
    const fill = new THREE.PointLight(accent.secondary, 3, 18);
    fill.position.set(-5, -2, 4);
    scene.add(fill);
    const rim = new THREE.PointLight(accent.tertiary, 2, 14);
    rim.position.set(3, -4, 2);
    scene.add(rim);

    // ── Master group ──
    const group = new THREE.Group();
    scene.add(group);

    // ── 1. Geometric Floating Modules (cubes + octahedra) ──
    const solidMat = new THREE.MeshStandardMaterial({
      color: 0x0f1a2e,
      metalness: 0.88,
      roughness: 0.22,
    });

    const shapes: THREE.Mesh[] = [];
    const shapeDefs = [
      // [geometry, x, y, z, rotSpeedX, rotSpeedY, scale]
      { geo: new THREE.BoxGeometry(0.9, 0.9, 0.9),            x: -3.2, y:  0.4, z:  0,    rx: 0.22, ry: 0.31 },
      { geo: new THREE.OctahedronGeometry(0.65),              x:  0.5, y:  1.2, z: -1,    rx: 0.18, ry: 0.24 },
      { geo: new THREE.BoxGeometry(0.65, 0.65, 0.65),         x:  3.4, y: -0.6, z:  0.5, rx: 0.29, ry: 0.20 },
      { geo: new THREE.TetrahedronGeometry(0.72),             x: -1.4, y: -1.5, z:  1,   rx: 0.14, ry: 0.35 },
      { geo: new THREE.OctahedronGeometry(0.48),              x:  2.1, y:  1.8, z: -0.5, rx: 0.33, ry: 0.16 },
      { geo: new THREE.BoxGeometry(0.5, 1.4, 0.5),            x: -2.2, y:  1.0, z:  0.8, rx: 0.12, ry: 0.28 },
    ];

    shapeDefs.forEach(({ geo, x, y, z, rx, ry }) => {
      const mesh = new THREE.Mesh(geo, solidMat);
      mesh.position.set(x, y, z);
      mesh.userData = { rx, ry, ox: x, oy: y };
      group.add(mesh);
      shapes.push(mesh);

      // Wireframe overlay
      const wireMat = new THREE.MeshBasicMaterial({
        color: accent.primary,
        wireframe: true,
        transparent: true,
        opacity: 0.22,
      });
      const wire = new THREE.Mesh(geo, wireMat);
      mesh.add(wire);
    });

    // ── 2. Connecting spline conduits ──
    const conduitMat = new THREE.LineBasicMaterial({
      color: accent.secondary,
      transparent: true,
      opacity: 0.3,
    });

    for (let i = 0; i < shapes.length - 1; i++) {
      const a = shapes[i].position;
      const b = shapes[(i + 1) % shapes.length].position;
      const mid = new THREE.Vector3(
        (a.x + b.x) * 0.5,
        (a.y + b.y) * 0.5 + 0.8,
        (a.z + b.z) * 0.5
      );
      const curve = new THREE.CatmullRomCurve3([a.clone(), mid, b.clone()]);
      const pts = curve.getPoints(40);
      const geom = new THREE.BufferGeometry().setFromPoints(pts);
      group.add(new THREE.Line(geom, conduitMat));
    }

    // ── 3. Traveling data packets ──
    const packetMat = new THREE.MeshBasicMaterial({ color: accent.secondary });
    const packetGeo = new THREE.SphereGeometry(0.065, 10, 10);
    const curves: THREE.CatmullRomCurve3[] = [];

    for (let i = 0; i < 3; i++) {
      const a = shapes[i * 2].position;
      const b = shapes[(i * 2 + 1) % shapes.length].position;
      const mid = new THREE.Vector3((a.x + b.x) / 2, (a.y + b.y) / 2 + 1.2, (a.z + b.z) / 2);
      curves.push(new THREE.CatmullRomCurve3([a.clone(), mid, b.clone()]));

      const p = new THREE.Mesh(packetGeo, packetMat);
      group.add(p);
      shapes.push(p); // track for cleanup
    }

    // ── Mouse parallax ──
    const mouse = { x: 0, y: 0, tx: 0, ty: 0 };
    const onMouseMove = (e: MouseEvent) => {
      mouse.tx = (e.clientX / window.innerWidth - 0.5) * 2;
      mouse.ty = -(e.clientY / window.innerHeight - 0.5) * 2;
    };
    window.addEventListener("mousemove", onMouseMove, { passive: true });

    // ── Resize ──
    const onResize = () => {
      const nw = mount.clientWidth;
      const nh = mount.clientHeight;
      camera.aspect = nw / nh;
      camera.updateProjectionMatrix();
      renderer.setSize(nw, nh);
    };
    window.addEventListener("resize", onResize);

    // ── Animation loop ──
    const clock = new THREE.Clock();
    let animId: number;

    const animate = () => {
      animId = requestAnimationFrame(animate);
      const delta = clock.getDelta();
      const elapsed = clock.getElapsedTime();

      mouse.x += (mouse.tx - mouse.x) * 0.05;
      mouse.y += (mouse.ty - mouse.y) * 0.05;

      // Subtle group parallax
      group.rotation.y = mouse.x * 0.12 + elapsed * 0.04;
      group.rotation.x = -mouse.y * 0.08;

      // Individual shape rotation + float
      shapeDefs.forEach(({ rx, ry, x, y }, i) => {
        const m = shapes[i];
        m.rotation.x += delta * rx;
        m.rotation.y += delta * ry;
        m.position.y = y + Math.sin(elapsed * 0.6 + i * 1.1) * 0.12;
      });

      // Packet travel
      curves.forEach((curve, i) => {
        const t = ((elapsed * 0.5 + i * 0.33) % 1);
        const pt = curve.getPoint(t);
        shapes[shapeDefs.length + i].position.copy(pt);
      });

      renderer.render(scene, camera);
    };
    animate();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("resize", onResize);
      solidMat.dispose();
      packetGeo.dispose();
      packetMat.dispose();
      renderer.dispose();
      if (mount.contains(renderer.domElement)) {
        mount.removeChild(renderer.domElement);
      }
    };
  }, [variant]);

  return (
    <div
      ref={mountRef}
      style={{ height }}
      className={`w-full pointer-events-none ${className}`}
      aria-hidden="true"
    />
  );
};
