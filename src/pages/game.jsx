import "../styleSheet/game.css";


const Game = () => {

    return (
        <div className="game-working-area">
            <p>Press ctr + / brefore play</p>
            <div
                style={{
                    position: "relative",
                    width: "100%",
                    height: "0",
                    paddingTop: "56.25%", // 16:9 aspect ratio
                    paddingBottom: "0",
                    boxShadow: "0 2px 8px 0 rgba(63,69,81,0.16)",
                    marginTop: "1.6em",
                    marginBottom: "0.9em",
                    overflow: "hidden",
                    borderRadius: "8px",
                    willChange: "transform",
                }}
            >
                <iframe
                    loading="lazy"
                    style={{
                        position: "absolute",
                        width: "1152px", // Specify width in pixels
                        height: "648px", // Specify height in pixels
                        top: "0",
                        left: "0",
                        border: "none",
                        padding: "0",
                        margin: "0",
                    }}
                    src="https://www.canva.com/design/DAGSJO2wLkU/kzDKe7gYEXdyWJ3f5SxqVA/view?embed"
                    allowFullScreen
                    allow="fullscreen"
                    title="Canva Design"
                ></iframe>
            </div>
        </div>
    );
};

export default Game;
