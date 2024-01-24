// Home.js
import React, { useState, useEffect } from 'react';
import profilephoto from '../images/IMG_7423.JPG';
import { TypeAnimation } from 'react-type-animation';

const Home = () => {
  
  return (
    <div className='intro-container'>
      <div className='page1'>
        <TypeAnimation
          sequence={[
            'Hello!',
            2000,
            'नमस्ते!',
            2000,
          ]}
          speed={50}
          style={{ fontSize: '2em' }}
          repeat={Infinity}
        />

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
        <p className='paragraph'>Let's build something amazing!</p>
      </div>
    </div>
  );
};

export default Home;
