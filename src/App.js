import './App.css';
import {lazy, Suspense} from "react";
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { useLoader } from '@react-three/fiber'

import {Canvas} from "@react-three/fiber";
import { Center, OrbitControls, Scroll, ScrollControls } from "@react-three/drei";

import Box from "./components/Box";
import AnimatedSphere from './components/AnimatedSphere';
import { Earth } from './components/Earth';
import { Port } from './components/Port';

//const PortLazy = lazy(() => import("./components/PortLazy"));

export default function App() {
  //const portgltf = useLoader(GLTFLoader, './public/port/havn.gltf')
  return (
    <div className="App">
      <div className='title'>
        <h1>Dette er min kube</h1>
      </div>
      <Canvas className="canvas-port" height={1000}>
      <ScrollControls
        distance={1}
        pages={3}
        >
        <Scroll>
          <Suspense fallback={null}>
              <Earth position={[1.5,-10,0]} />
              <Port 
               position={[0,0.5,0]}
               rotation={[0.4, -0.75, 0]}
               />
          </Suspense>
        </Scroll>
        <Scroll html>
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'blue',
          }}>
          <h1>html in here (optional)</h1>
        </div>
      </Scroll>
      </ScrollControls>
          <ambientLight intensity={0.3} />
          <directionalLight position={[0, 5, 0]} intensity={1} />
          {/* <Suspense fallback={"loading"}>
            <Port 
            position={[0,0.5,0]}
            rotation={[0.4, -0.75, 0]}
            />
            <Earth position={[1.5,-10,0]} />
          </Suspense> */}
      </Canvas>




      {/* <Canvas className="canvas-earth" height={1000}>
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
          <Earth position={[1.5,-1.5,0]} />
          </Suspense>
      </Canvas>
        <Canvas className="canvas" height={1000}>
          <OrbitControls enableZoom={false} />
          <ambientLight intensity={0.5} />
          <directionalLight position={[-2, 5, 2]} intensity={1} />
          <Suspense fallback={null}>
          <Box />
          </Suspense>
        </Canvas>
         <Canvas className="canvas" height={1000}>
          <OrbitControls enableZoom={false} />
          <ambientLight intensity={0.5} />
          <directionalLight position={[-2, 5, 2]} intensity={1} />
          <Suspense fallback={null}>
          <AnimatedSphere />
          </Suspense>
        </Canvas> */}
    </div>
  );
}
