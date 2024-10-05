import "../styleSheet/aside.css";
import { ReactComponent as HomeLogo } from "../images/icons/Aside/Home.svg";
import { ReactComponent as ARLogo } from "../images/icons/Aside/AR.svg";
import { ReactComponent as AboutLogo } from "../images/icons/Aside/About.svg";
import { ReactComponent as ShareLogo } from "../images/icons/Aside/Share.svg";
import { Link } from "react-router-dom"; // Import Link

const Aside = () => {
  const clickBoardCopy =()=>{
    navigator.clipboard.writeText("https://kaviyarasu26.github.io/celestro").then(()=>{
      alert("link copied successfully 😊");
    }).catch((err)=>{
        console.log(err);
        alert("Something went wrong 😒")
        
    })
  }
  return (
    <div className="aside">
      <ul className="nav-list-top" typeof="none">
        <Link to="/">  {/* Replace href with Link's to */}
          <li className="nav-list-item">
            <div className="sub-container">
              <div className="nav-logo">
                <HomeLogo />
              </div>
              <div className="nav-name">Home</div>
            </div>
          </li>
        </Link>
        <Link to="/ar"> {/* Replace href with Link's to */}
          <li className="nav-list-item">
            <div className="sub-container">
              <div className="nav-logo">
                <ARLogo />
              </div>
              <div className="nav-name">AR</div>
            </div>
          </li>
        </Link>
        <Link to="/game">  {/* Replace href with Link's to */}
          <li className="nav-list-item">
            <div className="sub-container">
              <div className="nav-logo">
                🎮
              </div>
              <div className="nav-name">Game</div>
            </div>
          </li>
        </Link>
        <Link to="/about"> {/* Replace href with Link's to */}
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
