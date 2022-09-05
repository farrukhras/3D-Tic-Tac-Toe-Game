import React from 'react';
import { DoubleSide } from "three"; // allows to click from both sides if the gird is rotated
import SphereMesh from './SphereMesh';
import CubeMesh from './CubeMesh';

function GridBox({ shape, position, handleClick }) {
  return (
    <>
      {
        shape === "Sphere" ? 
        <SphereMesh position={position} />
        :  shape === "Cube" ?
        <CubeMesh position={position} />
        : null
      }

      <mesh position={position} onPointerDown={e => handleClick(e)}>
        <planeBufferGeometry args={[2.5, 2.5]} />
        <meshLambertMaterial
          transparent
          opacity={0}
          depthWrite={false}
          side={DoubleSide}
        />
      </mesh>
    </>
  );
}

export default React.memo(GridBox);