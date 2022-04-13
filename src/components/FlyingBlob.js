import React from "react";
import { Sphere, MeshDistortMaterial } from "@react-three/drei";

const FlyingBlob = ({ position, scale, color, speed, roughness, distort }) => {
  return (
    <mesh position={position}>
      <Sphere visible args={[1, 100, 200]} scale={scale}>
        <MeshDistortMaterial
          color={color}
          attach="material"
          distort={distort}
          speed={speed}
          roughness={roughness}
        />
      </Sphere>
    </mesh>
  );
};

export default FlyingBlob;
