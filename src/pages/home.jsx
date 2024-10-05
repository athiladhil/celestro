import { OrbitControls, PerspectiveCamera, Stars } from "@react-three/drei";
import { Canvas, useThree } from "@react-three/fiber"; 
import "../styleSheet/home.css";
import Sun from "../components/sun";
import * as THREE from "three"; 
import { useEffect } from "react"; // Import useEffect for side effects

const SpacialObject = ({ radius }) => {
  const { scene } = useThree();

  useEffect(() => {
    // Create a sphere and add it to the scene
    const sphereGeometry = new THREE.SphereGeometry(radius, 40, 40);
    const sphereMaterial = new THREE.MeshBasicMaterial({ color: 0xffff00 });
    const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
    scene.add(sphere);

    // Clean up: remove sphere when the component unmounts
    return () => {
      scene.remove(sphere);
    };
  }, [scene, radius]); 

  return null;
};

const Home = () => {

  function Trajectory(name, smA, oI, aP, oE, aN, mAe, Sidereal) {
    this.name = name;
    this.smA = smA;
    this.oI = oI * 0.01745329;
    this.aP = aP * 0.01745329;
    this.oE = oE;
    this.aN = aN * 0.01745329;
    this.period = Sidereal;
    this.epochMeanAnomaly = mAe * 0.01745329;
    this.trueAnomoly = 0;
    this.position = [0, 0, 0];
    this.time = 0;
  }

  Trajectory.prototype.propagate = function (uA) {
    var pos = [];
    var theta = uA;
    var smA = this.smA;
    var oI = this.oI;
    var aP = this.aP;
    var oE = this.oE;
    var aN = this.aN;
    var sLR = smA * (1 - oE ^ 2);
    var r = sLR / (1 + oE * Math.cos(theta));

    pos[0] = r * (Math.cos(aP + theta) * Math.cos(aN) - Math.cos(oI) * Math.sin(aP + theta) * Math.sin(aN));
    pos[1] = r * (Math.cos(aP + theta) * Math.sin(aN) + Math.cos(oI) * Math.sin(aP + theta) * Math.cos(aN));
    pos[2] = r * (Math.sin(aP + theta) * Math.sin(oI));

    return pos;
  };

  var Venus = new Trajectory("Venus", 0.72333199, 3.39471, 54.9, 0.00677323, 76.7, 181.98, 0.615);
  var Earth = new Trajectory("theEarth", 1, 0.00005, 102.94719, 0.01671022, 0, 100.47, 1);
  var Mars = new Trajectory("Mars", 1.52366231, 1.85061, 286.5, 0.09339, 49.57854, 355.43, 1.881);

  return (
    <div className="home-working-area">
      <Canvas>
        <PerspectiveCamera makeDefault position={[0, 0, 35]} fov={75} />
        <OrbitControls />
        <ambientLight />
        <Sun />
        <SpacialObject radius={10} /> {/* This adds a spatial object (sphere) to the scene */}
        <Stars radius={100} depth={50} count={5000} factor={4} fade saturation={0} />
      </Canvas>
    </div>
  );
};

export default Home;
