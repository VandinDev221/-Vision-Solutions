import * as THREE from "three";
import { SystemModule, type ModuleKind } from "./SystemModule";
import { ConnectionLine } from "./ConnectionLine";

const ACCENTS: Record<ModuleKind, number> = {
  frontend: 0x38bdf8, // sky
  api: 0x2563eb, // primary blue
  "business-rules": 0xa855f7, // purple
  database: 0x10b981, // emerald
  queues: 0x2563eb,
  infrastructure: 0x5c6478, // neutral, structural
};

interface ModuleDefinition {
  kind: ModuleKind;
  label: string;
  target: [number, number, number];
}

// Layered, architecture-accurate layout: frontend closest to camera,
// infrastructure furthest back — the same order the brief's "camera
// crosses the layers" narrative (section 17) will later traverse.
const MODULE_DEFINITIONS: ModuleDefinition[] = [
  { kind: "frontend", label: "FRONTEND", target: [-1.6, 1.1, 1.4] },
  { kind: "api", label: "API", target: [0.6, 0.65, 0.9] },
  { kind: "business-rules", label: "BUSINESS RULES", target: [1.9, 0.1, 0.2] },
  { kind: "database", label: "DATABASE", target: [-1.2, -0.55, -0.5] },
  { kind: "queues", label: "QUEUES", target: [1.0, -1.0, -1.0] },
  { kind: "infrastructure", label: "INFRASTRUCTURE", target: [-0.3, -1.6, -1.8] },
];

// Which modules communicate with which — drives the ConnectionLine set.
const CONNECTIONS: Array<[ModuleKind, ModuleKind]> = [
  ["frontend", "api"],
  ["api", "business-rules"],
  ["business-rules", "database"],
  ["business-rules", "queues"],
  ["queues", "infrastructure"],
  ["database", "infrastructure"],
];

/**
 * The Vision System: a single modular 3D universe representing Frontend,
 * API, Business Rules, Database, Queues and Infrastructure. This is the
 * one recurring visual identity referenced throughout the site — the Hero
 * only plays its formation sequence; later sections (product showcase,
 * engineering breakdown) will re-target the same modules instead of
 * spawning a new scene.
 */
export class VisionSystem {
  readonly group: THREE.Group;
  private modules: SystemModule[] = [];
  private connections: ConnectionLine[] = [];
  private moduleByKind = new Map<ModuleKind, SystemModule>();

  constructor() {
    this.group = new THREE.Group();

    MODULE_DEFINITIONS.forEach((def, index) => {
      const angle = (index / MODULE_DEFINITIONS.length) * Math.PI * 2;
      const radius = 4.2 + (index % 2) * 0.6;
      const origin = new THREE.Vector3(
        Math.cos(angle) * radius,
        Math.sin(angle * 1.3) * radius * 0.6,
        Math.sin(angle) * radius - 1
      );

      const sysModule = new SystemModule({
        kind: def.kind,
        label: def.label,
        accent: ACCENTS[def.kind],
        originPosition: origin,
        targetPosition: new THREE.Vector3(...def.target),
      });

      this.modules.push(sysModule);
      this.moduleByKind.set(def.kind, sysModule);
      this.group.add(sysModule.group);
    });

    CONNECTIONS.forEach(([fromKind, toKind], index) => {
      const from = this.moduleByKind.get(fromKind);
      const to = this.moduleByKind.get(toKind);
      if (!from || !to) return;
      const connection = new ConnectionLine(
        from.group,
        to.group,
        ACCENTS[toKind],
        index / CONNECTIONS.length
      );
      this.connections.push(connection);
      this.group.add(connection.line);
      this.group.add(connection.packet);
    });
  }

  /**
   * Drives the whole formation narrative from a single progress value:
   *   0.00–0.45  modules travel from fragmented origins toward structure
   *   0.35–0.80  connection lines draw in behind them
   *   0.80–1.00  data packets start flowing, system settles into idle float
   * A future scroll controller can pass a scroll-derived progress instead
   * of the auto-playing timeline used on first load.
   */
  update(progress: number, time: number): void {
    const moduleProgress = THREE.MathUtils.clamp(progress / 0.45, 0, 1);
    const lineProgress = THREE.MathUtils.clamp((progress - 0.35) / 0.45, 0, 1);
    const dataFlowActive = progress > 0.82;

    this.modules.forEach((module, index) => {
      module.setFormationProgress(moduleProgress, index * 1.7, time);
    });

    this.connections.forEach((connection) => {
      connection.update(lineProgress, dataFlowActive, time);
    });

    // Slow, intentional idle rotation once the system has stabilized —
    // never spins freely, always reads as "alive but composed".
    if (progress > 0.95) {
      this.group.rotation.y = Math.sin(time * 0.08) * 0.06;
    }
  }

  setHoveredModule(kind: ModuleKind | null): void {
    this.moduleByKind.forEach((module, moduleKind) => {
      module.setHovered(moduleKind === kind);
    });
  }

  getModuleMeshes(): THREE.Object3D[] {
    return this.modules.map((module) => module.group);
  }

  dispose(): void {
    this.modules.forEach((module) => module.dispose());
    this.connections.forEach((connection) => connection.dispose());
  }
}
