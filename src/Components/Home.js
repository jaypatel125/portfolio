// Home.js
import React, { useState, useEffect } from 'react';
import profilephoto from '../images/IMG_7423.JPG'

const Home = () => {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const text = 'ello, world!'; 
    const delay = 200; 

    const timeout = setTimeout(() => {
      if (currentIndex < text.length) {
        setCurrentText((prevText) => prevText + text[currentIndex]);
        setCurrentIndex((prevIndex) => prevIndex + 1);
      } else {
        // Reset when the typing is completed
        setCurrentText('');
        setCurrentIndex(0);
      }
    }, delay);

    return () => clearTimeout(timeout);
  }, [currentIndex]);

  return (
    <div className='intro-container'>
      <div className='page1'>
        <h2>H{currentText}</h2>
        <p>
          I'm Jay Patel<br/> A passionate software development student.
        </p>
      </div>
      <div className='page2'>
        <img className='profileimg' src ={profilephoto} alt='profile'/>
        <p className='paragraph'>A software developer passionate about transforming ideas into impactful digital solutions. Currently immersed in the dynamic field of software development, I thrive on the challenges of crafting elegant code and creating user-friendly applications. My journey is driven by a curiosity for emerging technologies and a commitment to building meaningful software.</p>
        <br/>
        <p className='paragraph'>Welcome to my digital space, where I share insights, projects, and experiences from my software development endeavors. Join me on this exciting exploration of technology, creativity, and the endless possibilities that coding offers. Let's embark on a journey of innovation and collaboration in the ever-evolving world of software development.</p>
        <br/>
        <p className='paragraph'>amazing!</p>
      </div>
    </div>
  );
};

export default Home;
