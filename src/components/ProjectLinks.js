import React from "react";

import { ReactComponent as GitHub } from "../assets/my_github.svg";
import { ReactComponent as OpenInBrowser } from "../assets/openInBrowser.svg";

import "./ProjectLinks.css";

const ProjectLinks = ({ feLink, beLink, pageLink }) => {
  return (
    <div className="project-links">
      <a href={feLink} target="_blank" rel="noreferrer">
        <div className="project-links__logo">
          <GitHub />
        </div>
        front-end code on GitHub
      </a>
      {beLink && (
        <a href={beLink} target="_blank" rel="noreferrer">
          <div className="project-links__logo">
            <GitHub />
          </div>
          back-end code on GitHub
        </a>
      )}
      {pageLink && (
        <a href={pageLink} target="_blank" rel="noreferrer">
          <div className="project-links__logo">
            <OpenInBrowser />
          </div>
          open in browser
        </a>
      )}
    </div>
  );
};

export default ProjectLinks;
