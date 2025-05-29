import React from 'react';
import '../styles/global.css'; 
import '../styles/about.css';

const About: React.FC = () => {
  return (
    <>
    
    <img className="lineart-img" src="src/assets/lineart1.png" />

    <section className='about-section section-lightblue'>

      <div className='top-div'>
        <img className="about-img" src="src/assets/kateGif.gif" />
        <div className='about-me-div section-darkblue'>
          <h1 className = 'page-h1 color-white'> About Me </h1>
          <hr/> <br/>
          <p className='page-p color-lightblue'> Some of my biggest passions and gateways into computer science is game and website development. As a Computer Information Systems graduate, I’ve also developed a strong appreciation for the intersection of business and technology. </p>
          <br/>
          <p className='page-p color-lightblue'> Outside of computer science, I love dancing, video games, graphic design, and digital media creation. I also have an interest in fashion and love exploring new cuisines and food experiences. </p>
        </div>
      </div>

      <div className='bottom-div'>
        <div className='mission-div section-darkblue'>
          <h1 className = 'page-h1 color-white'> Social Mission </h1>
          <hr/> <br/>
          <p className='page-p color-lightblue'> Back in 2019, I joined a CSUSM-organized program called Code Queens, which first introduced me to the world of programming and app development. When COVID hit, that experience moved online and evolved into what became the CSUSM Women's Virtual Hackathons. After graduating high school, I returned to CSUSM as a student and as a mentor for the Virtual Hackathons with the goal of inpsiring more women to pursue tech. </p>
          <br/>
          <p className='page-p color-lightblue'> That journey shaped my mission: to empower more women to explore computer science and to help create a safe, supportive space where they feel confident creating with code. In 2024, I co-founded <a href = "https://www.csusm.edu/harmonyhacks/index.html" target="_blank"><span className = "bold-recolor">Harmony Hacks</span></a>, a CSUSM organization focused on doing just that. As part of the founding media and outreach team, I designed the club’s original logo and branding, launched our social media presence, and developed our <a href = "https://harmonyhackscsusm.github.io/website/" target="_blank"><span className = "bold-recolor">official website.</span></a> </p>
        </div>
        <div className='img-div'>
          <img className="about-img" src="src/assets/codequeens.jpg" />
          <img className="about-img" src="src/assets/hhHackathon.jpg" />
        </div>
      </div>
      
    </section>
    </>
  );
};

export default About;