import React from 'react';
import '../styles/global.css'; 
import '../styles/home.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Home: React.FC = () => {
  return (
    <>
    <section className="home-section">
      <div className="intro-div">
        <h1 className='page-h1 color-white'> I AM <span className="color-lightblue"> KATE PADUGANAO</span>,</h1>
        <h2 className='page-h2 color-pink'> A Computer Information Systems graduate from California State University San Marcos. </h2>
        <p className='page-p color-lightblue'> As a dedicated and agile learner, I am passionate about programming, media, data analysis, and project management. Eager to expand my expertise in technology and information, I am open to embracing new challenges and opportunities. </p>
        <div className='home-button-div'><button className='home-button'> Follow Me </button></div>
      </div>
      <div className="img-div">
        <img className="home-img" src="src/assets/pfp.PNG" />
      </div>
      <div className="links-div">
        <a href="https://github.com/katepad" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faGithub} size="3x" />
        </a>
        <a href="https://www.linkedin.com/in/kate-paduganao/" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faLinkedin} size="3x" />
        </a>
      </div>
    </section>
    </>
  );
};

export default Home;