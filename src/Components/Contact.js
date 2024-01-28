import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faInstagram, faDiscord } from '@fortawesome/free-brands-svg-icons';


const Contact = () => {
    return (
      <div className='page1'>
        <h3>Get in touch </h3>
        <p>
          <a href="mailto:jaykoladia@gmail.com" target="_blank" >
          <FontAwesomeIcon icon={faEnvelope} style={{ marginRight: '10px' }} />
            jaykoladia@gmail.com
          </a>
        </p>
  
        <p>
          <a href="https://github.com/jaypatel125" target="_blank" > 
          <FontAwesomeIcon icon={faGithub} style={{ marginRight: '10px' }} />
            GitHub
          </a>
        </p>
  
        <p>
          <a
            href="https://www.instagram.com/jayypatel._?igsh=MXRzd3lyMGkxM3dlbA%3D%3D&utm_source=qr" target="_blank" 
          >
          <FontAwesomeIcon icon={faInstagram} style={{ marginRight: '10px' }} />
            Instagram
          </a>
        </p>
  
        <p>
          <a
            href="https://discord.gg/fAfBcCNz" target="_blank" 
          >
          <FontAwesomeIcon icon={faDiscord} style={{ marginRight: '10px' }} />
            Discord
          </a>
        </p>

        <p>
          <a
            href="https://maps.app.goo.gl/GDLgZeDYmnD75BZ97" target="_blank" 
          >
          <FontAwesomeIcon icon={faMapMarkerAlt} style={{ marginRight: '10px' }} />
            Hamilton, Ontario, Canada
          </a>
        </p>
      </div>
    );
  };
  
  export default Contact;
