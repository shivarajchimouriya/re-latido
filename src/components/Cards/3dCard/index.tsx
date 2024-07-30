// "use client";
// import React, { Suspense } from "react";
// import { Canvas } from "@react-three/fiber";
// import { Center, OrbitControls, useGLTF } from "@react-three/drei";

// function Model() {
//   const { scene } = useGLTF("/3d/leather.glb");
//   return <primitive object={scene} />;
// }

// export default function ThreeDCard() {
//   return (
//     <Canvas>
//       <ambientLight intensity={1} />
//       <Suspense fallback={null}>
//         <Center >
//           <Model />
//         </Center>
//       </Suspense>
//       <OrbitControls />
//     </Canvas>
//   );
// }
