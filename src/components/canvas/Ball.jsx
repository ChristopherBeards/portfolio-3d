import React, { Suspense, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  Decal,
  Float,
  OrbitControls,
  Preload,
  useTexture,
} from "@react-three/drei";
import CanvasLoader from "../Loader";

const Ball = (props) => {
  const [decal] = useTexture([props.imgUrl]);
  const [hover, setHover] = useState(false);
  const [rotationSpeed, setRotationSpeed] = useState({ x: 0, y: 0 });
  const meshRef = useRef(null);

  const handlePointerMove = (event) => {
    // Determine the direction of rotation based on mouse position
    setRotationSpeed({
      x: event.clientX > window.innerWidth / 2 ? 0.05 : -0.05,
      y: event.clientY > window.innerHeight / 2 ? 0.05 : -0.05,
    });
  };

  useFrame(() => {
    // Rotate the ball only when the mouse is over it
    if (hover && meshRef.current) {
      meshRef.current.rotation.x += rotationSpeed.y;
      meshRef.current.rotation.y += rotationSpeed.x;
    }
  });

  return (
    <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
      <ambientLight intensity={0.25} />
      <directionalLight position={[0, 0, 0.05]} />
      <mesh
        ref={meshRef}
        castShadow
        receiveShadow
        scale={2.75}
        onPointerMove={handlePointerMove}
        onPointerOver={() => setHover(true)}
        onPointerOut={() => setHover(false)}
      >
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial
          color="#fff8eb"
          polygonOffset
          polygonOffsetFactor={-5}
          flatShading
        />
        <Decal
          position={[0, 0, 1]}
          rotation={[2 * Math.PI, 0, 6.25]}
          scale={1}
          map={decal}
          flatShading
        />
      </mesh>
    </Float>
  );
};

const BallCanvas = ({ icon }) => {
  return (
    <Canvas
      frameloop="demand"
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls enableZoom={false} />
        <Ball imgUrl={icon} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default BallCanvas;
