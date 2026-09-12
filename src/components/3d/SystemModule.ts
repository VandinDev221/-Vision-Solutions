import * as THREE from "three";

export type ModuleKind =
  | "frontend"
  | "api"
  | "business-rules"
  | "database"
  | "queues"
  | "infrastructure";

export interface SystemModuleOptions {
  kind: ModuleKind;
  label: string;
  /** Final, "structured" position once the system stabilizes. */
  targetPosition: THREE.Vector3;
  /** Starting, "fragmented" position before formation. */
  originPosition: THREE.Vector3;
  accent: number;
}

const KIND_DIMENSIONS: Record<ModuleKind, [number, number, number]> = {
  frontend: [1.6, 0.12, 1.0],
  api: [1.3, 0.12, 1.0],
  "business-rules": [1.3, 0.12, 1.2],
  database: [1.1, 0.12, 1.1],
  queues: [1.0, 0.12, 0.9],
  infrastructure: [1.8, 0.12, 1.0],
};

/**
 * A single plate-like module in the Vision System — deliberately built to
 * read as a piece of software infrastructure (a board / rack plate), never
 * as an organic or decorative shape.
 */
export class SystemModule {
  private static easeOutCubic(t: number): number {
    return 1 - Math.pow(1 - t, 3);
  }

  readonly group: THREE.Group;
  readonly kind: ModuleKind;
  readonly originPosition: THREE.Vector3;
  readonly targetPosition: THREE.Vector3;

  private plate: THREE.Mesh;
  private edgeLines: THREE.LineSegments;
  private labelSprite: THREE.Sprite;
  private geometries: THREE.BufferGeometry[] = [];
  private materials: THREE.Material[] = [];
  private textures: THREE.Texture[] = [];

  constructor(options: SystemModuleOptions) {
    this.kind = options.kind;
    this.originPosition = options.originPosition;
    this.targetPosition = options.targetPosition;

    this.group = new THREE.Group();
    this.group.position.copy(options.originPosition);

    const [w, h, d] = KIND_DIMENSIONS[options.kind];

    const geometry = new THREE.BoxGeometry(w, h, d, 1, 1, 1);
    this.geometries.push(geometry);

    const material = new THREE.MeshStandardMaterial({
      color: 0x161d2b,
      metalness: 0.35,
      roughness: 0.55,
      emissive: new THREE.Color(options.accent),
      emissiveIntensity: 0.08,
    });
    this.materials.push(material);

    this.plate = new THREE.Mesh(geometry, material);
    this.plate.castShadow = false;
    this.plate.receiveShadow = false;
    this.group.add(this.plate);

    const edgeGeometry = new THREE.EdgesGeometry(geometry);
    this.geometries.push(edgeGeometry);
    const edgeMaterial = new THREE.LineBasicMaterial({
      color: options.accent,
      transparent: true,
      opacity: 0.55,
    });
    this.materials.push(edgeMaterial);
    this.edgeLines = new THREE.LineSegments(edgeGeometry, edgeMaterial);
    this.group.add(this.edgeLines);

    const labelTexture = this.createLabelTexture(options.label, options.accent);
    this.textures.push(labelTexture);
    const labelMaterial = new THREE.SpriteMaterial({
      map: labelTexture,
      transparent: true,
      depthWrite: false,
      opacity: 0.9,
    });
    this.materials.push(labelMaterial);
    this.labelSprite = new THREE.Sprite(labelMaterial);
    this.labelSprite.scale.set(1.1, 0.28, 1);
    this.labelSprite.position.set(0, h / 2 + 0.22, 0);
    this.group.add(this.labelSprite);
  }

  /** Renders a small technical label ("API", "DATABASE"...) onto a canvas texture. */
  private createLabelTexture(text: string, accent: number): THREE.Texture {
    const canvas = document.createElement("canvas");
    canvas.width = 512;
    canvas.height = 128;
    const ctx = canvas.getContext("2d");
    if (ctx) {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.font = "500 40px ui-monospace, SFMono-Regular, Menlo, monospace";
      ctx.fillStyle = `#${accent.toString(16).padStart(6, "0")}`;
      ctx.textAlign = "left";
      ctx.textBaseline = "middle";
      ctx.globalAlpha = 0.9;
      ctx.fillText(text, 8, canvas.height / 2);
    }
    const texture = new THREE.CanvasTexture(canvas);
    texture.colorSpace = THREE.SRGBColorSpace;
    return texture;
  }

  /** Interpolates position/rotation between fragmented origin and structured target. */
  setFormationProgress(progress: number, jitterSeed: number, time: number): void {
    const eased = SystemModule.easeOutCubic(THREE.MathUtils.clamp(progress, 0, 1));
    this.group.position.lerpVectors(this.originPosition, this.targetPosition, eased);

    // Residual, decreasing jitter/rotation while the system is still "fragmented"
    const settle = 1 - eased;
    const wobble = Math.sin(time * 0.6 + jitterSeed) * 0.12 * settle;
    this.group.rotation.set(wobble * 0.4, wobble, wobble * 0.3);

    const emissiveTarget = 0.08 + eased * 0.22;
    const material = this.plate.material as THREE.MeshStandardMaterial;
    material.emissiveIntensity = THREE.MathUtils.lerp(
      material.emissiveIntensity,
      emissiveTarget,
      0.08
    );

    // Gentle idle float once mostly formed, so the system never looks static.
    if (eased > 0.9) {
      this.group.position.y += Math.sin(time * 0.5 + jitterSeed) * 0.03;
    }
  }

  setHovered(hovered: boolean): void {
    const edgeMaterial = this.edgeLines.material as THREE.LineBasicMaterial;
    edgeMaterial.opacity = hovered ? 0.95 : 0.55;
    const plateMaterial = this.plate.material as THREE.MeshStandardMaterial;
    plateMaterial.emissiveIntensity = hovered ? 0.42 : plateMaterial.emissiveIntensity;
  }

  dispose(): void {
    this.geometries.forEach((geometry) => geometry.dispose());
    this.materials.forEach((material) => material.dispose());
    this.textures.forEach((texture) => texture.dispose());
  }
}
