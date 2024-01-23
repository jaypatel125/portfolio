// Home.js
import React, { useState, useEffect } from 'react';

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
      <div className='intro'>
        <h2>H{currentText}</h2>
        <p>
          I'm Jay Patel<br/> A passionate software developer.
        </p>
      </div>
      <div className='intro'>
        <p>Hello</p>
      </div>
    </div>
  );
};

export default Home;
