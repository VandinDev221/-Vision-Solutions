"use client";

import React, { useEffect, useRef } from "react";
import * as THREE from "three";

export const GlobalScene: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Accessibility check: reduced motion
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    // Scene
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x0b0e14, 0.035);

    // Camera
    const camera = new THREE.PerspectiveCamera(
      45,
      window.innerWidth / window.innerHeight,
      0.1,
      100
    );
    camera.position.set(0, 0, 14);

    // WebGL Renderer
    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: "high-performance",
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.25));
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x0b0e14, 0);
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.1;
    container.appendChild(renderer.domElement);

    // Lighting: Cinematic Soft Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.75);
    scene.add(ambientLight);

    const keyLight = new THREE.DirectionalLight(0x3b82f6, 1.8);
    keyLight.position.set(6, 8, 10);
    scene.add(keyLight);

    const fillLight = new THREE.DirectionalLight(0x10b981, 1.2);
    fillLight.position.set(-6, -4, 8);
    scene.add(fillLight);

    const rimLight = new THREE.PointLight(0x60a5fa, 2, 20);
    rimLight.position.set(0, 2, 6);
    scene.add(rimLight);

    // 1. Core Modular Engine Group (Spatial Architecture)
    const engineGroup = new THREE.Group();
    scene.add(engineGroup);

    // Geometric Modular Elements
    const boxGeo = new THREE.BoxGeometry(0.85, 0.85, 0.85);
    const boxMat = new THREE.MeshStandardMaterial({
      color: 0x161d2b,
      metalness: 0.85,
      roughness: 0.25,
    });
    const wireMat = new THREE.MeshBasicMaterial({
      color: 0x3b82f6,
      wireframe: true,
      transparent: true,
      opacity: 0.35,
    });

    const moduleCount = 5;
    const modules: THREE.Mesh[] = [];
    const baseOffsets: THREE.Vector3[] = [];

    for (let i = 0; i < moduleCount; i++) {
      const mesh = new THREE.Mesh(boxGeo, boxMat);
      const wire = new THREE.Mesh(boxGeo, wireMat);
      mesh.add(wire);

      const angle = (i / moduleCount) * Math.PI * 2;
      const radius = 2.6;
      const x = Math.cos(angle) * radius;
      const y = Math.sin(angle) * radius * 0.7;
      const z = (Math.random() - 0.5) * 1.6;

      mesh.position.set(x, y, z);
      baseOffsets.push(new THREE.Vector3(x, y, z));
      modules.push(mesh);
      engineGroup.add(mesh);
    }

    // 2. Fiber-Optic Light Conduit Spline Curves (Connecting Modules to Data Nodes)
    const conduitCurves: THREE.CatmullRomCurve3[] = [];
    const conduitLines: THREE.Line[] = [];
    const conduitMat = new THREE.LineBasicMaterial({
      color: 0x38bdf8,
      transparent: true,
      opacity: 0.45,
    });

    for (let i = 0; i < moduleCount; i++) {
      const p1 = modules[i].position;
      const p2 = new THREE.Vector3(p1.x * 1.5, p1.y * 1.5 - 1.2, p1.z - 1.5);
      const mid = new THREE.Vector3((p1.x + p2.x) * 0.5, (p1.y + p2.y) * 0.5 + 0.6, (p1.z + p2.z) * 0.5);

      const curve = new THREE.CatmullRomCurve3([p1, mid, p2]);
      conduitCurves.push(curve);

      const points = curve.getPoints(30);
      const geom = new THREE.BufferGeometry().setFromPoints(points);
      const line = new THREE.Line(geom, conduitMat);
      engineGroup.add(line);
      conduitLines.push(line);
    }

    // 3. Discrete Data Packet Transits (Spheres Traveling Along Conduits)
    const packetGeo = new THREE.SphereGeometry(0.09, 14, 14);
    const packetMat = new THREE.MeshBasicMaterial({ color: 0x60a5fa });
    const packetMeshes: THREE.Mesh[] = [];

    for (let i = 0; i < 3; i++) {
      const packet = new THREE.Mesh(packetGeo, packetMat);
      engineGroup.add(packet);
      packetMeshes.push(packet);
    }

    // Mouse Tracking for Parallax
    const mouse = { x: 0, y: 0, targetX: 0, targetY: 0 };
    const handleMouseMove = (e: MouseEvent) => {
      mouse.targetX = (e.clientX / window.innerWidth - 0.5) * 2;
      mouse.targetY = -(e.clientY / window.innerHeight - 0.5) * 2;
    };
    window.addEventListener("mousemove", handleMouseMove, { passive: true });

    // Scroll Tracking
    let scrollProgress = 0;
    const handleScroll = () => {
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      scrollProgress = maxScroll > 0 ? window.scrollY / maxScroll : 0;
    };
    window.addEventListener("scroll", handleScroll, { passive: true });

    // Window Resize Handler
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener("resize", handleResize);

    // Animation Loop
    let animationId: number;
    const clock = new THREE.Clock();

    const animate = () => {
      animationId = requestAnimationFrame(animate);

      const delta = clock.getDelta();
      const elapsedTime = clock.getElapsedTime();

      // Smooth mouse lerping
      mouse.x += (mouse.targetX - mouse.x) * 0.05;
      mouse.y += (mouse.targetY - mouse.y) * 0.05;

      if (!prefersReducedMotion) {
        // Continuous Scroll Camera Choreography
        camera.position.x = mouse.x * 0.9 + Math.sin(scrollProgress * Math.PI * 2) * 1.8;
        camera.position.y = mouse.y * 0.7 - scrollProgress * 7;
        camera.position.z = 14 - scrollProgress * 4;
        camera.lookAt(0, -scrollProgress * 7, 0);

        // Spatial Engine Group Rotation & Position
        engineGroup.rotation.y = elapsedTime * 0.12 + scrollProgress * Math.PI * 1.2;
        engineGroup.rotation.x = Math.sin(elapsedTime * 0.25) * 0.08 + mouse.y * 0.2;
        engineGroup.position.y = -scrollProgress * 6;

        // Dynamic Module Alignment / Morphing by Scroll
        for (let i = 0; i < modules.length; i++) {
          const mod = modules[i];
          const base = baseOffsets[i];
          const floatOffset = Math.sin(elapsedTime * 0.8 + i) * 0.12;

          // Convergence / Alignment factor in Transformation section
          const convergence = Math.sin(scrollProgress * Math.PI);
          mod.position.x = base.x * (1 - convergence * 0.35) + floatOffset;
          mod.position.y = base.y * (1 - convergence * 0.35) + floatOffset;
          mod.position.z = base.z + Math.cos(elapsedTime * 0.9 + i) * 0.15;

          mod.rotation.x += delta * 0.25;
          mod.rotation.y += delta * 0.18;
        }

        // Animate Traveling Data Packets along Splines
        for (let i = 0; i < packetMeshes.length; i++) {
          const packet = packetMeshes[i];
          const curveIdx = (i * 2) % conduitCurves.length;
          const curve = conduitCurves[curveIdx];
          const t = (elapsedTime * 0.4 + i * 0.33) % 1;

          if (curve) {
            const pt = curve.getPoint(t);
            packet.position.copy(pt);
          }
        }
      }

      renderer.render(scene, camera);
    };

    animate();

    // Memory Disposal on Unmount
    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);

      boxGeo.dispose();
      boxMat.dispose();
      wireMat.dispose();
      conduitMat.dispose();
      packetGeo.dispose();
      packetMat.dispose();

      conduitLines.forEach((l) => l.geometry.dispose());

      renderer.dispose();
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden opacity-30"
      aria-hidden="true"
    />
  );
};
