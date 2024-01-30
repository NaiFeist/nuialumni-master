import { OrbitControls } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { Sphere } from '@react-three/drei';

function XrSphere() {
  const sphereRef = useRef();

  useFrame((state, delta) => {
    sphereRef.current.rotation.y += delta;
  });

  return (
    <>
      <OrbitControls />
      <ambientLight />
      <mesh ref={sphereRef} position={[0, 0, -5]}>
        <sphereGeometry args={[5, 17, 17]} />
        <meshStandardMaterial color="blue" /> 
      </mesh>
    </>
  );
}

export default XrSphere;