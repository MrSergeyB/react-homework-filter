import React from "react";
import "./project-list.css";
import PropTypes from "prop-types";

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

ProjectList.propTypes = {
  projects: PropTypes.object
};

export default ProjectList;
