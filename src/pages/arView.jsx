import "../styleSheet/arView.css";
import { useEffect, useState } from "react";
import arData from "../json/arData";
import { ReactComponent as ArLogo } from "../images/icons/AR/ARLogo.svg";
import { ReactComponent as LeftArrow } from "../images/icons/AR/left arrow.svg";
import { ReactComponent as Pin } from "../images/icons/AR/pin.svg";
import { ReactComponent as Share } from "../images/icons/AR/share ar.svg";
import { ReactComponent as RightArrow } from "../images/icons/AR/right arrow.svg";
import { ReactComponent as ARLogo } from "../images/icons/Aside/AR.svg";
import { useNavigate } from "react-router-dom";


const ArView = () => {
  const [lab, setLab] = useState(false);
  const [id , setId] = useState(window.localStorage.getItem("itemId"));
  const data = arData[ id - 1];
  const navigate = useNavigate();

  const clickBoardCopy = () => {
    navigator.clipboard.writeText("https://kaviyarasu26.github.io/celestro/ar").then(() => {
      alert("link copied successfully 😊");
    }).catch((err) => {
      console.log(err);
      alert("Something went wrong 😒")

    })
  }

  const lables = () => {
    const hotspot = document.querySelectorAll(".Hotspot");
    if (lab) {
      hotspot.forEach((ele) => {
        ele.style.display = "block";
        setLab(!lab);
      })
    } else {
      hotspot.forEach((ele) => {

        ele.style.display = "none";
        setLab(!lab)
      })
    }
  }
  const navigateToArMenu = () => {
    navigate("/ar");
  }

  const handleLeft = () => {
    // Only decrement id if it's greater than 1
    if (id > 1) {
      setId((prevId) => {
        const newId = parseInt(prevId) - 1;
        window.localStorage.setItem("itemId", newId);
        return newId;
      });
    }
  };

  const handleRight = () => {
    // Only increment id if it's less than the length of arData
    if (id < arData.length) {
      setId((prevId) => {
        const newId =parseInt(prevId) + 1;
        window.localStorage.setItem("itemId", newId);
        return newId;
      });
    }
  };

  return (
    <div className="ar-view-container">
      <div className="ar-top-container">
        <div className="ar-top-container-left">
          <div className="left-0ne">
            <ArLogo onClick={navigateToArMenu} className="ar-logo" />
            <hr className="ar-hr" />
            <hr className="ar-hr-second" />
          </div>
          <div className="left-two">
            <h3 className="satellite-name">
            {"> " + (data ? data.name : "Loading...")}
            </h3>
          </div>
        </div>
        <div className="ar-top-container-right">

        </div>
      </div>
      <div className="container-ar-viewer">
        <model-viewer
          src={data.modelUrl}
          id="modelviewer"
          ar
          ar-modes="webxr scene-viewer quick-look"
          camera-controls
          tone-mapping="neutral"
          poster="poster.webp"
          shadow-intensity="1"
          
        >
          {
            data.isHotspots && (
              data.hotspots.map((ele) => {
                return (
                  <button
                    key={ele.slot}
                    className="Hotspot"
                    slot={ele.slot}
                    data-position={ele.DataPosition}
                    data-normal={ele.DataNormal}
                    data-visibility-attribute="visible"
                  >
                    <div className="HotspotAnnotation">{ele.HotspotAnnotation}</div>
                  </button>
                );
              }))
          }
          <div className="progress-bar hide" slot="progress-bar">
            <div className="update-bar"></div>
          </div>

          <center><div className="controlar-Bar">
            <div className="control-icons">
              <LeftArrow className="ar-logo" onClick={handleLeft} />
            </div>
            <div className="control-icons">
              <Pin onClick={lables} className="ar-logo"/>
            </div>
            <div className="control-icons">
              <button slot="ar-button"  id="ar-button">
                <ARLogo /> &nbsp; Ar
              </button></div>
            <div className="control-icons"  >
              <Share onClick={clickBoardCopy} className="ar-logo" />
            </div>
            <div className="control-icons">
              <RightArrow className="ar-logo" onClick={handleRight}/>
            </div>

          </div></center>
        </model-viewer>
      </div>
    </div>
  );
};

export default ArView;
