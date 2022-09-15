import './App.css';
import react, {Suspense} from "react";

import {Canvas} from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import styled from "styled-components";

import Box from "./components/Box";
import AnimatedSphere from './components/AnimatedSphere';




export default function App() {
  return (
    <div className="App">
      <div className='title'>
        <h1>Dette er min kube</h1>
      </div>
        <Canvas class="canvas" height={1000}>
          <OrbitControls enableZoom={false} />
          <ambientLight intensity={0.5} />
          <directionalLight position={[-2, 5, 2]} intensity={1} />
          <Suspense fallback={null}>
          <Box />
          </Suspense>
        </Canvas>
         <Canvas class="canvas" height={1000}>
          <OrbitControls enableZoom={false} />
          <ambientLight intensity={0.5} />
          <directionalLight position={[-2, 5, 2]} intensity={1} />
          <Suspense fallback={null}>
          <AnimatedSphere />
          </Suspense>
        </Canvas>
    </div>
  );
}
