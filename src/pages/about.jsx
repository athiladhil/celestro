import { color } from "three/webgpu";
import "../styleSheet/about.css";
import { Link } from "react-router-dom";
import arpage from "../images/About/ss_arpage.png";
import satellite from "../images/About/ss_arsatellite.png";
import homepage from "../images/About/ss_homepage.png";
import earth from "../images/About/ss_infoearth.png";
import vrimg from "../images/About/vrimg.jpg";
const About = () => {

    return (
        <div className="about-working-area">

            <header className="header">
                <h1>Celestro: Orrery Web App for Near-Earth Objects</h1>
            </header>

            <div className="container">
                <Section title="High Level Summary">
                    <br />
                    <p>
                        &emsp;The "Create an Orrery Web App that Displays Near-Earth Objects" challenge involves building a web-based orrery that visualizes real-time positions of Near-Earth Objects (NEOs) using 3D models, Augmented Reality (AR), and Virtual Reality (VR) for interactive experiences. Users can explore the solar system, observe NEO movements, and interact with celestial bodies through AR and VR, making it an educational and immersive tool for understanding space. Additionally, the app integrates a gamified component called AstroDefend, where players can strategize planetary defense against potential asteroid threats, combining real-time data with a fun, engaging experience to raise awareness about planetary defense.
                    </p>
                </Section>

                <Section title="A Cutting-Edge Orrery Web App">
                    <br />
                    <p>
                        &emsp;Celestro is a groundbreaking web app that brings the cosmos to life by visualizing real-time positions of Near-Earth Objects (NEOs) with interactive 3D models, Augmented Reality (AR), and Virtual Reality (VR). Users can dive into the solar system, observe NEO trajectories, and explore celestial bodies in fully immersive AR and VR environments. It's both educational and entertaining, offering a fresh perspective on space exploration. Celestro also includes AstroDefend, a gamified experience where players devise strategies for planetary defense against asteroid threats, blending real-time data with an engaging interactive experience to raise awareness about space safety.
                    </p>
                </Section>
                <Section title="Introduction">
                    <br />
                    <p>
                        &emsp;An orrery is a mechanical model of the solar system that illustrates the relative positions, motions, and sometimes the sizes of the planets and moons around the Sun. It serves as a visual and interactive representation of celestial movements, allowing people to understand the orbital dynamics of planets and other objects in space. Traditionally, orreries are constructed using a series of gears, rods, and wheels that simulate the planetary orbits. These mechanical components are carefully designed to replicate the orbital periods and movements in real-time or at a sped-up rate for demonstration purposes.
                    </p>
                    <br />
                    <p>
                        &emsp;In modern times, orreries have evolved beyond physical models into computer-generated 3D models, offering even greater flexibility and precision. These digital orreries simulate the solar system using advanced software, allowing users to explore planetary positions and movements from any angle and in any time frame. By leveraging 3D graphics and real-time data, virtual orreries can depict not only planets and moons but also asteroids and other near-Earth objects, making them powerful tools for education, research, and interactive learning in both desktop and VR/AR environments.
                    </p>
                </Section>
                {/* Other sections go here */}

                <Section title="Orrery Web App Homepage Overview">
                    <br />
                    <p>&emsp;The homepage of Celestro welcomes users to a sleek space-themed interface that offers a seamless journey into the universe. Here you’ll find intuitive navigation options that guide you through the various features of the web app:</p>
                    <ul>
                        <li><strong>Home:</strong> Your starting point for all things Celestro. This section provides a brief introduction to the app along with real-time updates on Near-Earth Objects (NEOs) and an overview of the solar system.</li>
                        <li><strong>AR:</strong> Dive into the Augmented Reality experience where users can explore celestial bodies, observe NEO movements, and interact with space directly from their own environment. The AR feature allows users to bring the solar system into their world through their mobile devices.</li>
                        <li><strong>VR:</strong> Enter the Virtual Reality section, offering an immersive space exploration journey. Users can put on their VR headsets and fully engage with planetary objects and NEOs, getting a close-up view of the cosmos in a highly interactive environment.</li>
                        <li><strong>About:</strong> Learn more about Celestro, its purpose, and the technology behind it. This section provides background information on how the app was developed, its goals in planetary defense awareness, and the gamified AstroDefend feature.</li>
                        <li><strong>Share:</strong> Users can easily share their space adventures and discoveries across social media platforms. This option allows you to spread awareness about Celestro and invite others to explore the stars with you.</li>
                        <li><strong>Your World:</strong> Personalize your space exploration experience. This feature lets users track specific Near-Earth Objects (NEOs), customize their interface, and receive notifications for any significant NEO activity related to their location.</li>
                    </ul>
                    <img src={homepage} alt="homePage" />
                    <p className="image-topic"><strong>UI design for the homepage</strong></p>
                </Section>

                <Section title="Object Information Page">
                    <br />
                    <p>&emsp;When users interact with celestial bodies or Near-Earth Objects (NEOs) in Celestro, they can click on any object to access a detailed Object Information Page. This page is designed to provide a deeper understanding of the selected object and includes the following features:</p>
                    <ul>
                        <li><strong>Object Overview:</strong> A brief summary of the object including its name, classification (asteroid, planet, comet, etc.), and its current position in the solar system relative to Earth. A dynamic 3D model of the object spins in real-time, allowing users to zoom in and explore it from different angles.</li>
                        <li><strong>Orbital Information:</strong> In-depth details about the object's orbit such as its perihelion (closest point to the Sun), aphelion (farthest point), orbital period, and eccentricity.</li>
                        <li><strong>Physical Characteristics:</strong> Information about the object's physical properties including its size, shape, composition, surface features, mass, density, and temperature.</li>
                        <li><strong>Historical and Scientific Significance: </strong> For objects of special interest such as famous asteroids or comets, the page includes important historical events or missions related to the object.</li>
                        <li><strong>Real-Time Data:</strong> The page dynamically updates with real-time information, showing the object's current distance from Earth, velocity, and recent changes in its trajectory.</li>
                        <li><strong>Interactive AR/VR Exploration:</strong> Users can switch to AR or VR modes to interact with the object more closely.</li>
                        <li><strong>Gamified Challenge (AstroDefend):</strong> Users can activate AstroDefend mode for potential threats, simulating planetary defense strategies.</li>
                    </ul>
                    <img src={earth} alt="homePage" />
                    <p className="image-topic"><strong>UI design for the homepage</strong></p>
                </Section>
                <Section title="AR Satellite Exploration Page">
                    <br />
                    <p>
                        &emsp;The AR Satellite Exploration Page in Celestro allows users to dive into an immersive augmented reality experience showcasing a vast array of satellites orbiting the Earth. As users scan their surroundings, they can project 3D models of various satellites into their environment, giving them a close-up view of these marvels of technology. Each satellite hovers realistically, and when clicked, detailed information about the satellite appears, including its mission purpose (e.g. communication, weather monitoring, Earth observation), launch date, current status, and the agency responsible for its operation.
                    </p>
                    <img src={arpage} alt="ARPage" />
                    <p className="image-topic"><strong>UI design for AR</strong></p>
                </Section>
                <Section title="Virtual Experience">
                    <br />
                    <p>
                        &emsp;The **Virtual Reality (VR)** component of Celestro offers users an immersive experience that allows them to explore the cosmos in real-time. Through interactive 3D models, users can navigate the solar system, observing the trajectories of Near-Earth Objects (NEOs) and engaging with celestial bodies from various perspectives. This fully immersive environment enhances educational value by transforming complex astronomical data into accessible visualizations, making learning both entertaining and informative. Users can manipulate their viewpoint with VR controllers, zoom in on celestial objects, and gain insights into their features and movements. Additionally, Celestro integrates VR with its gamified feature, AstroDefend, where players strategize to protect Earth from potential asteroid threats, further blending education with interactive gameplay and fostering a greater awareness of planetary safety.
                    </p>
                </Section>
                <Section title="Data & Resources">
                    <br />
                    <p>
                        &emsp;The Celestro web app is built on a rich foundation of resources and data provided by NASA and other space agencies, ensuring accuracy and depth in its visualizations and information. A variety of NASA databases and tools were utilized to create an interactive and educational platform for exploring the cosmos.
                    </p>
                    <br />
                    <p>&emsp;Key resources include:</p>
                    <br />
                    <p>Approximate Positions of the Planets: A resource from NASA’s website for calculating orbital positions using Keplerian parameters.</p>
                    <p>NASA Small-Body Database Query for retrieving data on Near-Earth Objects (NEOs), including Potentially Hazardous Asteroids (PHAs).</p>
                    <p>NASA GitHub repository for mission-viz software used in orrery and 3D visualization tools.</p>
                    <p>European Space Agency’s Near Earth Objects Centre (NEOCC) data on asteroid and comet orbits.</p>
                    <p>Canada’s NEOSSat mission data through the Canadian Astronomy Data Center (CADC).</p>
                </Section>
                <Section title="References">
                    <br />
                    <ul>
                        <li><a href="https://ssd.jpl.nasa.gov/planets/approx_pos.html"> NASA Approximate Positions of the Planets</a></li>
                        <li><a href="https://ssd.jpl.nasa.gov/tools/sbdb_query.html" target="_blank">NASA Small-Body Database Query</a></li>
                        <li><a href="https://eyes.nasa.gov/apps/asteroids/#/home" target="_blank">NASA Eyes on Asteroids</a></li>
                        <li><a href="https://nasa.github.io/mission-viz/RMarkdown/Elliptical_Orbit_Design.html" target="_blank">Elliptical Orbit Simulator</a></li>
                        <li><a href="https://neo.ssa.esa.int/" target="_blank">Near Earth Objects Centre (NEOCC)</a></li>
                    </ul>
                </Section>
                
                {/* Other sections and components can follow the same structure */}
            </div>
        </div>
    );
};
function Section({ title, children }) {
    return (
        <section className="section">
            <h2>{title}</h2>
            {children}
        </section>
    );
}

export default About;
