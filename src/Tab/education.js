import React from "react";
import Schools from './Documents/school.png'
import College from './Documents/primary.png'
import University from './Documents/mortarboard.png'

export default function Educationpage() {
    return (
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
                <img src={Schools} alt="" />
                <h4>Secondary(X)</h4>
                <p><span>School: </span>Bharatha Rathna Education Trust</p>
                <p><span>Location: </span> Krishnarajapura/ Chintamani/ Chikkaballapura</p>
                <p><span>Board: </span>KSEEB</p>
                <p><span>Year of completion: </span>2017</p>
              </div>

              <div className="card2">
                <img src={College} alt="Eiffel Tower" />
                <h4>Higher Secondary(XII), PCMB</h4>
                <p><span>College: </span>Vivekananda PU College</p>
                <p><span>Location: </span>Chintamani/ Chikkaballapura/ Karnataka</p>
                <p><span>Board: </span>KSEEB</p>
                <p><span>Year of completion: </span>2019</p>
              </div>

              <div className="card3">
                <img src={University} alt="" />
                <h4>Bachelor of Engineering (B.E), ECE</h4>
                <p><span>University: </span>Sri Venkateshwara College Of Engineering</p>
                <p><span>Location: </span>Chikkajala/ Bengaluru/ Karnataka</p>
                <p><span>Board: </span>VTU</p>
                <p><span>Year of completion: </span>2023</p>
              </div>
            </div>
        </div>
    )
}