import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Contact = () => {
    return (
      <div className='page1'>
        <h3>Get in touch </h3>
        <p>
          <FontAwesomeIcon icon={faEnvelope} style={{ marginRight: '10px' }} />
          <a href="mailto:jaykoladia@gmail.com">
            jaykoladia@gmail.com
          </a>
        </p>
  
        <p>
          <FontAwesomeIcon icon={faGithub} style={{ marginRight: '10px' }} />
          <a href="https://github.com/jaypatel125">
            GitHub
          </a>
        </p>
  
        <p>
          <FontAwesomeIcon icon={faInstagram} style={{ marginRight: '10px' }} />
          <a
            href="https://www.instagram.com/jayypatel._?igsh=MXRzd3lyMGkxM3dlbA%3D%3D&utm_source=qr"
          >
            Instagram
          </a>
        </p>
  
        <p>
          <FontAwesomeIcon icon={faMapMarkerAlt} style={{ marginRight: '10px' }} />
          <a
            href="https://maps.app.goo.gl/GDLgZeDYmnD75BZ97"
          >
            Hamilton, Ontario, Canada
          </a>
        </p>
      </div>
    );
  };
  
  export default Contact;
