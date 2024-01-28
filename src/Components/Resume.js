
import React from 'react';
import resume from '../resume/Resume.pdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';

const Resume = () => {
  return (
    <div className='page1'>
      <h3>Resume</h3>
      
      <a href={resume} target='_blank' rel='noopener noreferrer' download='Resume.pdf'>
        <p className='downloadCV'>
        <FontAwesomeIcon icon={faDownload}  style={{ marginRight: '10px' }}/>
            Download
        </p>
      </a>
    </div>
  );
};

export default Resume