import { School, Home, Info, RocketLaunch, AssignmentInd, WorkspacePremium, Work, EmojiEvents, Hive, PermMedia} from '@mui/icons-material';
import React, { useState } from 'react';
import Homepage from './home';
import Educationpage from './education';
import Skillspage from './skillspage';

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

      {/* {activeContent === 'about' && (
        <div id="about" className='blurr-effect'>
          <h1>Hello, this is about</h1>
        </div>
      )} */}

      {activeContent === 'education' && (
        <Educationpage/>
      )}

      {activeContent === 'projects' && (
        <div id="projects" className='blurr-effect'>
          <h1>Hello, this is projects</h1>
        </div>
      )}

      {/* {activeContent === 'achivements' && (
        <div id="achivements" className='blurr-effect'>
          <h1>Hello, this is achivements</h1>
        </div>
      )} */}

      {activeContent === 'experience' && (
        <div id="experience" className='blurr-effect'>
          <h1>Hello, this is experience</h1>
        </div>
      )}
      
      {activeContent === 'skills' && (
        <Skillspage/>
      )}

      {activeContent === 'gallery' && (
        <div id="gallery" className='blurr-effect'>
          <h1>Hello, this is gallery</h1>
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
          onClick={() => handleButtonClick('projects')}
          className={activeContent === 'projects' ? 'active' : ''}
        >
          <RocketLaunch/>
        </button>
        {/* <button
          onClick={() => handleButtonClick('achivements')}
          className={activeContent === 'achivements' ? 'active' : ''}
        >
          <EmojiEvents/>
        </button> */}
        {/* <button
          onClick={() => handleButtonClick('about')}
          className={activeContent === 'about' ? 'active' : ''}
        >
          <AssignmentInd/>
        </button> */}
        <button
          onClick={() => handleButtonClick('experience')}
          className={activeContent === 'experience' ? 'active' : ''}
        >
          <Work/>
        </button>
        <button
          onClick={() => handleButtonClick('skills')}
          className={activeContent === 'skills' ? 'active' : ''}
        >
          <Hive/>
        </button>
        <button
          onClick={() => handleButtonClick('gallery')}
          className={activeContent === 'gallery' ? 'active' : ''}
        >
          <PermMedia/>
        </button>
      </div>

    </div>
    
  );
};

export default Application;
