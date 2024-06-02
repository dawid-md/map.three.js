import { useRef } from "react";
import { useFrame } from "@react-three/fiber";

export function Box(props) {
    const mesh = useRef();
  
    useFrame(() => {
      mesh.current.rotation.x += 0.0001;
      mesh.current.rotation.y += 0.0001;
    });
  
    return (
      <mesh {...props} ref={mesh}>
        <boxGeometry args={[5, 5, 5]} />
        <meshStandardMaterial color={'blue'} />
      </mesh>
    );
  }