/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.0 output.glb 
*/

import React, { useState, useRef, useLayoutEffect, useEffect } from "react";
import { PerspectiveCamera, useGLTF, useHelper } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { useControls } from "leva";
import gsap from "gsap";
import { CameraHelper } from "three";

export function Model(props) {
  const { nodes, materials } = useGLTF(
    "/portfolio/model_3d/output.glb"
  );

  const modelRef = useRef();
  const { camera, scene } = useThree();
  const timeline = gsap.timeline();
  // const { cameraPositions, scenePosition, sceneRotation, scale, cameraFov } =
  //   useControls({
  //     cameraPositions: {
  //       name: "camera",
  //       value: { x: 0, y: 0, z: 100 },
  //       step: 1,
  //     },
  //     cameraFov: {
  //       value: 50,
  //       step: 1,
  //     },
  //     scenePosition: {
  //       value: { x: -80, y: -40, z: 15 },
  //       step: 1,
  //     },
  //     sceneRotation: {
  //       value: { x: 0, y: 0, z: 0 },
  //       step: 0.1,
  //     },
  //     scale: {
  //       value: 1,
  //       step: 0.1,
  //     },
  //   });
  // useFrame(() => {
  //   //modelRef.current.rotation.y += 0.005;
  //   camera.position.x = cameraPositions.x;
  //   camera.position.y = cameraPositions.y;
  //   camera.position.z = cameraPositions.z;
  //   camera.fov = cameraFov;

  //   scene.position.x = scenePosition.x;
  //   scene.position.y = scenePosition.y;
  //   scene.position.z = scenePosition.z;

  //   scene.rotation.x = sceneRotation.x;
  //   scene.rotation.y = sceneRotation.y;
  //   scene.rotation.z = sceneRotation.z;

  //   scene.scale.x = scale;
  //   scene.scale.y = scale;
  //   scene.scale.z = scale;
  // });
  useEffect(() => {
    console.log(scene.position);
  }, []);
  useLayoutEffect(() => {
    timeline
      .to(camera.position, {
        x: -4,
        y: -28,
        z: 100,
        ease: "power1.inOut",
        scrollTrigger: {
          trigger: ".education-sec",
          start: "top bottom",
          end: "top top",
          scrub: true,
          immediateRender: false,
          markers: true,
        },
      })
      .to(scene.position, {
        x: -80,
        y: -40,
        z: 15,
        ease: "power1.inOut",
        scrollTrigger: {
          trigger: ".education-sec",
          start: "top bottom",
          end: "top top",
          scrub: true,
          immediateRender: false,
          markers: true,
        },
      })
      .to(scene.scale, {
        x: 0.25,
        y: 0.25,
        z: 0.25,
        ease: "power1.inOut",
        scrollTrigger: {
          trigger: ".education-sec",
          start: "top bottom",
          end: "top top",
          scrub: true,
          immediateRender: false,
          markers: true,
        },
      })
      .to(scene.rotation, {
        x: 2,
        y: 2,
        z: 2,
        ease: "power1.inOut",
        scrollTrigger: {
          trigger: ".education-sec",
          start: "top bottom",
          end: "top top",
          scrub: true,
          immediateRender: false,
          markers: true,
        },
      })
      .to(".canvas", {
        background: "#fff",
        scrollTrigger: {
          trigger: ".education-sec",
          start: "top bottom",
          end: "top 20%",
          scrub: true,
          immediateRender: false,
          markers: true,
        },
      }).to(".header", {
        background: "#000177",
        scrollTrigger: {
          trigger: ".education-sec",
          start: "top bottom",
          end: "top top",
          scrub: true,
          immediateRender: false,
          markers: true,
        },
      })
      .to(scene.position, {
        x: 70,
        y: -40,
        z: 15,
        ease: "power1.inOut",
        scrollTrigger: {
          trigger: ".techstack",
          start: "top bottom",
          end: "top top",
          scrub: true,
          immediateRender: false,
          markers: true,
        },
      })
      .to(scene.rotation, {
        x: 5,
        y: 6,
        z: 4,
        ease: "power1.inOut",
        scrollTrigger: {
          trigger: ".techstack",
          start: "top bottom",
          end: "top top",
          scrub: true,
          immediateRender: false,
          markers: true,
        },
      });
  });
  const cameraRef = useRef();
  useHelper(cameraRef.current);
  return (
    <group {...props} dispose={null} ref={modelRef}>
      <group rotation={[-0.984, 1.373, 0.975]} scale={33.994}>
        <mesh
          geometry={nodes.Sphere040.geometry}
          material={materials["Material.002"]}
          castShadow
        />
        <mesh
          geometry={nodes.Sphere040_1.geometry}
          material={materials["Material.001"]}
        />
      </group>
      {/* <PerspectiveCamera
        attach={(parent, self) => {
          const cameraHelper = new CameraHelper(self);
          parent.add(cameraHelper);
          return () => {
            cameraHelper.dispose();
            self.parent.remove(cameraHelper);
          };
        }}
        makeDefault
        ref={cameraRef}
        position={[0, 0, 100]}
      ></PerspectiveCamera> */}
    </group>
  );
}

useGLTF.preload(
  "/portfolio/model_3d/output.glb"
);
