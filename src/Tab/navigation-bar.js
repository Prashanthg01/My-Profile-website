import { School, Home, Info, RocketLaunch, AssignmentInd, WorkspacePremium, Work, EmojiEvents, Hive, PermMedia, Call} from '@mui/icons-material';
import React, { useState } from 'react';
import Homepage from './Home/home';
import Educationpage from './Education/education';
import Skillspage from './skillspage';
import Projects from './Projects/projects';
import Contact from './contact';

const Application = () => {
  const [activeContent, setActiveContent] = useState('home');

  const handleButtonClick = (content) => {
    setActiveContent(content);
  };

  return (
    <div className='tab-nav'>
      
      {activeContent === 'home' && (
        <Homepage/>
      )}

      {activeContent === 'education' && (
        <Educationpage/>
      )}

      {activeContent === 'projects' && (
        <div id="projects" className='blurr-effect'>
          <Projects/>
        </div>
      )}

      {activeContent === 'experience' && (
        <div id="experience" className='blurr-effect'>
          <h1>Hello, this is experience</h1>
        </div>
      )}
      
      {activeContent === 'skills' && (
        <Skillspage/>
      )}

      {activeContent === 'contact' && (
        <div id="contact" className='blurr-effect'>
          <Contact/>
        </div>
      )}

      <div className='nav-main'>
        <button
          onClick={() => handleButtonClick('home')}
          className={activeContent === 'home' ? 'active' : ''}
        >
          <Home/>
        </button>
        <button
          onClick={() => handleButtonClick('education')}
          className={activeContent === 'education' ? 'active' : ''}
        >
          <School/>
        </button>
        <button
          onClick={() => handleButtonClick('skills')}
          className={activeContent === 'skills' ? 'active' : ''}
        >
          <Hive/>
        </button>
        <button
          onClick={() => handleButtonClick('projects')}
          className={activeContent === 'projects' ? 'active' : ''}
        >
          <RocketLaunch/>
        </button>
        <button
          onClick={() => handleButtonClick('experience')}
          className={activeContent === 'experience' ? 'active' : ''}
        >
          <Work/>
        </button>
        <button
          onClick={() => handleButtonClick('contact')}
          className={activeContent === 'contact' ? 'active' : ''}
        >
          <Call/>
        </button>
      </div>

    </div>
    
  );
};

export default Application;
