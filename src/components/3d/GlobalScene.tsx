"use client";

import React, { useEffect, useRef } from "react";
import * as THREE from "three";

export const GlobalScene: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Check reduced motion
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    // Scene Setup
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

    // Renderer
    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: "high-performance",
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x0b0e14, 0);
    container.appendChild(renderer.domElement);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
    scene.add(ambientLight);

    const dirLight1 = new THREE.DirectionalLight(0x3b82f6, 1.8);
    dirLight1.position.set(5, 8, 10);
    scene.add(dirLight1);

    const dirLight2 = new THREE.DirectionalLight(0x10b981, 1.2);
    dirLight2.position.set(-6, -4, 6);
    scene.add(dirLight2);

    // 1. Hero / Core Modular Cluster (Geometric Units)
    const clusterGroup = new THREE.Group();
    scene.add(clusterGroup);

    const boxGeo = new THREE.BoxGeometry(0.9, 0.9, 0.9);
    const boxMat = new THREE.MeshStandardMaterial({
      color: 0x161d2b,
      metalness: 0.8,
      roughness: 0.25,
      wireframe: false,
    });
    const wireMat = new THREE.MeshBasicMaterial({
      color: 0x3b82f6,
      wireframe: true,
      transparent: true,
      opacity: 0.35,
    });

    const cubeCount = 8;
    const cubes: THREE.Mesh[] = [];
    const basePositions: THREE.Vector3[] = [];

    for (let i = 0; i < cubeCount; i++) {
      const mesh = new THREE.Mesh(boxGeo, boxMat);
      const wire = new THREE.Mesh(boxGeo, wireMat);
      mesh.add(wire);

      const angle = (i / cubeCount) * Math.PI * 2;
      const radius = 2.4;
      const x = Math.cos(angle) * radius;
      const y = Math.sin(angle) * radius * 0.6;
      const z = (Math.random() - 0.5) * 1.5;

      mesh.position.set(x, y, z);
      basePositions.push(new THREE.Vector3(x, y, z));
      cubes.push(mesh);
      clusterGroup.add(mesh);
    }

    // 2. Spatial Data Flow Lines & Packets
    const lineMat = new THREE.LineBasicMaterial({
      color: 0x2563eb,
      transparent: true,
      opacity: 0.4,
    });
    const lineGeo = new THREE.BufferGeometry();
    const linePositions = new Float32Array(cubeCount * 3);
    lineGeo.setAttribute("position", new THREE.BufferAttribute(linePositions, 3));
    const lineMesh = new THREE.LineLoop(lineGeo, lineMat);
    clusterGroup.add(lineMesh);

    // 3. Traveling Data Packet (Spheres)
    const packetGeo = new THREE.SphereGeometry(0.08, 12, 12);
    const packetMat = new THREE.MeshBasicMaterial({ color: 0x60a5fa });
    const packetMesh = new THREE.Mesh(packetGeo, packetMat);
    scene.add(packetMesh);

    // Mouse Tracking
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

    // Resize Handler
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener("resize", handleResize);

    // Animation Loop
    let animationId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animationId = requestAnimationFrame(animate);

      const delta = clock.getDelta();
      const elapsedTime = clock.getElapsedTime();

      // Smooth mouse lerping
      mouse.x += (mouse.targetX - mouse.x) * 0.05;
      mouse.y += (mouse.targetY - mouse.y) * 0.05;

      // Scroll-controlled camera & world transformation
      if (!prefersReducedMotion) {
        // Camera moves along Z and Y according to scroll narrative
        camera.position.x = mouse.x * 0.8 + Math.sin(scrollProgress * Math.PI * 2) * 1.5;
        camera.position.y = mouse.y * 0.6 - scrollProgress * 6;
        camera.position.z = 14 - scrollProgress * 4;
        camera.lookAt(0, -scrollProgress * 6, 0);

        // Cluster rotation and morphing
        clusterGroup.rotation.y = elapsedTime * 0.15 + scrollProgress * Math.PI;
        clusterGroup.rotation.x = Math.sin(elapsedTime * 0.2) * 0.1 + mouse.y * 0.2;
        clusterGroup.position.y = -scrollProgress * 5;

        // Animate cubes: disperse on Hero, align on Transformation, spread on Products
        for (let i = 0; i < cubes.length; i++) {
          const cube = cubes[i];
          const base = basePositions[i];
          const morph = Math.sin(elapsedTime * 0.8 + i) * 0.15;

          // Convergence logic based on scroll progress
          const convergenceFactor = Math.sin(scrollProgress * Math.PI);
          cube.position.x = base.x * (1 - convergenceFactor * 0.4) + morph;
          cube.position.y = base.y * (1 - convergenceFactor * 0.4) + morph;
          cube.position.z = base.z + Math.cos(elapsedTime + i) * 0.2;

          cube.rotation.x += delta * 0.3;
          cube.rotation.y += delta * 0.2;
        }

        // Update connected lines
        const posAttr = lineGeo.attributes.position as THREE.BufferAttribute;
        for (let i = 0; i < cubes.length; i++) {
          posAttr.setXYZ(i, cubes[i].position.x, cubes[i].position.y, cubes[i].position.z);
        }
        posAttr.needsUpdate = true;

        // Animate traveling data packet along line loop
        const packetIndex = (elapsedTime * 2) % cubeCount;
        const fromIdx = Math.floor(packetIndex);
        const toIdx = (fromIdx + 1) % cubeCount;
        const progress = packetIndex - fromIdx;

        const fromPos = cubes[fromIdx].position;
        const toPos = cubes[toIdx].position;

        packetMesh.position.lerpVectors(fromPos, toPos, progress);
        packetMesh.position.add(clusterGroup.position);
      }

      renderer.render(scene, camera);
    };

    animate();

    // Cleanup & Memory disposal
    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);

      boxGeo.dispose();
      boxMat.dispose();
      wireMat.dispose();
      lineGeo.dispose();
      lineMat.dispose();
      packetGeo.dispose();
      packetMat.dispose();

      renderer.dispose();
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden"
      aria-hidden="true"
    />
  );
};
