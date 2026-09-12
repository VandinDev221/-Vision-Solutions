"use client";

import React, { useEffect, useRef } from "react";
import * as THREE from "three";

interface Hero3DStageProps {
  scrollProgress?: number;
}

export const Hero3DStage: React.FC<Hero3DStageProps> = ({ scrollProgress = 0 }) => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const width = mount.clientWidth || window.innerWidth;
    const height = mount.clientHeight || window.innerHeight;

    // ── Scene Setup ──
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x05080e, 0.04);

    // ── Camera ──
    const camera = new THREE.PerspectiveCamera(40, width / height, 0.1, 100);
    camera.position.set(0, 0, 10);

    // ── WebGL Renderer ──
    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: "high-performance",
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(width, height);
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.35;
    mount.appendChild(renderer.domElement);

    // ── Atmospheric Lighting (Orange & Blue/Cyan Rim Highlights) ──
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.45);
    scene.add(ambientLight);

    const orangeCoreLight = new THREE.PointLight(0xff6600, 5, 20);
    orangeCoreLight.position.set(0, 0, 2);
    scene.add(orangeCoreLight);

    const cyanRimLight = new THREE.DirectionalLight(0x00e1ff, 3.5);
    cyanRimLight.position.set(-6, 8, 6);
    scene.add(cyanRimLight);

    const blueBackLight = new THREE.DirectionalLight(0x1d4ed8, 2.5);
    blueBackLight.position.set(6, -6, -4);
    scene.add(blueBackLight);

    // ── Master Helix Group ──
    const helixGroup = new THREE.Group();
    scene.add(helixGroup);
    helixGroup.position.set(0, 0, 0);

    // ── Build 3D Cybernetic Double Helix Strand ──
    const turnCount = 3.5;
    const pointsPerTurn = 36;
    const totalPoints = Math.floor(turnCount * pointsPerTurn);
    const radius = 2.2;
    const heightSpan = 14;

    const strand1Points: THREE.Vector3[] = [];
    const strand2Points: THREE.Vector3[] = [];

    // Metallic Backbone Material
    const backboneMat = new THREE.MeshStandardMaterial({
      color: 0x1c2330,
      metalness: 0.95,
      roughness: 0.18,
      emissive: 0x050b14,
    });

    // Glowing Orange Energy Ring Material
    const orangeEnergyMat = new THREE.MeshBasicMaterial({
      color: 0xff7700,
    });

    // Glowing Cyan Connector Ring Material
    const cyanEnergyMat = new THREE.MeshBasicMaterial({
      color: 0x00f0ff,
    });

    // Rung Metallic Collar Material
    const collarMat = new THREE.MeshStandardMaterial({
      color: 0x334155,
      metalness: 0.9,
      roughness: 0.2,
    });

    const rungsGroup = new THREE.Group();
    helixGroup.add(rungsGroup);

    const energyPulses: THREE.Mesh[] = [];

    for (let i = 0; i <= totalPoints; i++) {
      const t = i / totalPoints;
      const angle = t * turnCount * Math.PI * 2;
      const y = (t - 0.5) * heightSpan;

      const x1 = Math.cos(angle) * radius;
      const z1 = Math.sin(angle) * radius;

      const x2 = Math.cos(angle + Math.PI) * radius;
      const z2 = Math.sin(angle + Math.PI) * radius;

      const p1 = new THREE.Vector3(x1, y, z1);
      const p2 = new THREE.Vector3(x2, y, z2);

      strand1Points.push(p1);
      strand2Points.push(p2);

      // Create Horizontal Connecting Rung every 2 steps
      if (i % 2 === 0) {
        const rungMeshGroup = new THREE.Group();

        const distance = p1.distanceTo(p2);
        const rungGeo = new THREE.CylinderGeometry(0.04, 0.04, distance, 12);

        // Main Rung Cylinder
        const rung = new THREE.Mesh(rungGeo, collarMat);
        rung.position.copy(p1).clone().add(p2).multiplyScalar(0.5);

        // Orient Rung cylinder to connect p1 and p2
        const dir = new THREE.Vector3().subVectors(p2, p1).normalize();
        const orientation = new THREE.Matrix4();
        orientation.lookAt(p1, p2, new THREE.Vector3(0, 1, 0));
        rung.quaternion.setFromRotationMatrix(orientation);
        rung.rotateX(Math.PI / 2);

        rungMeshGroup.add(rung);

        // Glowing Orange Energy Center Element on Rung
        const energyRingGeo = new THREE.CylinderGeometry(0.09, 0.09, 0.45, 16);
        const energyRing = new THREE.Mesh(
          energyRingGeo,
          i % 4 === 0 ? orangeEnergyMat : cyanEnergyMat
        );
        energyRing.position.copy(rung.position);
        energyRing.quaternion.copy(rung.quaternion);
        rungMeshGroup.add(energyRing);

        // Metallic End Caps / Collars
        const collarGeo = new THREE.CylinderGeometry(0.12, 0.12, 0.25, 14);
        const collar1 = new THREE.Mesh(collarGeo, collarMat);
        collar1.position.copy(p1);
        collar1.quaternion.copy(rung.quaternion);
        rungMeshGroup.add(collar1);

        const collar2 = new THREE.Mesh(collarGeo, collarMat);
        collar2.position.copy(p2);
        collar2.quaternion.copy(rung.quaternion);
        rungMeshGroup.add(collar2);

        rungsGroup.add(rungMeshGroup);

        // Track energy ring for pulsation animation
        energyPulses.push(energyRing);
      }
    }

    // Create 3D Curved Strand Backbone Tubes
    const strand1Curve = new THREE.CatmullRomCurve3(strand1Points);
    const strand2Curve = new THREE.CatmullRomCurve3(strand2Points);

    const tubeGeo1 = new THREE.TubeGeometry(strand1Curve, 120, 0.14, 12, false);
    const tubeGeo2 = new THREE.TubeGeometry(strand2Curve, 120, 0.14, 12, false);

    const strand1Mesh = new THREE.Mesh(tubeGeo1, backboneMat);
    const strand2Mesh = new THREE.Mesh(tubeGeo2, backboneMat);

    helixGroup.add(strand1Mesh);
    helixGroup.add(strand2Mesh);

    // ── Mouse & Touch Parallax ──
    const mouse = { x: 0, y: 0, targetX: 0, targetY: 0 };
    const handleMouseMove = (e: MouseEvent) => {
      mouse.targetX = (e.clientX / window.innerWidth - 0.5) * 2;
      mouse.targetY = -(e.clientY / window.innerHeight - 0.5) * 2;
    };
    window.addEventListener("mousemove", handleMouseMove, { passive: true });

    // Resize
    const handleResize = () => {
      if (!mount) return;
      const w = mount.clientWidth || window.innerWidth;
      const h = mount.clientHeight || window.innerHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener("resize", handleResize);

    // ── Animation Loop ──
    let animId: number;
    const clock = new THREE.Clock();

    const render = () => {
      animId = requestAnimationFrame(render);
      const delta = clock.getDelta();
      const elapsed = clock.getElapsedTime();

      // Mouse lerping
      mouse.x += (mouse.targetX - mouse.x) * 0.05;
      mouse.y += (mouse.targetY - mouse.y) * 0.05;

      // Continuous Axial Helix Rotation matching video
      helixGroup.rotation.y = elapsed * 0.45 + mouse.x * 0.3;
      helixGroup.rotation.x = Math.sin(elapsed * 0.2) * 0.15 - mouse.y * 0.2;
      helixGroup.rotation.z = Math.cos(elapsed * 0.15) * 0.1;

      // Camera Choreography from Video (zoom & position shifts based on scroll)
      camera.position.z = THREE.MathUtils.lerp(camera.position.z, 9.5 - scrollProgress * 3.5, 0.08);
      camera.position.y = THREE.MathUtils.lerp(camera.position.y, -scrollProgress * 2.5, 0.08);

      // Energy Ring Pulsation
      energyPulses.forEach((ring, idx) => {
        const pulse = 1 + Math.sin(elapsed * 4 + idx * 0.8) * 0.22;
        ring.scale.set(pulse, 1, pulse);
      });

      renderer.render(scene, camera);
    };

    render();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);

      tubeGeo1.dispose();
      tubeGeo2.dispose();
      backboneMat.dispose();
      collarMat.dispose();
      orangeEnergyMat.dispose();
      cyanEnergyMat.dispose();
      renderer.dispose();
      if (mount.contains(renderer.domElement)) {
        mount.removeChild(renderer.domElement);
      }
    };
  }, [scrollProgress]);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      <div ref={mountRef} className="w-full h-full" />
    </div>
  );
};
