import { useLoader } from "@react-three/fiber";
import * as THREE from 'three';
import sunDiffuseTexture from '../images/texture/sun/rootDiffuse.png';
import sunNormalTexture from '../images/texture/sun/rootNormal.png';
import sunSpecularTexture from '../images/texture/sun/rootSpecularGlossiness.png';
import { EffectComposer, Bloom } from '@react-three/postprocessing';

const Sun = () => {
  const sunDiffuse = useLoader(THREE.TextureLoader, sunDiffuseTexture);
  const sunNormal = useLoader(THREE.TextureLoader, sunNormalTexture);
  const sunSpecular = useLoader(THREE.TextureLoader, sunSpecularTexture);

  return (
    <>
      <mesh>
        <sphereGeometry args={[5, 39, 39]} />
        <meshPhongMaterial 
          color="red"
        />
        <directionalLight position={[0, 0, 5]} intensity={2} />
      </mesh>
      
    </>
  );
}

export default Sun;
