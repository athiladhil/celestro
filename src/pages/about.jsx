import { color } from "three/webgpu";
import "../styleSheet/about.css";
import { Link } from "react-router-dom";

const About = () => {
  const styles = {
    header: {
        backgroundColor: '#8f9d4e',
        color: 'rgb(63, 127, 99) !important',
        padding: '10px 0',
        textAlign: 'center'
    },
    container: {
        width: '90%',
        margin: 'auto',
        overflow: 'hidden',
        color:'#d3d3d3 !important',
    },
    section: {
        background: 'white',
        margin: '20px 0',
        padding: '20px',
        borderRadius: '8px',
        boxShadow:' rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px',
        color:'#d3d3d3 !important',
    },
    image: {
        maxWidth: '100%',
        height: 'auto',
        display: 'block',
        margin: '0 auto',
        color:'#d3d3d3 !important',
    },
    imageTopic: {
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: '10px',
        color:'#d3d3d3 !important',
    },
};
  return (
  <div className="about-working-area">
    <div className="sample">
            <header style={styles.header}>
                <h1>Celestro: Orrery Web App for Near-Earth Objects</h1>
            </header>

            <div style={styles.container}>
                {/* High Level Summary */}
                <section style={styles.section}>
                    <h2>High Level Summary</h2>
                    <p>&emsp;The "Create an Orrery Web App that Displays Near-Earth Objects" challenge involves building a web-based orrery...</p>
                </section>

                {/* A Cutting-Edge Orrery Web App */}
                <section style={styles.section}>
                    <h2>A Cutting-Edge Orrery Web App</h2>
                    <p>&emsp;Celestro is a groundbreaking web app that brings the cosmos to life by visualizing real-time positions of Near-Earth Objects...</p>
                </section>

                {/* Introduction */}
                <section style={styles.section}>
                    <h2>Introduction</h2>
                    <p>&emsp;An orrery is a mechanical model of the solar system that illustrates the relative positions...</p>
                </section>

                {/* Orrery Web App Homepage Overview */}
                <section style={styles.section}>
                    <h2>Orrery Web App Homepage Overview</h2>
                    <p>&emsp;The homepage of Celestro welcomes users to a sleek space-themed interface that offers a seamless journey...</p>
                    <ul>
                        <li><strong>Home:</strong> Your starting point for all things Celestro...</li>
                        <li><strong>AR:</strong> Dive into the Augmented Reality experience...</li>
                        <li><strong>VR:</strong> Enter the Virtual Reality section...</li>
                        <li><strong>About:</strong> Learn more about Celestro, its purpose, and the technology behind it...</li>
                        <li><strong>Share:</strong> Users can easily share their space adventures...</li>
                        <li><strong>Your World:</strong> Personalize your space exploration experience...</li>
                    </ul>
                    <img src="../Images/ss_homepage.png" alt="Celestro Homepage" style={styles.image} />
                    <p style={styles.imageTopic}><strong>UI design for the homepage</strong></p>
                </section>

                {/* Object Information Page */}
                <section style={styles.section}>
                    <h2>Object Information Page</h2>
                    <p>&emsp;When users interact with celestial bodies or Near-Earth Objects (NEOs)...</p>
                    <ul>
                        <li><strong>Object Overview:</strong> A brief summary of the object including its name...</li>
                        <li><strong>Orbital Information:</strong> In-depth details about the object's orbit...</li>
                        <li><strong>Physical Characteristics:</strong> Information about the object's physical properties...</li>
                        <li><strong>Historical and Scientific Significance:</strong> For objects of special interest...</li>
                        <li><strong>Real-Time Data:</strong> The page dynamically updates with real-time information...</li>
                        <li><strong>Interactive AR/VR Exploration:</strong> Users can switch to AR or VR modes...</li>
                        <li><strong>Gamified Challenge (AstroDefend):</strong> Users can activate AstroDefend mode...</li>
                    </ul>
                    <img src="../Images/ss_infoearth.png" alt="Object Information" style={styles.image} />
                    <p style={styles.imageTopic}><strong>UI design for displaying the information</strong></p>
                </section>

                {/* AR Satellite Exploration Page */}
                <section style={styles.section}>
                    <h2>AR Satellite Exploration Page</h2>
                    <p>&emsp;The AR Satellite Exploration Page in Celestro allows users to dive into an immersive augmented reality...</p>
                    <img src="../Images/ss_arpage.png" alt="AR Satellite Exploration" style={styles.image} />
                    <p style={styles.imageTopic}><strong>UI design for AR</strong></p>
                </section>

                {/* Virtual Experience Page */}
                <section style={styles.section}>
                    <h2>Virtual Experience</h2>
                    <p>&emsp;The Virtual Reality (VR) component of Celestro offers users an immersive experience...</p>
                    <img src="../Images/vrimg.jpg" alt="Virtual Experience page" style={styles.image} />
                </section>

                {/* Data & Resources */}
                <section style={styles.section}>
                    <h2>Data & Resources</h2>
                    <p>&emsp;The Celestro web app is built on a rich foundation of resources and data provided by NASA and other space agencies...</p>
                    <ul>
                        <li>Approximate Positions of the Planets: A resource from NASA’s website...</li>
                        <li>NASA Small-Body Database Query for retrieving data on Near-Earth Objects (NEOs)...</li>
                        <li>NASA GitHub repository for mission-viz software...</li>
                        <li>European Space Agency’s Near Earth Objects Centre (NEOCC) data on asteroid...</li>
                        <li>Canada’s NEOSSat mission data through the Canadian Astronomy Data Center...</li>
                    </ul>
                </section>

                {/* References */}
                <section style={styles.section}>
                    <h2>References</h2>
                    <ul>
                        <li><Link to="https://ssd.jpl.nasa.gov/planets/approx_pos.html" target="_blank" rel="noopener noreferrer">NASA Approximate Positions of the Planets</Link></li>
                        <li><Link to="https://ssd.jpl.nasa.gov/tools/sbdb_query.html" target="_blank" rel="noopener noreferrer">NASA Small-Body Database Query</Link></li>
                        <li><Link to="https://eyes.nasa.gov/apps/asteroids/#/home" target="_blank" rel="noopener noreferrer">NASA Eyes on Asteroids</Link></li>
                        <li><Link to="https://nasa.github.io/mission-viz/RMarkdown/Elliptical_Orbit_Design.html" target="_blank" rel="noopener noreferrer">Elliptical Orbit Simulator</Link></li>
                        <li><Link to="https://neo.ssa.esa.int/" target="_blank" rel="noopener noreferrer">Near Earth Objects Centre (NEOCC)</Link></li>
                    </ul>
                </section>
            </div>
        </div>
  </div>
  );
};

export default About;
