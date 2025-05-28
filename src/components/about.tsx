import React from 'react';
import '../styles/global.css'; 
import '../styles/about.css';

const About: React.FC = () => {
  return (
    <>
    <section className='about-section section-lightblue'>
      <div className='about-me-div section-darkblue'>
        <h1 className = 'page-h1 color-white'> About Me </h1>
        <hr/>
        <p className='page-p color-lightblue'> blah</p>
      </div>
    </section>
    </>
  );
};

export default About;