import React from "react";
import { Canvas } from "@react-three/fiber";
import {
  OrbitControls,
  Environment,
  GizmoHelper,
  GizmoViewport,
} from "@react-three/drei";
import { Model } from "./gltfjsx/Earth";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Earth() {
  return (
    <Canvas
      orthographic
      camera={{ position: [0, 0, 100], zoom: 10 }}
      shadows={true}
      style={{
        height: "100vh",
        width: "100vw",
        backgroundImage: "linear-gradient(to right, #0005AE, #006)",
        position: "fixed",
        top: 0,
        left: 0,
        z: 10,
      }}
      gl={{ logarithmicDepthBuffer: true }}
      className="canvas"
    >
      {/* Lighting */}
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} intensity={1} />
      <directionalLight position={[-5, -6, 5]} intensity={1} />
      <pointLight position={[-5, -5, -5]} intensity={0.5} />

      {/* Model */}
      <Model />
      {/* <Environment files="https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTA3L2xyL25hc2EwMDAwMS1pbWFnZS5qcGc.jpg" background /> */}
      {/* Orbit Controls */}
      <OrbitControls enableZoom={false} />
      {/* <GizmoHelper alignment="top-left" margin={[80, 80]} renderPriority={1}>
        <GizmoViewport
          axisColors={["hotpink", "aquamarine", "#3498DB"]}
          labelColor="black"
        />
      </GizmoHelper> */}
    </Canvas>
  );
}
