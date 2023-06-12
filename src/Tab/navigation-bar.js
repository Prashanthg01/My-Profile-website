import { School, Home, Info, RocketLaunch, AssignmentInd, WorkspacePremium, Work, EmojiEvents, Hive, PermMedia} from '@mui/icons-material';
import React, { useState } from 'react';
import ImgReact from './Documents/react-main.png'
import Css from './Documents/css-main.png'
import Figma from './Documents/figma.png'
import GitHub from './Documents/github.png'
import Html from './Documents/html-main.png'
import Js from './Documents/jsmain.png'
import Mysql from './Documents/mysql.png'
import Django from './Documents/django-icon-0.jpg'
import Python from './Documents/python.png'
import Linux from './Documents/Linux.png'
import Time from './live-time';


const Application = () => {
  const [activeContent, setActiveContent] = useState('home');

  const handleButtonClick = (content) => {
    setActiveContent(content);
  };
  const imgStyle = {
    width: '85px'
  }

  

  return (
    <div className='tab-nav'>
      
      {activeContent === 'home' && (
        <div id="home">
          <div>
            <Time/>
          </div>
          <svg className="header-custom">
            <symbol id="s-text">
              <text textAnchor="middle" x="50%" y="90%">PRASHANTH G</text>
            </symbol>
            <g className="g-ants">
              <use xlinkHref="#s-text" className="text-copy" />
              <use xlinkHref="#s-text" className="text-copy" />
              <use xlinkHref="#s-text" className="text-copy" />
              <use xlinkHref="#s-text" className="text-copy" />
              <use xlinkHref="#s-text" className="text-copy" />
            </g>
          </svg>
          <div className='about-me'>
            <p>Hello there! I'm Prashanth G, a passionate web developer and coding enthusiast. With expertise in React, Django, Python, JavaScript, CSS, HTML, and more, I love transforming ideas into engaging digital experiences. Join me on this exciting journey as we bring innovative web solutions to life!</p>
          </div>
        </div>
      )}

      {activeContent === 'about' && (
        <div id="about" className='blurr-effect'>
          <h1>Hello, this is about</h1>
        </div>
      )}

      {activeContent === 'education' && (
        <div id="education" className='blurr-effect'>
            <div className="title">
              <h1>
                <span style={{ color: '#ff9f43' }}>Ed</span>
                <span style={{ color: '#0abde3' }}>uc</span>
                <span style={{ color: '#ee5253' }}>at</span>
                <span style={{ color: '#00d2d3' }}>ion</span>
              </h1>
            </div>
            <div className='education-cards'>
              <div className="card1">
                <img src="http://www.pngmart.com/files/5/Pyramids-PNG-HD.png" alt="" />
                <h4>Secondary(X)</h4>
                <p><span>School: </span>Bharatha Rathna Education Trust</p>
                <p><span>Location: </span> Krishnarajapura/ Chintamani/ Chikkaballapura</p>
                <p><span>Board: </span>KSEEB</p>
                <p><span>Year of completion: </span>2017</p>
              </div>

              <div className="card2">
                <img src="https://wallazee.global.ssl.fastly.net/images/dynamic/items/383-1024.png" alt="Eiffel Tower" />
                <h3>Higher Secondary</h3>
                <p>
                  The Statue of Liberty is a colossal neoclassical sculpture on Liberty Island in New York Harbor in New York City, in the United States.
                </p>
              </div>

              <div className="card3">
                <img src="http://pluspng.com/img-png/download-taj-mahal-png-images-transparent-gallery-advertisement-1185.png" alt="" />
                <h3>Graduation</h3>
                <p>
                  The Taj Mahal is an ivory-white marble mausoleum on the south bank of the Yamuna river in the Indian city of Agra. It was commissioned in 1632 by the Mughal emperor.
                </p>
              </div>
            </div>
        </div>
      )}

      {activeContent === 'projects' && (
        <div id="projects" className='blurr-effect'>
          <h1>Hello, this is projects</h1>
        </div>
      )}

      {activeContent === 'achivements' && (
        <div id="achivements" className='blurr-effect'>
          <h1>Hello, this is achivements</h1>
        </div>
      )}

      {activeContent === 'experience' && (
        <div id="experience" className='blurr-effect'>
          <h1>Hello, this is experience</h1>
        </div>
      )}
      
      {activeContent === 'skills' && (
        <div id="skills" className='blurr-effect'>
          <div className='skills-main'>
            <div>
              <img src={ImgReact} alt='react' />
              <p>React</p>
            </div>
            <div>
              <img src={Django} alt='Django' />
              <p>Django</p>
            </div>
            <div>
              <img src={Python} alt='Python' />
              <p>Python</p>
            </div>
            <div>
              <img style={imgStyle} src={Js} alt='JavaScript' />
              <p>JavaScript</p>
            </div>
            <div>
              <img style={imgStyle} src={Html} alt='HTML' />
              <p>HTML</p>
            </div>
            <div>
              <img style={imgStyle} src={Css} alt='CSS' />
              <p>CSS</p>
            </div>
            <div>
              <img src={Mysql} alt='Mysql' />
              <p>Mysql</p>
            </div>
            <div>
              <img style={imgStyle} src={Linux} alt='Linus' />
              <p>Linux</p>
            </div>
            <div>
              <img style={imgStyle} src={Figma} alt='Figma' />
              <p>Figma</p>
            </div>
            <div>
              <img src={GitHub} alt='GitHub' />
              <p>GitHub</p>
            </div>
          </div>
        </div>
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
      </div>

    </div>
    
  );
};

export default Application;
