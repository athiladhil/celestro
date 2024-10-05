import "../styleSheet/container.css";
import { useNavigate } from "react-router-dom";

const Container = (props) => {
  const Navigate = useNavigate();
  const backgroundImage = {
    backgroundImage: `url(${props.image})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  return (
    <div
      className="container-template"
      onClick={(e) => {
        console.log(props._id);
        Navigate("/ar/view");
        window.localStorage.setItem("itemId", props._id);
      }}
    >
      <div style={backgroundImage} className="background-image"></div>
      <h5 className="name-container">{props.name}</h5>
    </div>
  );
};

export default Container;
