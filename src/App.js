import "./styleSheet/app.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MainLayout from "./layouts/mainLayout";
import Home from "./pages/home";
import Ar from "./pages/ar";
import About from "./pages/about";
import ArView from "./pages/arView";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { useEffect } from "react";
import Game from "./pages/game";

const App = () => {
  // useEffect(() => {
  //   window.addEventListener("resize", (e) => {
  //     const width = window.innerWidth;
  //     // console.log(width);
  //     const sliderAnimation = gsap.timeline({
  //       duration: 2,
  //       yoyo: true,
  //     });
  //     if (width < 950) {
  //       sliderAnimation
  //         .to(".aside", {
  //           x: -250,
  //           display: "none",
  //         })
  //         .to(".working-area", {
  //           width: "100%",
  //           duration: 2,
  //         });
  //     } else if (width > 950) {
  //       sliderAnimation
  //         .to(".aside", {
  //           x: 0,
  //           display: "block",
  //         })
  //         .to(".working-area", {
  //           width: "90%",
  //         });
  //     }
  //   });
  // }, []);

  return (
    <Router basename='/celestro'>
      <Routes>
        <Route path='/' element={<MainLayout />}>
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
