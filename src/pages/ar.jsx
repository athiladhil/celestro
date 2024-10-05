import "../styleSheet/ar.css";
import { ReactComponent as ArLogo } from "../images/icons/AR/ARLogo.svg";
import Container from "../components/container";
import arData from "../json/arData";

const Ar = () => {
  console.log(arData);
  return (
    <div className="ar-working-area">
      <div className="ar-top-container">
        <div className="ar-top-container-left">
          <div className="left-0ne">
            <ArLogo className="ar-logo" />
            <hr className="ar-hr" />
            <hr className="ar-hr-second" />
          </div>
        </div>
        <div className="ar-top-container-right"></div>
      </div>
      <div className="ar-container">
        {arData.map((ele) => (
          <Container {...ele} key={ele._id} />
        ))}
      </div>
    </div>
  );
};

export default Ar;
