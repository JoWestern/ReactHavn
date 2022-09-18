import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Earth(props) {
  const { nodes, materials } = useGLTF("earth/earth.gltf");
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={2.5}>
        <group rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.flatEarth_lands_lpEarthMat_0.geometry}
            material={materials.lpEarthMat}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.flatEarth_sea_lpEarthMat_0.geometry}
            material={materials.lpEarthMat}
          />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/earth.gltf");