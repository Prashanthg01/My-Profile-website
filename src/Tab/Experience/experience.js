import React, { useState } from "react";
import { experienceList } from "./data";
import { ArrowLeft, ArrowRight } from "@mui/icons-material";

export default function Experience() {
  const [index, setIndex] = useState(0);
  const [showMore, setShowMore] = useState(false);
  const hasNext = index < experienceList.length - 1;

  function handleNextClick() {
    if (hasNext) {
      setIndex(index + 1);
    } else {
      setIndex(0);
    }
  }

  function handlePrevClick() { // Renamed the function to handlePrevClick
    if (index > 0) {
      setIndex(index - 1);
    } else {
      setIndex(experienceList.length - 1);
    }
  }

  function handleMoreClick() {
    setShowMore(!showMore);
  }

  // Get the project at the current index
  const experience = experienceList[index];

  return (
    <>
    <div className="skillstitle">
        <h1>
            <span style={{ color: '#ff9f43' }}>Ex</span>
            <span style={{ color: '#0abde3' }}>per</span>
            <span style={{ color: '#ee5253' }}>ie</span>
            <span style={{ color: '#00d2d3' }}>nce</span>
        </h1>
    </div>
    <div className="project-main">
       {/* Added the Prev button */}
      <div className="project-text-div">
        <h1>Role:</h1>
        <h2>{experience.role}</h2> {/* Fixed the typo 'tittle' to 'title' */}
        <h1>Duration:</h1>
        <h2>
          <span>{experience.starting_date}</span>-
          <span>{experience.ending_date}</span>
        </h2>
        <h1>Description:</h1>
        <p>{experience.description}</p>
      </div>
      <div>
        <img src={experience.image} alt={experience.alt} />
      </div>
    </div>
    <div className="arrows">
      <button onClick={handlePrevClick}><ArrowLeft/></button>
      <h4>
      ({index + 1} of {experienceList.length})
      </h4>
      <button onClick={handleNextClick}><ArrowRight/></button>
    </div>
    </>
  );
}
