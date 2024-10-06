import "../styleSheet/game.css";
import { useEffect } from "react";

const Game = () => {
    // const {isAside,setIsAside} =props;

  const requestFullScreen = () => {
    const element = document.documentElement; // Fullscreen for the whole page
    
    if (element.requestFullscreen) {
      element.requestFullscreen().catch(err => {
        console.error("Fullscreen request failed", err);
      });
    } else if (element.mozRequestFullScreen) { // Firefox
      element.mozRequestFullScreen().catch(err => {
        console.error("Fullscreen request failed", err);
      });
    } else if (element.webkitRequestFullscreen) { // Chrome, Safari, and Opera
      element.webkitRequestFullscreen().catch(err => {
        console.error("Fullscreen request failed", err);
      });
    } else if (element.msRequestFullscreen) { // IE/Edge
      element.msRequestFullscreen().catch(err => {
        console.error("Fullscreen request failed", err);
      });
    }
  };

  useEffect(() => {
    // setIsAside(true);
    requestFullScreen(); // Attempt to trigger fullscreen automatically when the component mounts
  }, []);

  return (
    <div className="game-working-area">
      {/* Your game content goes here */}
    </div>
  );
};

export default Game;
