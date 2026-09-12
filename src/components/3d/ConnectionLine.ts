import * as THREE from "three";

/**
 * A single communication path between two modules, drawn progressively
 * (not just faded in) so the formation reads as "connections being
 * established", plus one small data packet traveling along it once formed.
 */
export class ConnectionLine {
  readonly line: THREE.Line;
  readonly packet: THREE.Mesh;

  private from: THREE.Object3D;
  private to: THREE.Object3D;
  private positions: Float32Array;
  private geometry: THREE.BufferGeometry;
  private material: THREE.LineBasicMaterial;
  private packetGeometry: THREE.BufferGeometry;
  private packetMaterial: THREE.MeshBasicMaterial;
  private readonly segments = 24;
  private packetOffset: number;

  constructor(from: THREE.Object3D, to: THREE.Object3D, accent: number, packetOffset = 0) {
    this.from = from;
    this.to = to;
    this.packetOffset = packetOffset;

    this.positions = new Float32Array(this.segments * 3);
    this.geometry = new THREE.BufferGeometry();
    this.geometry.setAttribute("position", new THREE.BufferAttribute(this.positions, 3));

    this.material = new THREE.LineBasicMaterial({
      color: accent,
      transparent: true,
      opacity: 0,
    });

    this.line = new THREE.Line(this.geometry, this.material);
    this.line.frustumCulled = false;

    this.packetGeometry = new THREE.SphereGeometry(0.035, 8, 8);
    this.packetMaterial = new THREE.MeshBasicMaterial({
      color: accent,
      transparent: true,
      opacity: 0,
    });
    this.packet = new THREE.Mesh(this.packetGeometry, this.packetMaterial);
  }

  /**
   * @param drawProgress 0–1, how much of the line has been "drawn" so far.
   * @param dataFlowActive whether the packet should travel (only once formed).
   * @param time elapsed seconds, used to animate the packet position.
   */
  update(drawProgress: number, dataFlowActive: boolean, time: number): void {
    const start = this.from.position;
    const end = this.to.position;
    const clamped = THREE.MathUtils.clamp(drawProgress, 0, 1);

    for (let i = 0; i < this.segments; i += 1) {
      const t = (i / (this.segments - 1)) * clamped;
      const x = THREE.MathUtils.lerp(start.x, end.x, t);
      const y = THREE.MathUtils.lerp(start.y, end.y, t) + Math.sin(t * Math.PI) * 0.15;
      const z = THREE.MathUtils.lerp(start.z, end.z, t);
      this.positions[i * 3] = x;
      this.positions[i * 3 + 1] = y;
      this.positions[i * 3 + 2] = z;
    }
    const posAttr = this.geometry.attributes.position;
    if (posAttr) {
      posAttr.needsUpdate = true;
    }
    this.material.opacity = clamped * 0.4;

    if (dataFlowActive) {
      const t = (time * 0.25 + this.packetOffset) % 1;
      const x = THREE.MathUtils.lerp(start.x, end.x, t);
      const y = THREE.MathUtils.lerp(start.y, end.y, t) + Math.sin(t * Math.PI) * 0.15;
      const z = THREE.MathUtils.lerp(start.z, end.z, t);
      this.packet.position.set(x, y, z);
      this.packetMaterial.opacity = THREE.MathUtils.lerp(this.packetMaterial.opacity, 0.9, 0.1);
    } else {
      this.packetMaterial.opacity = THREE.MathUtils.lerp(this.packetMaterial.opacity, 0, 0.1);
    }
  }

  dispose(): void {
    this.geometry.dispose();
    this.material.dispose();
    this.packetGeometry.dispose();
    this.packetMaterial.dispose();
  }
}
