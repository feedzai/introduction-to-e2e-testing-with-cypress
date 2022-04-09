import React, { useState } from "react";
import { FaTrashAlt } from "react-icons/fa";
import PropTypes from "prop-types";
import { useProjectsValue, useSelectedProjectValue } from "../context";
import firebase from "../firebase";

export const IndividualProject = ({ project, onClick, onKeyDown }) => {
  const [showConfirm, setShowConfirm] = useState(false);
  const { projects, setProjects } = useProjectsValue();
  const { setSelectedProject } = useSelectedProjectValue();

  const deleteProject = (docId) => {
    firebase
      .firestore()
      .collection("projects")
      .doc(docId)
      .delete()
      .then(() => {
        setProjects([...projects]);
        setSelectedProject("INBOX");
      });
  };

  return (
    <>
      <button
        type="button"
        className="sidebar__project__button"
        data-testid="project-action"
        aria-label={`Select ${project.name} as the task project`}
        onClick={onClick}
        onKeyDown={onKeyDown}
      >
        <span className="sidebar__dot">•</span>
        <span className="sidebar__project-name">{project.name}</span>
      </button>
      <div>
        <button
          type="button"
          className="sidebar__project-delete"
          data-testid="delete-project"
          onClick={() => setShowConfirm(!showConfirm)}
          onKeyDown={(e) => {
            if (e.key === "Enter") setShowConfirm(!showConfirm);
          }}
          aria-label="Confirm deletion of project"
        >
          <FaTrashAlt />
        </button>
        {showConfirm && (
          <div className="project-delete-modal">
            <div className="project-delete-modal__inner">
              <p className="project-delete-modal__message">
                Are you sure you want to delete this project?
              </p>
              <div className="project-delete-modal__actions">
                <button
                  type="button"
                  className="project-delete-modal__actions__cancel"
                  onClick={() => setShowConfirm(!showConfirm)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") setShowConfirm(!showConfirm);
                  }}
                  aria-label="Cancel adding project, do not delete"
                >
                  Cancel
                </button>
                <button
                  type="button"
                  className="project-delete-modal__actions__delete"
                  onClick={() => deleteProject(project.docId)}
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

IndividualProject.propTypes = {
  project: PropTypes.object.isRequired,
};
