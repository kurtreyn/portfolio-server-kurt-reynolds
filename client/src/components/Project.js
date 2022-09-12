import React from 'react';
import '../styles/projectStyle.css';

export default function Project({
  id,
  title,
  codeLink,
  pageLink,
  projectImage,
  description,
}) {
  return (
    <div className="project-wrapper" id={id}>
      <div className="project-header">
        <h2 className="project-title">{title}</h2>
      </div>

      <div className="project-body">
        <div className="project-image-container">
          <img src={`${projectImage}`} alt={title} className="project-image" />
          <img
            src={`${projectImage}`}
            alt={title}
            className="project-image-reflection"
          />
        </div>

        <div className="project-description-section">
          <p className="project-description">{description}</p>
        </div>
      </div>

      <div className="project-footer">
        <a className="project-link page-link" href={pageLink} target={`_blank`}>
          View Project
        </a>
        <a className="project-link code-link" href={codeLink} target={`_blank`}>
          View Code
        </a>
      </div>
    </div>
  );
}
