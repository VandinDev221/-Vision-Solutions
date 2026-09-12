"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";
import { VisionSystem } from "./VisionSystem";
import { getClampedDpr, useReducedMotion } from "@/lib/use-reduced-motion";

interface GlobalSceneProps {
  /** Seconds the formation sequence takes to play once, on mount. */
  formationDurationSeconds?: number;
  className?: string;
}

/**
 * Mounts the single Vision System 3D universe into a canvas. This is the
 * one Three.js entry point used by the Hero today, and is written so later
 * sections can host the same VisionSystem instance driven by scroll
 * progress instead of the auto-playing timeline used here.
 *
 * Everything below follows the performance contract from the brief:
 * refs + rAF (never React state per frame), clamped DPR, full dispose of
 * geometries/materials/textures on unmount, and a reduced-motion path that
 * skips straight to the settled state instead of animating.
 */
export function GlobalScene({ formationDurationSeconds = 3.2, className }: GlobalSceneProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let width = container.clientWidth;
    let height = container.clientHeight;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(38, width / height, 0.1, 100);
    camera.position.set(0, 0.4, 9);

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: "high-performance",
    });
    renderer.setPixelRatio(getClampedDpr());
    renderer.setSize(width, height);
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    container.appendChild(renderer.domElement);

    const ambient = new THREE.AmbientLight(0xffffff, 0.55);
    const key = new THREE.DirectionalLight(0x9db4ff, 0.9);
    key.position.set(3, 4, 5);
    const rim = new THREE.DirectionalLight(0x38bdf8, 0.4);
    rim.position.set(-4, -2, -3);
    scene.add(ambient, key, rim);

    const visionSystem = new VisionSystem();
    scene.add(visionSystem.group);

    const clock = new THREE.Clock();
    const pointer = { x: 0, y: 0 };
    const pointerTarget = { x: 0, y: 0 };

    let progress = reducedMotion ? 1 : 0;
    let rafId = 0;
    let disposed = false;

    function handlePointerMove(event: PointerEvent) {
      if (!container) return;
      const rect = container.getBoundingClientRect();
      pointerTarget.x = ((event.clientX - rect.left) / rect.width - 0.5) * 2;
      pointerTarget.y = ((event.clientY - rect.top) / rect.height - 0.5) * 2;
    }

    function handleResize() {
      if (!container) return;
      width = container.clientWidth;
      height = container.clientHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setPixelRatio(getClampedDpr());
      renderer.setSize(width, height);
    }

    const resizeObserver = new ResizeObserver(handleResize);
    resizeObserver.observe(container);
    window.addEventListener("pointermove", handlePointerMove, { passive: true });

    function animate() {
      if (disposed) return;
      rafId = requestAnimationFrame(animate);

      const elapsed = clock.getElapsedTime();

      if (!reducedMotion && progress < 1) {
        progress = Math.min(1, elapsed / formationDurationSeconds);
      }

      // Smoothed parallax — never directly binds camera to raw pointer input.
      pointer.x = THREE.MathUtils.lerp(pointer.x, pointerTarget.x, 0.04);
      pointer.y = THREE.MathUtils.lerp(pointer.y, pointerTarget.y, 0.04);

      if (!reducedMotion) {
        camera.position.x = pointer.x * 0.5;
        camera.position.y = 0.4 - pointer.y * 0.3;
        camera.lookAt(0, 0, 0);
      }

      visionSystem.update(progress, elapsed);
      renderer.render(scene, camera);
    }

    animate();

    return () => {
      disposed = true;
      cancelAnimationFrame(rafId);
      resizeObserver.disconnect();
      window.removeEventListener("pointermove", handlePointerMove);
      visionSystem.dispose();
      renderer.dispose();
      if (renderer.domElement.parentElement === container) {
        container.removeChild(renderer.domElement);
      }
    };
  }, [formationDurationSeconds, reducedMotion]);

  return (
    <div
      ref={containerRef}
      className={className}
      role="img"
      aria-label="Visualização animada de um sistema de software modular — o Vision System — com camadas de frontend, API, regras de negócio, banco de dados, filas e infraestrutura se conectando."
    />
  );
}
