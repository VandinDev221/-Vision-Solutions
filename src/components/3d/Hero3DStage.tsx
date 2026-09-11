"use client";

import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";

interface Hero3DStageProps {
  activeTab: "torqueos" | "syndent";
  selectedCard: number;
  onSelectCard: (index: number) => void;
}

export const Hero3DStage: React.FC<Hero3DStageProps> = ({
  activeTab,
  selectedCard,
  onSelectCard,
}) => {
  const mountRef = useRef<HTMLDivElement>(null);
  const [hoveredNode, setHoveredNode] = useState<number | null>(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const width = mount.clientWidth;
    const height = mount.clientHeight || 520;

    // ── Scene ──
    const scene = new THREE.Scene();

    // ── Camera ──
    const camera = new THREE.PerspectiveCamera(40, width / height, 0.1, 100);
    camera.position.set(0, 0.2, 9.2);

    // ── WebGL Renderer ──
    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: "high-performance",
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(width, height);
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.3;
    mount.appendChild(renderer.domElement);

    // ── Multi-Color Cinematic Lighting ──
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.7);
    scene.add(ambientLight);

    const cyanLight = new THREE.DirectionalLight(0x00f0ff, 3.2);
    cyanLight.position.set(-6, 6, 6);
    scene.add(cyanLight);

    const magentaLight = new THREE.PointLight(0xec4899, 4.5, 16);
    magentaLight.position.set(4, 5, 5);
    scene.add(magentaLight);

    const blueLight = new THREE.PointLight(0x3b82f6, 4, 15);
    blueLight.position.set(-4, -4, 4);
    scene.add(blueLight);

    const emeraldLight = new THREE.PointLight(0x10b981, 3, 12);
    emeraldLight.position.set(0, 0, 5);
    scene.add(emeraldLight);

    // ── Master Stage Group ──
    const stageGroup = new THREE.Group();
    scene.add(stageGroup);

    // ── 1. 3D Geometric Low-Poly Brain / Neural Core ──
    const brainGroup = new THREE.Group();
    stageGroup.add(brainGroup);
    brainGroup.position.set(-1.4, 0.1, 0);

    // Left & Right Hemispheres (Icosahedron & Dodecahedron Geometry)
    const hemisphereGeo = new THREE.IcosahedronGeometry(1.25, 2);
    
    // Core Faceted Translucent Solid Material
    const brainMatLeft = new THREE.MeshStandardMaterial({
      color: 0x0c192e,
      metalness: 0.8,
      roughness: 0.15,
      emissive: 0x003366,
      emissiveIntensity: 0.4,
      flatShading: true,
    });

    const brainMatRight = new THREE.MeshStandardMaterial({
      color: 0x1f0c2e,
      metalness: 0.85,
      roughness: 0.15,
      emissive: 0x4a0e4e,
      emissiveIntensity: 0.4,
      flatShading: true,
    });

    // Wireframe Outer Mesh (Glowing Polygons)
    const wireMatLeft = new THREE.MeshBasicMaterial({
      color: 0x00f0ff,
      wireframe: true,
      transparent: true,
      opacity: 0.45,
    });

    const wireMatRight = new THREE.MeshBasicMaterial({
      color: 0xec4899,
      wireframe: true,
      transparent: true,
      opacity: 0.45,
    });

    // Left Hemisphere Lobe
    const leftLobe = new THREE.Mesh(hemisphereGeo, brainMatLeft);
    leftLobe.scale.set(0.9, 0.95, 1.15);
    leftLobe.position.set(-0.55, 0, 0);
    const leftWire = new THREE.Mesh(hemisphereGeo, wireMatLeft);
    leftLobe.add(leftWire);
    brainGroup.add(leftLobe);

    // Right Hemisphere Lobe
    const rightLobe = new THREE.Mesh(hemisphereGeo, brainMatRight);
    rightLobe.scale.set(0.9, 0.95, 1.15);
    rightLobe.position.set(0.55, 0, 0);
    const rightWire = new THREE.Mesh(hemisphereGeo, wireMatRight);
    rightLobe.add(rightWire);
    brainGroup.add(rightLobe);

    // Neural Synapse Core Nodes (Glowing Spheres & Polyhedrons at Key Synaptic Centers)
    const nodeGeo = new THREE.OctahedronGeometry(0.16);
    const nodeMatCyan = new THREE.MeshBasicMaterial({ color: 0x00f0ff });
    const nodeMatMagenta = new THREE.MeshBasicMaterial({ color: 0xec4899 });
    const nodeMatEmerald = new THREE.MeshBasicMaterial({ color: 0x10b981 });
    const nodeMatPurple = new THREE.MeshBasicMaterial({ color: 0xa855f7 });

    const neuralNodes: THREE.Mesh[] = [];
    const nodePositions = [
      new THREE.Vector3(-1.1, 0.6, 0.4),
      new THREE.Vector3(-0.4, 0.9, -0.3),
      new THREE.Vector3(-0.9, -0.5, 0.5),
      new THREE.Vector3(0.4, 0.8, 0.3),
      new THREE.Vector3(1.0, -0.4, -0.2),
      new THREE.Vector3(0.7, 0.5, 0.6),
      new THREE.Vector3(0.0, 0.0, 1.0),
      new THREE.Vector3(0.0, 0.6, -0.8),
    ];

    const nodeMaterials = [nodeMatCyan, nodeMatMagenta, nodeMatEmerald, nodeMatPurple];

    nodePositions.forEach((pos, i) => {
      const nodeMesh = new THREE.Mesh(nodeGeo, nodeMaterials[i % nodeMaterials.length]);
      nodeMesh.position.copy(pos);
      brainGroup.add(nodeMesh);
      neuralNodes.push(nodeMesh);
    });

    // Orbiting Geometric Ring / Neural Equator
    const ringGeo = new THREE.TorusGeometry(1.65, 0.02, 8, 48);
    const ringMat = new THREE.MeshBasicMaterial({
      color: 0x38bdf8,
      transparent: true,
      opacity: 0.35,
      wireframe: true,
    });
    const neuralRing = new THREE.Mesh(ringGeo, ringMat);
    neuralRing.rotation.x = Math.PI / 3;
    brainGroup.add(neuralRing);

    // ── 2. Floating Interactive Product Cards on the Right ──
    const rightCardsGroup = new THREE.Group();
    stageGroup.add(rightCardsGroup);
    rightCardsGroup.position.set(2.1, 0, 0);

    const plateGeo = new THREE.BoxGeometry(2.5, 0.8, 0.12);
    const plateMatNormal = new THREE.MeshStandardMaterial({
      color: 0x090f1d,
      metalness: 0.9,
      roughness: 0.2,
      transparent: true,
      opacity: 0.94,
    });
    const plateMatSelected = new THREE.MeshStandardMaterial({
      color: 0x122244,
      metalness: 0.9,
      roughness: 0.1,
      emissive: 0x1d3557,
      emissiveIntensity: 0.5,
    });

    const cardMeshes: THREE.Mesh[] = [];
    const iconGeometries: THREE.Mesh[] = [];

    // Floating 3D Icons for cards
    const iconGeos = [
      new THREE.IcosahedronGeometry(0.22, 0),
      new THREE.OctahedronGeometry(0.22, 0),
      new THREE.TetrahedronGeometry(0.24, 0),
    ];
    const iconMat = new THREE.MeshBasicMaterial({
      color: 0x00f0ff,
      wireframe: true,
    });

    for (let i = 0; i < 3; i++) {
      const card = new THREE.Mesh(
        plateGeo,
        i === selectedCard ? plateMatSelected : plateMatNormal
      );
      card.position.set(0, (1 - i) * 1.1, i === selectedCard ? 0.35 : 0);
      card.userData = { index: i };

      // 3D Geometric Icon Attached to Card
      const icon = new THREE.Mesh(iconGeos[i % iconGeos.length], iconMat.clone());
      icon.position.set(-0.95, 0, 0.18);
      card.add(icon);
      iconGeometries.push(icon);

      // Card Wireframe Border
      const borderGeo = new THREE.BoxGeometry(2.54, 0.84, 0.13);
      const borderMat = new THREE.MeshBasicMaterial({
        color: i === selectedCard ? 0x00f0ff : 0x1e293b,
        wireframe: true,
      });
      const border = new THREE.Mesh(borderGeo, borderMat);
      card.add(border);

      cardMeshes.push(card);
      rightCardsGroup.add(card);
    }

    // ── 3. Glowing Fiber-Optic Neural Cables ──
    const cablesGroup = new THREE.Group();
    stageGroup.add(cablesGroup);

    const cableMats = [
      new THREE.MeshBasicMaterial({ color: 0x00f0ff, wireframe: true, transparent: true, opacity: 0.8 }),
      new THREE.MeshBasicMaterial({ color: 0xec4899, wireframe: true, transparent: true, opacity: 0.8 }),
      new THREE.MeshBasicMaterial({ color: 0x10b981, wireframe: true, transparent: true, opacity: 0.8 }),
    ];

    const splineCurves: THREE.CatmullRomCurve3[] = [];
    for (let i = 0; i < 3; i++) {
      const start = new THREE.Vector3(-0.7, (1 - i) * 0.4, 0.2);
      const mid1 = new THREE.Vector3(0.1, (1 - i) * 0.7 + 0.3, 0.7);
      const mid2 = new THREE.Vector3(1.0, (1 - i) * 0.95, 0.4);
      const end = new THREE.Vector3(1.4, (1 - i) * 1.1, 0.1);

      const curve = new THREE.CatmullRomCurve3([start, mid1, mid2, end]);
      splineCurves.push(curve);

      const tubeGeo = new THREE.TubeGeometry(curve, 36, 0.03, 8, false);
      const tubeMesh = new THREE.Mesh(tubeGeo, cableMats[i]);
      cablesGroup.add(tubeMesh);
    }

    // Traveling Synaptic Energy Sparks
    const sparkGeo = new THREE.SphereGeometry(0.075, 12, 12);
    const sparkMat = new THREE.MeshBasicMaterial({ color: 0xffffff });
    const sparks: THREE.Mesh[] = [];

    for (let i = 0; i < 3; i++) {
      const spark = new THREE.Mesh(sparkGeo, sparkMat);
      cablesGroup.add(spark);
      sparks.push(spark);
    }

    // ── Mouse Parallax & Raycaster ──
    const mouse = { x: 0, y: 0, targetX: 0, targetY: 0 };
    const raycaster = new THREE.Raycaster();
    const mouseCoord = new THREE.Vector2();

    const handleMouseMove = (e: MouseEvent) => {
      const rect = mount.getBoundingClientRect();
      mouse.targetX = ((e.clientX - rect.left) / width - 0.5) * 2;
      mouse.targetY = -((e.clientY - rect.top) / height - 0.5) * 2;

      mouseCoord.x = ((e.clientX - rect.left) / width) * 2 - 1;
      mouseCoord.y = -((e.clientY - rect.top) / height) * 2 + 1;

      raycaster.setFromCamera(mouseCoord, camera);
      const intersects = raycaster.intersectObjects(cardMeshes);
      if (intersects.length > 0) {
        const idx = intersects[0].object.userData.index;
        setHoveredNode(idx);
        mount.style.cursor = "pointer";
      } else {
        setHoveredNode(null);
        mount.style.cursor = "default";
      }
    };

    const handleClick = () => {
      raycaster.setFromCamera(mouseCoord, camera);
      const intersects = raycaster.intersectObjects(cardMeshes);
      if (intersects.length > 0) {
        const idx = intersects[0].object.userData.index;
        if (typeof idx === "number") {
          onSelectCard(idx);
        }
      }
    };

    mount.addEventListener("mousemove", handleMouseMove);
    mount.addEventListener("click", handleClick);

    // Resize
    const handleResize = () => {
      if (!mount) return;
      const w = mount.clientWidth;
      const h = mount.clientHeight || 520;
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

      // Mouse lerp
      mouse.x += (mouse.targetX - mouse.x) * 0.06;
      mouse.y += (mouse.targetY - mouse.y) * 0.06;

      // Stage parallax
      stageGroup.rotation.y = mouse.x * 0.18 + Math.sin(elapsed * 0.4) * 0.03;
      stageGroup.rotation.x = -mouse.y * 0.12;

      // Brain Lobe Rotation & Pulsing
      leftLobe.rotation.y = elapsed * 0.25;
      leftLobe.rotation.x = Math.sin(elapsed * 0.3) * 0.1;

      rightLobe.rotation.y = -elapsed * 0.25;
      rightLobe.rotation.x = Math.cos(elapsed * 0.3) * 0.1;

      neuralRing.rotation.z += delta * 0.35;

      // Pulse Neural Synaptic Nodes
      neuralNodes.forEach((node, idx) => {
        node.rotation.x += delta * 0.8;
        node.rotation.y += delta * 0.9;
        const scale = 1 + Math.sin(elapsed * 2 + idx) * 0.25;
        node.scale.set(scale, scale, scale);
      });

      // Rotate Card Icons
      iconGeometries.forEach((icon, idx) => {
        icon.rotation.y = elapsed * 1.2 + idx;
        icon.rotation.x = Math.sin(elapsed * 0.8 + idx) * 0.2;
      });

      // Move Synaptic Energy Sparks
      for (let i = 0; i < sparks.length; i++) {
        const curve = splineCurves[i];
        const t = (elapsed * 0.55 + i * 0.33) % 1;
        const pt = curve.getPoint(t);
        sparks[i].position.copy(pt);
      }

      // Smooth card depth animation on selection
      cardMeshes.forEach((card, i) => {
        const isSel = i === selectedCard;
        card.position.z = THREE.MathUtils.lerp(
          card.position.z,
          isSel ? 0.35 : 0,
          0.1
        );
      });

      renderer.render(scene, camera);
    };

    render();

    return () => {
      cancelAnimationFrame(animId);
      mount.removeEventListener("mousemove", handleMouseMove);
      mount.removeEventListener("click", handleClick);
      window.removeEventListener("resize", handleResize);

      hemisphereGeo.dispose();
      brainMatLeft.dispose();
      brainMatRight.dispose();
      wireMatLeft.dispose();
      wireMatRight.dispose();
      nodeGeo.dispose();
      nodeMatCyan.dispose();
      nodeMatMagenta.dispose();
      nodeMatEmerald.dispose();
      nodeMatPurple.dispose();
      ringGeo.dispose();
      ringMat.dispose();
      plateGeo.dispose();
      plateMatNormal.dispose();
      plateMatSelected.dispose();
      sparkGeo.dispose();
      sparkMat.dispose();

      renderer.dispose();
      if (mount.contains(renderer.domElement)) {
        mount.removeChild(renderer.domElement);
      }
    };
  }, [selectedCard, onSelectCard]);

  return (
    <div className="relative w-full h-[460px] sm:h-[520px] rounded-xl bg-[#070b14] border border-white/[0.08] shadow-2xl overflow-hidden">
      <div ref={mountRef} className="w-full h-full" />
    </div>
  );
};
