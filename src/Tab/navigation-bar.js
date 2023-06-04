import { School, Home, Info, RocketLaunch, AssignmentInd, WorkspacePremium, Work, EmojiEvents, Hive, PermMedia} from '@mui/icons-material';
import React, { useState } from 'react';

const Application = () => {
  const [activeContent, setActiveContent] = useState('home');

  const handleButtonClick = (content) => {
    setActiveContent(content);
  };

  return (
    <div>
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
      <button
        onClick={() => handleButtonClick('achivements')}
        className={activeContent === 'achivements' ? 'active' : ''}
      >
        <EmojiEvents/>
      </button>
      <button
        onClick={() => handleButtonClick('about')}
        className={activeContent === 'about' ? 'active' : ''}
      >
        <AssignmentInd/>
      </button>
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

      {activeContent === 'home' && (
        <div id="home">
          <h1>Hello, this is home</h1>
        </div>
      )}

      {activeContent === 'about' && (
        <div id="about">
          <h1>Hello, this is about</h1>
        </div>
      )}

      {activeContent === 'education' && (
        <div id="education">
          <h1>Hello, this is education</h1>
        </div>
      )}

      {activeContent === 'projects' && (
        <div id="projects">
          <h1>Hello, this is projects</h1>
        </div>
      )}

      {activeContent === 'achivements' && (
        <div id="achivements">
          <h1>Hello, this is achivements</h1>
        </div>
      )}

      {activeContent === 'experience' && (
        <div id="experience">
          <h1>Hello, this is experience</h1>
        </div>
      )}
      
      {activeContent === 'skills' && (
        <div id="skills">
          <h1>Hello, this is skills</h1>
        </div>
      )}

      {activeContent === 'gallery' && (
        <div id="gallery">
          <h1>Hello, this is gallery</h1>
        </div>
      )}
    </div>
  );
};

export default Application;
