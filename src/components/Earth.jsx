import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Model } from "./gltfjsx/Earth";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Earth() {
  return (
    <Canvas
      orthographic
      camera={{ position: [0, 0, 100], zoom: 10 }}
      shadows={false}
      dpr={[1, 1.5]}
      performance={{ min: 0.5 }}
      style={{
        height: "100vh",
        width: "100vw",
        backgroundImage: "linear-gradient(to right, #0005AE, #006)",
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: 5,
        pointerEvents: "none",
      }}
      gl={{ 
        antialias: false,
        powerPreference: "high-performance",
        alpha: false,
        stencil: false,
        depth: true
      }}
      className="canvas"
    >
      <Suspense fallback={null}>
        {/* Optimized Lighting */}
        <ambientLight intensity={0.6} />
        <directionalLight position={[5, 5, 5]} intensity={0.8} castShadow={false} />
        <directionalLight position={[-5, -6, 5]} intensity={0.6} castShadow={false} />

        {/* Model */}
        <Model />
        
        {/* Orbit Controls */}
        <OrbitControls 
          enableZoom={false} 
          enablePan={false}
          enableDamping={false}
        />
      </Suspense>
    </Canvas>
  );
}
