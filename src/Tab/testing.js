import React, { useState } from 'react';
import './App.css'; // Import the CSS file

const Appli = () => {
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
        Home
      </button>
      <button
        onClick={() => handleButtonClick('about')}
        className={activeContent === 'about' ? 'active' : ''}
      >
        About
      </button>
      <button
        onClick={() => handleButtonClick('services')}
        className={activeContent === 'services' ? 'active' : ''}
      >
        Services
      </button>
      <button
        onClick={() => handleButtonClick('contact')}
        className={activeContent === 'contact' ? 'active' : ''}
      >
        Contact
      </button>

      {/* Content Rendering */}
    </div>
  );
};

export default Appli;
