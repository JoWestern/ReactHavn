import React from 'react';
import { useGLTF } from '@react-three/drei';

export default function PortLazy() {
  const model = useGLTF("./public/port/havn.gltf");
  return (
     <primitive object={model.scene} />
  )
}