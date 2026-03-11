import React from 'react';
import '../styles/global.css'; 
import '../styles/home.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import SpotlightCard from './SpotlightCard';

const Home: React.FC = () => {
  return (
    <>
    <section className="home-section">

      <div className="img-div">
        <img className="home-img" src="src/assets/pfp.png" />
      </div>

      <SpotlightCard className="custom-spotlight-card intro-div" spotlightColor="#ffeded80">

        <h1> I AM <span className="recolor"> KATE PADUGANAO</span>,</h1>
        <h2> A Front-End Software Engineer with a Bachelor of Science in Computer Information Systems. </h2>
        <p> I am passionate about creating intuitive, visually engaging web, multimedia, and data visualization experiences. Skilled in translating ideas into cohesive digital branding and user‑focused design. </p>
        <div className="links-div">
          <a href="https://github.com/katepad" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faGithub} size="3x" />
          </a>
          <a href="https://www.linkedin.com/in/kate-paduganao/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLinkedin} size="3x" />
          </a>
        </div>
      </SpotlightCard>

      {/* flowers */}
      <div className="lily-img-1 tilt-1">
        <img src="src/assets/lily1.png" alt="Lily" />
      </div>

    </section>
    </>
  );
};

export default Home;