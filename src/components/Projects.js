import React, { useState } from "react";
import PropTypes from "prop-types";
import { useSelectedProjectValue, useProjectsValue } from "../context";
import { IndividualProject } from "./IndividualProject";

export const Projects = ({ activeValue = null }) => {
  const [active, setActive] = useState(activeValue);
  const { setSelectedProject } = useSelectedProjectValue();
  const { projects } = useProjectsValue();

  return (
    projects &&
    projects.map((project) => (
      <li
        key={project.projectId}
        data-testid="project-action-parent"
        data-doc-id={project.docId}
        className={active === project.projectId ? "active sidebar__project" : "sidebar__project"}
      >
        <div className="sidebar__project__item">
          <IndividualProject
            project={project}
            onClick={() => {
              setActive(project.projectId);
              setSelectedProject(project.projectId);
            }}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                setActive(project.projectId);
                setSelectedProject(project.projectId);
              }
            }}
          />
        </div>
      </li>
    ))
  );
};

Projects.propTypes = {
  activeValue: PropTypes.bool,
};
