import { Plane, TorusKnot } from '@react-three/drei';

export const Meshes = () => {

  return (
    /*<mesh position={[1,0,0]}>
      {/!* args : 가로 세로 depth의 값*!/}
      <boxGeometry args={[1,1,1]} />
      <meshBasicMaterial color={0xff0000} />
    </mesh>*/
    <>
      <Plane args={[40,40]} rotation-x={-Math.PI / 2} receiveShadow>
        <meshStandardMaterial/>
      </Plane>
      <TorusKnot args={[1,0.2,128,128,2,3]} position={[-3,1.6,0]} castShadow receiveSadow>
        <meshStandardMaterial color={0xffffff} />
      </TorusKnot>
    </>
  );
}