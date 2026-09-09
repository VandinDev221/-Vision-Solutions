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

    // Scene
    const scene = new THREE.Scene();

    // Camera with slight perspective tilt
    const camera = new THREE.PerspectiveCamera(40, width / height, 0.1, 100);
    camera.position.set(0, 0.5, 9.5);

    // Renderer
    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: "high-performance",
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(width, height);
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.25;
    mount.appendChild(renderer.domElement);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
    scene.add(ambientLight);

    const blueKeyLight = new THREE.DirectionalLight(0x38bdf8, 3.5);
    blueKeyLight.position.set(5, 6, 6);
    scene.add(blueKeyLight);

    const cyanRimLight = new THREE.PointLight(0x00f0ff, 4, 15);
    cyanRimLight.position.set(-4, -2, 4);
    scene.add(cyanRimLight);

    const purpleAccentLight = new THREE.PointLight(0xa855f7, 3, 12);
    purpleAccentLight.position.set(4, -3, 3);
    scene.add(purpleAccentLight);

    // Master Stage Group
    const stageGroup = new THREE.Group();
    scene.add(stageGroup);

    // 1. Central 3D Server Engine Monolith (3 Illuminated Metallic Pillars)
    const enginePillarsGroup = new THREE.Group();
    stageGroup.add(enginePillarsGroup);
    enginePillarsGroup.position.set(-1.8, 0, 0);

    const pillarGeo = new THREE.BoxGeometry(0.7, 2.2, 0.7);
    const pillarMat = new THREE.MeshStandardMaterial({
      color: 0x0f172a,
      metalness: 0.9,
      roughness: 0.2,
    });
    const glowEdgeMat = new THREE.MeshBasicMaterial({
      color: 0x38bdf8,
      wireframe: true,
      transparent: true,
      opacity: 0.4,
    });

    const pillars: THREE.Mesh[] = [];
    for (let i = 0; i < 3; i++) {
      const pMesh = new THREE.Mesh(pillarGeo, pillarMat);
      pMesh.position.set((i - 1) * 0.85, 0, 0);
      const wire = new THREE.Mesh(pillarGeo, glowEdgeMat);
      pMesh.add(wire);

      // Glowing LED level indicator bands inside
      for (let j = 0; j < 4; j++) {
        const ledGeo = new THREE.BoxGeometry(0.72, 0.06, 0.72);
        const ledMat = new THREE.MeshBasicMaterial({
          color: i === 0 ? 0x38bdf8 : i === 1 ? 0x00f0ff : 0x10b981,
        });
        const led = new THREE.Mesh(ledGeo, ledMat);
        led.position.set(0, (j - 1.5) * 0.45, 0);
        pMesh.add(led);
      }

      pillars.push(pMesh);
      enginePillarsGroup.add(pMesh);
    }

    // Rotating 3D Metallic Gears on Top of the Engine
    const gearGeo = new THREE.CylinderGeometry(0.32, 0.32, 0.08, 12);
    const gearMat = new THREE.MeshStandardMaterial({
      color: 0x64748b,
      metalness: 0.95,
      roughness: 0.15,
    });
    const gear1 = new THREE.Mesh(gearGeo, gearMat);
    gear1.position.set(-0.4, 1.35, 0.2);
    gear1.rotation.x = Math.PI / 3;
    enginePillarsGroup.add(gear1);

    const gear2 = new THREE.Mesh(gearGeo, gearMat);
    gear2.position.set(0.3, 1.45, -0.1);
    gear2.rotation.x = -Math.PI / 4;
    enginePillarsGroup.add(gear2);

    // 2. Three 3D Floating Vehicle Data Plates on the Right
    const rightCardsGroup = new THREE.Group();
    stageGroup.add(rightCardsGroup);
    rightCardsGroup.position.set(2.0, 0, 0);

    const plateGeo = new THREE.BoxGeometry(2.4, 0.75, 0.15);
    const plateMatNormal = new THREE.MeshStandardMaterial({
      color: 0x0b1120,
      metalness: 0.85,
      roughness: 0.25,
      transparent: true,
      opacity: 0.92,
    });
    const plateMatSelected = new THREE.MeshStandardMaterial({
      color: 0x172554,
      metalness: 0.9,
      roughness: 0.15,
      emissive: 0x1e3a8a,
      emissiveIntensity: 0.4,
    });

    const cardMeshes: THREE.Mesh[] = [];
    const wireframeCars: THREE.Mesh[] = [];

    // Wireframe Car Shapes
    const carGeo = new THREE.BoxGeometry(0.65, 0.3, 0.35);
    const carMat = new THREE.MeshBasicMaterial({
      color: 0x38bdf8,
      wireframe: true,
      transparent: true,
      opacity: 0.75,
    });

    for (let i = 0; i < 3; i++) {
      const card = new THREE.Mesh(plateGeo, i === selectedCard ? plateMatSelected : plateMatNormal);
      card.position.set(0, (1 - i) * 1.05, (i === selectedCard ? 0.4 : 0));
      card.userData = { index: i };

      // Add wireframe 3D car attached to the right of plate
      const car = new THREE.Mesh(carGeo, carMat.clone());
      car.position.set(0.8, 0, 0.2);
      card.add(car);
      wireframeCars.push(car);

      // Glowing outer border
      const borderGeo = new THREE.BoxGeometry(2.44, 0.79, 0.16);
      const borderMat = new THREE.MeshBasicMaterial({
        color: i === selectedCard ? 0x38bdf8 : 0x1e293b,
        wireframe: true,
      });
      const border = new THREE.Mesh(borderGeo, borderMat);
      card.add(border);

      cardMeshes.push(card);
      rightCardsGroup.add(card);
    }

    // 3. Glowing Curved Fiber-Optic Cable Conduits
    const cablesGroup = new THREE.Group();
    stageGroup.add(cablesGroup);

    const cableMaterials = [
      new THREE.MeshBasicMaterial({ color: 0x38bdf8, wireframe: true, transparent: true, opacity: 0.85 }),
      new THREE.MeshBasicMaterial({ color: 0x00f0ff, wireframe: true, transparent: true, opacity: 0.85 }),
      new THREE.MeshBasicMaterial({ color: 0xa855f7, wireframe: true, transparent: true, opacity: 0.85 }),
    ];

    const splineCurves: THREE.CatmullRomCurve3[] = [];
    for (let i = 0; i < 3; i++) {
      const start = new THREE.Vector3(-0.9, (1 - i) * 0.35, 0.1);
      const mid1 = new THREE.Vector3(0.0, (1 - i) * 0.8 + 0.3, 0.6);
      const mid2 = new THREE.Vector3(0.9, (1 - i) * 0.95, 0.4);
      const end = new THREE.Vector3(1.2, (1 - i) * 1.05, 0.1);

      const curve = new THREE.CatmullRomCurve3([start, mid1, mid2, end]);
      splineCurves.push(curve);

      const tubeGeo = new THREE.TubeGeometry(curve, 32, 0.035, 8, false);
      const tubeMesh = new THREE.Mesh(tubeGeo, cableMaterials[i]);
      cablesGroup.add(tubeMesh);
    }

    // Traveling Energy Spark Particles
    const sparkGeo = new THREE.SphereGeometry(0.07, 12, 12);
    const sparkMat = new THREE.MeshBasicMaterial({ color: 0xffffff });
    const sparks: THREE.Mesh[] = [];

    for (let i = 0; i < 3; i++) {
      const spark = new THREE.Mesh(sparkGeo, sparkMat);
      cablesGroup.add(spark);
      sparks.push(spark);
    }

    // Mouse Parallax & Raycaster
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

    // Animation Loop
    let animId: number;
    const clock = new THREE.Clock();

    const render = () => {
      animId = requestAnimationFrame(render);
      const delta = clock.getDelta();
      const elapsed = clock.getElapsedTime();

      // Smooth mouse lerp
      mouse.x += (mouse.targetX - mouse.x) * 0.06;
      mouse.y += (mouse.targetY - mouse.y) * 0.06;

      // Subtle Stage Parallax
      stageGroup.rotation.y = mouse.x * 0.18 + Math.sin(elapsed * 0.4) * 0.04;
      stageGroup.rotation.x = -mouse.y * 0.12;

      // Rotate Gears
      gear1.rotation.z += delta * 1.2;
      gear2.rotation.z -= delta * 1.4;

      // Rotate 3D Wireframe Cars
      wireframeCars.forEach((car, idx) => {
        car.rotation.y = elapsed * 0.8 + idx;
        car.rotation.x = Math.sin(elapsed * 0.6 + idx) * 0.1;
      });

      // Move Traveling Sparks along Cable Tubes
      for (let i = 0; i < sparks.length; i++) {
        const curve = splineCurves[i];
        const t = (elapsed * 0.6 + i * 0.33) % 1;
        const pt = curve.getPoint(t);
        sparks[i].position.copy(pt);
      }

      // Update card materials on selection change
      cardMeshes.forEach((card, i) => {
        const isSel = i === selectedCard;
        card.position.z = THREE.MathUtils.lerp(card.position.z, isSel ? 0.35 : 0, 0.1);
      });

      renderer.render(scene, camera);
    };

    render();

    return () => {
      cancelAnimationFrame(animId);
      mount.removeEventListener("mousemove", handleMouseMove);
      mount.removeEventListener("click", handleClick);
      window.removeEventListener("resize", handleResize);

      pillarGeo.dispose();
      pillarMat.dispose();
      glowEdgeMat.dispose();
      gearGeo.dispose();
      gearMat.dispose();
      plateGeo.dispose();
      plateMatNormal.dispose();
      plateMatSelected.dispose();
      carGeo.dispose();
      carMat.dispose();
      sparkGeo.dispose();
      sparkMat.dispose();

      renderer.dispose();
      if (mount.contains(renderer.domElement)) {
        mount.removeChild(renderer.domElement);
      }
    };
  }, [selectedCard, onSelectCard]);

  return (
    <div className="relative w-full h-[460px] sm:h-[520px] rounded-xl bg-[#080d1a] border border-white/8 shadow-2xl overflow-hidden">
      <div ref={mountRef} className="w-full h-full" />
    </div>
  );
};
