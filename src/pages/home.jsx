import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import "../styleSheet/home.css";

const Home = () => {
  return (
    <div className="home-working-area">
      <Canvas>
        <OrbitControls />
        <ambientLight />
        <mesh>
          <sphereGeometry args={[2, 39, 39]} />
          <meshPhongMaterial color="red" />
          <directionalLight position={[0, 0, 5]} color="red" />
        </mesh>
      </Canvas>
    </div>
  );
};

export default Home;
