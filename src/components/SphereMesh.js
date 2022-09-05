import React from 'react';

function SphereMesh({ position }) {
  return (
    <>
      <mesh position={position} >
        <sphereBufferGeometry args={[0.6, 100, 100]} />
        <meshStandardMaterial
          // color="white"
          metalness={0.85}
          roughness={0.1}
        />
      </mesh>
    </>
  );
}

export default React.memo(SphereMesh);