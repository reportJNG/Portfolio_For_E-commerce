'use client';

import { useMemo, useRef } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Float } from '@react-three/drei';
import * as THREE from 'three';

function ParticleNetwork() {
  const groupRef = useRef<THREE.Group>(null);
  const { pointer } = useThree();

  const { particlePositions, linePositions } = useMemo(() => {
    const count = 260;
    const points: THREE.Vector3[] = [];
    const particles = new Float32Array(count * 3);

    for (let i = 0; i < count; i += 1) {
      const radius = 5.2 + Math.random() * 4.4;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(THREE.MathUtils.randFloatSpread(2));
      const point = new THREE.Vector3(
        radius * Math.sin(phi) * Math.cos(theta),
        radius * Math.sin(phi) * Math.sin(theta),
        radius * Math.cos(phi)
      );

      points.push(point);
      particles[i * 3] = point.x;
      particles[i * 3 + 1] = point.y;
      particles[i * 3 + 2] = point.z;
    }

    const lines: number[] = [];
    points.forEach((point, index) => {
      for (let j = index + 1; j < points.length; j += 1) {
        if (point.distanceTo(points[j]) < 1.75 && lines.length < 1700 * 3) {
          lines.push(point.x, point.y, point.z, points[j].x, points[j].y, points[j].z);
        }
      }
    });

    return {
      particlePositions: particles,
      linePositions: new Float32Array(lines)
    };
  }, []);

  useFrame((_, delta) => {
    if (!groupRef.current) return;
    groupRef.current.rotation.y += delta * 0.03;
    groupRef.current.rotation.x = THREE.MathUtils.lerp(groupRef.current.rotation.x, pointer.y * 0.14, 0.045);
    groupRef.current.rotation.z = THREE.MathUtils.lerp(groupRef.current.rotation.z, -pointer.x * 0.12, 0.045);
  });

  return (
    <group ref={groupRef}>
      <points>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[particlePositions, 3]} />
        </bufferGeometry>
        <pointsMaterial color="#93C5FD" size={0.035} sizeAttenuation transparent opacity={0.8} />
      </points>
      <lineSegments>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[linePositions, 3]} />
        </bufferGeometry>
        <lineBasicMaterial color="#60A5FA" transparent opacity={0.16} />
      </lineSegments>
    </group>
  );
}

function RotatingGeometry() {
  const meshRef = useRef<THREE.Mesh>(null);
  const { pointer } = useThree();

  useFrame((_, delta) => {
    if (!meshRef.current) return;
    meshRef.current.rotation.x += delta * 0.16;
    meshRef.current.rotation.y += delta * 0.22;
    meshRef.current.position.x = THREE.MathUtils.lerp(meshRef.current.position.x, pointer.x * 0.7, 0.04);
    meshRef.current.position.y = THREE.MathUtils.lerp(meshRef.current.position.y, pointer.y * 0.45, 0.04);
  });

  return (
    <Float speed={1.7} rotationIntensity={0.45} floatIntensity={0.7}>
      <mesh ref={meshRef} position={[2.2, 0.1, -1.6]}>
        <icosahedronGeometry args={[1.55, 2]} />
        <meshBasicMaterial color="#3B82F6" wireframe transparent opacity={0.5} />
      </mesh>
    </Float>
  );
}

export function HeroScene() {
  return (
    <Canvas camera={{ position: [0, 0, 8.5], fov: 54 }} dpr={[1, 1.7]} gl={{ antialias: true, alpha: true }}>
      <fog attach="fog" args={['#0A0F1E', 5, 16]} />
      <ambientLight intensity={0.65} />
      <ParticleNetwork />
      <RotatingGeometry />
    </Canvas>
  );
}
