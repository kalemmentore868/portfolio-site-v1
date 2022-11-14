/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useThree, useFrame } from "@react-three/fiber";

export default function Model({ ...props }) {
  const { viewport } = useThree();

  const group = useRef();
  const { nodes, materials } = useGLTF("/text-for-proj.glb");

  // useFrame(({clock}) => {
  //   group.current.rotation.x = clock.getElapsedTime() /2
  // })

  let textScale = 1;
  if (viewport.width < 60) textScale = 0.7;
  if (viewport.width < 45) textScale = 0.5;
  return (
    <group
      ref={group}
      {...props}
      dispose={null}
      position={[0, -viewport.height / 2 + viewport.height / 50, 0]}
    >
      <group rotation={[-Math.PI / 2, 0, 0]} scale={textScale}>
        <mesh
          geometry={nodes["3D_Text_-_p"].geometry}
          material={materials["Day Glow"]}
          position={[-10.39, 0.72, 1.07]}
          scale={0.1}
        />
        <mesh
          geometry={nodes["3D_Text_-_p_1"].geometry}
          material={materials["Day Glow"]}
          position={[-12.67, 0.72, 5.86]}
          scale={0.1}
        />
        <mesh
          geometry={nodes["3D_Text_-_r"].geometry}
          material={materials["Day Glow"]}
          position={[-8.18, 0.72, 1.07]}
          scale={0.1}
        />
        <mesh
          geometry={nodes["3D_Text_-_o"].geometry}
          material={materials["Day Glow"]}
          position={[-6.5, 0.72, 1.07]}
          scale={0.1}
        />
        <mesh
          geometry={nodes["3D_Text_-_o_1"].geometry}
          material={materials["Day Glow"]}
          position={[7.82, 0.72, 1.07]}
          scale={0.1}
        />
        <mesh
          geometry={nodes["3D_Text_-_o_2"].geometry}
          material={materials["Day Glow"]}
          position={[1.14, 0.72, 5.86]}
          scale={0.1}
        />
        <mesh
          geometry={nodes["3D_Text_-_o_3"].geometry}
          material={materials["Day Glow"]}
          position={[17.39, 0.72, 5.86]}
          scale={0.1}
        />
        <mesh
          geometry={nodes["3D_Text_-_j"].geometry}
          material={materials["Day Glow"]}
          position={[-4.57, 0.72, 1.07]}
          scale={0.1}
        />
        <mesh
          geometry={nodes["3D_Text_-_e"].geometry}
          material={materials["Day Glow"]}
          position={[-3.29, 0.72, 1.07]}
          scale={0.1}
        />
        <mesh
          geometry={nodes["3D_Text_-_e_1"].geometry}
          material={materials["Day Glow"]}
          position={[-4.51, 0.72, 5.86]}
          scale={0.1}
        />
        <mesh
          geometry={nodes["3D_Text_-_e_2"].geometry}
          material={materials["Day Glow"]}
          position={[9.9, 0.72, 5.86]}
          scale={0.1}
        />
        <mesh
          geometry={nodes["3D_Text_-_c"].geometry}
          material={materials["Day Glow"]}
          position={[-1.41, 0.72, 1.07]}
          scale={0.1}
        />
        <mesh
          geometry={nodes["3D_Text_-_c_1"].geometry}
          material={materials["Day Glow"]}
          position={[-17.74, 0.72, 5.86]}
          scale={0.1}
        />
        <mesh
          geometry={nodes["3D_Text_-_t"].geometry}
          material={materials["Day Glow"]}
          position={[0.42, 0.72, 1.07]}
          scale={0.1}
        />
        <mesh
          geometry={nodes["3D_Text_-_t_1"].geometry}
          material={materials["Day Glow"]}
          position={[-2.63, 0.72, 5.86]}
          scale={0.1}
        />
        <mesh
          geometry={nodes["3D_Text_-_t_2"].geometry}
          material={materials["Day Glow"]}
          position={[-0.31, 0.72, 5.86]}
          scale={0.1}
        />
        <mesh
          geometry={nodes["3D_Text_-_i"].geometry}
          material={materials["Day Glow"]}
          position={[2.74, 0.72, 1.07]}
          scale={0.1}
        />
        <mesh
          geometry={nodes["3D_Text_-_i_1"].geometry}
          material={materials["Day Glow"]}
          position={[-19.03, 0.72, 5.86]}
          scale={0.1}
        />
        <mesh
          geometry={nodes["3D_Text_-_i_2"].geometry}
          material={materials["Day Glow"]}
          position={[6.27, 0.72, 5.86]}
          scale={0.1}
        />
        <mesh
          geometry={nodes["3D_Text_-_n"].geometry}
          material={materials["Day Glow"]}
          position={[4.03, 0.72, 1.07]}
          scale={0.1}
        />
        <mesh
          geometry={nodes["3D_Text_-_n_1"].geometry}
          material={materials["Day Glow"]}
          position={[-6.9, 0.72, 5.86]}
          scale={0.1}
        />
        <mesh
          geometry={nodes["3D_Text_-_f"].geometry}
          material={materials["Day Glow"]}
          position={[6.42, 0.72, 1.07]}
          scale={0.1}
        />
        <mesh
          geometry={nodes["3D_Text_-_C"].geometry}
          material={materials["Day Glow"]}
          position={[-22.8, 0.72, 5.86]}
          scale={0.1}
        />
        <mesh
          geometry={nodes["3D_Text_-_l"].geometry}
          material={materials["Day Glow"]}
          position={[-20.31, 0.72, 5.86]}
          scale={0.1}
        />
        <mesh
          geometry={nodes["3D_Text_-_l_1"].geometry}
          material={materials["Day Glow"]}
          position={[-10.47, 0.72, 5.86]}
          scale={0.1}
        />
        <mesh
          geometry={nodes["3D_Text_-_k"].geometry}
          material={materials["Day Glow"]}
          position={[-15.91, 0.72, 5.86]}
          scale={0.1}
        />
        <mesh
          geometry={nodes["3D_Text_-_a"].geometry}
          material={materials["Day Glow"]}
          position={[-9.19, 0.72, 5.86]}
          scale={0.1}
        />
        <mesh
          geometry={nodes["3D_Text_-_h"].geometry}
          material={materials["Day Glow"]}
          position={[3.93, 0.72, 5.86]}
          scale={0.1}
        />
        <mesh
          geometry={nodes["3D_Text_-_h_1"].geometry}
          material={materials["Day Glow"]}
          position={[15.05, 0.72, 5.86]}
          scale={0.1}
        />
        <mesh
          geometry={nodes["3D_Text_-_d"].geometry}
          material={materials["Day Glow"]}
          position={[7.57, 0.72, 5.86]}
          scale={0.1}
        />
        <mesh
          geometry={nodes["3D_Text_-_"].geometry}
          material={materials["Day Glow"]}
          position={[11.78, 0.72, 5.86]}
          scale={0.1}
        />
        <mesh
          geometry={nodes["3D_Text_-_s"].geometry}
          material={materials["Day Glow"]}
          position={[13.39, 0.72, 5.86]}
          scale={0.1}
        />
        <mesh
          geometry={nodes["3D_Text_-_w"].geometry}
          material={materials["Day Glow"]}
          position={[19.31, 0.72, 5.86]}
          scale={0.1}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/text-for-proj.glb");
