import "./styleSheet/app.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MainLayout from "./layouts/mainLayout";
import Home from "./pages/home";
import Ar from "./pages/ar";
import About from "./pages/about";
import ArView from "./pages/arView";
import { gsap } from "gsap";
import { useEffect } from "react";
import Game from "./pages/game";
import { useState } from "react";

const App = () => {
  const [isAside ,setIsAside]  = useState(true);

  const aside =()=>{
    const width = window.innerWidth;
    const sliderAnimation = gsap.timeline({
      duration: 1,
      yoyo: true,
    });
    if (width < 950) {
      setIsAside(false);
      sliderAnimation
        .to(".aside", {
          position:"absolute",
          left:-170,
          duration: 1,
        })
        .to(".working-area", {
          width: "100%",
          duration: 1,
        });
    } else if (width > 950) {
      setIsAside(true);
      sliderAnimation
        .to(".aside", {
          position:"static",
          left:0,
          duration: 1,
        })
        .to(".working-area", {
          width: "90%",
          duration: 1,
        });
    }
  }
  useEffect(() => {
    window.addEventListener("resize", aside);
    aside();
  }, []);

  return (
    <Router basename='/celestro'>
      <Routes>
        <Route path='/' element={<MainLayout isAside={isAside} setIsAside={setIsAside}  />}>
          <Route index path='/' element={<Home />} />
          <Route  path='/game' element={<Game />} />
          <Route path='/ar' element={<Ar />} />
          <Route path='/ar/view' element={<ArView />} />
          <Route path='/about' element={<About />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;