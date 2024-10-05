import Aside from "../components/aside";
import Top from "../components/top";
import "../styleSheet/mainLayout.css";
import { Outlet } from "react-router-dom";

const MainLayout = (props) => {
  // console.log(props);
  
  return (
    <>
      <Top />
      <div className="layout">
        <Aside {...props} />
        <div className="working-area">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default MainLayout;
