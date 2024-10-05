import "../styleSheet/aside.css";
import { ReactComponent as HomeLogo } from "../images/icons/Aside/Home.svg";
import { ReactComponent as ARLogo } from "../images/icons/Aside/AR.svg";
import { ReactComponent as AboutLogo } from "../images/icons/Aside/About.svg";
import { ReactComponent as ShareLogo } from "../images/icons/Aside/Share.svg";
import { ReactComponent as Slider } from "../images/icons/Aside/Slider.svg";
import { Link } from "react-router-dom";
import { gsap } from "gsap";

const Aside = (props) => {
  const {isAside,setIsAside} =props;
  const handleOnClick=()=>{
    const width = window.innerWidth;
    const sliderAnimation = gsap.timeline({
      duration: 1,
      yoyo: true,
    });
    if(isAside){
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
    }else{
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
  const clickBoardCopy = () => {
    navigator.clipboard.writeText("https://kaviyarasu26.github.io/celestro").then(() => {
      alert("link copied successfully 😊");
    }).catch((err) => {
      console.log(err);
      alert("Something went wrong 😒")

    })
  }
  return (
    <div className="aside">
      <ul className="nav-list-top" typeof="none">
       
          <div className="slider" >
              <Slider onClick={handleOnClick}/>
          </div>
    
        <Link to="/">
          <li className="nav-list-item">
            <div className="sub-container">
              <div className="nav-logo">
                <HomeLogo />
              </div>
              <div className="nav-name">Home</div>
            </div>
          </li>
        </Link>
        <Link to="/ar">
          <li className="nav-list-item">
            <div className="sub-container">
              <div className="nav-logo">
                <ARLogo />
              </div>
              <div className="nav-name">AR</div>
            </div>
          </li>
        </Link>
        <Link to="/game">
          <li className="nav-list-item">
            <div className="sub-container">
              <div className="nav-logo">
                🎮
              </div>
              <div className="nav-name">Game</div>
            </div>
          </li>
        </Link>
        <Link to="/about">
          <li className="nav-list-item">
            <div className="sub-container">
              <div className="nav-logo">
                <AboutLogo />
              </div>
              <div className="nav-name">About</div>
            </div>
          </li>
        </Link>
      </ul>
      <ul className="nav-list-bottom">
        <li className="nav-list-item-bottom">
          <div className="sub-container-hr">
            <hr className="hr" />
          </div>
        </li>
        <li className="nav-list-item-bottom" onClick={clickBoardCopy}>
          <div className="sub-container">
            <div className="nav-logo">
              <ShareLogo />
            </div>
            <div className="nav-name">Share</div>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Aside;