import React from "react";
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


export default function Skillspage() {
    return (
        <div id="skills" className='blurr-effect'>
          <div className="skillstitle">
              <h1>
                <span style={{ color: '#ff9f43' }}>S</span>
                <span style={{ color: '#0abde3' }}>k</span>
                <span style={{ color: '#ee5253' }}>il</span>
                <span style={{ color: '#00d2d3' }}>ls</span>
              </h1>
            </div>
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
              <img className="resize-img" src={Js} alt='JavaScript' />
              <p>JavaScript</p>
            </div>
            <div>
              <img className="resize-img" src={Html} alt='HTML' />
              <p>HTML</p>
            </div>
            <div>
              <img className="resize-img" src={Css} alt='CSS' />
              <p>CSS</p>
            </div>
            <div>
              <img src={Mysql} alt='Mysql' />
              <p>Mysql</p>
            </div>
            <div>
              <img className="resize-img" src={Linux} alt='Linus' />
              <p>Linux</p>
            </div>
            <div>
              <img className="resize-img" src={Figma} alt='Figma' />
              <p>Figma</p>
            </div>
            <div>
              <img src={GitHub} alt='GitHub' />
              <p>GitHub</p>
            </div>
          </div>
        </div>
    )
}