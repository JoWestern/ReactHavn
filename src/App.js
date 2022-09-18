import './App.css';
import react, {Suspense} from "react";

import {Canvas} from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

import Box from "./components/Box";
import AnimatedSphere from './components/AnimatedSphere';
import { Earth } from './components/Earth';
import Port from './components/Port';

export default function App() {
  return (
    <div className="App">
      <div className='title'>
        <h1>Dette er min kube</h1>
      </div>
      <Canvas>
      <OrbitControls enableZoom={false} />
          <ambientLight intensity={0.5} />
          <directionalLight position={[-2, 5, 2]} intensity={1} />
          <Suspense fallback={null}>
          <Port />
          </Suspense>
      </Canvas>
      <Canvas class="canvas-earth" height={1000}>
        <Suspense fallback={null}>
        <OrbitControls 
          enableZoom={false} 
          enablePan={false}
          maxAzimuthAngle={0}
          minAzimuthAngle={0}
          maxPolarAngle={1.6}
          minPolarAngle={1.6}
          />
          <ambientLight intensity={0.5} />
          <directionalLight position={[-2, 5, 2]} intensity={0.75} />
          <Earth 
          position={[1.5,-1.5,0]}
          />
          </Suspense>
      </Canvas>
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
