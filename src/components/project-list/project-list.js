import React from "react";
import "./project-list.css";

const ProjectList = props => {
  const {projects} = props;

  return (
    <div className="image-galery">
      {projects.map((project, id) => {
        return (
          <div key={id} className="img-container">
            <img className="image" src={project.img} alt={project.category} />
          </div>
        );
      })}
    </div>
  );
};

export default ProjectList;
