// Home.js
import profilephoto from '../images/Profile.JPEG';
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
        <div className='page2home'>
          <img className='profileimg' src = {profilephoto} alt='profile'/>
          <p className='paragraph'>A software developer passionate about transforming ideas into impactful digital solutions. Currently immersed in the dynamic field of software development, I thrive on the challenges of crafting elegant code and creating user-friendly applications.</p>
          <br/>
          <p className='paragraph'>Let's build something amazing!</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
