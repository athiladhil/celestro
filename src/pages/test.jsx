import { OrbitControls, PerspectiveCamera, Stars } from "@react-three/drei";
import { Canvas, useThree } from "@react-three/fiber";
import "../styleSheet/home.css";
import * as THREE from "three";
import { useLoader } from "@react-three/fiber";
import { useRef, useEffect } from 'react';
import sunNormalTexture from '../images/texture/sun/sunNormal.jpg';

const Home = () => {
  const sunRef = useRef();
  const planetRef = useRef([]);
  const sunNormal = useLoader(THREE.TextureLoader, sunNormalTexture);
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

  var epoch = new Date('December 9, 2014');
  var simSpeed = 1;
  var solid = false;
  var solidLabels = false;

  var Venus = new Trajectory("venus", 0.72333199, 3.39471, 54.9, 0.00677323, 76.7, 181.98, 0.615);
  var Earth = new Trajectory("earth", 1, 0.00005, 102.94719, 0.01671022, 0, 100.47, 1);
  var Mars = new Trajectory("mars", 1.52366231, 1.85061, 286.5, 0.09339, 49.57854, 355.43, 1.881);

  var heavenlyBodies = [Earth, Venus, Mars];

  function addCelestialBodies(identifier, radius) {
    const position = [0, 0, 5];
    const index = planetRef.current.length;

    if (sunRef.current) {
      const geometry = new THREE.SphereGeometry(radius, 40, 40);
      const material = new THREE.MeshBasicMaterial({ color: 0xffff00 });
      const sphere = new THREE.Mesh(geometry, material);
      sunRef.current.add(sphere);
      sphere.position.set(...position);
      planetRef.current[index] = sphere;
    } else {
      console.error('sunRef is not defined yet..');
    }
    
  }

  function addCelestialBodiesWithParents(parentUseRef, childUseRef, radius,) {
    var x = 0; var y = 0; var z = -5;
    const geometry = new THREE.SphereGeometry(radius, 40, 40);
    const material = new THREE.MeshBasicMaterial({ color: 0xffff00 });
    const sphere = new THREE.Mesh(geometry, material);
    parentUseRef.current.add(sphere);
  }

  function trueToEccentricAnomaly(e, f) {
    var eccentricAnomaly = 2 * Math.atan(Math.sqrt((1 - e) / (1 + e)) * Math.tan(f / 2));
    return eccentricAnomaly;
  }


  function meanToEccentricAnomaly(e, M) {
    var tol = 0.0001;
    var eAo = M;
    var ratio = 1;
    while (Math.abs(ratio) > tol) {
      var f_E = eAo - e * Math.sin(eAo) - M;
      var f_Eprime = 1 - e * Math.cos(eAo);
      ratio = f_E / f_Eprime;
      if (Math.abs(ratio) > tol) {
        eAo = eAo - ratio;
      } else {
        eccentricAnomaly = eAo;
      }
    }
    return eccentricAnomaly;
  }

  function eccentricToTrueAnomaly(e, E) {
    var trueAnomaly = 2 * Math.atan(Math.sqrt((1 + e) / (1 - e)) * Math.tan(E / 2));
    return trueAnomaly
  }
  console.log(planetRef);
  planetRef.current.forEach(()=>{
    
  })
  
  function updatePosition() {
    var currentPosition = [];
    var deltaTime = 0;
    for (var hB in heavenlyBodies) {

      var hbTAnomoly = heavenlyBodies[hB].trueAnomoly;
      currentPosition = heavenlyBodies[hB].propagate(hbTAnomoly);

      var Xpos = currentPosition[0];
      var Ypos = currentPosition[1];
      var Zpos = currentPosition[2];
      // update the position of the each objects 
      
      var n = (2 * Math.PI) / (heavenlyBodies[hB].period * 365.25);
      var e = heavenlyBodies[hB].oE;
      var f = heavenlyBodies[hB].trueAnomoly
      var eA = trueToEccentricAnomaly(e, f)

      var m0 = eA - e * Math.sin(eA);
      deltaTime = simSpeed * n

      var mA = deltaTime + m0

      heavenlyBodies[hB].time = heavenlyBodies[hB].time + deltaTime
      eA = meanToEccentricAnomaly(e, mA)
      var trueAnomaly = eccentricToTrueAnomaly(e, eA)
      heavenlyBodies[hB].trueAnomoly = trueAnomaly
    }
    updateTheDate();

  };

  function updateTheDate() {
    if (simSpeed == 1) {
      epoch.setDate(epoch.getDate() + 1);
    } else { epoch.setTime(epoch.getTime() + simSpeed * 24 * 3600000); }

    //document.getElementById("modelDate").textContent = (epoch.getMonth() + 1) + "-" + epoch.getDate() + "-" + epoch.getFullYear();
    
  }

  function traceOrbits() {
    if (!sunRef.current) {
      console.error("traceOrbits called, but sunRef is not yet ready.");
      return;
    }
    for (var hB in heavenlyBodies) {
      let orbPos = [];
      let points = [];
      let j = 0;
      let i = 0.0;

      while (i <= 6.28) {  // Generate points for the orbit
        orbPos = heavenlyBodies[hB].propagate(i);
        points.push(new THREE.Vector3(orbPos[0], orbPos[1], orbPos[2]));
        i += 0.0785;
        j += 1;
      }

      const geometry = new THREE.BufferGeometry().setFromPoints(points);
      const material = new THREE.LineBasicMaterial({ color: 0xff0000 });
      const ellipse = new THREE.Line(geometry, material);



      if (sunRef.current) {
        // const geometry = new THREE.BufferGeometry().setFromPoints(points);
        // const material = new THREE.LineBasicMaterial({ color: 0xff0000 });
        // const ellipse = new THREE.Line(geometry, material);
        sunRef.current.add(ellipse);
      } else {
        console.error('sunRef is not defined yet.');
      }
    }
  }

  
  
  useEffect(() => {
    setTimeout(()=>{
      if (sunRef.current) {
        addCelestialBodies("Venus", 0.15);
        addCelestialBodies("Earth", 0.25);
        addCelestialBodies("Mars", 0.15);
        traceOrbits(); 
      }
    },5000);
  },[sunRef.current]);
  function startUpdate() {

    var AUscaler = 1;

    for (var hB in asteroidLabels) {
      heavenlyBodies[hB].smA = heavenlyBodies[hB].smA * AUscaler;
    }


    addCelestialBodies("Venus", 0.15);
    addCelestialBodies("theEarth", 0.30);
    addCelestialBodies("Mars", 0.1);
    for (var hB in heavenlyBodies) {
      var n = (2 * Math.PI) / (heavenlyBodies[hB].period * 365.25)
      heavenlyBodies[hB].time = heavenlyBodies[hB].epochMeanAnomaly / n
      var eccAnom = meanToEccentricAnomaly(heavenlyBodies[hB].oE, heavenlyBodies[hB].epochMeanAnomaly)
      var truAnom = eccentricToTrueAnomaly(heavenlyBodies[hB].oE, eccAnom)
      heavenlyBodies[hB].trueAnomoly = truAnom
    }

    traceOrbits();

    setInterval(function () { updatePosition() }, 50);

  }

  
  return (
    <div className="home-working-area">
      <Canvas>
        <PerspectiveCamera makeDefault position={[0, 0, 35]} fov={75} />
        <OrbitControls />
        <ambientLight />

        <mesh ref={sunRef}>  {/* Assign ref to sun mesh */}
          <sphereGeometry args={[0.5, 39, 39]} />
          <meshPhongMaterial
            map={sunNormal}
            shininess={100}
          />
        </mesh>

        {/* Add stars to the background */}
        <Stars radius={100} depth={50} count={5000} factor={4} fade saturation={0} />
      </Canvas>
    </div>
  );
};

export default Home;
