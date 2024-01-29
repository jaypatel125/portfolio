import React from 'react';
import { FaHtml5, FaCss3, FaReact, FaJava, FaPython, FaPhp, FaBootstrap, FaJs, FaWordpress, FaGithub } from 'react-icons/fa';
import {SiUnity, SiMysql, SiCsharp} from 'react-icons/si'
const About = () => {
  return (
    <div className='intro-container'>
      <div className='page1'  style={{ height: 'unset' }}>
        <h3 className='paragraph' >Welcome to my digital space! </h3>
        <p className='paragraph' >
          I'm Jay Patel, a <a href='https://www.mohawkcollege.ca/programs/technology/computer-systems-technology-software-development-559' target="_blank" >Software Development</a> student enrolled in a three-year advanced diploma program at <a href='https://www.mohawkcollege.ca/about/campuses/fennell-campus-ff#/' target="_blank" >Mohawk College</a>. Currently in my fourth semester, I am passionately exploring the intricacies of coding and software solutions.
        </p>
        <br />
        <p className='paragraph'>
          Driven by a commitment to learning and applying my skills, I am actively seeking co-op opportunities to gain hands-on experience. Join me on this journey as we navigate the dynamic world of technology, bringing creativity and collaboration to every coding endeavor. Let's code for a better world! </p>

        
            <br />
            <h3 className='paragraph'>Skills:</h3>
            <div className="skills-container"  style={{ height: 'unset' }}>
              <div className="icon"><FaHtml5 title="HTML" /></div>
              <div className="icon"><FaCss3 title="CSS" /></div>
              <div className="icon"><FaBootstrap title="Bootstrap" /></div>
              <div className="icon"><FaJs title="JavaScript" /></div>
              <div className="icon"><FaReact title="React" /></div>
              <div className="icon"><FaWordpress title="WordPress" /></div>
              <div className="icon"><FaJava title="Java" /></div>
              <div className="icon"><SiCsharp title="C#" /></div>
              <div className="icon"><FaPython title="Python" /></div>
              <div className="icon"><FaPhp title="PHP" /></div>
              <div className="icon"><SiMysql title="MySql" /></div>
              <div className="icon"><FaGithub title="GitHub" /></div>
              <div className='icon'><SiUnity title="Unity"/></div>

            </div>
          
      </div>
    </div>
  );
}

export default About;
