import { useState } from "react";
import "./projects.scss";
import { DataProjects } from "../../../data/DataProjects";

function Projects() {
  const dataProjects = DataProjects;
  const [currentPosition, setCurrentPosition] = useState(0);
  const handleClick = (direction = "next") => {
    //definisco la lunghezza dell'array
    const lastIndex = dataProjects.length;
    //calcolo se l'indice è maggiore della posizione corrente tramite il resto della divisione
    const nextPosition = (currentPosition + 1) % lastIndex;
    const prevPosition = (currentPosition - 1 + lastIndex) % lastIndex;

    direction === "prev"
      ? setCurrentPosition(prevPosition)
      : setCurrentPosition(nextPosition);
  }
  // const handlerClick = (direction: any = "") => {

  //   direction === "left"
  //     ? setCurrentPosition(CurrentPosition > 0 ? CurrentPosition - 1 : 2)
  //     : setCurrentPosition(
  //         CurrentPosition < DataProjects.length - 1 ? CurrentPosition + 1 : 0
  //       );
  // };
  return (
    <div className="projects-container" id="projects">
      <div
        className="slider"
        style={{ transform: `translateX(-${currentPosition * 100}vw)` }}
      >
        {DataProjects.map((item, index) => (
          <div className="slide-container" key={index}>
            <div className="item">
              <div className="left">
                <div className="left-container">
                  <div className="img-container">
                    <img src={item.icon} alt="" />
                  </div>
                  <h2>{item.title}</h2>
                  <p>{item.desc}</p>
                  <span>{item.title}</span>
                </div>
              </div>

              <div className="right">
                <img src={item.img} alt="" />
              </div>
            </div>
          </div>
        ))}
      </div>
      <img
        className="arrow left-arrow"
        src="asset/DownArrow.png"
        alt=""
        onClick={() => handleClick("prev")}
      />
      <img
        className="arrow right-arrow"
        src="asset/DownArrow.png"
        alt=""
        onClick={() => handleClick()}
      />
    </div>
  );
}

export default Projects;
