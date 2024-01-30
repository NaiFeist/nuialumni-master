import React, { Suspense } from 'react';
import { useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { OrbitControls, pointLight } from "@react-three/drei";

function Scene() {
    const gltf = useLoader(GLTFLoader, '/model.gltf');
    const scaleSize = 55; 
    const position = [0, 0, -30]; 

    return (
        <>
            <primitive object={gltf.scene} scale={scaleSize} position={position} />
            <OrbitControls />
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} intensity={1} />
        </>
    );
}

export default Scene;