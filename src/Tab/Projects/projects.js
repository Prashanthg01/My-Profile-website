import React, { useState } from "react";
import { projectList } from "./data";
import { ArrowLeft, ArrowRight } from "@mui/icons-material";

export default function Projects() {
  const [index, setIndex] = useState(0);
  const [showMore, setShowMore] = useState(false);
  const hasNext = index < projectList.length - 1;

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
      setIndex(projectList.length - 1);
    }
  }

  function handleMoreClick() {
    setShowMore(!showMore);
  }

  // Get the project at the current index
  const project = projectList[index];

  return (
    <>
    <div className="skillstitle">
        <h1>
            <span style={{ color: '#ff9f43' }}>Pr</span>
            <span style={{ color: '#0abde3' }}>oj</span>
            <span style={{ color: '#ee5253' }}>ec</span>
            <span style={{ color: '#00d2d3' }}>ts</span>
        </h1>
    </div>
    <div className="project-main">
       {/* Added the Prev button */}
      <div className="project-text-div">
        <h1>Title:</h1>
        <h2>{project.tittle}</h2> {/* Fixed the typo 'tittle' to 'title' */}
        <h1>Duration:</h1>
        <h2>
          <span>{project.starting_date}</span>-
          <span>{project.ending_date}</span>
        </h2>
        <h1>Link:</h1>
        <a href={project.link}>Click here</a>
        <h1>Description:</h1>
        <p>{project.description}</p>
      </div>
      <div>
        <img src={project.image} alt={project.alt} />
      </div>
      
      {/* <button onClick={handleMoreClick}>
        {showMore ? "Hide" : "Show"} details
      </button> */}
      {/* Display the project description only if showMore is true */}
      {/* {showMore && <p>{project.description}</p>} */}
      {/* Removed the duplicate project description */}
    </div>
    <div className="arrows">
      <button onClick={handlePrevClick}><ArrowLeft/></button>
      <h4>
      ({index + 1} of {projectList.length})
      </h4>
      <button onClick={handleNextClick}><ArrowRight/></button>
    </div>
    </>
  );
}
