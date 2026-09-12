import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { AppTheme } from '../types';

interface Hero3DProps {
  theme: AppTheme;
}

export const Hero3D: React.FC<Hero3DProps> = ({ theme }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const canvas = canvasRef.current;
    if (!container || !canvas) return;

    // Scene setup
    const scene = new THREE.Scene();

    // Camera setup - isometric perspective scaled for background hero presence
    const width = container.clientWidth || window.innerWidth || 1200;
    const height = container.clientHeight || window.innerHeight || 750;
    const camera = new THREE.PerspectiveCamera(40, width / height, 0.1, 100);
    camera.position.set(0, 4.4, 12.5);
    camera.lookAt(0, -0.2, 0);

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({
      canvas,
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance',
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.15;

    // Lights
    const ambientLight = new THREE.AmbientLight(0xd6e5f7, 1.3);
    scene.add(ambientLight);

    const sunLight = new THREE.DirectionalLight(0xfffae8, 2.2);
    sunLight.position.set(8, 14, 7);
    scene.add(sunLight);

    const rimLight = new THREE.DirectionalLight(theme === 'blue' ? 0x38bdf8 : 0x34d399, 1.2);
    rimLight.position.set(-8, 9, -6);
    scene.add(rimLight);

    const groundBounce = new THREE.DirectionalLight(theme === 'blue' ? 0x1d3f66 : 0x0c3327, 0.7);
    groundBounce.position.set(0, -8, 2);
    scene.add(groundBounce);

    // Root Island Group
    const island = new THREE.Group();
    scene.add(island);

    // Pin Material
    const PIN_COLOR_GREEN = 0x10b981;
    const PIN_COLOR_BLUE = 0x2563eb;
    const pinMat = new THREE.MeshStandardMaterial({
      color: theme === 'blue' ? PIN_COLOR_BLUE : PIN_COLOR_GREEN,
      roughness: 0.15,
      metalness: 0.25,
    });

    // 1. Top Grass Base Slab (10 x 10)
    const slabGeo = new THREE.BoxGeometry(10.2, 0.4, 10.2);
    const slabMat = new THREE.MeshStandardMaterial({
      color: 0x3a7d2d,
      roughness: 0.8,
      metalness: 0.05,
    });
    const slabMesh = new THREE.Mesh(slabGeo, slabMat);
    slabMesh.position.y = 0.2;
    island.add(slabMesh);

    // 2. Earth Rock Layers underneath
    const earthMat = new THREE.MeshStandardMaterial({
      color: 0x2b221a,
      roughness: 0.9,
      metalness: 0.05,
    });
    const earthLayers = [
      { w: 9.8, h: 0.7, d: 9.8, y: -0.3 },
      { w: 9.0, h: 0.9, d: 9.0, y: -1.05 },
      { w: 7.8, h: 0.9, d: 7.8, y: -1.85 },
      { w: 6.2, h: 0.8, d: 6.2, y: -2.55 },
      { w: 4.0, h: 0.8, d: 4.0, y: -3.25 },
      { w: 1.8, h: 0.6, d: 1.8, y: -3.85 },
    ];
    earthLayers.forEach((layer) => {
      const geo = new THREE.BoxGeometry(layer.w, layer.h, layer.d);
      const mesh = new THREE.Mesh(geo, earthMat);
      mesh.position.y = layer.y;
      island.add(mesh);
    });

    // 3. Roads dividing plots
    const roadMat = new THREE.MeshStandardMaterial({
      color: 0x222a33,
      roughness: 0.9,
    });
    // Main road horizontal
    const r1 = new THREE.Mesh(new THREE.BoxGeometry(9.8, 0.04, 0.72), roadMat);
    r1.position.set(0, 0.42, 0);
    island.add(r1);

    // Main road vertical
    const r2 = new THREE.Mesh(new THREE.BoxGeometry(0.72, 0.04, 9.8), roadMat);
    r2.position.set(0, 0.42, 0);
    island.add(r2);

    // 4. Individual plot grass pads with subtle variation
    const GRASS_COLORS = [0x418a33, 0x4a963b, 0x3d8230, 0x529e41, 0x468d37];
    const plotOffsets = [
      { x: -2.7, z: -2.7 },
      { x: 2.7, z: -2.7 },
      { x: -2.7, z: 2.7 },
      { x: 2.7, z: 2.7 },
    ];

    plotOffsets.forEach((p, idx) => {
      const pGeo = new THREE.BoxGeometry(4.2, 0.08, 4.2);
      const pMat = new THREE.MeshStandardMaterial({
        color: GRASS_COLORS[idx % GRASS_COLORS.length],
        roughness: 0.75,
      });
      const plot = new THREE.Mesh(pGeo, pMat);
      plot.position.set(p.x, 0.44, p.z);
      island.add(plot);

      // Boundary survey stones at plot corners
      const stoneGeo = new THREE.BoxGeometry(0.12, 0.35, 0.12);
      const stoneMat = new THREE.MeshStandardMaterial({ color: 0xecf0f1 });
      const stoneRedMat = new THREE.MeshStandardMaterial({ color: 0xe74c3c });

      const corners = [
        { cx: p.x - 2.0, cz: p.z - 2.0 },
        { cx: p.x + 2.0, cz: p.z - 2.0 },
        { cx: p.x - 2.0, cz: p.z + 2.0 },
        { cx: p.x + 2.0, cz: p.z + 2.0 },
      ];
      corners.forEach((c) => {
        const stone = new THREE.Mesh(stoneGeo, stoneMat);
        stone.position.set(c.cx, 0.6, c.cz);
        island.add(stone);

        const cap = new THREE.Mesh(new THREE.BoxGeometry(0.13, 0.06, 0.13), stoneRedMat);
        cap.position.set(c.cx, 0.78, c.cz);
        island.add(cap);
      });
    });

    // 5. Stylized Low-Poly Trees
    function createTree(x: number, z: number, scale = 1) {
      const tree = new THREE.Group();
      const trunkMat = new THREE.MeshStandardMaterial({ color: 0x5c4033 });
      const trunk = new THREE.Mesh(new THREE.CylinderGeometry(0.1, 0.14, 0.8, 6), trunkMat);
      trunk.position.y = 0.4;
      tree.add(trunk);

      const leafMat = new THREE.MeshStandardMaterial({ color: 0x2e7d32, roughness: 0.7 });
      const foliage1 = new THREE.Mesh(new THREE.ConeGeometry(0.7, 1.1, 7), leafMat);
      foliage1.position.y = 1.0;
      tree.add(foliage1);

      const foliage2 = new THREE.Mesh(new THREE.ConeGeometry(0.55, 0.9, 7), leafMat);
      foliage2.position.y = 1.45;
      tree.add(foliage2);

      tree.position.set(x, 0.45, z);
      tree.scale.set(scale, scale, scale);
      island.add(tree);
    }

    createTree(-3.8, -3.8, 0.9);
    createTree(-1.6, -3.8, 0.75);
    createTree(-3.8, -1.8, 0.8);
    createTree(3.8, -3.6, 0.85);
    createTree(3.6, -1.7, 0.7);
    createTree(3.8, 3.8, 0.9);
    createTree(1.8, 3.8, 0.75);

    // 6. Modern House / Villa on Top-Right Plot
    const houseGroup = new THREE.Group();
    const houseBase = new THREE.Mesh(
      new THREE.BoxGeometry(1.8, 0.9, 1.6),
      new THREE.MeshStandardMaterial({ color: 0xf5f5f7, roughness: 0.4 })
    );
    houseBase.position.y = 0.45;
    houseGroup.add(houseBase);

    const roof = new THREE.Mesh(
      new THREE.BoxGeometry(2.0, 0.1, 1.8),
      new THREE.MeshStandardMaterial({ color: 0x1f2937 })
    );
    roof.position.y = 0.95;
    houseGroup.add(roof);

    const upperFloor = new THREE.Mesh(
      new THREE.BoxGeometry(1.4, 0.7, 1.2),
      new THREE.MeshStandardMaterial({ color: 0xe2e8f0, roughness: 0.3 })
    );
    upperFloor.position.set(0.1, 1.35, 0);
    houseGroup.add(upperFloor);

    const upperRoof = new THREE.Mesh(
      new THREE.BoxGeometry(1.6, 0.08, 1.4),
      new THREE.MeshStandardMaterial({ color: 0x0f172a })
    );
    upperRoof.position.set(0.1, 1.74, 0);
    houseGroup.add(upperRoof);

    // Glowing warm interior windows
    const windowMat = new THREE.MeshStandardMaterial({
      color: 0xfef08a,
      emissive: 0xf59e0b,
      emissiveIntensity: 0.6,
    });
    const win1 = new THREE.Mesh(new THREE.PlaneGeometry(0.5, 0.4), windowMat);
    win1.position.set(0, 0.5, 0.81);
    houseGroup.add(win1);

    houseGroup.position.set(2.4, 0.45, -2.4);
    island.add(houseGroup);

    // 7. Golden Location Marker Pin on Featured Plot
    const pinGroup = new THREE.Group();
    const pinHead = new THREE.Mesh(new THREE.SphereGeometry(0.38, 16, 16), pinMat);
    pinHead.position.y = 1.6;
    pinGroup.add(pinHead);

    const pinCone = new THREE.Mesh(new THREE.ConeGeometry(0.38, 0.9, 16), pinMat);
    pinCone.rotation.x = Math.PI;
    pinCone.position.y = 1.15;
    pinGroup.add(pinCone);

    // Pulse Ring on Ground under Pin
    const ringMat = new THREE.MeshBasicMaterial({
      color: theme === 'blue' ? 0x60a5fa : 0x34d399,
      transparent: true,
      opacity: 0.7,
      side: THREE.DoubleSide,
    });
    const ring = new THREE.Mesh(new THREE.RingGeometry(0.2, 0.6, 24), ringMat);
    ring.rotation.x = -Math.PI / 2;
    ring.position.y = 0.46;
    pinGroup.add(ring);

    pinGroup.position.set(-2.5, 0, 2.5);
    island.add(pinGroup);

    // Animation variables
    let animationFrameId: number;
    let clock = new THREE.Clock();

    // Mouse parallax
    let mouseX = 0;
    let mouseY = 0;
    const onMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      mouseX = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
      mouseY = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
    };
    window.addEventListener('mousemove', onMouseMove);

    // ResizeObserver
    const resizeObserver = new ResizeObserver(() => {
      if (!container) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      if (w > 0 && h > 0) {
        camera.aspect = w / h;
        camera.updateProjectionMatrix();
        renderer.setSize(w, h);
      }
    });
    resizeObserver.observe(container);

    // Render loop
    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsed = clock.getElapsedTime();

      // Smooth idle rotation + mouse responsiveness
      const targetRotationY = elapsed * 0.25 + mouseX * 0.4;
      const targetRotationX = 0.2 + mouseY * 0.2;
      island.rotation.y += (targetRotationY - island.rotation.y) * 0.04;
      island.rotation.x += (targetRotationX - island.rotation.x) * 0.04;

      // Subtle floating bobbing
      island.position.y = Math.sin(elapsed * 1.5) * 0.12;

      // Pin bounce & ring pulse
      pinGroup.position.y = Math.sin(elapsed * 3) * 0.15;
      const ringScale = 1 + Math.sin(elapsed * 3) * 0.25;
      ring.scale.set(ringScale, ringScale, 1);

      renderer.render(scene, camera);
    };
    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', onMouseMove);
      resizeObserver.disconnect();
      renderer.dispose();
      slabGeo.dispose();
      slabMat.dispose();
      earthMat.dispose();
      roadMat.dispose();
      pinMat.dispose();
      ringMat.dispose();
    };
  }, [theme]);

  return (
    <div
      ref={containerRef}
      id="hero3dContainer"
      className="hero-3d-container"
      aria-hidden="true"
      style={{
        position: 'absolute',
        inset: 0,
        width: '100%',
        height: '100%',
        overflow: 'hidden',
        pointerEvents: 'none',
        zIndex: 1,
      }}
    >
      <canvas
        ref={canvasRef}
        id="hero3dCanvas"
        style={{
          width: '100%',
          height: '100%',
          display: 'block',
          outline: 'none',
        }}
      />
    </div>
  );
};
