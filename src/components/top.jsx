import "../styleSheet/top.css";
import whiteLogo from "../images/celestroLogo/Celestro Logo_final.png";

const Top = () => {
  return (
    <div className="navbar">
      <div className="right-top">
        <img src={whiteLogo} alt="Celestro-logo" className="logo" />
        <h3 className="website-name">Celestro</h3>
      </div>
      <div className="left-top">
        <div className="yourWorld">
          Your world &nbsp;
          <span className="btn-logo"></span>
        </div>
      </div>
    </div>
  );
};

export default Top;
