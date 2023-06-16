import React from "react";
import LiveDate from './date';
import Time from './live-time';

export default function Homepage() {
    return (
        <div id="home">
          <div>
            <Time/>
            <LiveDate/>
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
    )
}